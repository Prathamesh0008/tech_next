import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const plTitle =
  "Testosterone in Poland | Advanced Testosterone Research & Support - Novatech Sciences";
const plDescription =
  "Explore testosterone in Poland with Novatech Sciences. In-depth guidance on testosterone research, formulation standards, regulatory compliance with GIF and URPL, and responsible testosterone therapy for Polish healthcare professionals and researchers.";

const plFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it legal to buy testosterone online in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, purchasing testosterone online is legal in Poland with valid prescriptions from licensed Polish physicians registered with the Pharmaceutical Chamber. Distribution must comply with Polish Pharmaceutical Law and URPL regulations and occur through wholesalers authorised by the Chief Pharmaceutical Inspectorate (GIF).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a prescription to buy steroids in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Polish law requires valid medical prescriptions (e-recepty) for therapeutic testosterone purchases under strict pharmaceutical regulations. Research institutions may acquire compounds for scientific studies with approved ethics documentation and compliance with GIF standards.",
      },
    },
    {
      "@type": "Question",
      name: "How long does shipping take to Polish cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard delivery to Warsaw, Krakow, and Wroclaw typically takes 24-48 hours via temperature-controlled transport maintaining a 2-8 C cold chain. Shipments to Gdansk, Poznan, and Katowice generally arrive within 72 hours through GDP-certified Polish pharmaceutical logistics partners.",
      },
    },
    {
      "@type": "Question",
      name: "Are your testosterone products labeled in Polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all products include Patient Information Leaflets (ulotki) and Summaries of Product Characteristics (ChPL) in Polish. Packaging and terminology comply with the Polish Pharmacopoeia and the Pharmaceutical Law Act, ensuring compliance during inspections across all voivodeships.",
      },
    },
    {
      "@type": "Question",
      name: "Does NFZ insurance cover testosterone therapy in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The National Health Fund (NFZ) provides partial reimbursement for testosterone therapy under specific ICD-10 diagnoses such as hypogonadism, usually with patient co-payment. Full reimbursement is limited to defined clinical indications and requires appropriate specialist documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can universities buy testosterone for research in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Polish universities and academic medical centres may purchase research-grade testosterone for scientific studies with bioethics committee approval. Required documentation includes research licences, Material Safety Data Sheets in Polish, and Certificates of Analysis traceable to recognised standards.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure product authenticity in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All products feature unique serialisation and anti-tampering devices compliant with Polish and EU verification systems. Batch documentation, QR-based verification, and GIF-compliant records help prevent counterfeit products from entering the legitimate Polish pharmaceutical supply chain.",
      },
    },
    {
      "@type": "Question",
      name: "What quality standards apply to steroids in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosterone products must comply with WHO-GMP, EU GMP, and Polish Pharmacopoeia standards. Quality control includes HPLC potency testing, sterility verification, heavy metal analysis, and endotoxin screening in accordance with GIF inspection protocols.",
      },
    },
    {
      "@type": "Question",
      name: "Is testosterone legal for bodybuilding in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Testosterone is prescription-only in Poland and permitted solely for diagnosed medical conditions such as hypogonadism. Non-medical use for bodybuilding violates Polish pharmaceutical law and anti-doping regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How can hospitals establish partnerships in Poland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hospitals must provide valid pharmaceutical licences and tax identification (NIP) documentation. Partnerships typically include VAT-compliant invoicing, integration with hospital procurement systems, regulatory support, and access to emergency pharmaceutical supply in line with Polish healthcare regulations.",
      },
    },
  ],
};

export const metadata = {
  title: plTitle,
  description: plDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/pl",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: plTitle,
    description: plDescription,
    url: "https://www.novatechsciences.com/pl",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: plTitle,
    description: plDescription,
  },
};

export default function PlPage() {
  const data = countryData.poland;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="poland"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
