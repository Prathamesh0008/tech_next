"use client";

import { useState, useRef, useEffect } from "react";
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
  FaCircle, FaBolt, FaShieldVirus, FaRegFileAlt, FaMapMarkerAlt,
  FaChevronUp, FaChevronLeft, FaChevronRight, FaPlay, FaPause,
  FaArrowLeft, FaArrowUp, FaExternalLinkAlt, FaEnvelope, FaPhone, FaLinkedin, FaTwitter
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

const renderAnimatedTitle = (title) => {
  if (!title) return '';
  
  if (typeof title === 'object' && title.primary !== undefined) {
    return (
      <>
        {title.primary} <span className="text-blue-400 relative inline-block">
          {title.highlight}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400/30 rounded-full"></span>
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

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

// Table of Contents Component
const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sections?.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers?.forEach((observer) => observer?.disconnect());
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!sections?.length) return null;

  return (
    <div className="sticky top-24 hidden xl:block w-64 ml-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
          On this page
        </h4>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Language Switcher Component
const LanguageSwitcher = ({ currentLang, onLangChange }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'it', name: 'Italiano' },
    { code: 'el', name: 'Ελληνικά' },
    { code: 'sk', name: 'Slovenčina' },
    { code: 'hu', name: 'Magyar' },
    { code: 'pl', name: 'Polski' }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
      >
        <FaGlobe className="text-sm" />
        <span className="text-sm font-medium">{currentLang}</span>
        <FaChevronDown className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLangChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                currentLang === lang.code ? 'text-blue-600 font-medium bg-blue-50' : 'text-slate-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Share Button Component
const ShareButton = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
      >
                        <FaExternalLinkAlt className="text-sm" />
        <span className="text-sm font-medium">Share</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <FaTwitter className="text-[#1DA1F2]" />
            Twitter
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <FaLinkedin className="text-[#0A66C2]" />
            LinkedIn
          </a>
          <a
            href={shareLinks.email}
            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <FaEnvelope className="text-slate-600" />
            Email
          </a>
        </div>
      )}
    </div>
  );
};

