import blogData from "@/data/blog/en.json";

const siteUrl = "https://www.novatechsciences.com";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: "NovaTech Sciences",
  url: `${siteUrl}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#logo`,
    url: `${siteUrl}/assets/logolight.png`,
    contentUrl: `${siteUrl}/assets/logolight.png`,
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583956722731",
    "https://www.instagram.com/novatechsciences/",
    "https://x.com/NovaTechScience",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: "NovaTech Sciences",
  publisher: { "@id": organizationId },
  inLanguage: "en",
};

function createBlogSchema(config) {
  const pageUrl = `${siteUrl}/blog/${config.id}`;
  const blog = blogData.blogs.find((item) => item.id === config.id);
  const faqItems = config.faqs || blog?.faqs || [];
  const article = {
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    url: pageUrl,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    headline: config.name,
    description: config.articleDescription,
    author: { "@type": "Person", name: "Dr.Jack Holland" },
    publisher: { "@id": organizationId },
    articleSection: config.sections,
    keywords: config.keywords,
    wordCount: config.wordCount,
    inLanguage: "en",
    isAccessibleForFree: true,
    about: config.about.map((name) => ({ "@type": "Thing", name })),
    mentions: [
      { "@type": "Thing", name: config.compound, identifier: config.cas },
    ],
    citation: [config.citation],
  };

  if (config.image !== false) {
    article.image = {
      "@type": "ImageObject",
      url: `${pageUrl}.svg`,
      contentUrl: `${pageUrl}.svg`,
      caption: config.caption || config.name,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: config.name,
        description: config.pageDescription,
        isPartOf: { "@id": websiteId },
        about: {
          "@type": "Thing",
          name: config.compound,
          identifier: config.cas,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#article` },
        inLanguage: "en",
      },
      article,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: config.breadcrumbName || config.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: "en",
        mainEntity: faqItems.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}

const configs = [
  {
    id: "telinova-telmisartan-guide", compound: "Telmisartan", cas: "144701-48-4", image: false,
    name: "Telinova (Telmisartan): A Guide to the Compound and Pharmaceutical Quality",
    pageDescription: "Learn about Telinova (Telmisartan), its CAS Number 144701-48-4, pharmaceutical manufacturing standards, quality assurance, and related compounds. Discover educational insights from Nova Techsciences for healthcare professionals and pharmaceutical partners across Europe.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Telinova (Telmisartan), CAS 144701-48-4. It introduces the compound and its pharmaceutical context while presenting information intended for general scientific and educational reference.",
    sections: ["Pharmaceutical Research", "Health & Science"], keywords: ["Telinova", "Telmisartan", "CAS 144701-48-4", "pharmaceutical quality", "pharmaceutical manufacturing", "Nova Techsciences"], wordCount: 1728,
    about: ["Telinova", "Telmisartan", "CAS Number 144701-48-4", "Pharmaceutical manufacturing", "Quality assurance", "Pharmaceutical quality standards"], citation: `${siteUrl}/blog/oxydrol-oxymetholone-guide`,
  },
  {
    id: "oxydrol-oxymetholone-guide", compound: "Oxymetholone", cas: "434-07-1",
    name: "Oxydrol (Oxymetholone) by Nova Techsciences: What Should You Know About This Well-Known Pharmaceutical Compound?",
    caption: "Oxydrol (Oxymetholone) by Nova Techsciences",
    pageDescription: "Discover everything about Oxydrol (Oxymetholone) by Nova Techsciences, including CAS Number 434-07-1, compound profile, scientific background, manufacturing quality, and expert insights in this detailed educational guide.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Oxydrol (Oxymetholone), CAS 434-07-1, covering the compound from a pharmaceutical and scientific perspective. The article is presented as general reference material for readers looking to understand Oxymetholone and its broader research context.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Oxydrol", "Oxymetholone", "CAS 434-07-1", "pharmaceutical research", "pharmaceutical quality", "Nova Techsciences"], wordCount: 1621,
    about: ["Oxydrol", "Oxymetholone", "CAS Number 434-07-1", "Pharmaceutical research", "Pharmaceutical manufacturing", "Quality assurance", "Scientific education"], citation: `${siteUrl}/blog/oxandrolone-guide-cas-53-39-4`,
  },
  {
    id: "oxandrolone-guide-cas-53-39-4", compound: "Oxandrolone", cas: "53-39-4",
    name: "Oxandrolone: A Guide to the Compound and Pharmaceutical Quality",
    pageDescription: "Learn about Novabol (Oxandrolone), its CAS Number 53-39-4, pharmaceutical manufacturing standards, quality assurance, and related compounds. Discover educational insights from Nova Techsciences for healthcare professionals and pharmaceutical partners across Europe.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Novabol (Oxandrolone), CAS 53-39-4, presenting the compound from a pharmaceutical and scientific reference perspective. It is intended to help readers understand the compound’s identity and general research context.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Novabol", "Oxandrolone", "CAS 53-39-4", "pharmaceutical research", "pharmaceutical quality", "Nova Techsciences"], wordCount: 1691,
    about: ["Novabol", "Oxandrolone", "CAS Number 53-39-4", "Pharmaceutical manufacturing", "Quality assurance", "Pharmaceutical research", "Scientific education"], citation: `${siteUrl}/blog/nandrova-p-nandrolone-phenylpropionate-guide`,
  },
  {
    id: "nandrova-p-nandrolone-phenylpropionate-guide", compound: "Nandrolone Phenylpropionate", cas: "62-90-8",
    name: "Nandrolone Phenylpropionate (CAS 62-90-8): Complete Athlete's Guide",
    pageDescription: "Discover Nandrova P by Nova Techsciences featuring Nandrolone Phenylpropionate (CAS 62-90-8). Learn about its characteristics, pharmaceutical and scientific context, and related research information.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Nandrova P (Nandrolone Phenylpropionate), CAS 62-90-8. It introduces the compound’s identity and broader pharmaceutical and scientific context, serving as general reference material for readers seeking basic information about Nandrolone Phenylpropionate.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Nandrolone Phenylpropionate", "Nandrova P", "CAS 62-90-8", "pharmaceutical research", "pharmaceutical quality", "Nova Techsciences"], wordCount: 1391,
    about: ["Nandrova P", "Nandrolone Phenylpropionate", "CAS Number 62-90-8", "Pharmaceutical research", "Scientific education", "Pharmaceutical manufacturing"], citation: `${siteUrl}/blog/nandrolone-decanoate-cas-360-70-3`,
  },
  {
    id: "nandrolone-decanoate-cas-360-70-3", compound: "Nandrolone Decanoate", cas: "360-70-3",
    name: "Nandrova-D (Nandrolone Decanoate): Why Does This Long-Acting Injectable Compound Continue to Be Trusted Worldwide?", breadcrumbName: "Nandrova-D (Nandrolone Decanoate)",
    pageDescription: "Discover Nandrova-D by Nova Techsciences, a Nandrolone Decanoate injectable (CAS No. 360-70-3) manufactured under pharmaceutical quality standards. Learn about manufacturing quality, scientific background, quality assurance, and pharmaceutical manufacturing.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Nandrova-D (Nandrolone Decanoate), CAS 360-70-3. It introduces the compound from a pharmaceutical and scientific perspective, offering general reference information for readers interested in understanding its identity and research context.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Nandrova-D", "Nandrolone Decanoate", "CAS 360-70-3", "pharmaceutical research", "pharmaceutical manufacturing", "quality assurance", "Nova Techsciences"], wordCount: 2296,
    about: ["Nandrova-D", "Nandrolone Decanoate", "CAS Number 360-70-3", "Pharmaceutical manufacturing", "Quality assurance", "Injectable pharmaceutical formulations", "Scientific education"], citation: `${siteUrl}/blog/supernova-methyldrostanolone-guide`,
  },
  {
    id: "supernova-methyldrostanolone-guide", compound: "Methyldrostanolone", cas: "3381-88-2",
    name: "Supernova (Methyldrostanolone): A Guide to the Compound and Pharmaceutical Quality",
    pageDescription: "Learn about Supernova (Methyldrostanolone), its CAS Number 3381-88-2, pharmaceutical manufacturing standards, quality assurance, and related compounds. Discover educational insights from Nova Techsciences for healthcare professionals and pharmaceutical partners across Europe.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Supernova (Methyldrostanolone), CAS 3381-88-2. It introduces the compound from a pharmaceutical and scientific reference perspective, giving readers a basic understanding of its identity and broader research context.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Supernova", "Methyldrostanolone", "CAS 3381-88-2", "pharmaceutical research", "pharmaceutical manufacturing", "quality assurance", "Nova Techsciences"], wordCount: 1841,
    about: ["Supernova", "Methyldrostanolone", "CAS Number 3381-88-2", "Pharmaceutical manufacturing", "Quality assurance", "Scientific education"], citation: `${siteUrl}/blog/halonova-fluoxymesterone-guide`,
  },
  {
    id: "halonova-fluoxymesterone-guide", compound: "Fluoxymesterone", cas: "76-43-7",
    name: "Halonova (Fluoxymesterone): A Complete Guide to the Compound and Its Pharmaceutical Standards",
    pageDescription: "Learn about Halonova (Fluoxymesterone), its CAS Number 76-43-7, pharmaceutical manufacturing standards, quality assurance, and related compounds. Explore educational insights from Nova Techsciences for healthcare professionals across Europe.",
    articleDescription: "This NovaTech Sciences guide provides an educational overview of Halonova (Fluoxymesterone), presenting the compound from a pharmaceutical and scientific reference perspective. It is intended to give readers general background on its identity and broader research context rather than guidance for personal use.",
    sections: ["Steroids", "Pharmaceutical Research", "Health & Science"], keywords: ["Halonova", "Fluoxymesterone", "CAS 76-43-7", "pharmaceutical research", "pharmaceutical manufacturing", "quality assurance", "Nova Techsciences"], wordCount: 1750,
    about: ["Halonova", "Fluoxymesterone", "CAS Number 76-43-7", "Pharmaceutical manufacturing", "Quality assurance", "Scientific education"], citation: `${siteUrl}/blog/chlorodehydromethyltestosterone-guide-cas-2446-23-3`,
  },
];

export const additionalBlogSchemas = Object.fromEntries(
  configs.map((config) => [config.id, createBlogSchema(config)])
);
