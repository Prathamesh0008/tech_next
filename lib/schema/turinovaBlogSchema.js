const pageUrl =
  "https://www.novatechsciences.com/blog/turinova-chlorodehydromethyltestosterone-guide";

export const turinovaBlogSchema = {
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
      name: "Turinova (Chlorodehydromethyltestosterone) Guide | CAS 2446-23-3 | Nova Techsciences",
      description:
        "Learn about Turinova (Chlorodehydromethyltestosterone), its CAS Number 2446-23-3, pharmaceutical manufacturing standards, quality assurance, and related compounds. Explore educational insights from Nova Techsciences for healthcare professionals and pharmaceutical partners across Europe.",
      isPartOf: { "@id": "https://www.novatechsciences.com/#website" },
      about: {
        "@type": "Thing",
        name: "Chlorodehydromethyltestosterone",
        identifier: "2446-23-3",
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
        "Turinova (Chlorodehydromethyltestosterone) Guide | CAS 2446-23-3 | Nova Techsciences",
      description:
        "This guide from NovaTech Sciences introduces Turinova (Chlorodehydromethyltestosterone), CAS 2446-23-3, providing an educational overview of the compound and its research context. It is intended as general scientific information rather than guidance for personal use.",
      image: {
        "@type": "ImageObject",
        url: `${pageUrl}.svg`,
        contentUrl: `${pageUrl}.svg`,
        caption:
          "Turinova (Chlorodehydromethyltestosterone): A Complete Guide to the Compound and Pharmaceutical Standards",
      },
      author: { "@type": "Person", name: "Dr.Jack Holland" },
      publisher: { "@id": "https://www.novatechsciences.com/#organization" },
      articleSection: ["Steroids", "Pharmaceutical Research", "Health & Science"],
      keywords: [
        "Turinova",
        "Buy Steroids",
        "Chlorodehydromethyltestosterone",
        "CAS 2446-23-3",
        "Nova Techsciences",
      ],
      wordCount: 1797,
      inLanguage: "en",
      isAccessibleForFree: true,
      about: [
        { "@type": "Thing", name: "Turinova" },
        { "@type": "Thing", name: "Chlorodehydromethyltestosterone" },
        { "@type": "Thing", name: "CAS Number 2446-23-3" },
        { "@type": "Thing", name: "Pharmaceutical manufacturing standards" },
        { "@type": "Thing", name: "Quality assurance" },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Chlorodehydromethyltestosterone",
          identifier: "2446-23-3",
        },
      ],
      citation: [
        "https://www.novatechsciences.com/blog/trenova-a-trenbolone-acetate-guide",
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
          name: "Turinova (Chlorodehydromethyltestosterone) Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Turinova?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Turinova is a pharmaceutical tablet manufactured by Nova Techsciences that contains Chlorodehydromethyltestosterone as its active pharmaceutical ingredient. The product is manufactured using standardized pharmaceutical processes and supported by comprehensive quality assurance procedures to help maintain production consistency.",
          },
        },
        {
          "@type": "Question",
          name: "What is the CAS Number of Chlorodehydromethyltestosterone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The internationally recognized CAS Number for Chlorodehydromethyltestosterone is 2446-23-3. This globally accepted identifier is used by pharmaceutical manufacturers, research laboratories, healthcare professionals, and regulatory organizations to accurately identify the compound.",
          },
        },
        {
          "@type": "Question",
          name: "Why is manufacturing quality important for pharmaceutical products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Manufacturing quality supports ingredient consistency, reliable production, standardized formulation, and comprehensive quality assurance. Pharmaceutical manufacturers that maintain strict production systems help improve product reliability while supporting international pharmaceutical standards.",
          },
        },
        {
          "@type": "Question",
          name: "Why do scientists and healthcare professionals use CAS Numbers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CAS Numbers provide a universal identification system for pharmaceutical compounds. Since product names may vary between manufacturers, the CAS Number helps researchers, laboratories, and healthcare professionals accurately reference the same compound in scientific research and regulatory documentation.",
          },
        },
        {
          "@type": "Question",
          name: "Which other pharmaceutical compounds are available from Nova Techsciences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nova Techsciences also manufactures and provides educational information on compounds including Testosterone Enanthate, Testosterone Cypionate, Testosterone Propionate, Cabergoline, Fluoxymesterone, Oxandrolone, Oxymetholone, Stanozolol, Methandienone, Nandrolone Decanoate, Trenbolone Acetate, Clomiphene Citrate, Tamoxifen Citrate, Boldenone Undecylenate, Liothyronine Sodium (T3), and Anastrozole, supporting broader pharmaceutical education and internal website navigation.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Nova Techsciences trusted by international pharmaceutical partners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nova Techsciences emphasizes consistent pharmaceutical manufacturing, documented quality assurance, standardized production procedures, and educational transparency. These principles support pharmaceutical distributors, healthcare organizations, and research partners seeking reliable manufacturing solutions for international healthcare markets.",
          },
        },
      ],
      inLanguage: "en",
    },
  ],
};
