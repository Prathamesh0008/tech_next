import { connectMongo } from "@/lib/mongoose";
import Product from "@/models/Product";
import { unstable_cache } from "next/cache";
import {
  getFallbackProducts,
  getFallbackProductBySlug,
  getFallbackRelatedProducts,
} from "@/lib/products-fallback";

const CACHE_TTL_MS = 5 * 60 * 1000;
const inMemoryCache = new Map();

function getFromCache(key) {
  const entry = inMemoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    inMemoryCache.delete(key);
    return null;
  }
  return entry.value;
}

function setToCache(key, value) {
  inMemoryCache.set(key, { value, expiresAt: Date.now() + CACHE_TTL_MS });
}

function toPlain(value) {
  if (!value) return {};
  if (value instanceof Map) return Object.fromEntries(value.entries());
  if (typeof value.toObject === "function") return value.toObject();
  return value;
}

function localizeProduct(doc, lang = "en") {
  const translations = toPlain(doc.translations);
  const translated =
    translations?.[lang] ||
    translations?.en ||
    Object.values(translations || {})[0] ||
    {};

  const images = Array.isArray(doc.images)
    ? doc.images
        .map((img) => img?.url)
        .filter(Boolean)
    : [];

  return {
    id: doc.slug,
    slug: doc.slug,
    category: doc.category,
    cas: doc.cas || "",
    imageKey: doc.imageKey || "",
    images,
    image: images[0] || "/products/placeholder.jpg",
    name: translated.name || "",
    shortDescription: translated.shortDescription || "",
    description: translated.description || "",
    indication: translated.indication || "",
    presentation: translated.presentation || "",
    precautions: translated.precautions || "",
    contraindications: translated.contraindications || "",
    faq: Array.isArray(translated.faq) ? translated.faq : [],
    seoTitle: translated.seo?.title || "",
    seoDescription: translated.seo?.description || "",
    seoCanonical: translated.seo?.canonical || "",
  };
}

const getAllProductDocs = unstable_cache(
  async () => {
    await connectMongo();
    return Product.find({})
      .select("slug category cas imageKey images translations")
      .sort({ slug: 1 })
      .lean();
  },
  ["products-all-docs"],
  { revalidate: 300 }
);

const getProductDocBySlug = unstable_cache(
  async (category, slug) => {
    await connectMongo();
    const query = { slug };
    if (category) query.category = category.toLowerCase();

    return Product.findOne(query)
      .select("slug category cas imageKey images translations")
      .lean();
  },
  ["product-doc-by-slug"],
  { revalidate: 300 }
);

const getRelatedProductDocs = unstable_cache(
  async (category, slug, limit) => {
    await connectMongo();
    return Product.find({
      category: category?.toLowerCase(),
      slug: { $ne: slug },
    })
      .select("slug category cas imageKey images translations")
      .sort({ slug: 1 })
      .limit(limit)
      .lean();
  },
  ["related-product-docs"],
  { revalidate: 300 }
);

export async function getAllProductsLocalized(lang = "en") {
  const cacheKey = `all:${lang}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  let localized = [];
  try {
    const docs = await getAllProductDocs();
    localized = docs.map((doc) => localizeProduct(doc, lang));
  } catch (_) {
    localized = [];
  }

  if (!localized.length) {
    localized = getFallbackProducts(lang);
  }

  setToCache(cacheKey, localized);
  return localized;
}

export async function getProductBySlugLocalized({ category, slug, lang = "en" }) {
  const cacheKey = `one:${category || "all"}:${slug}:${lang}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  let localized = null;
  try {
    const doc = await getProductDocBySlug(category, slug);
    localized = doc ? localizeProduct(doc, lang) : null;
  } catch (_) {
    localized = null;
  }

  if (!localized) {
    localized = getFallbackProductBySlug({ category, slug, lang });
  }

  if (!localized) return null;
  setToCache(cacheKey, localized);
  return localized;
}

export async function getRelatedProductsLocalized({
  category,
  slug,
  lang = "en",
  limit = 4,
}) {
  const cacheKey = `related:${category}:${slug}:${lang}:${limit}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  let localized = [];
  try {
    const docs = await getRelatedProductDocs(category, slug, limit);
    localized = docs.map((doc) => localizeProduct(doc, lang));
  } catch (_) {
    localized = [];
  }

  if (!localized.length) {
    localized = getFallbackRelatedProducts({ category, slug, lang, limit });
  }

  setToCache(cacheKey, localized);
  return localized;
}
