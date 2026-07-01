/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const REQUIRED_ENV = ["MONGODB_URI"];

for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
}

const ProductImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, default: "" },
    alt: { type: String, default: "" },
    sortOrder: { type: Number, default: 0 },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false }
);

const ProductTranslationSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    description: { type: String, default: "" },
    indication: { type: String, default: "" },
    presentation: { type: String, default: "" },
    precautions: { type: String, default: "" },
    contraindications: { type: String, default: "" },
    faq: { type: mongoose.Schema.Types.Mixed, default: [] },
    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      canonical: { type: String, default: "" },
    },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    imageKey: { type: String, default: "" },
    cas: { type: String, default: "" },
    category: {
      type: String,
      enum: ["tablets", "injectables", "other"],
      default: "other",
      index: true,
    },
    images: { type: [ProductImageSchema], default: [] },
    translations: {
      type: Map,
      of: ProductTranslationSchema,
      default: {},
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

const PRODUCTS_LANG_DIR = path.join(process.cwd(), "data", "languages", "products");
const TABLETS_DIR = path.join(process.cwd(), "public", "assets", "products", "tablets");
const INJECTABLES_DIR = path.join(
  process.cwd(),
  "public",
  "assets",
  "products",
  "injectables"
);

const CLEAN_STALE_PRODUCTS = process.env.SEED_CLEAN_STALE !== "false";

function normalizeKey(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function inferCategory(product, slug, imageSet) {
  const explicit = String(product?.category || "").toLowerCase();
  if (explicit === "tablets" || explicit === "injectables") return explicit;

  const legacyId = String(product?.id || "").toLowerCase();
  if (legacyId.startsWith("tab-")) return "tablets";
  if (legacyId.startsWith("inj-")) return "injectables";

  if (legacyId.includes("mgml") || String(slug).toLowerCase().includes("mgml")) {
    return "injectables";
  }

  const tabletsCount = imageSet.tablets.length;
  const injectablesCount = imageSet.injectables.length;
  if (injectablesCount > 0 && tabletsCount === 0) return "injectables";
  if (tabletsCount > 0 && injectablesCount === 0) return "tablets";

  return "other";
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function listImages(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((name) => /\.(png|jpe?g|webp)$/i.test(name))
    .map((name) => ({
      name,
      absPath: path.join(dirPath, name),
      norm: normalizeKey(path.parse(name).name),
    }));
}

function matchImagesByKey(imageKey, slug, files) {
  const keyNorm = normalizeKey(imageKey);
  const slugNorm = normalizeKey(slug);
  return files
    .filter((f) => f.norm.startsWith(keyNorm) || f.norm.startsWith(slugNorm))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

async function main() {
  const langFiles = fs
    .readdirSync(PRODUCTS_LANG_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  if (!langFiles.length) {
    throw new Error("No language product files found.");
  }

  const langData = {};
  for (const file of langFiles) {
    const langCode = path.basename(file, ".json");
    langData[langCode] = loadJson(path.join(PRODUCTS_LANG_DIR, file)).products || {};
  }

  const allSlugs = new Set(Object.keys(langData.en || {}));
  if (!allSlugs.size) {
    for (const productsBySlug of Object.values(langData)) {
      for (const slug of Object.keys(productsBySlug)) {
        allSlugs.add(slug);
      }
    }
  }

  const tabletsImages = listImages(TABLETS_DIR);
  const injectablesImages = listImages(INJECTABLES_DIR);

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "novatech",
  });

  let seededCount = 0;
  for (const slug of Array.from(allSlugs).sort()) {
    const english = langData.en?.[slug] || null;
    const fallbackLang = Object.keys(langData).find((l) => langData[l]?.[slug]);
    const base = english || langData[fallbackLang]?.[slug];
    if (!base) continue;

    const imageKey =
      base.imageKey ||
      String(base.name || slug)
        .toUpperCase()
        .replace(/\s+/g, "_")
        .replace(/[^A-Z0-9_]/g, "");

    const tabletsMatches = matchImagesByKey(imageKey, slug, tabletsImages);
    const injectablesMatches = matchImagesByKey(imageKey, slug, injectablesImages);
    const category = inferCategory(base, slug, {
      tablets: tabletsMatches,
      injectables: injectablesMatches,
    });

    const pickedLocalImages =
      category === "injectables"
        ? injectablesMatches
        : category === "tablets"
          ? tabletsMatches
          : [...tabletsMatches, ...injectablesMatches];

    const images = [];
    for (let i = 0; i < pickedLocalImages.length; i += 1) {
      const local = pickedLocalImages[i];
      const publicPath = `/assets/products/${category}/${local.name}`;
      images.push({
        url: publicPath,
        publicId: "",
        alt: base.name || slug,
        sortOrder: i,
        isPrimary: i === 0,
      });
    }

    const translations = {};
    for (const [lang, productsBySlug] of Object.entries(langData)) {
      const p = productsBySlug[slug];
      if (!p) continue;
      translations[lang] = {
        name: p.name || "",
        shortDescription: p.shortDescription || "",
        description: p.description || "",
        indication: p.indication || "",
        presentation: p.presentation || "",
        precautions: p.precautions || "",
        contraindications: p.contraindications || "",
        faq: Array.isArray(p.faq) ? p.faq : [],
        seo: {
          title: p.seo?.title || "",
          description: p.seo?.description || "",
          canonical: p.seo?.canonical || "",
        },
      };
    }

    await Product.updateOne(
      { slug },
      {
        $set: {
          slug,
          imageKey,
          cas: base.cas || "",
          category,
          images,
          translations,
        },
      },
      { upsert: true }
    );

    seededCount += 1;
    console.log(
      `[seed] ${slug} -> category=${category}, images=${images.length}, translations=${Object.keys(translations).length}`
    );
  }

  console.log(`\nSeed complete.`);
  console.log(`Products upserted: ${seededCount}`);
  console.log(`Images linked from local files: complete`);

  if (CLEAN_STALE_PRODUCTS) {
    const keepSlugs = Array.from(allSlugs);
    const staleResult = await Product.deleteMany({ slug: { $nin: keepSlugs } });
    console.log(`Stale products removed: ${staleResult.deletedCount || 0}`);
  }

  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error("Seed failed:", error);
  try {
    await mongoose.disconnect();
  } catch (_) {
    // ignore disconnect errors on failure path
  }
  process.exit(1);
});
