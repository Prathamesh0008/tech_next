import { NextResponse } from "next/server";
import { readBlogs } from "@/lib/blog-store";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const { blogs } = await readBlogs(lang);
    const blog = blogs.find((b) => b?.id === id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to load blog" },
      { status: 500 }
    );
  }
}
