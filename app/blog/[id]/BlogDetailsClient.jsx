"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { getBlogs } from "../../../lib/getBlogs";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function BlogDetailsClient({ id }) {
  const { language } = useLanguage();
  const blogs = getBlogs(language)?.blogs || [];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const blog = blogs.find((b) => b.id === id);
  if (!blog) return notFound();

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">
        
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{blog.title}</h1>
          <div className="flex items-center gap-3 text-white/80 mt-2 text-sm">
            <span className="bg-[#e6f4fa]/20 text-white px-3 py-1 rounded-full">
              Blog
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Updated</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16">
        {blog.image && (
          <div className="px-6 pt-6">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        )}

        <div className="p-8">
          <p className="text-lg text-gray-600 mb-8">{blog.intro}</p>

          {blog.content.map((block, idx) => (
            <section key={idx} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">
                {block.heading}
              </h2>
              <p className="text-gray-700">{block.text}</p>
            </section>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      {blog.faqs && blog.faqs.length > 0 && (
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {blog.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RELATED */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((b) => (
            <Link key={b.id} href={`/blog/${b.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image src={b.image} alt={b.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{b.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}