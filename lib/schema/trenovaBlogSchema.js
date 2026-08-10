const pageUrl =
  "https://www.novatechsciences.com/blog/trenova-a-trenbolone-acetate-guide";

export const trenovaBlogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.novatechsciences.com/#organization",
      name: "NovaTech Sciences",
      url: "https://www.novatechsciences.com/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.novatechsciences.com/#logo",
        url: "https://www.novatechsciences.com/assets/logolight.png",
        contentUrl: "https://www.novatechsciences.com/assets/logolight.png",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61583956722731",
        "https://www.instagram.com/novatechsciences/",
        "https://x.com/NovaTechScience",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.novatechsciences.com/#website",
      url: "https://www.novatechsciences.com/",
      name: "NovaTech Sciences",
      publisher: { "@id": "https://www.novatechsciences.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Understanding Trenbolone Acetate and Trenova A",
      description:
        "Explore Trenova A by Nova Techsciences featuring Trenbolone Acetate (CAS 10161-34-9). Learn about its characteristics, scientific context, quality-control considerations, regulatory limitations, and safety concerns associated with trenbolone compounds.",
      isPartOf: { "@id": "https://www.novatechsciences.com/#website" },
      about: {
        "@type": "Thing",
        name: "Trenbolone Acetate",
        identifier: "10161-34-9",
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#article` },
      inLanguage: "en",
    },
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      headline: "Understanding Trenbolone Acetate and Trenova A",
      description:
        "This NovaTech Sciences guide covers Trenova A (Trenbolone Acetate), CAS 10161-34-9, with an overview of its chemical identity, classification as an anabolic-androgenic steroid, and general scientific context. It also emphasizes responsible documentation, quality-control considerations, regulatory limitations, and important safety concerns associated with trenbolone compounds.",
      image: {
        "@type": "ImageObject",
        url: `${pageUrl}.svg`,
        contentUrl: `${pageUrl}.svg`,
        caption: "Understanding Trenbolone Acetate and Trenova A",
      },
      author: { "@type": "Person", name: "Dr.Jack Holland" },
      publisher: { "@id": "https://www.novatechsciences.com/#organization" },
      articleSection: ["Steroids", "Pharmaceutical Research", "Health & Science"],
      keywords: [
        "Trenova A",
        "Trenbolone Acetate",
        "CAS 10161-34-9",
        "Nova Techsciences",
      ],
      wordCount: 1356,
      inLanguage: "en",
      isAccessibleForFree: true,
      about: [
        { "@type": "Thing", name: "Trenova A" },
        { "@type": "Thing", name: "Trenbolone Acetate" },
        { "@type": "Thing", name: "CAS Number 10161-34-9" },
        { "@type": "Thing", name: "Anabolic-androgenic steroids" },
        { "@type": "Thing", name: "Pharmaceutical quality control" },
        { "@type": "Thing", name: "Regulatory considerations" },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Trenbolone Acetate",
          identifier: "10161-34-9",
        },
      ],
      citation: [
        "https://www.novatechsciences.com/blog/testova-c-testosterone-cypionate-guide",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.novatechsciences.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.novatechsciences.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Understanding Trenbolone Acetate and Trenova A",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      inLanguage: "en",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Trenova A?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trenova A is an injectable formulation by Nova Techsciences containing Trenbolone Acetate. It is discussed in the article in relation to its chemical identity, scientific context, quality-control considerations, regulatory limitations, and safety concerns.",
          },
        },
        {
          "@type": "Question",
          name: "What is Trenbolone Acetate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trenbolone Acetate is a short-acting esterified anabolic-androgenic steroid identified by CAS Number 10161-34-9. It is discussed in scientific and performance-related literature, with important regulatory and safety considerations.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Trenbolone Acetate popular among athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trenbolone Acetate has a long history of discussion in bodybuilding and performance-oriented communities because of its reported association with muscle development, strength and physical conditioning. Its use also involves significant regulatory and safety considerations.",
          },
        },
        {
          "@type": "Question",
          name: "What is the CAS Number of Trenbolone Acetate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The CAS Number of Trenbolone Acetate is 10161-34-9. CAS Numbers provide standardized identifiers that help distinguish chemical compounds in scientific, manufacturing, and regulatory documentation.",
          },
        },
        {
          "@type": "Question",
          name: "How does Trenova A relate to performance-focused training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trenova A contains Trenbolone Acetate, a compound frequently discussed in relation to muscle development, strength and physical conditioning. The article provides general scientific information and does not constitute guidance for personal use.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Trenova A different from other injectable compounds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trenova A contains Trenbolone Acetate, which has a relatively short acetate ester profile. Its chemical characteristics distinguish it from injectable compounds containing different active ingredients or ester structures. Regulatory status and safety considerations should also be taken into account.",
          },
        },
      ],
    },
  ],
};
