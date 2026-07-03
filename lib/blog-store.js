import { promises as fs } from "fs";
import path from "path";
import { resolveBlogImage } from "@/lib/blog-images";

const BLOG_DIR = path.join(process.cwd(), "data", "blog");
const DEFAULT_LANG = "en";

function getBlogFilePath(lang = DEFAULT_LANG) {
  const safeLang = String(lang || DEFAULT_LANG).toLowerCase().replace(/[^a-z]/g, "");
  return path.join(BLOG_DIR, `${safeLang || DEFAULT_LANG}.json`);
}

async function ensureBlogFile(lang = DEFAULT_LANG) {
  const filePath = getBlogFilePath(lang);
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify({ blogs: [] }, null, 2), "utf8");
  }
  return filePath;
}

export async function readBlogs(lang = DEFAULT_LANG) {
  const filePath = await ensureBlogFile(lang);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw || "{}");
  const blogs = Array.isArray(parsed?.blogs)
    ? parsed.blogs.map((blog) => ({
        ...blog,
        image: resolveBlogImage(blog),
      }))
    : [];
  return { blogs, filePath };
}

export async function writeBlogs(lang = DEFAULT_LANG, blogs = []) {
  const filePath = await ensureBlogFile(lang);
  const payload = { blogs: Array.isArray(blogs) ? blogs : [] };
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2), "utf8");
  return payload;
}

export function slugifyId(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
