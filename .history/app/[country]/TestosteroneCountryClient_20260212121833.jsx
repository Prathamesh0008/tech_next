"use client";

import { useState, useRef } from "react";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import FeaturedBlogsByCountry from "../../components/FeaturedBlogsByCountry";

import {
  FaChevronDown,
  FaCheckCircle,
  FaShieldVirus
} from "react-icons/fa";

export default function TestosteroneCountryClient({ country, countrySlug }) {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const sectionRefs = useRef({});

  const { hero, content, faq, regulation } = country;

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#0B1A33] via-[#0E1F3D] to-[#122B4A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Testosterone in {country.name}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl">
            {hero?.subtitle || country.heroSubtitle}
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-28">

        {/* INTRO */}
        {content?.introduction && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              {content.introduction.title}
            </h2>

            {content.introduction.paragraphs?.map((para, idx) => (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                {para}
              </p>
            ))}
          </section>
        )}

        {/* REGULATION */}
        {regulation && (
          <section className="bg-slate-900 text-white p-10">
            <h2 className="text-2xl font-semibold mb-6">
              {regulation.animatedTitle}
            </h2>

            <p className="text-slate-300 mb-6">
              {regulation.summary}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {regulation.compliance?.required?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && (
          <section>
            <h2 className="text-3xl font-semibold mb-10">
              Frequently Asked Questions
            </h2>

            {faq.categories?.map((category, catIdx) => (
              <div key={catIdx} className="mb-12">

                <h3 className="text-xl font-semibold mb-6">
                  {category.name}
                </h3>

                {category.questions?.map((item, idx) => (
                  <div key={idx} className="border mb-4">

                    <button
                      onClick={() =>
                        setExpandedFAQ(
                          expandedFAQ === `${catIdx}-${idx}`
                            ? null
                            : `${catIdx}-${idx}`
                        )
                      }
                      className="w-full flex justify-between items-center p-4 bg-gray-50"
                    >
                      <span>{item.question}</span>
                      <FaChevronDown
                        className={`transition-transform ${
                          expandedFAQ === `${catIdx}-${idx}`
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {expandedFAQ === `${catIdx}-${idx}` && (
                      <div className="p-4 bg-white text-gray-700">
                        {item.answer}

                        {item.warning && (
                          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 flex gap-3">
                            <FaShieldVirus className="text-amber-600" />
                            <span>{item.warning}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
        )}

        {/* FEATURED PRODUCTS */}
        <CategoriesDivisionsSection />
        <FeaturedByCategory />

        {/* FEATURED BLOGS FOR COUNTRY */}
        <FeaturedBlogsByCountry countrySlug={countrySlug} />

      </div>
    </main>
  );
}
