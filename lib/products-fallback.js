import fs from "node:fs";
import path from "node:path";
import { getLocalProductImages } from "@/lib/local-image-paths";

const langFileCache = new Map();

function readLanguageFile(lang = "en") {
  const key = lang || "en";
  if (langFileCache.has(key)) return langFileCache.get(key);

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "languages",
      "products",
      `${key}.json`
    );
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    langFileCache.set(key, parsed);
    return parsed;
  } catch (_) {
    if (key !== "en") return readLanguageFile("en");
    const empty = { products: {} };
    langFileCache.set(key, empty);
    return empty;
  }
}

function normalizeImageKey(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");
}

function inferCategory(product, slug) {
  const explicit = String(product?.category || "").toLowerCase();
  if (explicit === "tablets" || explicit === "injectables") return explicit;

  const legacyId = String(product?.id || "").toLowerCase();
  if (legacyId.startsWith("tab-")) return "tablets";
  if (legacyId.startsWith("inj-")) return "injectables";
  if (legacyId.includes("mgml") || String(slug).toLowerCase().includes("mgml")) {
    return "injectables";
  }
  return "tablets";
}

function mapFallbackProduct(slug, product) {
  const category = inferCategory(product, slug);
  const imageKey = normalizeImageKey(
    product?.imageKey || product?.name || slug || "PRODUCT"
  );
  const images = getLocalProductImages(category, imageKey, 3);

  return {
    id: slug,
    slug,
    category,
    cas: product?.cas || "",
    imageKey,
    images,
    image: images[0],
    name: product?.name || "",
    shortDescription: product?.shortDescription || "",
    description: product?.description || "",
    indication: product?.indication || "",
    presentation: product?.presentation || "",
    precautions: product?.precautions || "",
    contraindications: product?.contraindications || "",
    faq: Array.isArray(product?.faq) ? product.faq : [],
    seoTitle: product?.seo?.title || "",
    seoDescription: product?.seo?.description || "",
    seoCanonical: product?.seo?.canonical || "",
  };
}

export function getFallbackProducts(lang = "en") {
  const data = readLanguageFile(lang);
  const productsObj = data?.products || {};
  return Object.entries(productsObj).map(([slug, product]) =>
    mapFallbackProduct(slug, product)
  );
}

export function getFallbackProductBySlug({ category, slug, lang = "en" }) {
  const all = getFallbackProducts(lang);
  return (
    all.find(
      (p) =>
        p.slug === slug &&
        (!category || p.category.toLowerCase() === category.toLowerCase())
    ) || null
  );
}

export function getFallbackRelatedProducts({
  category,
  slug,
  lang = "en",
  limit = 4,
}) {
  const all = getFallbackProducts(lang);
  return all
    .filter(
      (p) =>
        p.slug !== slug &&
        (!category || p.category.toLowerCase() === category.toLowerCase())
    )
    .slice(0, limit);
}
