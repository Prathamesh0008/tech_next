import HomeClient from "./HomeClient";

export async function generateMetadata() {
  return {
    title: "Best Testosterone Boosters & Legal Steroids | NovaTech Sciences",
    description:
      "WHO-GMP certified testosterone supplements for muscle growth. 80+ products. Trusted in Asia, Europe & Middle East.",
    alternates: {
      canonical: "https://www.novatechsciences.com/",
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "testosterone supplements",
      "legal steroids",
      "muscle growth",
      "WHO-GMP pharma",
    ],
    openGraph: {
      title: "NovaTech Sciences - Science. Strength. Performance.",
      description: "WHO-GMP certified testosterone and legal steroids.",
      url: "https://www.novatechsciences.com",
      siteName: "NovaTech Sciences",
      images: [
        {
          url: "https://www.novatechsciences.com/_next/image?url=%2Fassets%2Flogolight.png&w=256&q=75",
          width: 256,
          height: 80,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@NovaTechScience",
      title: "NovaTech Sciences - Testosterone Supplements & Legal Steroids",
      description: "WHO-GMP certified pharmaceutical performance products.",
    },
  };
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.novatechsciences.com/#website",
  url: "https://www.novatechsciences.com",
  name: "NovaTech Sciences",
  description:
    "Best Testosterone Boosters & Legal Steroids for Muscle Growth - WHO-GMP Pharmaceutical Manufacturer",
  publisher: {
    "@id": "https://www.novatechsciences.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.novatechsciences.com/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.novatechsciences.com/#webpage",
  url: "https://www.novatechsciences.com",
  name: "Best Testosterone Boosters & Legal Steroids for Muscle Growth | NovaTech Sciences",
  isPartOf: {
    "@id": "https://www.novatechsciences.com/#website",
  },
  about: {
    "@id": "https://www.novatechsciences.com/#organization",
  },
  description:
    "Explore the best testosterone supplements, natural steroids, and anabolic muscle builders designed for strength, performance, and lean muscle development. WHO-GMP certified.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.novatechsciences.com",
      },
    ],
  },
  datePublished: "2024-01-01",
  dateModified: "2026-06-15",
  inLanguage: "en-US",
  potentialAction: {
    "@type": "ReadAction",
    target: ["https://www.novatechsciences.com"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <HomeClient />
    </>
  );
}
