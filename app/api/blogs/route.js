import { NextResponse } from "next/server";
import { readBlogs } from "@/lib/blog-store";

export const runtime = "nodejs";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const { blogs } = await readBlogs(lang);
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to load blogs" },
      { status: 500 }
    );
  }
}
