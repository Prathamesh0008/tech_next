"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBlogs } from "@/lib/getBlogs";

export default function FeaturedBlogs({ limit = 3, random = false }) {
  const { language } = useLanguage();
  const blogs = getBlogs(language)?.blogs || [];

  if (!blogs.length) return null;

  let displayBlogs = [...blogs];

  // If random mode enabled
  if (random) {
    displayBlogs = displayBlogs.sort(() => 0.5 - Math.random());
  }

  displayBlogs = displayBlogs.slice(0, limit);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Latest Articles
        </h2>

        <Link
          href="/blog"
          className="text-blue-600 font-medium hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-slate-100">
              {blog.image && (
                <div className="relative w-full h-52">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                  {blog.title}
                </h3>

                {blog.intro && (
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3">
                    {blog.intro.replace(/<[^>]+>/g, "")}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
