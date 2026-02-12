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

// Specialized renderer for your exact data format
const renderHeroTitle = (title) => {
  if (!title) return '';
  
  if (typeof title === 'object' && title.prefix !== undefined) {
    return (
      <>
        {title.prefix} <span className="text-blue-400 font-semibold">{title.highlight}</span> {title.suffix}
      </>
    );
  }
  
  return title;
};

const renderAnimatedTitle = (title) => {
  if (!title) return '';
  
  if (typeof title === 'object' && title.primary !== undefined) {
    return (
      <>
        {title.primary} <span className="text-blue-400">{title.highlight}</span> {title.suffix}
      </>
    );
  }
  
  return title;
};

const renderContent = (content) => {
  if (!content) return '';
  
  // Handle string
  if (typeof content === 'string') return content;
  
  // Handle the {prefix, highlight, suffix} format
  if (typeof content === 'object' && content.prefix !== undefined) {
    return (
      <>
        {content.prefix} <span className="font-semibold text-blue-600">{content.highlight}</span> {content.suffix}
      </>
    );
  }
  
  // Handle the {primary, highlight, suffix} format (for meta titles)
  if (typeof content === 'object' && content.primary !== undefined) {
    return (
      <>
        {content.primary} <span className="font-semibold text-blue-600">{content.highlight}</span> {content.suffix}
      </>
    );
  }
  
  // Handle arrays
  if (Array.isArray(content)) {
    return content.map((item, index) => (
      <span key={index}>{renderContent(item)}</span>
    ));
  }
  
  // Default
  return String(content);
};

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
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-blue-200/80 mb-6">
              <span>Home</span>
              <span>•</span>
              <span>Countries</span>
              <span>•</span>
              <span className="text-white font-medium">{data.name || countrySlug}</span>
            </div>
            
            {/* Hero Title - Special styling for prefix/highlight/suffix */}
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              {hero.title ? (
                typeof hero.title === 'object' ? (
                  <>
                    {hero.title.prefix}{' '}
                    <span className="text-blue-400 font-semibold">
                      {hero.title.highlight}
                    </span>{' '}
                    {hero.title.suffix}
                  </>
                ) : (
                  hero.title
                )
              ) : (
                `Testosterone in ${data.name || countrySlug}`
              )}
            </h1>
            
            {/* Hero Subtitle */}
            <p className="text-xl text-blue-100/90 leading-relaxed max-w-3xl mb-4">
              {hero.subtitle}
            </p>
            
            {/* Animated Subtitle */}
            {hero.animatedSubtitle && (
              <p className="text-lg text-blue-200/80">
                {hero.animatedSubtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-32 lg:space-y-40">
          
          {/* INTRODUCTION */}
          {content?.introduction && (
            <section className="relative">
              <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60" />
              
              <div className="pl-4 lg:pl-8">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                  Overview
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                  {renderContent(content.introduction.title)}
                </h2>
                
                <div className="prose prose-lg prose-slate max-w-none">
                  {content.introduction.paragraphs?.map((para, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed mb-6">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DYNAMIC SECTIONS */}
          {Array.isArray(content?.sections) &&
            content.sections.map((section, idx) => {
              if (section.id === "formulations") return null;

              return (
                <section key={idx} className="relative">
                  <div className="pl-4 lg:pl-8">
                    <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
                      {section.title}
                    </h2>
                    
                    {Array.isArray(section.content) && (
                      <div className="prose prose-lg prose-slate max-w-none">
                        {section.content.map((para, i) => (
                          <p key={i} className="text-slate-600 leading-relaxed mb-6">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}

          {/* FORMULATIONS SECTION */}
          {content?.sections?.find(s => s.id === "formulations") && (
            <section>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                  Available Options
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  Testosterone Formulations
                </h2>
                <p className="text-xl text-slate-600">
                  Pharmaceutical-grade testosterone formulations available in {data.name || countrySlug}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {content.sections
                  .find(s => s.id === "formulations")
                  ?.tabs?.map((tab, idx) => {
                    const Icon = IconLibrary[tab?.icon] || FaPills;
                    return (
                      <div 
                        key={idx} 
                        className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start gap-5 mb-6">
                          <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-2xl text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                              {tab?.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {tab?.content}
                        </p>

                        {tab?.note && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-500 italic">
                              {tab.note}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Formulations note */}
              {content.sections.find(s => s.id === "formulations")?.note && (
                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 bg-slate-50 inline-block px-6 py-3 rounded-full">
                    {content.sections.find(s => s.id === "formulations")?.note}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* WHY CHOOSE US */}
          {content?.whyChoose && (
            <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  {content.whyChoose.title}
                </h2>
                <p className="text-xl text-slate-600 mb-10">
                  {content.whyChoose.description}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.whyChoose.features?.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                      <div className="text-blue-600 text-2xl mb-3">✓</div>
                      <p className="text-slate-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CONCLUSION */}
          {content?.conclusion && (
            <section className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                {content.conclusion.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {content.conclusion.content}
              </p>
            </section>
          )}

          {/* COMPONENTS */}
          <CategoriesDivisionsSection />
          <FeaturedByCategory />
          <FeaturedBlogsByCountry countrySlug={countrySlug} />
        </div>
      </div>
    </main>
  );
}