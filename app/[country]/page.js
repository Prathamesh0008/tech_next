import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "./TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory"
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const countrySlug = resolvedParams.country?.toLowerCase();
  const data = countryData[countrySlug];

  if (!data) {
    return {
      title: "Page Not Found | Novatech Sciences",
      robots: { index: false, follow: false },
    };
  }

  if (countrySlug === "uk") {
    const ukTitle =
      "Testosterone in United Kingdom | Premium Testosterone Research & Support – Novatech Sciences";
    const ukDescription =
      "Explore testosterone in the United Kingdom with Novatech Sciences. In-depth information on testosterone research, quality standards, tablets & injectables, and responsible testosterone awareness for UK audiences.";

    return {
      title: {
        absolute: ukTitle,
      },
      description: ukDescription,
      alternates: {
        canonical: "https://www.novatechsciences.com/uk",
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: ukTitle,
        description: ukDescription,
        url: "https://www.novatechsciences.com/uk",
        siteName: "Novatech Sciences",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: ukTitle,
        description: ukDescription,
      },
    };
  }

  return {
    title: data?.meta?.title?.base || `Testosterone in ${data.name} | Novatech Sciences`,
    description:
      data?.meta?.description?.full ||
      data?.meta?.description?.short ||
      `Explore testosterone information for ${data.name}.`,
    alternates: {
      canonical: `https://www.novatechsciences.com/${countrySlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params; // ✅ unwrap the promise
  const countrySlug = resolvedParams.country?.toLowerCase();

  const data = countryData[countrySlug];

  if (!data) {
    notFound();
  }

  return (<>
    <TestosteroneCountryClient
      country={data}
      countrySlug={countrySlug}
    />
    <CategoriesDivisionsSection/>
    <FeatureByCategory/>
    <FeaturedBlogs/>
    </>
  );
}
