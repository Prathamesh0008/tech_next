"use client";

import { generateFaqSchema } from "../../../lib/schema/faqSchema";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FeaturedByCategory from "../../../components/FeaturedByCategory";

/* ---------- COMPONENT ---------- */

export default function BlogDetailsClient({ id }) {
  const { language } = useLanguage();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadBlogAndRelated() {
      setLoading(true);
      try {
        const [blogRes, listRes] = await Promise.all([
          fetch(`/api/blogs/${id}?lang=${language}`, { cache: "no-store" }),
          fetch(`/api/blogs?lang=${language}`, { cache: "no-store" }),
        ]);
        const blogData = await blogRes.json();
        const listData = await listRes.json();
        const list = Array.isArray(listData?.blogs) ? listData.blogs : [];

        if (!ignore) {
          setBlog(blogRes.ok ? blogData?.blog || null : null);
          setRelated(list.filter((b) => b.id !== id).slice(0, 3));
          setLoading(false);
        }
      } catch {
        if (!ignore) {
          setBlog(null);
          setRelated([]);
          setLoading(false);
        }
      }
    }

    loadBlogAndRelated();
    return () => {
      ignore = true;
    };
  }, [id, language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center text-gray-600">
          Loading article...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Article not found</h1>
          <p className="mt-3 text-gray-600">
            This blog article is unavailable in the selected language.
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="mt-6 inline-flex items-center rounded-lg bg-[#18487d] px-5 py-3 text-white"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

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
            const previousBlock = blog.content[idx - 1];

            switch (block.type) {
              case "section":
                // A section immediately following a heading sequence is the
                // final item in that nested group, rather than a new section.
                const SectionHeading = previousBlock?.type === "heading" ? "h5" : "h2";
                return (
                  <section
                    key={idx}
                    className={
                      SectionHeading === "h5" ? "space-y-4 !mt-2" : "space-y-4"
                    }
                  >
                    {block.heading && (
                      <SectionHeading
                        className={
                          SectionHeading === "h2"
                            ? "text-2xl font-semibold text-gray-800"
                            : "text-lg font-normal text-gray-800 list-item list-disc ml-5 pl-1"
                        }
                      >
                        {block.heading}
                      </SectionHeading>
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
                // The first heading introduces a nested group; consecutive
                // headings are the individual items within that group.
                const HeadingTag = previousBlock?.type === "heading" ? "h5" : "h4";
                return (
                  <HeadingTag
                    key={idx}
                    className={
                      HeadingTag === "h4"
                        ? "text-xl font-semibold text-gray-800"
                        : "text-lg font-normal text-gray-800 !mt-2 list-item list-disc ml-5 pl-1"
                    }
                  >
                    {block.text}
                  </HeadingTag>
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
