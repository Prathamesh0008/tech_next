const pageUrl =
  "https://www.novatechsciences.com/blog/testova-c-testosterone-cypionate-guide";

export const testovaCBlogSchema = {
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
      name: "Testosterone Cypionate Explained: Benefits, Performance, and Physical Development",
      description:
        "Explore Testova C by Nova Techsciences containing Testosterone Cypionate (CAS 58-20-8). Learn about its characteristics, medical context, pharmaceutical quality standards, and important safety considerations.",
      isPartOf: { "@id": "https://www.novatechsciences.com/#website" },
      about: {
        "@type": "Thing",
        name: "Testosterone Cypionate",
        identifier: "58-20-8",
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
      headline:
        "Testosterone Cypionate Explained: Benefits, Performance, and Physical Development",
      description:
        "This NovaTech Sciences guide provides an educational overview of Testova C (Testosterone Cypionate), CAS 58-20-8. It discusses the compound’s identity as a long-acting testosterone ester, its medical context in hormone replacement therapy, general mechanism of action, pharmaceutical manufacturing and quality standards, and key safety considerations requiring medical supervision.",
      image: {
        "@type": "ImageObject",
        url: `${pageUrl}.svg`,
        contentUrl: `${pageUrl}.svg`,
        caption:
          "Testosterone Cypionate Explained: Benefits, Performance, and Physical Development",
      },
      author: { "@type": "Person", name: "Dr.Jack Holland" },
      publisher: { "@id": "https://www.novatechsciences.com/#organization" },
      articleSection: ["Steroids", "Pharmaceutical Research", "Health & Science"],
      keywords: [
        "Testova C",
        "Testosterone Cypionate",
        "CAS 58-20-8",
        "Nova Techsciences",
      ],
      wordCount: 1402,
      inLanguage: "en",
      isAccessibleForFree: true,
      about: [
        { "@type": "Thing", name: "Testova C" },
        { "@type": "Thing", name: "Testosterone Cypionate" },
        { "@type": "Thing", name: "CAS Number 58-20-8" },
        { "@type": "Thing", name: "Testosterone replacement therapy" },
        { "@type": "Thing", name: "Pharmaceutical manufacturing" },
        { "@type": "Thing", name: "Quality assurance" },
        { "@type": "Thing", name: "Safety considerations" },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Testosterone Cypionate",
          identifier: "58-20-8",
        },
      ],
      citation: [
        "https://www.novatechsciences.com/blog/telinova-telmisartan-guide",
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
          name: "Testosterone Cypionate Explained: Benefits, Performance, and Physical Development",
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
          name: "What is Testova C?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Testova C is an injectable formulation by Nova Techsciences containing Testosterone Cypionate. The article discusses its chemical identity, medical context, pharmaceutical quality considerations, and safety information.",
          },
        },
        {
          "@type": "Question",
          name: "What is Testosterone Cypionate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Testosterone Cypionate is a long-acting ester of testosterone identified by CAS Number 58-20-8. It is used medically in certain testosterone replacement contexts and is also discussed in scientific and performance-related literature.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Testosterone Cypionate popular among athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Testosterone Cypionate has been widely discussed in bodybuilding and athletic communities because testosterone is associated with physiological processes involving muscle development and physical performance. Non-medical use may involve significant health and regulatory risks.",
          },
        },
        {
          "@type": "Question",
          name: "What is the CAS Number of Testosterone Cypionate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The CAS Number of Testosterone Cypionate is 58-20-8. This standardized identifier is used in scientific literature, research databases, manufacturing documentation, and regulatory records to identify the compound.",
          },
        },
        {
          "@type": "Question",
          name: "How does Testova C relate to performance-focused training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Testova C contains Testosterone Cypionate, which is discussed in relation to testosterone-dependent physiological processes, muscle development, strength, and physical conditioning. The article provides general educational information and does not constitute guidance for personal or performance-enhancing use.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Testova C different from other testosterone compounds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Testova C contains Testosterone Cypionate, a long-acting testosterone ester. Its ester structure influences its pharmacokinetic profile and distinguishes it from testosterone formulations containing different ester groups.",
          },
        },
      ],
    },
  ],
};
