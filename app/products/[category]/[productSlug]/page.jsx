import { notFound } from "next/navigation";
import { products } from "../../../../data/products";
import ProductClient from "./ProductClient";


export async function generateMetadata({ params }) {
  const { category, productSlug } = await params;
  const PRODUCT_KEYWORDS = {
  "femanova": [
    "Femanova tablets",
    "steroid tablets",
    "legal steroids",
    "muscle growth tablets",
    "best steroids online",
    "pharmaceutical grade tablets",
  ],

  "tamonova": [
    "Tamonova tablets",
    "steroid tablets",
    "legal steroids",
    "muscle building tablets",
    "best anabolic tablets",
    "pharmaceutical steroids",
  ],

  "novazole": [
    "Novazole tablets",
    "steroid tablets",
    "legal muscle builders",
    "pharmaceutical grade steroids",
    "best steroids online",
  ],

  "aromanova": [
    "Aromanova tablets",
    "aromatase inhibitor",
    "steroid support",
    "legal steroids",
    "muscle growth support",
    "pharmaceutical grade",
  ],

  "enclominova": [
    "Enclominova tablets",
    "PCT steroids",
    "post cycle therapy",
    "legal steroids",
    "muscle recovery",
    "pharmaceutical grade",
  ],

  "novabol": [
    "Novabol tablets",
    "dianabol tablets",
    "muscle building",
    "legal steroids",
    "best steroids online",
    "pharmaceutical grade",
  ],

  "provinova": [
    "Provinova tablets",
    "proviron tablets",
    "testosterone support",
    "legal steroids",
    "muscle building",
    "pharmaceutical grade",
  ],

  // 👉 You can keep adding more later
};


  const slugify = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const product = products.find(
    (p) =>
      p.category?.toLowerCase() === category?.toLowerCase() &&
      slugify(p.name) === productSlug
  );

  if (!product) {
    return {
      title: "Product Not Found | Nova Techsciences",
      description: "The requested product could not be found.",
    };
  }

  const description =
    product.seoDescription ||
    product.shortDescription ||
    product.description;

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

  keywords:
    PRODUCT_KEYWORDS[productSlug] || [
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
        url: product.images?.[0] || product.image,
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
    images: [product.images?.[0] || product.image],
  },
};


}

export default async function ProductPage({ params }) {
  const { category, productSlug } = await params;

  const slugify = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const product = products.find(
    (p) =>
      p.category?.toLowerCase() === category?.toLowerCase() &&
      slugify(p.name) === productSlug
  );

  if (!product) return notFound();

  return <ProductClient product={product} category={category} />;
}
