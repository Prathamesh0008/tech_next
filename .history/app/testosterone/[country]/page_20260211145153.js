"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import { countryData } from "@/data/countryContent";
import CategoriesDivisionsSection from '../../../components/CategoriesDivisionsSection';
import FeaturedByCategory from "../../../components/FeaturedByCategory"

export default function TestosteroneCountryPage() {
  const params = useParams();
  const country = params.country;

  const data = countryData[country];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Country Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link
          rel="canonical"
          href={`https://yourdomain.com/testosterone/${country}`}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] pt-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Testosterone in {data.name} | Novatech Sciences
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Premium Testosterone Research & Awareness for {data.name}
            </p>
            <div className="bg-blue-800/30 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg">
                Across {data.name}, awareness around testosterone, vitality,
                and men’s hormonal health continues to grow. Novatech Sciences
                focuses on pharmaceutical-grade formulation science and
                responsible testosterone research.
              </p>
            </div>
          </div>
        </section>

        <CategoriesDivisionsSection />

        {/* Regulation Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">
                Testosterone Regulation in {data.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.regulationInfo}
              </p>
            </div>
          </div>
        </section>

        <FeaturedByCategory />
      </main>
    </>
  );
}
