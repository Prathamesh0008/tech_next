import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

export const metadata = {
  title:
    "Testosterone in United Kingdom | Premium Testosterone Research & Support – Novatech Sciences",
  description:
    "Explore testosterone in the United Kingdom with Novatech Sciences. In-depth information on testosterone research, quality standards, tablets & injectables, and responsible testosterone awareness for UK audiences.",
  alternates: {
    canonical: "https://www.novatechsciences.com/uk",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Testosterone in United Kingdom | Premium Testosterone Research & Support – Novatech Sciences",
    description:
      "Explore testosterone in the United Kingdom with Novatech Sciences. In-depth information on testosterone research, quality standards, tablets & injectables, and responsible testosterone awareness for UK audiences.",
    url: "https://www.novatechsciences.com/uk",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Testosterone in United Kingdom | Premium Testosterone Research & Support – Novatech Sciences",
    description:
      "Explore testosterone in the United Kingdom with Novatech Sciences. In-depth information on testosterone research, quality standards, tablets & injectables, and responsible testosterone awareness for UK audiences.",
  },
};

export default function UkPage() {
  const data = countryData.uk;

  if (!data) {
    notFound();
  }

  return (
    <>
      <TestosteroneCountryClient
        country={data}
        countrySlug="uk"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      {/* <FeatureByCategory /> */}
      <FeaturedBlogs />
    </>
  );
}
