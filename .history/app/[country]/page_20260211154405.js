"use client"

import { useState, useEffect, useRef } from "react";
import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import { notFound } from "next/navigation";
import { 
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom, 
  FaPills, FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry,
  FaRocket, FaHeart, FaGavel, FaBuilding, FaArrowRight, 
  FaChevronDown, FaQuoteRight, FaClock, FaFlask as FaBeaker,
  FaChartLine, FaUsers, FaCrown, FaAward, FaCertificate,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar,
  FaCircle, FaBolt, FaShieldVirus
} from "react-icons/fa";
import { GiChemicalDrop, GiTestTubes, GiHealthNormal, GiBoltShield } from "react-icons/gi";
import { IoIosRibbon, IoIosTimer } from "react-icons/io";
import { MdScience, MdPrecisionManufacturing, MdVerified } from "react-icons/md";

// Professional Icon mapping
const IconLibrary = {
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom, FaPills, 
  FaSyringe, FaMicroscope, FaCheckCircle, FaIndustry, FaRocket, FaHeart,
  FaGavel, FaBuilding, FaArrowRight, FaChevronDown, FaQuoteRight, FaClock,
  FaBeaker, FaChartLine, FaUsers, FaCrown, FaAward, FaCertificate,
  FaVial, FaTablets, FaCapsules, FaLayerGroup, FaBalanceScale,
  FaClipboardCheck, FaFileAlt, FaSearch, FaLightbulb, FaStar, FaCircle,
  FaBolt, FaShieldVirus, GiChemicalDrop, GiTestTubes, GiHealthNormal,
  GiBoltShield, IoIosRibbon, IoIosTimer, MdScience, MdPrecisionManufacturing, MdVerified
};

