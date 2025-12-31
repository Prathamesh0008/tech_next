import { notFound } from "next/navigation";
import { products } from "../../../../data/products";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }) {
  const { category, productSlug } = await params;

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
    `https://novatechsciences.com/products/${category}/${productSlug}`;

return {
  title: product.seoTitle || product.name,
  description,

  alternates: {
    canonical,
  },

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
    type: "article", // ✅ FIXED
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
