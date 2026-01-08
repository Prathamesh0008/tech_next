import en from "./languages/products/en.json";
import ar from "./languages/products/ar.json";
import pt from "./languages/products/pt.json";
import nl from "./languages/products/nl.json";
import bg from "./languages/products/bg.json";
import bs from "./languages/products/bs.json";
import de from "./languages/products/de.json";
import el from "./languages/products/el.json";
import es from "./languages/products/es.json";
import fr from "./languages/products/fr.json";
import hr from "./languages/products/hr.json";
import mk from "./languages/products/mk.json";
import ro from "./languages/products/ro.json";
import sq from "./languages/products/sq.json";
import sr from "./languages/products/sr.json";
import zh from "./languages/products/zh.json";
import it from "./languages/products/it.json";


const PRODUCT_MAP = {
  en,
  ar,
  pt,
  nl,
  bg,
  bs,
  de,el,es,
  fr,
  hr,
  mk,
  ro,
  sq,
  sr,
  zh,
  it,

};

export function getProducts(lang = "en") {
  const data = PRODUCT_MAP[lang] || PRODUCT_MAP.en;

  if (!data || !data.products) return [];

  // 🔥 FIX: use Object.entries to capture the key as id
 return Object.entries(data.products).map(([id, p]) => ({
  id,

  // TEXT (LANGUAGE DEPENDENT)
  name: p.name,
  shortDescription: p.shortDescription,
  description: p.description,
  indication: p.indication,
  presentation: p.presentation,
  precautions: p.precautions,
  contraindications: p.contraindications,
  faq: p.faq,

  // STRUCTURAL (LANGUAGE INDEPENDENT)
  category: (p.category || "tablets").toLowerCase(),
  cas: p.cas,

  // 🔥 THIS IS THE KEY FIX
  imageKey:
    p.imageKey ||
    p.name
      .toUpperCase()
      .replace(/\s+/g, "_")
      .replace(/[^A-Z0-9_]/g, ""),

  // SEO
  seoTitle: p.seo?.title || p.seoTitle,
  seoDescription: p.seo?.description || p.seoDescription,
  seoCanonical: p.seo?.canonical || p.seoCanonical,

  schemaBrand: p.schemaBrand,
  schemaCategory: p.schemaCategory,

  images: p.images || [],
}));

}

// Optional default (English only)
export const products = getProducts("en");
