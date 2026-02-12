"use client";

import { useState, useRef, useEffect } from "react";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import FeaturedBlogsByCountry from "../../components/FeaturedBlogsByCountry";
import Image from "next/image";

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

// Country image mapping
const countryImages = {
  uk: "/images/countries/uk.jpg",
  usa: "/images/countries/usa.jpg",
  slovakia: "/images/countries/slovakia.jpg",
  hungary: "/images/countries/hungary.jpg",
  greece: "/images/countries/greece.jpg",
  italy: "/images/countries/italy.jpg",
  netherlands: "/images/countries/netherlands.jpg",
  poland: "/images/countries/poland.jpg",
  belgium: "/images/countries/belgium.jpg",
  germany: "/images/countries/germany.jpg",
  portugal: "/images/countries/portugal.jpg",
  spain: "/images/countries/spain.jpg",
};

// Fallback gradient backgrounds by country
const countryGradients = {
  uk: "from-[#00247D] via-[#CF142B] to-[#FFFFFF]",
  usa: "from-[#002868] via-[#BF0A30] to-[#FFFFFF]",
  slovakia: "from-[#0B4EA2] via-[#EE1C25] to-[#FFFFFF]",
  hungary: "from-[#436F4D] via-[#CD2A3E] to-[#FFFFFF]",
  greece: "from-[#0D5EAF] via-[#FFFFFF] to-[#0D5EAF]",
  italy: "from-[#009246] via-[#FFFFFF] to-[#CE2B37]",
  netherlands: "from-[#21468B] via-[#FFFFFF] to-[#AE1C28]",
  poland: "from-[#DC143C] via-[#FFFFFF] to-[#DC143C]",
  belgium: "from-[#000000] via-[#FDDA24] to-[#FF0000]",
  germany: "from-[#000000] via-[#DD0000] to-[#FFCE00]",
  portugal: "from-[#006600] via-[#FF0000] to-[#FFFF00]",
  spain: "from-[#AA151B] via-[#F1BF00] to-[#AA151B]",
};

