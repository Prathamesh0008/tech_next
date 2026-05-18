"use client";

import { generateFaqSchema } from "../../../lib/schema/faqSchema";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { getBlogs } from "../../../lib/getBlogs";
import { notFound } from "next/navigation";
import { useState } from "react";
import FeaturedByCategory from "../../../components/FeaturedByCategory";

/* ---------- COMPONENT ---------- */

export default function BlogDetailsClient({ id }) {
  const { language } = useLanguage();
  const blogs = getBlogs(language)?.blogs || [];

  const blog = blogs.find((b) => b.id === id);
  if (!blog) return notFound();

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">

      {/* FAQ SCHEMA */}
      {blog.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFaqSchema(blog.faqs)),
          }}
        />
      )}

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {blog.title}
          </h1>
          <div className="flex items-center gap-3 text-white/80 mt-2 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
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
            <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
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

        <div className="p-8 space-y-5">
          {blog.intro && (
            <p
              className="text-lg text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.intro }}
            />
          )}

          {blog.content?.map((block, idx) => {
            switch (block.type) {
              case "section":
                return (
                  <section key={idx} className="space-y-4">
                    {block.heading && (
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {block.heading}
                      </h2>
                    )}
                    {block.image && (
                      <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
                        <Image
                          src={block.image}
                          alt={block.heading || blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {block.text && (
                      <p
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: block.text }}
                      />
                    )}
                  </section>
                );

              case "list":
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700">
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "heading":
                return (
                  <h3 key={idx} className="text-xl font-semibold text-gray-800">
                    {block.text}
                  </h3>
                );

              case "paragraph":
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {block.text}
                  </p>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>

      {/* FAQ */}
      {blog.faqs?.length > 0 && (
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {blog.faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {openFaqIndex === index && (
                    <div className="p-4 border-t text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <FeaturedByCategory></FeaturedByCategory>
        </div>
      )}

      {/* PRODUCT SLIDER */}
      {/* <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Explore Our Products
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage === 0 ? totalPages - 1 : currentPage - 1
                )
              }
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setCurrentPage(
                  currentPage + 1 >= totalPages ? 0 : currentPage + 1
                )
              }
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category.toLowerCase()}/${product.id.toLowerCase()}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="relative w-full h-44 bg-gray-50">
                <Image
                  src={getProductImage(product)}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      {/* RELATED BLOGS */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((b) => (
            <Link key={b.id} href={`/blog/${b.id}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition">
                {b.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {b.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
          
        </div>
      
      </div>
     

    </div>
  );
}
