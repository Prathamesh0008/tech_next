import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from "../../../components/CategoriesDivisionsSection";
import FeaturedByCategory from "../../../components/FeaturedByCategory";
import { notFound } from "next/navigation";

export default function TestosteroneCountryPage({ params }) {
  const data = countryData[params.country];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Testosterone in {data.name} | Novatech Sciences
          </h1>

          <p className="text-xl text-blue-100 mb-8">
            {data.heroSubtitle}
          </p>

          <div className="bg-blue-800/30 p-6 rounded-xl border-l-4 border-blue-400 shadow-lg">
            <p className="text-lg leading-relaxed">
              Premium research-driven testosterone formulations developed under
              strict pharmaceutical standards for informed UK audiences.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* FULL CONTENT BLOCK */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
              {data.fullContent}
            </div>
          </div>

          {/* CATEGORIES SECTION */}
          <CategoriesDivisionsSection />

          {/* REGULATION SECTION */}
          {data.regulationInfo && (
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Testosterone Regulation in {data.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.regulationInfo}
              </p>
            </div>
          )}

          {/* FAQ SECTION */}
          {data.faq && (
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {data.faq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.question}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed pl-12">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEATURED SECTION */}
          <FeaturedByCategory />

        </div>
      </section>
    </main>
  );
}
