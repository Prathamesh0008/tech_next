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
        {title.prefix} <span className="text-blue-400 font-semibold relative inline-block">
          {title.highlight}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400/50 rounded-full"></span>
        </span> {title.suffix}
      </>
    );
  }
  
  return title;
};

const renderContent = (content) => {
  if (!content) return '';
  
  if (typeof content === 'string') return content;
  
  if (typeof content === 'object' && content.prefix !== undefined) {
    return (
      <>
        {content.prefix} <span className="font-semibold text-blue-600 relative inline-block">
          {content.highlight}
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-200 rounded-full"></span>
        </span> {content.suffix}
      </>
    );
  }
  
  if (typeof content === 'object' && content.primary !== undefined) {
    return (
      <>
        {content.primary} <span className="font-semibold text-blue-600 relative inline-block">
          {content.highlight}
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-200 rounded-full"></span>
        </span> {content.suffix}
      </>
    );
  }
  
  if (Array.isArray(content)) {
    return content.map((item, index) => (
      <span key={index}>{renderContent(item)}</span>
    ));
  }
  
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
      {/* HERO - Refined premium design */}
      <section className="relative bg-gradient-to-br from-[#0B1A33] via-[#0E1F3D] to-[#122B4A] text-white overflow-hidden">
        {/* Subtle animated pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Breadcrumb - refined */}
            <div className="flex items-center gap-2 text-sm text-blue-200/80 mb-6">
              <span className="hover:text-white transition-colors cursor-default">Home</span>
              <span className="text-blue-300/50">•</span>
              <span className="hover:text-white transition-colors cursor-default">Countries</span>
              <span className="text-blue-300/50">•</span>
              <span className="text-white font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {data.name || countrySlug}
              </span>
            </div>
            
            {/* Hero Title - refined typography */}
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              {hero.title ? (
                typeof hero.title === 'object' ? (
                  <span className="flex flex-wrap items-baseline gap-2">
                    <span className="text-blue-200/90">{hero.title.prefix}</span>
                    <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {hero.title.highlight}
                    </span>
                    <span className="text-blue-200/90">{hero.title.suffix}</span>
                  </span>
                ) : (
                  hero.title
                )
              ) : (
                `Testosterone in ${data.name || countrySlug}`
              )}
            </h1>
            
            {/* Hero Subtitle - refined */}
            <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mb-6 font-light">
              {hero.subtitle}
            </p>
            
            {/* Animated Subtitle - refined */}
            {hero.animatedSubtitle && (
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-lg text-blue-200/80 font-mono tracking-wide">
                  {hero.animatedSubtitle}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Refined wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT - Refined spacing and typography */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-32 lg:space-y-40">
          
          {/* INTRODUCTION - Refined */}
          {content?.introduction && (
            <section className="relative group">
              <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-y-150 transition-all duration-500" />
              
              <div className="pl-4 lg:pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
                    Overview
                  </span>
                  <span className="text-sm text-slate-400">—</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                  {renderContent(content.introduction.title)}
                </h2>
                
                <div className="prose prose-lg prose-slate max-w-none">
                  {content.introduction.paragraphs?.map((para, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DYNAMIC SECTIONS - Refined with better bullet point styling */}
          {Array.isArray(content?.sections) &&
            content.sections.map((section, idx) => {
              if (section.id === "formulations") return null;

              return (
                <section key={idx} className="relative group">
                  <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-slate-300 to-slate-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500" />
                  
                  <div className="pl-4 lg:pl-8">
                    <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                    
                    {Array.isArray(section.content) && (
                      <div className="prose prose-lg prose-slate max-w-none">
                        {section.content.map((para, i) => {
                          // Detect bullet points
                          const isBulletPoint = para.startsWith('•') || para.startsWith('-') || para.startsWith('✓') || para.match(/^[A-Za-z]+:/);
                          
                          if (isBulletPoint) {
                            return (
                              <div key={i} className="flex items-start gap-3 mb-3 group/bullet">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-3 flex-shrink-0 group-hover/bullet:scale-150 transition-transform"></div>
                                <p className="text-slate-600 leading-relaxed flex-1">
                                  {para}
                                </p>
                              </div>
                            );
                          }
                          
                          return (
                            <p key={i} className="text-slate-600 leading-relaxed mb-6">
                              {para}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}

          {/* FORMULATIONS SECTION - Refined cards */}
          {content?.sections?.find(s => s.id === "formulations") && (
            <section className="relative">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex justify-center mb-4">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
                    Available Options
                  </span>
                </div>
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
                          <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                            <Icon className="text-2xl text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {tab?.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {tab?.content}
                        </p>

                        {tab?.features?.length > 0 && (
                          <div className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                              <FaCheckCircle className="text-emerald-500" />
                              Key Features
                            </h4>
                            {tab.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-3 text-slate-600">
                                <FaCheckCircle className="text-emerald-500 text-sm mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {tab?.note && (
                          <div className="mt-6 pt-6 border-t border-slate-100">
                            <p className="text-sm text-slate-500 italic flex items-start gap-2">
                              <MdVerified className="text-blue-500 mt-0.5 flex-shrink-0" />
                              {tab.note}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Formulations note - refined */}
              {content.sections.find(s => s.id === "formulations")?.note && (
                <div className="mt-10 text-center">
                  <div className="inline-flex items-center gap-3 text-sm text-slate-600 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                    <MdVerified className="text-blue-600 text-lg" />
                    {content.sections.find(s => s.id === "formulations")?.note}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* REGULATION - Refined premium card */}
          {regulation?.summary && (
            <section className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-12 lg:p-16">
                <div className="max-w-3xl">
                  <span className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4 inline-block bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                    Regulatory Framework
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                    {renderContent(regulation.animatedTitle) || 'Regulatory Guidelines'}
                  </h2>
                  <p className="text-xl text-blue-100/90 mb-12 leading-relaxed">
                    {renderContent(regulation.summary)}
                  </p>

                  {Array.isArray(regulation?.bodies) && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {regulation.bodies.map((body, idx) => {
                        const Icon = IconLibrary[body?.icon] || FaBuilding;
                        return (
                          <div 
                            key={idx} 
                            className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <Icon className="text-xl text-blue-300" />
                            </div>
                            <div>
                              <span className="text-white font-medium block mb-1">
                                {renderContent(body?.name)}
                              </span>
                              <span className="text-sm text-blue-200/80">
                                {renderContent(body?.role) || 'Regulatory Body'}
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

          {/* WHY CHOOSE US - Refined with better cards */}
          {content?.whyChoose && (
            <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
              
              <div className="relative max-w-4xl mx-auto text-center">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
                  Why Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  {content.whyChoose.title}
                </h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                  {content.whyChoose.description}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.whyChoose.features?.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mx-auto">
                        <FaStar className="text-blue-600 text-lg" />
                      </div>
                      <p className="text-slate-700 font-medium text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CONCLUSION - Refined */}
          {content?.conclusion && (
            <section className="text-center max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-50 rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
                    Final Thoughts
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
                    {content.conclusion.title}
                  </h2>
                  <div className="relative">
                    <FaQuoteRight className="absolute -top-4 -left-4 text-4xl text-slate-200/50" />
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed italic">
                      {content.conclusion.content}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ SECTION - Refined accordion */}
          {faq?.categories && faq.categories.length > 0 && (
            <section>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex justify-center mb-4">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
                    Got Questions?
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-slate-600">
                  Everything you need to know about testosterone therapy in {data.name || countrySlug}
                </p>
              </div>

              <div className="space-y-8">
                {faq.categories.map((category, catIdx) => (
                  <div key={catIdx} className="bg-slate-50 rounded-2xl p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
                      <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                      {category.name}
                    </h3>
                    
                    <div className="space-y-4">
                      {category.questions?.map((item, idx) => (
                        <FAQItem
                          key={idx}
                          item={item}
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
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <h4 className="text-lg font-medium text-slate-900 pr-8">
          {item?.question}
        </h4>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
          isExpanded ? 'rotate-180 bg-blue-100' : 'group-hover:bg-slate-200'
        }`}>
          <FaChevronDown className={`text-xs transition-colors ${
            isExpanded ? 'text-blue-600' : 'text-slate-500'
          }`} />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed">
            {item?.answer}
          </p>
        </div>
      </div>
    </div>
  );
};