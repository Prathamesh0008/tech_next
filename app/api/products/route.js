import { NextResponse } from "next/server";
import {
  getAllProductsLocalized,
  getProductBySlugLocalized,
  getRelatedProductsLocalized,
} from "@/lib/products-db";

export const runtime = "nodejs";
const CACHE_HEADER = "public, max-age=120, s-maxage=300, stale-while-revalidate=86400";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "en";
    const slug = searchParams.get("slug");
    const category = searchParams.get("category");

    if (slug) {
      const product = await getProductBySlugLocalized({ category, slug, lang });
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }

      const related = await getRelatedProductsLocalized({
        category: product.category,
        slug: product.slug,
        lang,
        limit: 4,
      });

      return NextResponse.json(
        { product, related },
        { headers: { "Cache-Control": CACHE_HEADER } }
      );
    }

    const products = await getAllProductsLocalized(lang);
    return NextResponse.json(
      { products },
      { headers: { "Cache-Control": CACHE_HEADER } }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}
