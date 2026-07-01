import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const PUBLIC_BLOG_DIR = path.join(process.cwd(), "public", "blog");
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]);

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildFileName(originalName = "image") {
  const parsed = path.parse(String(originalName || "image"));
  const ext = parsed.ext.toLowerCase();
  const safeExt = ALLOWED_EXTENSIONS.has(ext) ? ext : ".jpg";
  const baseName = slugify(parsed.name) || "image";
  return `${baseName}-${Date.now()}${safeExt}`;
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    await fs.mkdir(PUBLIC_BLOG_DIR, { recursive: true });

    const fileName = buildFileName(file.name);
    const filePath = path.join(PUBLIC_BLOG_DIR, fileName);
    const bytes = Buffer.from(await file.arrayBuffer());

    await fs.writeFile(filePath, bytes);

    return NextResponse.json({
      url: `/blog/${fileName}`,
      fileName,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Upload failed" },
      { status: 500 }
    );
  }
}
