import { NextResponse } from "next/server";
import { resolveBlogImage } from "@/lib/blog-images";
import { readBlogs, slugifyId, writeBlogs } from "@/lib/blog-store";

export const runtime = "nodejs";

function normalizeBlogInput(input = {}) {
  const content = Array.isArray(input.content) ? input.content : [];
  const faqs = Array.isArray(input.faqs) ? input.faqs : [];
  const meta = input.meta && typeof input.meta === "object" ? input.meta : {};

  const blog = {
    id: slugifyId(input.id || input.title || ""),
    title: String(input.title || "").trim(),
    image: String(input.image || "").trim(),
    intro: String(input.intro || "").trim(),
    meta: {
      title: String(meta.title || "").trim(),
      description: String(meta.description || "").trim(),
    },
    content,
    faqs,
  };

  return {
    ...blog,
    image: resolveBlogImage(blog),
  };
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const { blogs } = await readBlogs(lang);
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Failed to load blogs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const lang = body?.lang || "en";
    const blog = normalizeBlogInput(body?.blog);
    if (!blog.id || !blog.title) {
      return NextResponse.json({ error: "Blog id/title is required" }, { status: 400 });
    }

    const { blogs } = await readBlogs(lang);
    if (blogs.some((b) => b.id === blog.id)) {
      return NextResponse.json({ error: "Blog id already exists" }, { status: 409 });
    }

    blogs.unshift(blog);
    await writeBlogs(lang, blogs);
    return NextResponse.json({ ok: true, blog });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Failed to create blog" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const lang = body?.lang || "en";
    const targetId = slugifyId(body?.id || "");
    const nextBlog = normalizeBlogInput(body?.blog);

    if (!targetId || !nextBlog.id || !nextBlog.title) {
      return NextResponse.json({ error: "Blog id/title is required" }, { status: 400 });
    }

    const { blogs } = await readBlogs(lang);
    const idx = blogs.findIndex((b) => b.id === targetId);
    if (idx < 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const duplicate = blogs.find((b, i) => i !== idx && b.id === nextBlog.id);
    if (duplicate) {
      return NextResponse.json({ error: "New blog id already exists" }, { status: 409 });
    }

    blogs[idx] = nextBlog;
    await writeBlogs(lang, blogs);
    return NextResponse.json({ ok: true, blog: nextBlog });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const lang = body?.lang || "en";
    const id = slugifyId(body?.id || "");
    if (!id) {
      return NextResponse.json({ error: "Blog id is required" }, { status: 400 });
    }

    const { blogs } = await readBlogs(lang);
    const filtered = blogs.filter((b) => b.id !== id);
    if (filtered.length === blogs.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await writeBlogs(lang, filtered);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Failed to delete blog" }, { status: 500 });
  }
}
