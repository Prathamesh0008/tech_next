"use client"

import { useEffect, useRef, useState } from "react";
import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../components/FeaturedByCategory";
import { notFound } from "next/navigation";
import { 
  FaArrowRight, 
  FaShieldAlt, 
  FaFlask, 
  FaGlobe, 
  FaChevronDown, 
  FaRegQuestionCircle, 
  FaAtom, 
  FaBolt,
  FaPills,
  FaSyringe,
  FaMicroscope,
  FaCapsules,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaIndustry,
  FaRocket,
  FaHeart,
  FaGavel,
  FaInfoCircle,
  FaCalendar,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaRibbon,
  FaBuilding
} from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { GiChemicalDrop } from "react-icons/gi";

// Icon mapping for dynamic rendering
const IconMap = {
  FaShieldAlt, FaFlask, FaGlobe, FaRegQuestionCircle, FaAtom, FaBolt,
  FaPills, FaSyringe, FaMicroscope, FaCapsules, FaMapMarkerAlt,
  FaCheckCircle, FaIndustry, FaRocket, FaHeart, FaGavel, FaInfoCircle,
  FaCalendar, FaChartLine, FaUsers, FaShoppingCart, FaRibbon, FaBuilding,
  GiChemicalDrop, IoIosRibbon, FaArrowRight, FaChevronDown
};

