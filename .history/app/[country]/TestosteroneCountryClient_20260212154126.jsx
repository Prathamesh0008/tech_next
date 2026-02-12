"use client";

import { useState, useRef } from "react";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import FeaturedBlogsByCountry from "../../components/FeaturedBlogsByCountry";

import {
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom,
  FaPills, FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry,
  FaRocket, FaHeart, FaGavel, FaBuilding, FaArrowRight,
  FaChevronDown, FaQuoteRight, FaClock,
  FaChartLine, FaUsers, FaCrown, FaAward,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar,
  FaCircle, FaBolt, FaShieldVirus, FaRegFileAlt, FaMapMarkerAlt
} from "react-icons/fa";

import { GiChemicalDrop } from "react-icons/gi";
import { IoIosRibbon } from "react-icons/io";
import { MdScience, MdPrecisionManufacturing, MdVerified, MdOutlineScience } from "react-icons/md";

const IconLibrary = {
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom,
  FaPills, FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry,
  FaRocket, FaHeart, FaGavel, FaBuilding, FaArrowRight,
  FaChevronDown, FaQuoteRight, FaClock,
  FaChartLine, FaUsers, FaCrown, FaAward,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar,
  FaCircle, FaBolt, FaShieldVirus, GiChemicalDrop,
  IoIosRibbon, MdScience, MdPrecisionManufacturing, MdVerified,
  FaRegFileAlt, FaMapMarkerAlt
};

export default function TestosteroneCountryClient({ country, countrySlug }) {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const sectionRefs = useRef({});

  const data = country || {};
  const hero = data.hero || {};
  const content = data.content || {};
  const faq = data.faq || {};
  const regulation = data.regulation || {};

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0B1A33] via-[#0E1F3D] to-[#122B4A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 space-y-40">

  {/* INTRO */}
  {content?.introduction && (
    <section>
      <h2 className="text-4xl font-light text-slate-900 mb-6">
        {content.introduction.title}
      </h2>

      <div className="space-y-5 text-slate-600 leading-relaxed">
        {content.introduction.paragraphs?.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  )}

  {/* DYNAMIC CONTENT SECTIONS */}
  {Array.isArray(content?.sections) &&
    content.sections.map((section, idx) => {

      // Skip formulations because it has special layout
      if (section.id === "formulations") return null;

      return (
        <section key={idx}>
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            {section.title}
          </h2>

          {Array.isArray(section.content) &&
            section.content.map((para, i) => (
              <p key={i} className="text-slate-600 mb-4 leading-relaxed">
                {para}
              </p>
            ))}

          {/* Quality Metrics */}
          {Array.isArray(section.qualityMetrics) && (
            <div className="grid grid-cols-3 gap-6 mt-8">
              {section.qualityMetrics.map((metric, i) => (
                <div key={i}>
                  <div className={`text-3xl font-light ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Statistics */}
          {Array.isArray(section.statistics) && (
            <div className="grid grid-cols-3 gap-6 mt-8">
              {section.statistics.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-light text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Timeline */}
          {Array.isArray(section.timeline) && (
            <div className="mt-8 space-y-3">
              {section.timeline.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="font-semibold text-blue-600">
                    {item.year}
                  </div>
                  <div className="text-slate-600">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quote */}
          {section.quote && (
            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-blue-600">
              <p className="italic text-slate-700">
                "{section.quote.text}"
              </p>
              <p className="text-sm text-slate-500 mt-2">
                — {section.quote.author}
              </p>
            </div>
          )}
        </section>
      );
    })}

  {/* FORMULATIONS SECTION (Keep your special layout) */}
  <section>
    <div className="grid md:grid-cols-2 gap-8">
      {content?.sections
        ?.find(s => s.id === "formulations")
        ?.tabs?.map((tab, idx) => {
          const Icon = IconLibrary[tab?.icon] || FaPills;
          return (
            <div key={idx} className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon className="text-2xl text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {tab?.name}
                </h3>
              </div>

              <p className="text-slate-600 mb-4">{tab?.content}</p>

              {tab?.features?.map((feature, i) => (
                <div key={i} className="text-sm text-slate-600">
                  • {feature}
                </div>
              ))}
            </div>
          );
        })}
    </div>
 

      </section>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 space-y-40">

        {/* INTRO */}
        <section>
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            {content?.introduction?.title}
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            {Array.isArray(content?.introduction?.paragraphs) &&
              content.introduction.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
          </div>
        </section>

        {/* FORMULATIONS */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {Array.isArray(content?.sections) &&
              content.sections
                .find(s => s.id === "formulations")
                ?.tabs?.map((tab, idx) => {
                  const Icon = IconLibrary[tab?.icon] || FaPills;
                  return (
                    <div key={idx} className="bg-white border border-slate-200 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="text-2xl text-blue-600" />
                        <h3 className="text-xl font-semibold text-slate-900">
                          {tab?.name}
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-4">{tab?.content}</p>

                      {Array.isArray(tab?.features) &&
                        tab.features.map((feature, i) => (
                          <div key={i} className="text-sm text-slate-600">
                            • {feature}
                          </div>
                        ))}
                    </div>
                  );
                })}
          </div>
        </section>

        {/* REGULATION */}
        {regulation?.summary && (
          <section className="bg-[#0B1A33] p-12 text-white">
            <h2 className="text-3xl font-light mb-4">
              {regulation.animatedTitle}
            </h2>
            <p className="text-slate-300 mb-8">{regulation.summary}</p>

            {Array.isArray(regulation?.bodies) &&
              regulation.bodies.map((body, idx) => {
                const Icon = IconLibrary[body?.icon] || FaBuilding;
                return (
                  <div key={idx} className="mb-4">
                    <div className="flex items-center gap-3">
                      <Icon />
                      <span>{body?.name}</span>
                    </div>
                  </div>
                );
              })}
          </section>
        )}

        {/* FAQ */}
        {Array.isArray(faq?.categories) && (
          <section>
            <h2 className="text-4xl font-light text-slate-900 mb-10">
              Frequently Asked Questions
            </h2>

            {faq.categories.map((category, catIdx) => (
              <div key={catIdx} className="mb-10">
                <h3 className="text-2xl font-light mb-6">
                  {category?.name}
                </h3>

                {category?.questions?.map((item, idx) => (
                  <FAQItem
                    key={idx}
                    item={item}
                    index={idx}
                    isExpanded={expandedFAQ === `${catIdx}-${idx}`}
                    onToggle={() =>
                      setExpandedFAQ(
                        expandedFAQ === `${catIdx}-${idx}`
                          ? null
                          : `${catIdx}-${idx}`
                      )
                    }
                  />
                ))}
              </div>
            ))}
          </section>
        )}

        <CategoriesDivisionsSection />
        <FeaturedByCategory />
        <FeaturedBlogsByCountry countrySlug={countrySlug} />
      </div>
    </main>
  );
}

const FAQItem = ({ item, index, isExpanded, onToggle }) => {
  return (
    <div className="border border-slate-200 bg-white">
      <div onClick={onToggle} className="p-6 flex justify-between cursor-pointer">
        <h3>{item?.question}</h3>
        <FaChevronDown />
      </div>

      {isExpanded && (
        <div className="p-6 bg-slate-50 text-slate-700">
          {item?.answer}
        </div>
      )}
    </div>
  );
};
