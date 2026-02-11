"use client"

import { useState, useEffect, useRef } from "react";
import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../../components/FeaturedByCategory";
import { notFound } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    <main className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Professional Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-50/20 via-transparent to-transparent"></div>
      </div>

      {/* Hero Section - Professional & Clean */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Trust Badge */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
              >
                <MdVerified className="text-blue-400" />
                <span className="text-sm font-medium text-blue-200">MHRA Compliant • GMP Certified</span>
              </motion.div>

              {/* Dynamic Title */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
                <span className="block text-white/90 mb-2">Testosterone in</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h1>

              {/* Professional Description */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {hero?.subtitle || data.heroSubtitle}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {hero?.stats?.map((stat, idx) => {
                  const Icon = IconLibrary[stat.icon] || FaShieldAlt;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white flex items-center gap-3 shadow-lg shadow-blue-500/25"
                >
                  <MdScience className="text-xl" />
                  Explore Research
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-xl font-semibold text-white flex items-center gap-3 border border-white/20"
                >
                  <FaFileAlt className="text-xl" />
                  View Documentation
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Professional Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
                
                {/* Quality Badges */}
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <FaCrown className="text-2xl text-yellow-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Pharmaceutical Grade</h4>
                    <p className="text-xs text-slate-400 mt-1">GMP Certified</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <FaAward className="text-2xl text-blue-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Research Driven</h4>
                    <p className="text-xs text-slate-400 mt-1">15+ Years</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <FaClipboardCheck className="text-2xl text-emerald-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">UK Compliant</h4>
                    <p className="text-xs text-slate-400 mt-1">MHRA Standards</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <FaLayerGroup className="text-2xl text-purple-400 mb-2" />
                    <h4 className="text-sm font-semibold text-white">Dual Formulations</h4>
                    <p className="text-xs text-slate-400 mt-1">Tablets & Injectables</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sophisticated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
            <FaChevronDown className="text-slate-400" />
          </div>
        </motion.div>
      </motion.section>

      {/* Floating Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="sticky top-6 z-50 max-w-5xl mx-auto px-6"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-2">
          <div className="flex items-center justify-center gap-2">
            {['Overview', 'Research', 'Formulations', 'Regulations', 'FAQ'].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Overview Section */}
        <motion.section 
          id="overview"
          ref={el => sectionRefs.current['overview'] = el}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="scroll-mt-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Content Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
                <FaCircle className="text-[8px]" />
                <span>Scientific Overview</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {content?.introduction?.title || "Understanding Testosterone in the United Kingdom"}
              </h2>
              
              <div className="prose prose-lg prose-slate">
                {content?.introduction?.paragraphs?.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="text-slate-700 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Key Insights Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Insights</h3>
              <div className="space-y-6">
                {[
                  "Testosterone decline typically begins in early 30s",
                  "Lifestyle factors can accelerate hormonal changes",
                  "UK maintains strict regulatory oversight",
                  "Pharmaceutical-grade manufacturing ensures quality"
                ].map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-blue-400 text-sm" />
                    </div>
                    <p className="text-slate-300">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Research & Formulations Section */}
        <motion.section 
          id="research"
          ref={el => sectionRefs.current['research'] = el}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="scroll-mt-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium mb-4">
              <MdScience className="text-lg" />
              <span>Research & Development</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Scientific Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Rigorous research standards combined with pharmaceutical-grade manufacturing</p>
          </div>

          {/* Formulation Tabs */}
          <div className="grid md:grid-cols-2 gap-8">
            {content?.sections?.find(s => s.id === "formulations")?.tabs?.map((tab, idx) => {
              const Icon = IconLibrary[tab.icon] || FaPills;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
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
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Regulation Section */}
        {regulation && (
          <motion.section 
            id="regulations"
            ref={el => sectionRefs.current['regulations'] = el}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="scroll-mt-32"
          >
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl">
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
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-emerald-400">
                              <Icon className="text-xl" />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{body.name}</div>
                              <div className="text-sm text-slate-400 mt-1">{body.fullName}</div>
                              <div className="text-xs text-emerald-300/80 mt-1">{body.role}</div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Compliance Standards */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">Compliance Standards</h3>
                    <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                      <div className="grid grid-cols-2 gap-4">
                        {regulation.compliance?.required?.map((standard, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <FaCheckCircle className="text-emerald-400 text-sm" />
                            <span className="text-sm">{standard}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-emerald-300 text-sm font-medium">Active Compliance • Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Professional FAQ Section */}
        {faq && (
          <motion.section 
            id="faq"
            ref={el => sectionRefs.current['faq'] = el}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="scroll-mt-32"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium mb-4">
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
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    {category.name}
                  </h3>
                  
                  {category.questions?.map((item, idx) => (
                    <ProfessionalFAQItem 
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
          </motion.section>
        )}

        {/* Why Choose Novatech */}
        {content?.whyChoose && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 text-center mb-12">
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
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white text-xl mb-4`}>
                        <Icon />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* Categories & Featured Sections */}
        <CategoriesDivisionsSection />
        <FeaturedByCategory />

        {/* Back to Top */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center pt-10"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white rounded-xl shadow-lg text-slate-700 font-medium flex items-center gap-3 border border-slate-200 hover:border-blue-300 transition-all duration-300"
          >
            <FaChevronDown className="rotate-180" />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}

// Professional FAQ Item Component
const ProfessionalFAQItem = ({ item, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div 
        onClick={onToggle}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 cursor-pointer transition-all duration-300 overflow-hidden"
      >
        {/* Question */}
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-grow">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                {item.question}
              </h3>
              
              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-slate-400" />
            </motion.div>
          </div>
        </div>

        {/* Answer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-slate-100"
            >
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="pl-14">
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                  
                  {item.warning && (
                    <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <p className="text-amber-800 text-sm flex items-center gap-2">
                        <FaShieldVirus className="text-amber-600" />
                        {item.warning}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Loading Screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
    <div className="text-center">
      <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
      <p className="text-white text-lg font-medium">Loading scientific data...</p>
    </div>
  </div>
);