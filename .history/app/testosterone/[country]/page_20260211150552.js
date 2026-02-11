import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../../components/FeaturedByCategory";
import { notFound } from "next/navigation";
import { FaArrowRight, FaShieldAlt, FaFlask, FaGlobe, FaChevronDown, FaRegQuestionCircle } from "react-icons/fa";

export default async function TestosteroneCountryPage({ params }) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">

      {/* HERO SECTION - Enhanced with gradient overlay and floating elements */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white py-24 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <span>Novatech Sciences</span>
            <FaArrowRight className="text-xs" />
            <span>Countries</span>
            <FaArrowRight className="text-xs" />
            <span className="font-semibold text-white">{data.name}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Testosterone in {data.name}
          </h1>

          <p className="text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            {data.heroSubtitle}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/30 rounded-lg">
                  <FaShieldAlt className="text-xl text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold">Pharmaceutical Standards</h3>
              </div>
              <p className="text-blue-100 text-sm">Strict quality control and testing protocols</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/30 rounded-lg">
                  <FaFlask className="text-xl text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold">Research-Driven</h3>
              </div>
              <p className="text-blue-100 text-sm">Evidence-based formulations developed by experts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/30 rounded-lg">
                  <FaGlobe className="text-xl text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold">{data.name} Specific</h3>
              </div>
              <p className="text-blue-100 text-sm">Tailored information for local regulations</p>
            </div>
          </div>

          {/* Highlight Card - Enhanced */}
          <div className="bg-gradient-to-r from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-blue-400 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500 rounded-xl">
                <FaRegQuestionCircle className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Understanding Testosterone in {data.name}</h3>
                <p className="text-lg leading-relaxed text-blue-100">
                  Premium research-driven testosterone formulations developed under
                  strict pharmaceutical standards for informed UK audiences. Our 
                  comprehensive guide covers everything from regulations to best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm text-blue-300 mb-2">Scroll to explore</span>
            <FaChevronDown className="text-xl text-white" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* FULL CONTENT BLOCK - Enhanced with sticky TOC */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">On this page</h3>
                <nav className="space-y-3">
                  {data.faq && (
                    <a href="#faq" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>FAQs</span>
                    </a>
                  )}
                  {data.regulationInfo && (
                    <a href="#regulations" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Regulations</span>
                    </a>
                  )}
                  <a href="#categories" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Categories</span>
                  </a>
                  <a href="#featured" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Featured Products</span>
                  </a>
                </nav>
                
                {/* Country Flag/Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                      {data.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{data.name}</p>
                      <p className="text-xs text-gray-500">Country Guide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="whitespace-pre-line space-y-6">
                    {data.fullContent.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className={`${index === 0 ? 'text-2xl font-light text-gray-800' : 'text-lg'}`}>
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                </div>
                
                {/* Content Stats */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-gray-500">Research-Backed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-500">Updated Information</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">✓</div>
                      <div className="text-sm text-gray-500">Verified Sources</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* REGULATION SECTION */}
          {data.regulationInfo && (
            <div id="regulations" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-10 border border-blue-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl">
                    <FaShieldAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Testosterone Regulation in {data.name}
                    </h2>
                    <p className="text-gray-600">Legal framework and compliance requirements</p>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-xl p-6 border border-blue-100">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {data.regulationInfo}
                  </p>
                </div>
                
                {/* Compliance Badge */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 bg-green-50 text-green-800 px-6 py-3 rounded-full border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Compliance information verified for {data.name}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CATEGORIES SECTION */}
          <div id="categories" className="scroll-mt-20">
            <CategoriesDivisionsSection />
          </div>

          {/* FAQ SECTION - Enhanced with expandable cards */}
          {data.faq && (
            <div id="faq" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-2xl shadow-xl p-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                      <FaRegQuestionCircle className="text-2xl text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Common questions about testosterone in {data.name}, answered by our experts
                  </p>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="space-y-6">
                  {data.faq.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 cursor-pointer"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {item.question}
                            </h3>
                            <FaChevronDown className="text-blue-500 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0 mt-1" />
                          </div>
                          
                          <div className="pl-0">
                            <div className="prose prose-lg text-gray-700 leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                                {data.name}
                              </span>
                              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full">
                                Testosterone
                              </span>
                              <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                                Legal Info
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* FAQ Help Text */}
                <div className="mt-12 text-center">
                  <p className="text-gray-600">
                    Can't find your question?{' '}
                    <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      Contact our specialists in {data.name}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FEATURED SECTION */}
          <div id="featured" className="scroll-mt-20">
            <FeaturedByCategory />
          </div>

          {/* Back to Top */}
          <div className="flex justify-center pt-10">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:gap-3"
            >
              Back to Top
              <FaArrowRight className="rotate-90" />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}