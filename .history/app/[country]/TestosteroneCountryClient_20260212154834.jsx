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

// Helper function to safely render content that might be an object with prefix/highlight/suffix
const renderSafeContent = (content) => {
  if (!content) return '';
  
  // If it's a string, return it
  if (typeof content === 'string') return content;
  
  // If it's an object with prefix/highlight/suffix structure
  if (typeof content === 'object') {
    // Handle the specific error case
    if (content.prefix !== undefined || content.highlight !== undefined || content.suffix !== undefined) {
      return (
        <span>
          {content.prefix && renderSafeContent(content.prefix)}
          {content.highlight && (
            <span className="font-semibold text-blue-600">
              {renderSafeContent(content.highlight)}
            </span>
          )}
          {content.suffix && renderSafeContent(content.suffix)}
        </span>
      );
    }
    
    // If it's an array, map through it
    if (Array.isArray(content)) {
      return content.map((item, i) => (
        <span key={i}>{renderSafeContent(item)}</span>
      ));
    }
    
    // If it has a text property (common in CMS)
    if (content.text) {
      return renderSafeContent(content.text);
    }
    
    // If it has a content property
    if (content.content) {
      return renderSafeContent(content.content);
    }
  }
  
  // Default fallback
  return String(content) || '';
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
      {/* HERO - Clean and professional */}
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
              <span className="text-white font-medium">{countrySlug}</span>
            </div>
            
            {/* Hero Title - Safely render */}
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              {renderSafeContent(hero?.title) || `Testosterone Therapy in ${countrySlug}`}
            </h1>
            
            {/* Hero Subtitle - Safely render */}
            <p className="text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              {renderSafeContent(hero?.subtitle) || `Comprehensive guide to regulations, formulations, and clinical guidelines`}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-32 lg:space-y-40">
          
          {/* INTRODUCTION */}
          {content?.introduction && (
            <section className="relative">
              {/* Decorative element */}
              <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60" />
              
              <div className="pl-4 lg:pl-8">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                  Overview
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                  {renderSafeContent(content.introduction.title)}
                </h2>
                
                <div className="prose prose-lg prose-slate max-w-none">
                  {content.introduction.paragraphs?.map((para, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed mb-6">
                      {renderSafeContent(para)}
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
                      {renderSafeContent(section.title)}
                    </h2>
                    
                    {Array.isArray(section.content) && (
                      <div className="prose prose-lg prose-slate max-w-none">
                        {section.content.map((para, i) => (
                          <p key={i} className="text-slate-600 leading-relaxed mb-6">
                            {renderSafeContent(para)}
                          </p>
                        ))}
                      </div>
                    )}

                    {Array.isArray(section.timeline) && (
                      <div className="mt-12 space-y-4">
                        <h3 className="text-xl font-medium text-slate-900 mb-6">
                          Key Milestones
                        </h3>
                        {section.timeline.map((item, i) => (
                          <div key={i} className="flex items-start gap-5 group">
                            <div className="min-w-[80px] font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg text-center">
                              {item.year}
                            </div>
                            <div className="text-slate-600 py-2 border-b border-slate-100 flex-1 group-last:border-0">
                              {renderSafeContent(item.event)}
                            </div>
                          </div>
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
                  FDA-approved testosterone replacement therapies available in {countrySlug}
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
                              {renderSafeContent(tab?.name)}
                            </h3>
                            <p className="text-sm font-medium text-blue-600">
                              {renderSafeContent(tab?.administration) || 'Prescription required'}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {renderSafeContent(tab?.content)}
                        </p>

                        {tab?.features?.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                              Key Features
                            </h4>
                            {tab.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-3 text-slate-600">
                                <FaCheckCircle className="text-emerald-500 text-sm mt-1 flex-shrink-0" />
                                <span>{renderSafeContent(feature)}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* REGULATION */}
          {regulation?.summary && (
            <section className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] rounded-3xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
              
              <div className="relative p-12 lg:p-16">
                <div className="max-w-3xl">
                  <span className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4 block">
                    Regulatory Framework
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                    {renderSafeContent(regulation.animatedTitle) || 'Regulatory Guidelines'}
                  </h2>
                  <p className="text-xl text-blue-100/90 mb-12 leading-relaxed">
                    {renderSafeContent(regulation.summary)}
                  </p>

                  {Array.isArray(regulation?.bodies) && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {regulation.bodies.map((body, idx) => {
                        const Icon = IconLibrary[body?.icon] || FaBuilding;
                        return (
                          <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <Icon className="text-xl text-blue-300" />
                            </div>
                            <div>
                              <span className="text-white font-medium block mb-1">
                                {renderSafeContent(body?.name)}
                              </span>
                              <span className="text-sm text-blue-200/80">
                                {renderSafeContent(body?.role) || 'Regulatory Body'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          {Array.isArray(faq?.categories) && (
            <section>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                  Got Questions?
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-slate-600">
                  Everything you need to know about testosterone therapy in {countrySlug}
                </p>
              </div>

              <div className="space-y-12">
                {faq.categories.map((category, catIdx) => (
                  <div key={catIdx} className="bg-slate-50 rounded-3xl p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-8 pb-4 border-b border-slate-200">
                      {renderSafeContent(category?.name)}
                    </h3>
                    
                    <div className="space-y-4">
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
                  </div>
                ))}
              </div>
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

const FAQItem = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <h4 className="text-lg font-medium text-slate-900 pr-8">
          {renderSafeContent(item?.question)}
        </h4>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-100' : ''}`}>
          <FaChevronDown className={`text-sm transition-colors ${isExpanded ? 'text-blue-600' : 'text-slate-500'}`} />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed">
            {renderSafeContent(item?.answer)}
          </p>
        </div>
      </div>
    </div>
  );
};