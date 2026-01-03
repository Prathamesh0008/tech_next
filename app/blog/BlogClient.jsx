"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getBlogs } from "../../lib/getBlogs"; // ✅ NEW

export default function BlogClient() {
  const { translations, lang } = useLanguage(); // ✅ UPDATED
  if (!translations?.blog) return null;

  const t = translations.blog;
  const blogs = getBlogs(lang)?.blogs || []; // 🔥 LANGUAGE-BASED BLOG DATA

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] mt-20">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {t.header.title}
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            {t.header.subtitle}
          </p>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span className="bg-[#e6f4fa] text-[#3386bc] px-3 py-1 rounded-full font-medium">
                    {t.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{t.dateLabel}</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#3386bc]">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.intro}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center text-[#3386bc] font-medium hover:underline"
                >
                  {t.readMore} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
}
