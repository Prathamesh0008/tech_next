import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const beTitle =
  "Testostérone Belgique | Acheter Légal En Ligne | Novatech Sciences";
const beDescription =
  "Achetez testostérone en Belgique légalement avec ordonnance. Meilleure testostérone et stéroïdes - livraison rapide Flandre & Wallonie. Inscription AIFA.";

const beFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it legal to buy testosterone online in Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, purchasing testosterone online is legal in Belgium with valid medical prescriptions from licensed Belgian physicians. Distribution must comply with Federal Agency for Medicines and Health Products (FAMHP) regulations and occur through authorized Belgian pharmaceutical wholesalers operating across Flanders, Wallonia, and Brussels.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a prescription to buy steroids in Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Belgian law requires valid medical prescriptions for therapeutic testosterone purchases under its List I classification. Research institutions may acquire compounds under specific academic exemptions, subject to verification of medical licenses or approved university research protocols and compliance with INAMI/RIZIV requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does shipping take to Belgian cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard delivery to Brussels, Antwerp, and Ghent typically takes 24-48 hours via temperature-controlled transport maintaining a 2-8 °C cold chain. Shipments to Liège, Charleroi, and rural regions generally arrive within 72 hours through certified Belgian pharmaceutical couriers.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products available in Dutch and French?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all products include Patient Information Leaflets and Summaries of Product Characteristics in both Dutch and French, in accordance with Belgian language legislation. Documentation complies with regional requirements for Flanders, Wallonia, and bilingual Brussels.",
      },
    },
    {
      "@type": "Question",
      name: "Will Belgian insurance cover testosterone therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INAMI/RIZIV reimburses testosterone therapy under Category B for diagnosed hypogonadism with appropriate specialist prescriptions. Full Category A reimbursement applies only to specific genetic conditions, subject to correct nomenclature coding and documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can research institutions buy testosterone in Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Belgian universities and biotechnology institutions may purchase research-grade testosterone for scientific studies under approved ethics committee authorisations. Required documentation includes institutional review board approvals and valid research licenses.",
      },
    },
    {
      "@type": "Question",
      name: "How do you prevent counterfeit products in Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All shipments include BeMVO-compliant serialisation with 2D data matrix codes and anti-tampering devices, in line with the EU Falsified Medicines Directive. Authenticity can be verified through the Belgian Medicines Verification System.",
      },
    },
    {
      "@type": "Question",
      name: "Is testosterone legal for sports medicine in Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosterone use in sports medicine is permitted only for diagnosed hypogonadism with approved Therapeutic Use Exemptions from relevant Belgian anti-doping authorities. Use for performance enhancement is strictly prohibited under Belgian and international anti-doping regulations.",
      },
    },
    {
      "@type": "Question",
      name: "What quality standards do you follow for Belgium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Products meet WHO-GMP and European Pharmacopoeia standards, as well as specific FAMHP inspection requirements. Documentation includes Certificates of Analysis, stability data suitable for Belgium's climate, and full traceability records exceeding standard EU pharmaceutical regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How can I verify you are a legitimate supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legitimacy can be verified through EudraGMDP registration and FAMHP recognition for Belgian distribution. Legitimate suppliers provide Dutch and French documentation, BeMVO serialisation, Belgian VAT-compliant invoicing, and transparent regulatory records accessible to Belgian healthcare authorities.",
      },
    },
  ],
};

export const metadata = {
  title: beTitle,
  description: beDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/be",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: beTitle,
    description: beDescription,
    url: "https://www.novatechsciences.com/be",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: beTitle,
    description: beDescription,
  },
};

export default function BePage() {
  const data = countryData.belgium;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="belgium"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
