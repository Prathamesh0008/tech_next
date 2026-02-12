"use client"

import { useState, useEffect, useRef } from "react";
import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import FeaturedBlogsByCountry from "../../components/FeaturedBlogsByCountry";

import { notFound } from "next/navigation";
import { 
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom, 
  FaPills, FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry,
  FaRocket, FaHeart, FaGavel, FaBuilding, FaArrowRight, 
  FaChevronDown, FaQuoteRight, FaClock, FaFlask as FaBeaker,
  FaChartLine, FaUsers, FaCrown, FaAward, FaCertificate,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar,
  FaCircle, FaBolt, FaShieldVirus, FaRegFileAlt
} from "react-icons/fa";
import { GiChemicalDrop, GiTestTubes, GiHealthNormal, GiBoltShield } from "react-icons/gi";
import { IoIosRibbon, IoIosTimer } from "react-icons/io";
import { MdScience, MdPrecisionManufacturing, MdVerified, MdOutlineScience } from "react-icons/md";

const IconLibrary = {
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom, FaPills, 
  FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry, FaRocket, FaHeart,
  FaGavel, FaBuilding, FaArrowRight, FaChevronDown, FaQuoteRight, FaClock,
  FaBeaker, FaChartLine, FaUsers, FaCrown, FaAward, FaCertificate,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar, FaCircle,
  FaBolt, FaShieldVirus, GiChemicalDrop, GiTestTubes, GiHealthNormal,
  GiBoltShield, IoIosRibbon, IoIosTimer, MdScience, MdPrecisionManufacturing, MdVerified, FaRegFileAlt
};