// Renderers
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
  const [imageError, setImageError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sectionRefs = useRef({});

  // Track window width for responsive adjustments
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = country || {};
  const hero = data.hero || {};
  const content = data.content || {};
  const faq = data.faq || {};
  const regulation = data.regulation || {};

  // Get country image or fallback
  const countryImage = countryImages[countrySlug] || null;
  const countryGradient = countryGradients[countrySlug] || "from-[#0B1A33] via-[#0E1F3D] to-[#122B4A]";

  // Determine if image should be shown based on screen size
  const showImage = windowWidth >= 1024; // lg breakpoint

  return (
    <main className="bg-white">
      {/* HERO - Fully responsive with country image */}
      <section className={`relative bg-gradient-to-br ${countryGradient} text-white overflow-hidden`}>
        {/* Subtle animated pattern - responsive opacity */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10 md:opacity-20"></div>
          <div className="absolute top-1/4 -left-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column - Content - Full width on mobile, half on desktop */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0">
              {/* Breadcrumb - scrollable on mobile if needed */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 overflow-x-auto pb-2 whitespace-nowrap scrollbar-hide">
                <span className="hover:text-white transition-colors cursor-default flex-shrink-0">Home</span>
                <span className="text-white/50 flex-shrink-0">•</span>
                <span className="hover:text-white transition-colors cursor-default flex-shrink-0">Countries</span>
                <span className="text-white/50 flex-shrink-0">•</span>
                <span className="text-white font-medium bg-white/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm border border-white/30 flex-shrink-0">
                  {data.name || countrySlug}
                </span>
              </div>
              
              {/* Hero Title - Responsive font sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-4 sm:mb-6">
                {hero.title ? (
                  typeof hero.title === 'object' ? (
                    <span className="flex flex-col sm:flex-row flex-wrap items-start sm:items-baseline gap-1 sm:gap-2">
                      <span className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl">{hero.title.prefix}</span>
                      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                        {hero.title.highlight}
                      </span>
                      <span className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl">{hero.title.suffix}</span>
                    </span>
                  ) : (
                    hero.title
                  )
                ) : (
                  `Testosterone in ${data.name || countrySlug}`
                )}
              </h1>
              
              {/* Hero Subtitle - Responsive */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 font-light max-w-3xl">
                {hero.subtitle}
              </p>
              
              {/* Animated Subtitle */}
              {hero.animatedSubtitle && (
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse"></div>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 font-mono tracking-wide">
                    {hero.animatedSubtitle}
                  </p>
                </div>
              )}

              {/* CTA Buttons - Stack on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
                <button className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-slate-900 rounded-xl font-medium hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                  Explore Resources
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                </button>
                <button className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                  <FaShieldAlt className="text-xs sm:text-sm" />
                  Quality Standards
                </button>
              </div>
            </div>

            {/* Right Column - Country Image - Hidden on mobile/tablet, visible on desktop */}
            {showImage && (
              <div className="relative lg:block animate-fade-in">
                <div className="relative z-10">
                  {countryImage && !imageError ? (
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10"></div>
                      <div className="relative aspect-[4/3] lg:aspect-[6/5] xl:aspect-[5/4] w-full">
                        <Image
                          src={countryImage}
                          alt={data.name || countrySlug}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          className="object-cover"
                          onError={() => setImageError(true)}
                          priority
                        />
                      </div>
                      {/* Country name overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
                        <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg lg:rounded-xl border border-white/20">
                          {data.name || countrySlug}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Fallback abstract representation */
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 lg:p-8">
                      <div className="aspect-[4/3] lg:aspect-[6/5] relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <FaGlobe className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/40 mx-auto mb-3 lg:mb-4" />
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90">
                              {data.name || countrySlug}
                            </h3>
                            <div className="w-16 lg:w-20 h-0.5 bg-white/30 mx-auto mt-3 lg:mt-4"></div>
                          </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full blur-2xl"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative elements - responsive sizing */}
                <div className="absolute -top-8 lg:-top-10 -right-8 lg:-right-10 w-24 lg:w-40 h-24 lg:h-40 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 lg:-bottom-10 -left-8 lg:-left-10 w-24 lg:w-40 h-24 lg:h-40 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            )}
          </div>
        </div>
        
        {/* Wave divider - responsive height */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT - Fully responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="space-y-24 sm:space-y-28 lg:space-y-32 xl:space-y-40">
          
          {/* INTRODUCTION - Responsive */}
          {content?.introduction && (
            <section className="relative group">
              <div className="absolute -left-4 sm:-left-6 top-0 w-0.5 sm:w-1 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-y-150 transition-all duration-500" />
              
              <div className="pl-3 sm:pl-4 lg:pl-8">
                <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    Overview
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400">—</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 sm:mb-8 leading-tight">
                  {renderContent(content.introduction.title)}
                </h2>
                
                <div className="prose prose-base sm:prose-lg prose-slate max-w-none">
                  {content.introduction.paragraphs?.map((para, idx) => (
                    <p key={idx} className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DYNAMIC SECTIONS - Responsive */}
          {Array.isArray(content?.sections) &&
            content.sections.map((section, idx) => {
              if (section.id === "formulations") return null;

              return (
                <section key={idx} className="relative group">
                  <div className="absolute -left-4 sm:-left-6  sm:w-1 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-slate-300 to-slate-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500" />
                  
                  <div className="pl-3 sm:pl-4 lg:pl-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                    
                    {Array.isArray(section.content) && (
                      <div className="prose prose-base sm:prose-lg prose-slate max-w-none">
                        {section.content.map((para, i) => {
                          const isBulletPoint = para.startsWith('•') || para.startsWith('-') || para.startsWith('✓') || para.match(/^[A-Za-z]+:/);
                          
                          if (isBulletPoint) {
                            return (
                              <div key={i} className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 group/bullet">
                                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0 group-hover/bullet:scale-150 transition-transform"></div>
                                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed flex-1">
                                  {para}
                                </p>
                              </div>
                            );
                          }
                          
                          return (
                            <p key={i} className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
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

          {/* FORMULATIONS SECTION - Responsive cards */}
          {content?.sections?.find(s => s.id === "formulations") && (
            <section className="relative">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    Available Options
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
                  Testosterone Formulations
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">
                  Pharmaceutical-grade testosterone formulations available in {data.name || countrySlug}
                </p>
              </div>

              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {content.sections
                  .find(s => s.id === "formulations")
                  ?.tabs?.map((tab, idx) => {
                    const Icon = IconLibrary[tab?.icon] || FaPills;
                    return (
                      <div 
                        key={idx} 
                        className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
                          <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                            <Icon className="text-xl sm:text-2xl text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                              {tab?.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                          {tab?.content}
                        </p>

                        {tab?.features?.length > 0 && (
                          <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                              <FaCheckCircle className="text-emerald-500 text-xs sm:text-sm" />
                              Key Features
                            </h4>
                            {tab.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">
                                <FaCheckCircle className="text-emerald-500 text-xs sm:text-sm mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {tab?.note && (
                          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                            <p className="text-xs sm:text-sm text-slate-500 italic flex items-start gap-2">
                              <MdVerified className="text-blue-500 mt-0.5 flex-shrink-0 text-sm sm:text-base" />
                              {tab.note}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {content.sections.find(s => s.id === "formulations")?.note && (
                <div className="mt-8 sm:mt-10 text-center">
                  <div className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-200">
                    <MdVerified className="text-blue-600 text-base sm:text-lg flex-shrink-0" />
                    <span className="text-left">{content.sections.find(s => s.id === "formulations")?.note}</span>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* REGULATION - Responsive */}
          {regulation?.summary && (
            <section className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-8 sm:p-10 lg:p-12 xl:p-16">
                <div className="max-w-3xl">
                  <span className="text-xs sm:text-sm font-medium text-blue-300 uppercase tracking-wider mb-3 sm:mb-4 inline-block bg-white/5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                    Regulatory Framework
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight">
                    {renderContent(regulation.animatedTitle) || 'Regulatory Guidelines'}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 sm:mb-12 leading-relaxed">
                    {renderContent(regulation.summary)}
                  </p>

                  {Array.isArray(regulation?.bodies) && (
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {regulation.bodies.map((body, idx) => {
                        const Icon = IconLibrary[body?.icon] || FaBuilding;
                        return (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
                              <Icon className="text-lg sm:text-xl text-blue-300" />
                            </div>
                            <div>
                              <span className="text-sm sm:text-base text-white font-medium block mb-1">
                                {renderContent(body?.name)}
                              </span>
                              <span className="text-xs sm:text-sm text-blue-200/80">
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

          {/* WHY CHOOSE US - Responsive grid */}
          {content?.whyChoose && (
            <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
              
              <div className="relative max-w-4xl mx-auto text-center">
                <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 sm:mb-4 inline-block bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                  Why Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
                  {content.whyChoose.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
                  {content.whyChoose.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                  {content.whyChoose.features?.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mx-auto">
                        <FaStar className="text-blue-600 text-base sm:text-lg" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CONCLUSION - Responsive */}
          {content?.conclusion && (
            <section className="text-center max-w-4xl mx-auto px-4 sm:px-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-blue-50 rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 sm:mb-4 inline-block bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    Final Thoughts
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 sm:mb-8">
                    {content.conclusion.title}
                  </h2>
                  <div className="relative">
                    <FaQuoteRight className="absolute -top-3 sm:-top-4 -left-2 sm:-left-4 text-2xl sm:text-3xl lg:text-4xl text-slate-200/50" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed italic">
                      {content.conclusion.content}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ SECTION - Responsive accordion */}
          {faq?.categories && faq.categories.length > 0 && (
            <section>
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    Got Questions?
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">
                  Everything you need to know about testosterone therapy in {data.name || countrySlug}
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {faq.categories.map((category, catIdx) => (
                  <div key={catIdx} className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8 pb-4 border-b border-slate-200 flex items-center gap-2 sm:gap-3">
                      <span className="w-0.5 sm:w-1 h-5 sm:h-6 bg-blue-600 rounded-full"></span>
                      {category.name}
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
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

      {/* Add scrollbar hide utility */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}

const FAQItem = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <h4 className="text-sm sm:text-base lg:text-lg font-medium text-slate-900 pr-4 sm:pr-8">
          {item?.question}
        </h4>
        <div className={`flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
          isExpanded ? 'rotate-180 bg-blue-100' : 'group-hover:bg-slate-200'
        }`}>
          <FaChevronDown className={`text-xs sm:text-sm transition-colors ${
            isExpanded ? 'text-blue-600' : 'text-slate-500'
          }`} />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 sm:p-6 pt-0 border-t border-slate-100">
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
            {item?.answer}
          </p>
        </div>
      </div>
    </div>
  );
};