export default function TestosteroneCountryClient({ country, countrySlug }) {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRefs = useRef({});

  const data = country || {};
  const hero = data.hero || {};
  const content = data.content || {};
  const faq = data.faq || {};
  const regulation = data.regulation || {};

  // Handle header visibility on scroll
  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  // Get content based on selected language
  const getLocalizedContent = () => {
    if (currentLanguage !== 'en' && data[currentLanguage]) {
      return data[currentLanguage].content || content;
    }
    return content;
  };

  const localizedContent = getLocalizedContent();
  const localizedHero = currentLanguage !== 'en' && data[currentLanguage]?.hero ? data[currentLanguage].hero : hero;

  return (
    <main className="bg-white relative">
      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NS</span>
                </div>
                <span className="text-slate-900 font-medium text-sm hidden sm:block">
                  Novatech Sciences
                </span>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-3">
                <LanguageSwitcher 
                  currentLang={currentLanguage} 
                  onLangChange={setCurrentLanguage} 
                />
                <ShareButton title={hero.title?.highlight || `Testosterone in ${data.name}`} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - Enhanced with parallax effect */}
      <section className="relative bg-gradient-to-br from-[#0B1A33] via-[#0E1F3D] to-[#122B4A] text-white overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              {/* Breadcrumb with hover effect */}
              <nav className="flex items-center gap-2 text-sm text-blue-200/80 mb-8 group">
                <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Home</span>
                </a>
                <span>•</span>
                <a href="/countries" className="hover:text-white transition-colors">Countries</a>
                <span>•</span>
                <span className="text-white font-medium relative">
                  {data.name || countrySlug}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                </span>
              </nav>
              
              {/* Hero Title with animation */}
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in-up">
                {localizedHero.title ? (
                  typeof localizedHero.title === 'object' ? (
                    <>
                      <span className="block text-blue-200/90 mb-2">{localizedHero.title.prefix}</span>
                      <span className="block text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        {localizedHero.title.highlight}
                      </span>
                      <span className="block text-blue-200/90 mt-2">{localizedHero.title.suffix}</span>
                    </>
                  ) : (
                    localizedHero.title
                  )
                ) : (
                  `Testosterone in ${data.name || countrySlug}`
                )}
              </h1>
              
              {/* Hero Subtitle with animation */}
              <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                {localizedHero.subtitle}
              </p>
              
              {/* Animated Subtitle with typing effect */}
              {localizedHero.animatedSubtitle && (
                <div className="flex items-center gap-3 text-lg text-blue-200/80 animate-fade-in-up animation-delay-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="font-mono">
                    {localizedHero.animatedSubtitle}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up animation-delay-600">
                <button className="group px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                  Explore Resources
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                  <FaPlay className="text-sm" />
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right Column - Stats/Visual */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <FaFlask className="text-2xl text-blue-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">WHO-GMP</div>
                      <div className="text-sm text-blue-200/80">Certified Manufacturing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <FaShieldVirus className="text-2xl text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">EU Compliant</div>
                      <div className="text-sm text-blue-200/80">Regulatory Excellence</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <FaMicroscope className="text-2xl text-purple-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">99.8%</div>
                      <div className="text-sm text-blue-200/80">Average Purity Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT with Table of Contents */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-32 lg:space-y-40">
              
              {/* INTRODUCTION */}
              {localizedContent?.introduction && (
                <section id="introduction" className="relative scroll-mt-24">
                  <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60 group-hover:scale-y-150 transition-transform" />
                  
                  <div className="pl-4 lg:pl-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
                        Overview
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                      {renderContent(localizedContent.introduction.title)}
                    </h2>
                    
                    <div className="prose prose-lg prose-slate max-w-none">
                      {localizedContent.introduction.paragraphs?.map((para, idx) => (
                        <p key={idx} className="text-slate-600 leading-relaxed mb-6 text-lg">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* DYNAMIC SECTIONS */}
              {Array.isArray(localizedContent?.sections) &&
                localizedContent.sections.map((section, idx) => {
                  if (section.id === "formulations") return null;

                  return (
                    <section 
                      key={idx} 
                      id={section.id}
                      className="relative scroll-mt-24 group"
                    >
                      <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-slate-300 to-slate-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500" />
                      
                      <div className="pl-4 lg:pl-8">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                          {section.title}
                        </h2>
                        
                        {Array.isArray(section.content) && (
                          <div className="prose prose-lg prose-slate max-w-none">
                            {section.content.map((para, i) => {
                              // Check if this is a bullet point
                              const isBulletPoint = para.startsWith('•') || para.startsWith('-') || para.startsWith('✓') || para.match(/^[A-Za-z]+:/);
                              
                              if (isBulletPoint) {
                                return (
                                  <div key={i} className="flex items-start gap-3 mb-3">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
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

              {/* FORMULATIONS SECTION - Enhanced */}
              {localizedContent?.sections?.find(s => s.id === "formulations") && (
                <section id="formulations" className="scroll-mt-24">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
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
                    {localizedContent.sections
                      .find(s => s.id === "formulations")
                      ?.tabs?.map((tab, idx) => {
                        const Icon = IconLibrary[tab?.icon] || FaPills;
                        return (
                          <div 
                            key={idx} 
                            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                          >
                            <div className="flex items-start gap-5 mb-6">
                              <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                <Icon className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                              </div>
                              <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                  {tab?.name}
                                </h3>
                                {tab?.administration && (
                                  <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                    {tab.administration}
                                  </span>
                                )}
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
                          </div>
                        );
                      })}
                  </div>

                  {/* Formulations note */}
                  {localizedContent.sections.find(s => s.id === "formulations")?.note && (
                    <div className="mt-10 text-center">
                      <div className="inline-flex items-center gap-3 text-sm text-slate-600 bg-gradient-to-r from-slate-50 to-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
                        <MdVerified className="text-blue-600 text-lg" />
                        {localizedContent.sections.find(s => s.id === "formulations")?.note}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* REGULATION SECTION - Enhanced */}
              {regulation?.summary && (
                <section id="regulation" className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E1F3D] rounded-3xl overflow-hidden scroll-mt-24">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
                  
                  <div className="relative p-12 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="max-w-2xl">
                        <span className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4 inline-block bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                          Regulatory Framework
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                          {renderContent(regulation.animatedTitle) || 'Regulatory Guidelines'}
                        </h2>
                        <p className="text-xl text-blue-100/90 mb-8 leading-relaxed">
                          {renderContent(regulation.summary)}
                        </p>

                        {Array.isArray(regulation?.bodies) && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {regulation.bodies.map((body, idx) => {
                              const Icon = IconLibrary[body?.icon] || FaBuilding;
                              return (
                                <div 
                                  key={idx} 
                                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
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
                      
                      {/* Right column - Compliance badges */}
                      <div className="hidden lg:block">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <FaShieldAlt className="text-blue-300" />
                            Compliance Certifications
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-blue-100">EU GMP Certified</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-blue-100">ISO 9001:2024</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-blue-100">WHO-GMP Compliant</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-blue-100">FDA Registered Facility</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* WHY CHOOSE US - Enhanced */}
              {localizedContent?.whyChoose && (
                <section id="why-choose" className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 lg:p-16 scroll-mt-24 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl"></div>
                  
                  <div className="relative max-w-4xl mx-auto text-center">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
                      Why Us
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                      {localizedContent.whyChoose.title}
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                      {localizedContent.whyChoose.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {localizedContent.whyChoose.features?.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mx-auto">
                            <FaStar className="text-blue-600 text-xl" />
                          </div>
                          <p className="text-slate-700 font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* CONCLUSION */}
              {localizedContent?.conclusion && (
                <section id="conclusion" className="text-center max-w-4xl mx-auto scroll-mt-24">
                  <div className="relative">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full blur-2xl"></div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
                      Final Thoughts
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                      {localizedContent.conclusion.title}
                    </h2>
                    <div className="relative">
                      <FaQuoteRight className="absolute -top-6 -left-6 text-4xl text-slate-200" />
                      <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed italic">
                        {localizedContent.conclusion.content}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* FAQ SECTION - Enhanced */}
              {faq?.categories && faq.categories.length > 0 && (
                <section id="faq" className="scroll-mt-24">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block bg-blue-50 px-4 py-1.5 rounded-full">
                      Got Questions?
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-600">
                      Everything you need to know about testosterone therapy in {data.name || countrySlug}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {faq.categories.map((category, catIdx) => (
                      <div 
                        key={catIdx} 
                        className="bg-slate-50 rounded-3xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="text-2xl font-semibold text-slate-900 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
                          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
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

          {/* Table of Contents - Right Sidebar */}
          <TableOfContents sections={localizedContent?.sections?.filter(s => s.id !== "formulations")} />
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Footer */}
      <footer className="bg-[#0B1A33] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">NS</span>
                </div>
                <span className="text-xl font-light">Novatech Sciences</span>
              </div>
              <p className="text-blue-200/80 leading-relaxed max-w-md">
                Advancing testosterone research and pharmaceutical excellence through science, quality, and responsibility.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-blue-200/80">
                <li><a href="#" className="hover:text-white transition-colors">Research Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clinical Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Regulatory Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-blue-200/80">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaEnvelope /> Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaPhone /> Phone</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaLinkedin /> LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaTwitter /> Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-blue-200/60 text-sm">
            <p>© 2024 Novatech Sciences. All rights reserved. For research and professional use only.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FAQItem = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-hidden group">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <h4 className="text-lg font-medium text-slate-900 pr-8 group-hover:text-blue-600 transition-colors">
          {item?.question}
        </h4>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
          isExpanded ? 'rotate-180 bg-blue-100' : 'group-hover:bg-slate-200'
        }`}>
          <FaChevronDown className={`text-sm transition-colors ${
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