export default function TestosteroneCountryPage({ params }) {
  const [country, setCountry] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [loading, setLoading] = useState(true);
  const sectionRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      const { country } = await params;
      const data = countryData[country];
      if (!data) {
        notFound();
        return;
      }
      setCountry(data);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs.current);
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <LoadingScreen />;
  if (!country) return null;

  const data = country;
  const { hero, content, faq, regulation } = data;

  return (
    <main className="bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 mb-8">
                <MdVerified className="text-blue-400" />
                <span className="text-sm font-medium text-blue-200">MHRA Compliant • GMP Certified</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="block text-white/90 mb-2">Testosterone in</span>
                <span className="block text-blue-400">
                  {data.name}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {hero?.subtitle || data.heroSubtitle}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-slate-800 py-6">
                {hero?.stats?.map((stat, idx) => {
                  const Icon = IconLibrary[stat.icon] || FaShieldAlt;
                  return (
                    <div key={idx} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 font-semibold text-white flex items-center gap-3">
                  <MdScience className="text-xl" />
                  Explore Research
                </button>
                <button className="px-8 py-4 bg-slate-800 font-semibold text-white flex items-center gap-3 border border-slate-700">
                  <FaFileAlt className="text-xl" />
                  View Documentation
                </button>
              </div>
            </div>

            {/* Right Column - Quality Badges */}
            <div className="hidden lg:block">
              <div className="bg-slate-800 p-8 border border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50">
                    <FaCrown className="text-2xl text-yellow-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Pharmaceutical Grade</h4>
                    <p className="text-xs text-slate-400 mt-1">GMP Certified</p>
                  </div>
                  <div className="p-4 bg-slate-900/50">
                    <FaAward className="text-2xl text-blue-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Research Driven</h4>
                    <p className="text-xs text-slate-400 mt-1">15+ Years</p>
                  </div>
                  <div className="p-4 bg-slate-900/50">
                    <FaClipboardCheck className="text-2xl text-emerald-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">UK Compliant</h4>
                    <p className="text-xs text-slate-400 mt-1">MHRA Standards</p>
                  </div>
                  <div className="p-4 bg-slate-900/50">
                    <FaLayerGroup className="text-2xl text-purple-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Dual Formulations</h4>
                    <p className="text-xs text-slate-400 mt-1">Tablets & Injectables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <span>Scroll</span>
              <FaChevronDown className="text-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar - Simple & Functional */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start gap-1 py-3">
            {['Overview', 'Research', 'Formulations', 'Regulations', 'FAQ'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className={`px-5 py-2 text-sm font-medium ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Overview Section */}
        <section 
          id="overview"
          ref={el => sectionRefs.current['overview'] = el}
          className="scroll-mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <FaCircle className="text-[8px]" />
                <span>Scientific Overview</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {content?.introduction?.title || "Understanding Testosterone in the United Kingdom"}
              </h2>
              
              <div className="prose prose-lg">
                {content?.introduction?.paragraphs?.map((para, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Insights Card */}
            <div className="bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Insights</h3>
              <div className="space-y-6">
                {[
                  "Testosterone decline typically begins in early 30s",
                  "Lifestyle factors can accelerate hormonal changes",
                  "UK maintains strict regulatory oversight",
                  "Pharmaceutical-grade manufacturing ensures quality"
                ].map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-blue-400 text-sm" />
                    </div>
                    <p className="text-slate-300">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research & Formulations Section */}
        <section 
          id="research"
          ref={el => sectionRefs.current['research'] = el}
          className="scroll-mt-20"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-medium mb-4">
              <MdScience className="text-lg" />
              <span>Research & Development</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Scientific Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Rigorous research standards combined with pharmaceutical-grade manufacturing</p>
          </div>

          {/* Formulation Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {content?.sections?.find(s => s.id === "formulations")?.tabs?.map((tab, idx) => {
              const Icon = IconLibrary[tab.icon] || FaPills;
              return (
                <div key={idx} className="bg-white border border-slate-200 p-8 hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 flex items-center justify-center text-white text-2xl">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{tab.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">Advanced Formulation</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6">{tab.content}</p>
                  
                  <div className="space-y-3">
                    {tab.features?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regulation Section */}
        {regulation && (
          <section 
            id="regulations"
            ref={el => sectionRefs.current['regulations'] = el}
            className="scroll-mt-20"
          >
            <div className="bg-slate-900 p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-emerald-600 flex items-center justify-center text-white text-2xl">
                  <FaBalanceScale />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {regulation.animatedTitle || "UK Regulatory Framework"}
                  </h2>
                  <p className="text-emerald-200/80">{regulation.summary}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Regulatory Bodies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Regulatory Authorities</h3>
                  {regulation.bodies?.map((body, idx) => {
                    const Icon = IconLibrary[body.icon] || FaBuilding;
                    return (
                      <div key={idx} className="bg-slate-800 p-5 border border-slate-700">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-slate-700 flex items-center justify-center text-emerald-400">
                            <Icon className="text-xl" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{body.name}</div>
                            <div className="text-sm text-slate-400 mt-1">{body.fullName}</div>
                            <div className="text-xs text-emerald-300/80 mt-1">{body.role}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Compliance Standards */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Compliance Standards</h3>
                  <div className="bg-slate-800 p-6 border border-slate-700">
                    <div className="grid grid-cols-2 gap-4">
                      {regulation.compliance?.required?.map((standard, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <FaCheckCircle className="text-emerald-400 text-sm" />
                          <span className="text-sm">{standard}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500"></div>
                        <span className="text-emerald-300 text-sm font-medium">Active Compliance • Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Professional FAQ Section */}
        {faq && (
          <section 
            id="faq"
            ref={el => sectionRefs.current['faq'] = el}
            className="scroll-mt-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium mb-4">
                <FaRegQuestionCircle className="text-lg" />
                <span>Expert Knowledge</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive answers from our research team</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faq.categories?.map((category, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-blue-600"></div>
                    {category.name}
                  </h3>
                  
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
              ))}
            </div>
          </section>
        )}

        {/* Why Choose Novatech */}
        {content?.whyChoose && (
          <section className="bg-slate-900 p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {content.whyChoose.animatedTitle || "The Novatech Advantage"}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Setting the standard for pharmaceutical excellence in testosterone research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.whyChoose.features?.map((feature, idx) => {
                const Icon = IconLibrary[feature.icon] || FaCheckCircle;
                return (
                  <div key={idx} className="bg-slate-800 p-6 border border-slate-700 hover:border-blue-600 transition-colors">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl mb-4`}>
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Categories & Featured Sections */}
        <CategoriesDivisionsSection />
        <FeaturedByCategory />

        {/* Back to Top */}
        <div className="flex justify-center pt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium flex items-center gap-3 hover:border-blue-600 transition-colors"
          >
            <FaChevronDown className="rotate-180" />
            Back to Top
          </button>
        </div>
      </div>
    </main>
  );
}

// Simple FAQ Item Component
const FAQItem = ({ item, index, isExpanded, onToggle }) => {
  return (
    <div className="border border-slate-200 bg-white hover:border-blue-300 transition-colors">
      <div 
        onClick={onToggle}
        className="p-6 flex items-start justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-start gap-4 flex-grow">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.question}
            </h3>
            
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className={`flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <FaChevronDown className="text-slate-400" />
        </div>
      </div>

      {/* Answer - Simple show/hide without animation */}
      {isExpanded && (
        <div className="border-t border-slate-100">
          <div className="p-6 bg-slate-50">
            <div className="pl-14">
              <p className="text-slate-700 leading-relaxed">
                {item.answer}
              </p>
              
              {item.warning && (
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200">
                  <p className="text-amber-800 text-sm flex items-center gap-2">
                    <FaShieldVirus className="text-amber-600" />
                    {item.warning}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple Loading Screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-20 h-20 border-4 border-slate-700 border-t-blue-600 mx-auto mb-6"></div>
      <p className="text-white text-lg font-medium">Loading scientific data...</p>
    </div>
  </div>
);