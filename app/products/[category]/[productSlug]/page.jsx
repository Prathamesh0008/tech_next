import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import {
  getProductBySlugLocalized,
  getRelatedProductsLocalized,
} from "@/lib/products-db";
import ProductClient from "./ProductClient";
import productSchemas from "@/data/product-schemas.json";

function serializeJsonLd(schema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export async function generateMetadata({ params }) {
  const { category, productSlug } = await params;

  const PRODUCT_KEYWORDS = {
    femanova: [
      "Femanova tablets",
      "steroid tablets",
      "legal steroids",
      "muscle growth tablets",
      "best steroids online",
      "pharmaceutical grade tablets",
    ],
    tamonova: [
      "Tamonova tablets",
      "steroid tablets",
      "legal steroids",
      "muscle building tablets",
      "best anabolic tablets",
      "pharmaceutical steroids",
    ],
    novazole: [
      "Novazole tablets",
      "steroid tablets",
      "legal muscle builders",
      "pharmaceutical grade steroids",
      "best steroids online",
    ],
    aromanova: [
      "Aromanova tablets",
      "aromatase inhibitor",
      "steroid support",
      "legal steroids",
      "muscle growth support",
      "pharmaceutical grade",
    ],
    enclominova: [
      "Enclominova tablets",
      "PCT steroids",
      "post cycle therapy",
      "legal steroids",
      "muscle recovery",
      "pharmaceutical grade",
    ],
    novabol: [
      "Novabol tablets",
      "dianabol tablets",
      "muscle building",
      "legal steroids",
      "best steroids online",
      "pharmaceutical grade",
    ],
    provinova: [
      "Provinova tablets",
      "proviron tablets",
      "testosterone support",
      "legal steroids",
      "muscle building",
      "pharmaceutical grade",
    ],
  };

  const product = await getProductBySlugLocalized({
    category,
    slug: productSlug,
    lang: "en",
  });

  if (!product) {
    return {
      title: "Product Not Found | Nova Techsciences",
      description: "The requested product could not be found.",
    };
  }

  const description =
    product.seoDescription || product.shortDescription || product.description;

  const canonical =
    product.seoCanonical ||
    `https://www.novatechsciences.com/products/${category}/${productSlug}`;

  return {
    title: product.seoTitle || product.name,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: PRODUCT_KEYWORDS[productSlug] || [
      `${product.name} tablets`,
      "legal steroids",
      "pharmaceutical grade products",
    ],

    openGraph: {
      title: product.seoTitle || product.name,
      description,
      url: canonical,
      siteName: "Nova Techsciences",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: product.seoTitle || product.name,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const { category, productSlug } = await params;
  const cookieStore = await cookies();
  const initialLang = cookieStore.get("lang")?.value || "en";

  const product = await getProductBySlugLocalized({
    category,
    slug: productSlug,
    lang: initialLang,
  });

  if (!product) return notFound();

  const related = await getRelatedProductsLocalized({
    category,
    slug: productSlug,
    lang: initialLang,
    limit: 4,
  });

  const schemas = productSchemas[`${category}/${productSlug}`] || [];
  const faqs = Array.isArray(product.faq) ? product.faq : [];
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question || faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer || faq.a,
          },
        })),
      }
    : null;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`product-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}
      <ProductClient
        initialProduct={product}
        initialRelated={related}
        category={category}
        productSlug={productSlug}
        initialLang={initialLang}
        hasDocumentSchemas={schemas.length > 0}
        documentSchemas={schemas}
      />
    </>
  );
}
