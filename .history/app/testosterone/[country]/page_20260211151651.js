import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../../components/FeaturedByCategory";
import { notFound } from "next/navigation";
import { FaArrowRight, FaShieldAlt, FaFlask, FaGlobe, FaChevronDown, FaRegQuestionCircle, FaAtom, FaWaveSquare, FaBolt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { GiChemicalDrop } from "react-icons/gi";

export default async function TestosteroneCountryPage({ params }) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] overflow-hidden">

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* HERO SECTION - Enhanced with advanced animations */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-950 text-white py-24 px-6 overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,119,182,0.2),transparent_50%)] animate-gradient-shift"></div>
        </div>

        {/* Floating Chemical Structures */}
        <div className="absolute top-10 right-10 opacity-10 animate-float-slow">
          <GiChemicalDrop className="text-8xl" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <FaAtom className="text-6xl" />
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-transparent animate-border-rotate rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-purple-500 rounded-lg"></div>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Animated Breadcrumb */}
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="hover:text-white transition-colors cursor-pointer">Novatech Sciences</span>
            <FaArrowRight className="text-xs animate-pulse" />
            <span className="hover:text-white transition-colors cursor-pointer">Countries</span>
            <FaArrowRight className="text-xs animate-pulse" />
            <span className="font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-flow">
              {data.name}
            </span>
          </div>

          {/* Animated Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100 animate-gradient-x">
              Testosterone in
            </span>
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x-reverse">
              {data.name}
            </span>
          </h1>

          {/* Typewriter Effect Subtitle */}
          <div className="relative max-w-3xl mb-12">
            <p className="text-2xl text-blue-100 leading-relaxed animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-blue-400">
              {data.heroSubtitle}
            </p>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FaShieldAlt, title: "Pharmaceutical Standards", desc: "Strict quality control", color: "from-blue-600 to-cyan-500" },
              { icon: FaFlask, title: "Research-Driven", desc: "Evidence-based formulations", color: "from-purple-600 to-pink-500" },
              { icon: FaGlobe, title: `${data.name} Specific`, desc: "Local regulations", color: "from-green-600 to-emerald-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${item.color} rounded-xl animate-pulse-slow`}>
                      <item.icon className="text-xl text-white" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-blue-100 text-sm group-hover:translate-x-2 transition-transform duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Highlight Card with Wave Effect */}
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-500 group animate-slide-up" style={{ animationDelay: '1s' }}>
            {/* Wave Animation */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -inset-x-32 top-0 h-64 bg-gradient-to-r from-transparent via-white to-transparent animate-wave"></div>
              <div className="absolute -inset-x-32 top-20 h-64 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-wave" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative p-8">
              <div className="flex items-start gap-6">
                {/* Animated Icon */}
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl group-hover:rotate-180 transition-transform duration-700">
                    <FaRegQuestionCircle className="text-2xl text-white" />
                  </div>
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 border-4 border-blue-400 rounded-xl animate-ping opacity-20"></div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 animate-gradient-flow bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Understanding Testosterone in {data.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-blue-100 group-hover:text-white transition-colors duration-300">
                    Premium research-driven testosterone formulations developed under
                    strict pharmaceutical standards for informed UK audiences.
                  </p>
                </div>

                {/* Animated Arrow */}
                <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <FaArrowRight className="text-2xl text-cyan-300 animate-bounce-horizontal" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DNA Helix Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-16 mb-2">
              {/* DNA Helix Animation */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 animate-dna-left"></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 animate-dna-right"></div>
              {/* Connecting Rungs */}
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
        {/* Animated Connection Lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400/20 via-cyan-400/10 to-transparent animate-pulse-glow"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">

          {/* FULL CONTENT BLOCK - Animated */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sticky TOC with Animation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 backdrop-blur-lg bg-white/80 rounded-2xl shadow-2xl p-6 border border-white/50 hover:shadow-3xl transition-all duration-500 group">
                {/* Animated Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                    Navigation
                  </h3>
                </div>

                <nav className="space-y-4">
                  {data.faq && (
                    <a href="#faq" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 group-hover/item:text-blue-700 transition-colors">FAQs</span>
                      <FaArrowRight className="ml-auto text-blue-400 opacity-0 group-hover/item:opacity-100 translate-x-2 group-hover/item:translate-x-0 transition-all duration-300" />
                    </a>
                  )}
                  {data.regulationInfo && (
                    <a href="#regulations" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 group-hover/item:text-blue-700 transition-colors">Regulations</span>
                      <FaArrowRight className="ml-auto text-blue-400 opacity-0 group-hover/item:opacity-100 translate-x-2 group-hover/item:translate-x-0 transition-all duration-300" />
                    </a>
                  )}
                </nav>

                {/* Animated Country Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center gap-3 group/badge">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold animate-gradient-flow">
                        {data.name.charAt(0)}
                      </div>
                      {/* Rotating Ring */}
                      <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-cyan-400 rounded-full animate-spin-slow"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{data.name}</p>
                      <p className="text-xs text-gray-500 animate-pulse">Country Guide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Content */}
            <div className="lg:col-span-3">
              <div className="relative group">
                {/* Floating Particles around content */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative bg-white rounded-2xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
                  {/* Animated Header */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full animate-gradient-flow"></div>
                    <h2 className="text-3xl font-bold text-gray-900 animate-slide-right">
                      Comprehensive Guide
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <div className="whitespace-pre-line space-y-8">
                      {data.fullContent.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p 
                            key={index} 
                            className={`${index === 0 ? 'text-2xl font-light text-gray-800 animate-fade-in' : 'text-lg animate-slide-up'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated Stats */}
                  <div className="mt-12 pt-10 border-t border-gray-100">
                    <div className="flex flex-wrap gap-8 justify-center">
                      {[
                        { value: "100%", label: "Research-Backed", color: "text-blue-600" },
                        { value: "24/7", label: "Updated", color: "text-cyan-600" },
                        { value: "✓", label: "Verified", color: "text-emerald-600" }
                      ].map((stat, index) => (
                        <div 
                          key={index}
                          className="text-center group/stat animate-slide-up"
                          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                          <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover/stat:scale-125 transition-transform duration-300`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-500 group-hover/stat:text-gray-700 transition-colors">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add similar animated enhancements for other sections... */}

        </div>
      </section>

      {/* Add to tailwind.config.js for animations */}
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
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
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

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 20s ease infinite; }
        .animate-gradient-flow { animation: gradient-flow 3s ease infinite; }
        .animate-typewriter { 
          animation: typewriter 3s steps(40, end) 1s 1 normal both,
                     blink-caret 0.75s step-end infinite;
        }
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