export default async function TestosteroneCountryPage({ params }) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    notFound();
  }

  // Destructure data for easier access
  const { hero, content, faq, regulation, meta, theme, metadata } = data;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] overflow-hidden">

      {/* Animated Background Particles - Dynamic based on theme */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-${i % 3 + 1} h-${i % 3 + 1} bg-gradient-to-br ${
              theme?.gradient?.hero?.includes('blue') ? 'from-blue-400 to-cyan-400' : 'from-purple-400 to-pink-400'
            } rounded-full animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1 + (i * 0.02)
            }}
          ></div>
        ))}
      </div>

      {/* HERO SECTION - Using data.hero structure */}
      <section className={`relative bg-gradient-to-br ${theme?.gradient?.hero || 'from-blue-900 via-gray-900 to-indigo-950'} text-white py-24 px-6 overflow-hidden`}>
        
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,119,182,0.2),transparent_50%)] animate-gradient-shift"></div>
        </div>

        {/* Floating Chemical Structures - Dynamic */}
        <div className="absolute top-10 right-10 opacity-10 animate-float-slow">
          <GiChemicalDrop className="text-8xl" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <FaAtom className="text-6xl" />
        </div>

        {/* Animated Border with dynamic colors */}
        <div className="absolute inset-0 border-2 border-transparent animate-border-rotate rounded-lg">
          <div className={`absolute inset-0 bg-gradient-to-r ${theme?.primary || 'from-blue-500 via-transparent to-purple-500'} rounded-lg`}></div>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          
          {/* Animated Breadcrumb */}
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="hover:text-white transition-colors cursor-pointer">{meta?.title?.brand || "Novatech Sciences"}</span>
            <FaArrowRight className="text-xs animate-pulse" />
            <span className="hover:text-white transition-colors cursor-pointer">Countries</span>
            <FaArrowRight className="text-xs animate-pulse" />
            <span className={`font-semibold text-white bg-gradient-to-r ${theme?.secondary || 'from-blue-500 to-cyan-400'} bg-clip-text text-transparent animate-gradient-flow`}>
              {data.name}
            </span>
          </div>

          {/* Animated Main Title - Using hero structure */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100 animate-gradient-x">
              {hero?.title?.prefix || "Testosterone in"}
            </span>
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x-reverse">
              {hero?.title?.highlight || data.name}
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="relative max-w-3xl mb-12">
            <p className="text-2xl text-blue-100 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {hero?.subtitle || data.heroSubtitle}
            </p>
          </div>

          {/* Animated Stats Cards - Dynamic from hero.stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {hero?.stats?.map((item, index) => {
              const IconComponent = IconMap[item.icon] || FaShieldAlt;
              return (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-500"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${item.color} rounded-xl animate-${item.animation || 'pulse-slow'}`}>
                        <IconComponent className="text-xl text-white" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-blue-100 text-sm group-hover:translate-x-2 transition-transform duration-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Highlight Card */}
          {content?.introduction?.highlightBox && (
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-500 group animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -inset-x-32 top-0 h-64 bg-gradient-to-r from-transparent via-white to-transparent animate-wave"></div>
                <div className="absolute -inset-x-32 top-20 h-64 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-wave" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl group-hover:rotate-180 transition-transform duration-700">
                      <FaRegQuestionCircle className="text-2xl text-white" />
                    </div>
                    <div className="absolute inset-0 border-4 border-blue-400 rounded-xl animate-ping opacity-20"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 animate-gradient-flow bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {content.introduction.highlightBox.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-blue-100 group-hover:text-white transition-colors duration-300">
                      {content.introduction.highlightBox.content}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <FaArrowRight className="text-2xl text-cyan-300 animate-bounce-horizontal" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DNA Helix Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-16 mb-2">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 animate-dna-left"></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 animate-dna-right"></div>
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 top-4 animate-dna-rung"
                  style={{ 
                    top: `${i * 12 + 4}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-cyan-300 animate-pulse">Explore More</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-20 px-6 z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400/20 via-cyan-400/10 to-transparent animate-pulse-glow"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">

          {/* DYNAMIC CONTENT SECTIONS */}
          {content?.sections?.map((section, sectionIndex) => {
            const IconComponent = IconMap[section.icon] || FaFlask;
            
            return (
              <div key={section.id || sectionIndex} id={section.id} className="scroll-mt-20">
                
                {/* Section with Tabs */}
                {section.tabs ? (
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-10 border border-blue-100 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r ${section.gradient} rounded-xl animate-pulse-slow`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                          {section.animatedTitle || section.title}
                        </h2>
                        <p className="text-gray-600 mt-2">{section.content?.[0]}</p>
                      </div>
                    </div>

                    {/* Tabbed Interface */}
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      {section.tabs.map((tab, tabIndex) => {
                        const TabIcon = IconMap[tab.icon] || FaPills;
                        return (
                          <div 
                            key={tabIndex}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group"
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                <TabIcon className="text-xl text-white" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900">{tab.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{tab.content}</p>
                            <ul className="space-y-2">
                              {tab.features?.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                  <FaCheckCircle className="text-green-500 text-sm" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    
                    {section.note && (
                      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-blue-800">{section.note}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular Section */
                  <div className={`bg-gradient-to-br ${theme?.gradient?.section || 'from-white to-blue-50'} rounded-2xl shadow-xl p-10 border border-blue-100 hover:shadow-2xl transition-all duration-500 group`}>
                    
                    {/* Section Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-r ${section.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="text-3xl text-white" />
                        <div className="absolute inset-0 border-4 border-white/30 rounded-2xl animate-ping opacity-0 group-hover:opacity-30"></div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-gray-900">
                            {section.animatedTitle || section.title}
                          </h2>
                          {section.compliance?.badge && (
                            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full animate-pulse">
                              {section.compliance.badge}
                            </span>
                          )}
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                          {section.content?.map((paragraph, i) => (
                            <p 
                              key={i} 
                              className={`text-gray-700 animate-slide-up`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Section Stats */}
                    {section.stats && (
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {section.stats.map((stat, i) => {
                            const StatIcon = IconMap[stat.icon] || FaChartLine;
                            return (
                              <div 
                                key={i}
                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md group/stat"
                              >
                                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg group-hover/stat:scale-110 transition-transform">
                                  <StatIcon className="text-xl text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                  <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quality Metrics */}
                    {section.qualityMetrics && (
                      <div className="mt-8 flex flex-wrap gap-6 justify-center">
                        {section.qualityMetrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-3xl font-bold ${metric.color} animate-pulse-slow`}>{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Certifications */}
                    {section.certifications && (
                      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {section.certifications.map((cert, i) => (
                          <div 
                            key={i}
                            className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 text-center group/cert hover:border-blue-300 transition-all"
                          >
                            <div className="font-bold text-gray-900 group-hover/cert:text-blue-600">{cert.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{cert.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Timeline */}
                    {section.timeline && (
                      <div className="mt-8 relative">
                        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
                        <div className="relative flex justify-between">
                          {section.timeline.map((item, i) => (
                            <div key={i} className="text-center group/timeline">
                              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 group-hover/timeline:scale-150 transition-transform animate-pulse"></div>
                              <div className="font-bold text-gray-900">{item.year}</div>
                              <div className="text-sm text-gray-600">{item.event}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Distinction */}
                    {section.distinction && (
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">Responsible Use</h4>
                          <ul className="space-y-2">
                            {section.distinction.responsible?.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-green-700">
                                <FaCheckCircle className="text-green-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                          <h4 className="font-bold text-red-800 mb-3">Illicit Use</h4>
                          <ul className="space-y-2">
                            {section.distinction.illicit?.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-red-700">
                                <FaShieldAlt className="text-red-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    {section.quote && (
                      <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                        <p className="text-lg italic text-gray-700">"{section.quote.text}"</p>
                        <p className="text-sm text-gray-600 mt-2">— {section.quote.author}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* WHY CHOOSE SECTION */}
          {content?.whyChoose && (
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  {content.whyChoose.animatedTitle || content.whyChoose.title}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {content.whyChoose.features.map((feature, index) => {
                    const FeatureIcon = IconMap[feature.icon] || FaCheckCircle;
                    return (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 group/feature animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-xl mb-4 group-hover/feature:scale-110 transition-transform`}>
                          <FeatureIcon className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-blue-100 text-sm">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* REGULATION SECTION */}
          {regulation && (
            <div id="regulations" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl shadow-xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl animate-pulse-slow">
                      <FaShieldAlt className="text-3xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{regulation.animatedTitle || regulation.title}</h2>
                      <p className="text-emerald-200 mt-2">{regulation.summary}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Regulatory Bodies</h3>
                      <div className="space-y-4">
                        {regulation.bodies?.map((body, i) => {
                          const BodyIcon = IconMap[body.icon] || FaBuilding;
                          return (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur rounded-xl">
                              <BodyIcon className="text-2xl text-emerald-300" />
                              <div>
                                <div className="font-bold">{body.name}</div>
                                <div className="text-sm text-emerald-200">{body.fullName}</div>
                                <div className="text-xs text-emerald-300 mt-1">{body.role}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Regulatory Pathways</h3>
                      <div className="space-y-4">
                        {regulation.pathways?.map((pathway, i) => (
                          <div key={i} className="p-4 bg-white/10 backdrop-blur rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold">{pathway.type}</span>
                              <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs">{pathway.status}</span>
                            </div>
                            <p className="text-sm text-emerald-200">{pathway.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {regulation.compliance?.verified && (
                    <div className="mt-8 flex items-center justify-center gap-3 p-4 bg-emerald-800/50 rounded-xl border border-emerald-500">
                      <FaCheckCircle className="text-2xl text-emerald-400 animate-pulse" />
                      <span className="font-medium">Compliance verified for {data.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ENHANCED FAQ SECTION */}
          {faq && (
            <div id="faq" className="scroll-mt-20">
              <div className={`bg-gradient-to-br ${faq.gradient || 'from-blue-50 to-indigo-50'} rounded-2xl shadow-xl p-10 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
                
                <div className="relative z-10">
                  {/* FAQ Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl animate-float">
                        <FaRegQuestionCircle className="text-3xl text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        {faq.animatedTitle || faq.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">{faq.subtitle}</p>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                  </div>

                  {/* FAQ Categories */}
                  <div className="space-y-12">
                    {faq.categories?.map((category, categoryIndex) => {
                      const CategoryIcon = IconMap[category.icon] || FaInfoCircle;
                      
                      return (
                        <div key={categoryIndex} className="space-y-6">
                          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                            <CategoryIcon className="text-2xl text-blue-600" />
                            <h3 className="text-2xl font-semibold text-gray-900">{category.name}</h3>
                          </div>
                          
                          <div className="grid gap-6">
                            {category.questions?.map((item, index) => (
                              <FAQItem 
                                key={item.id || index}
                                question={item.question}
                                answer={item.answer}
                                tags={item.tags}
                                warning={item.warning}
                                comparison={item.comparison}
                                index={index}
                                countryName={data.name}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* FAQ Footer */}
                  <div className="mt-12 text-center">
                    <p className="text-gray-600">
                      {faq.contactPrompt || "Can't find your question?"}{' '}
                      <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline inline-flex items-center gap-2 group">
                        Contact our specialists
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                      Last updated: {new Date(faq.lastUpdated || metadata?.updated).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CATEGORIES SECTION */}
          <div id="categories" className="scroll-mt-20">
            <CategoriesDivisionsSection />
          </div>

          {/* FEATURED SECTION */}
          <div id="featured" className="scroll-mt-20">
            <FeaturedByCategory />
          </div>

          {/* CONCLUSION SECTION */}
          {content?.conclusion && (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-12 text-center relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  {content.conclusion.animatedTitle || content.conclusion.title}
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {content.conclusion.content}
                </p>
                
                {content.conclusion.cta && (
                  <div className="mt-10">
                    <a 
                      href={content.conclusion.cta.link}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-500 group"
                    >
                      <span>{content.conclusion.cta.text}</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* BACK TO TOP */}
          <div className="flex justify-center pt-10">
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-2xl transition-all duration-500 group"
            >
              <span>Back to Top</span>
              <FaChevronDown className="rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-flow {
          0%, 100% { background-size: 200% 200%; background-position: 0% 50%; }
          50% { background-size: 200% 200%; background-position: 100% 50%; }
        }
        @keyframes wave {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }
        @keyframes dna-left {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes dna-right {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
        }
        @keyframes dna-rung {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(5px); opacity: 0.5; }
        }
        @keyframes border-rotate {
          0% { border-image: linear-gradient(0deg, #3b82f6, #06b6d4) 1; }
          100% { border-image: linear-gradient(360deg, #3b82f6, #06b6d4) 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #60a5fa; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 20s ease infinite; }
        .animate-gradient-flow { animation: gradient-flow 3s ease infinite; }
        .animate-wave { animation: wave 10s linear infinite; }
        .animate-dna-left { animation: dna-left 2s ease-in-out infinite; }
        .animate-dna-right { animation: dna-right 2s ease-in-out infinite 0.5s; }
        .animate-dna-rung { animation: dna-rung 2s ease-in-out infinite; }
        .animate-border-rotate { animation: border-rotate 3s linear infinite; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-slide-right { animation: slide-right 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-bounce-horizontal { animation: bounce-horizontal 1s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite; 
        }
        .animate-gradient-x-reverse { 
          background-size: 200% auto;
          animation: gradient-x-reverse 3s linear infinite; 
        }
      `}</style>
    </main>
  );
}

// FAQ Item Component
const FAQItem = ({ question, answer, tags, warning, comparison, index, countryName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-grow">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              {index + 1}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {question}
              </h3>
              
              {/* Tags */}
              {tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {countryName}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <FaChevronDown 
              className={`text-blue-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
        
        {/* Answer - Expandable */}
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pl-14">
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {answer}
            </div>
            
            {/* Warning */}
            {warning && (
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 text-sm flex items-center gap-2">
                  <FaShieldAlt className="text-amber-600" />
                  {warning}
                </p>
              </div>
            )}
            
            {/* Comparison Table */}
            {comparison && (
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Tablets</h4>
                  <ul className="space-y-1">
                    {comparison.tablets?.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">Injectables</h4>
                  <ul className="space-y-1">
                    {comparison.injectables?.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};