export default function TestosteroneCountryPage({ params }) {
//   const [country, setCountry] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
//   const [loading, setLoading] = useState(true);
  const sectionRefs = useRef({});
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const { country } = await params;
//       const data = countryData[country];
//       if (!data) {
//         notFound();
//         return;
//       }
//       setCountry(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, [params]);

//   if (loading) return <LoadingScreen />;
//   if (!country) return null;

//   const data = country;
  const { hero, content, faq, regulation } = data;

  return (
    <main className="bg-white">
      {/* Hero Section - Elevated & Refined */}
      <section className="relative bg-gradient-to-br from-[#0B1A33] via-[#0E1F3D] to-[#122B4A] text-white overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Trust Badge - Refined */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <MdVerified className="text-blue-400" />
                <span className="text-sm font-medium text-blue-200 tracking-wide">MHRA COMPLIANT • GMP CERTIFIED</span>
              </div>

              {/* Title - Elegant */}
              <div className="space-y-3">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300/70 block">
                  Pharmaceutical Grade
                </span>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
                  <span className="block font-light text-white/90 mb-2">Testosterone in</span>
                  <span className="block font-semibold bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {data.name}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                {hero?.subtitle || data.heroSubtitle}
              </p>

              {/* Key Metrics - Minimalist */}
              <div className="grid grid-cols-3 gap-8 pt-6">
                {hero?.stats?.map((stat, idx) => {
                  const Icon = IconLibrary[stat.icon] || FaShieldAlt;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="text-3xl lg:text-4xl font-light text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons - Refined */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-3 transition-all duration-300">
                  <MdOutlineScience className="text-xl" />
                  Explore Research
                  <FaArrowRight className="text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-3 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <FaRegFileAlt className="text-xl" />
                  View Documentation
                </button>
              </div>
            </div>

            {/* Right Column - Sophisticated Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-xl p-8 border border-white/10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <FaCrown className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Excellence in Research</h3>
                        <p className="text-sm text-slate-400">Since 2008</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <FaAward className="text-2xl text-blue-400 mb-2" />
                        <h4 className="text-sm font-medium text-white">Pharmaceutical Grade</h4>
                        <p className="text-xs text-slate-400 mt-1">GMP Certified</p>
                      </div>
                      <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <FaClipboardCheck className="text-2xl text-emerald-400 mb-2" />
                        <h4 className="text-sm font-medium text-white">UK Compliant</h4>
                        <p className="text-xs text-slate-400 mt-1">MHRA Standards</p>
                      </div>
                      <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <FaLayerGroup className="text-2xl text-purple-400 mb-2" />
                        <h4 className="text-sm font-medium text-white">Dual Formulations</h4>
                        <p className="text-xs text-slate-400 mt-1">Tablets & Injectables</p>
                      </div>
                      <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <FaFlask className="text-2xl text-amber-400 mb-2" />
                        <h4 className="text-sm font-medium text-white">Research Driven</h4>
                        <p className="text-xs text-slate-400 mt-1">15+ Years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        {/* <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
            <div className="flex items-center gap-3 text-slate-500 text-xs">
              <span className="tracking-[0.2em] uppercase">Scroll</span>
              <FaChevronDown className="text-xs" />
            </div>
          </div>
        </div> */}
      </section>

      {/* Main Content - Elegant Spacing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 space-y-40">

        {/* Overview Section */}
        <section 
          id="overview"
          ref={el => sectionRefs.current['overview'] = el}
          className="scroll-mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-600"></div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Scientific Overview</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight">
                {content?.introduction?.title || "Understanding Testosterone in the United Kingdom"}
              </h2>
              
              <div className="space-y-5 text-slate-600 leading-relaxed">
                {content?.introduction?.paragraphs?.map((para, idx) => (
                  <p key={idx} className="text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Insights - Sophisticated Dark Card */}
            <div className="bg-[#0B1A33] p-10 lg:p-12">
              <h3 className="text-2xl font-light text-white mb-8 tracking-tight">Key Insights</h3>
              <div className="space-y-6">
                {[
                  "Testosterone decline typically begins in early 30s",
                  "Lifestyle factors can accelerate hormonal changes",
                  "UK maintains strict regulatory oversight",
                  "Pharmaceutical-grade manufacturing ensures quality"
                ].map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                      <FaCheckCircle className="text-blue-400 text-sm" />
                    </div>
                    <p className="text-slate-300">{insight}</p>
                  </div>
                ))}
              </div>
              
              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Peer-reviewed research</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Formulations Section */}
        <section 
          id="research"
          ref={el => sectionRefs.current['research'] = el}
          className="scroll-mt-28"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-indigo-600"></div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">Research & Development</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">Scientific Excellence</h2>
            <p className="text-xl text-slate-600 font-light">Rigorous research standards combined with pharmaceutical-grade manufacturing</p>
          </div>

          {/* Formulation Cards - Elegant */}
          <div className="grid md:grid-cols-2 gap-8">
            {content?.sections?.find(s => s.id === "formulations")?.tabs?.map((tab, idx) => {
              const Icon = IconLibrary[tab.icon] || FaPills;
              return (
                <div key={idx} className="group bg-white border border-slate-200 p-8 lg:p-10 hover:border-blue-300 transition-all duration-500">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-500">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{tab.name}</h3>
                      <p className="text-sm text-slate-500 mt-1 tracking-wide">Advanced Formulation</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">{tab.content}</p>
                  
                  <div className="space-y-3">
                    {tab.features?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regulation Section - Refined */}
        {regulation && (
          <section 
            id="regulations"
            ref={el => sectionRefs.current['regulations'] = el}
            className="scroll-mt-28"
          >
            <div className="bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                <div className="w-20 h-20 bg-emerald-600/10 flex items-center justify-center">
                  <FaBalanceScale className="text-3xl text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-light text-white mb-3">
                    {regulation.animatedTitle || "UK Regulatory Framework"}
                  </h2>
                  <p className="text-emerald-200/70 text-lg font-light">{regulation.summary}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Regulatory Bodies */}
                <div className="space-y-5">
                  <h3 className="text-lg font-medium text-white/90 mb-6 tracking-wide">Regulatory Authorities</h3>
                  {regulation.bodies?.map((body, idx) => {
                    const Icon = IconLibrary[body.icon] || FaBuilding;
                    return (
                      <div key={idx} className="bg-white/5 p-6 border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                            <Icon className="text-xl text-emerald-400" />
                          </div>
                          <div>
                            <div className="font-medium text-white">{body.name}</div>
                            <div className="text-sm text-slate-400 mt-1">{body.fullName}</div>
                            <div className="text-xs text-emerald-300/70 mt-2">{body.role}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Compliance Standards */}
                <div className="space-y-5">
                  <h3 className="text-lg font-medium text-white/90 mb-6 tracking-wide">Compliance Standards</h3>
                  <div className="bg-white/5 p-8 border border-white/10">
                    <div className="grid grid-cols-2 gap-5">
                      {regulation.compliance?.required?.map((standard, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-300">
                          <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center">
                            <FaCheckCircle className="text-emerald-400 text-xs" />
                          </div>
                          <span className="text-sm">{standard}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-emerald-300 text-xs uppercase tracking-wider font-medium">Active Compliance • Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section - Elegant */}
        {faq && (
          <section 
            id="faq"
            ref={el => sectionRefs.current['faq'] = el}
            className="scroll-mt-28"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-purple-600"></div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-600">Expert Knowledge</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 font-light">Comprehensive answers from our research team</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faq.categories?.map((category, catIdx) => (
                <div key={catIdx} className="mb-12 last:mb-0">
                  <h3 className="text-2xl font-light text-slate-900 flex items-center gap-4 mb-8">
                    <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                    {category.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.questions?.map((item, idx) => (
                      <FAQItem 
                        key={item.id || idx}
                        item={item}
                        index={idx}
                        isExpanded={expandedFAQ === `${catIdx}-${idx}`}
                        onToggle={() => setExpandedFAQ(expandedFAQ === `${catIdx}-${idx}` ? null : `${catIdx}-${idx}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Choose Novatech - Refined */}
        {content?.whyChoose && (
          <section className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
                {content.whyChoose.animatedTitle || "The Novatech Advantage"}
              </h2>
              <p className="text-slate-400 text-lg font-light">
                Setting the standard for pharmaceutical excellence in testosterone research
              </p>
            </div>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.whyChoose.features?.map((feature, idx) => {
                const Icon = IconLibrary[feature.icon] || FaCheckCircle;
                return (
                  <div key={idx} className="group bg-white/5 p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Categories & Featured Sections */}
        <CategoriesDivisionsSection />
        <FeaturedByCategory />
        <FeaturedBlogsByCountry countrySlug={params.country} />

        {/* Back to Top - Minimal */}
        {/* <div className="flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group px-8 py-4 bg-transparent border border-slate-300 hover:border-blue-600 text-slate-600 hover:text-blue-600 font-medium flex items-center gap-3 transition-all duration-300"
          >
            <FaChevronDown className="rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="tracking-wide">Back to Top</span>
          </button>
        </div> */}
      </div>
    </main>
  );
}

// Refined FAQ Item Component
const FAQItem = ({ item, index, isExpanded, onToggle }) => {
  return (
    <div className="group border border-slate-200 bg-white hover:border-blue-300 transition-all duration-500">
      <div 
        onClick={onToggle}
        className="p-6 lg:p-8 flex items-start justify-between gap-6 cursor-pointer"
      >
        <div className="flex items-start gap-5 flex-grow">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="space-y-3">
            <h3 className="text-lg lg:text-xl font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
              {item.question}
            </h3>
            
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className={`flex-shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
          <FaChevronDown className="text-slate-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-slate-100">
          <div className="p-6 lg:p-8 bg-slate-50">
            <div className="pl-16">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
              
              {item.warning && (
                <div className="mt-6 p-5 bg-amber-50/50 border border-amber-200 rounded-none">
                  <div className="flex items-start gap-4">
                    <FaShieldVirus className="text-amber-600 text-xl flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm leading-relaxed">
                      {item.warning}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Elegant Loading Screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] flex items-center justify-center">
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 border border-white/10 mx-auto"></div>
        <div className="absolute inset-0 w-20 h-20 border-t border-blue-400 mx-auto animate-spin"></div>
      </div>
      <div className="space-y-2">
        <p className="text-white text-lg font-light tracking-wide">Loading scientific data</p>
        <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">Novatech Research</p>
      </div>
    </div>
  </div>
);