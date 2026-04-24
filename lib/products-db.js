import { connectMongo } from "@/lib/mongoose";
import Product from "@/models/Product";

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

export async function getAllProductsLocalized(lang = "en") {
  const cacheKey = `all:${lang}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  await connectMongo();
  const docs = await Product.find({})
    .select("slug category cas imageKey images translations")
    .sort({ slug: 1 })
    .lean();
  const localized = docs.map((doc) => localizeProduct(doc, lang));
  setToCache(cacheKey, localized);
  return localized;
}

export async function getProductBySlugLocalized({ category, slug, lang = "en" }) {
  const cacheKey = `one:${category || "all"}:${slug}:${lang}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  await connectMongo();
  const query = { slug };
  if (category) query.category = category.toLowerCase();
  const doc = await Product.findOne(query)
    .select("slug category cas imageKey images translations")
    .lean();
  if (!doc) return null;
  const localized = localizeProduct(doc, lang);
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

  await connectMongo();
  const docs = await Product.find({
    category: category?.toLowerCase(),
    slug: { $ne: slug },
  })
    .select("slug category cas imageKey images translations")
    .sort({ slug: 1 })
    .limit(limit)
    .lean();

  const localized = docs.map((doc) => localizeProduct(doc, lang));
  setToCache(cacheKey, localized);
  return localized;
}
