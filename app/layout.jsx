import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import "flag-icons/css/flag-icons.min.css";
import ScrollToTop from "../components/ScrollToTop";
import InitialLoaderGate from "../components/InitialLoaderGate";
import { cookies, headers } from "next/headers";
import { turinovaBlogSchema } from "@/lib/schema/turinovaBlogSchema";
import { trenovaBlogSchema } from "@/lib/schema/trenovaBlogSchema";
import { testovaCBlogSchema } from "@/lib/schema/testovaCBlogSchema";
import { additionalBlogSchemas } from "@/lib/schema/additionalBlogSchemas";

const BLOG_SCHEMAS_BY_PATH = {
  "/blog/turinova-chlorodehydromethyltestosterone-guide": turinovaBlogSchema,
  "/blog/trenova-a-trenbolone-acetate-guide": trenovaBlogSchema,
  "/blog/testova-c-testosterone-cypionate-guide": testovaCBlogSchema,
  ...Object.fromEntries(
    Object.entries(additionalBlogSchemas).map(([id, schema]) => [
      `/blog/${id}`,
      schema,
    ])
  ),
};

export const metadata = {
  alternates: {
    languages: {
      en: "https://novatechsciences.com/en/",
      es: "https://novatechsciences.com/es/",
      fr: "https://novatechsciences.com/fr/",
      de: "https://novatechsciences.com/de/",
      "x-default": "https://www.novatechsciences.com/",
    },
  },
  title: {
    default: "Nova Techsciences | Advanced Pharmaceutical & Performance Health",
    template: "%s ",
  },
  description:
    "Nova Techsciences is a science-driven pharmaceutical platform delivering high-quality supplements, performance healthcare products, and globally compliant formulations.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.novatechsciences.com/#organization",
  name: "NovaTech Sciences",
  alternateName: ["Nova Tech Sciences", "NovaTech Pharma", "Novatech Sciences"],
  legalName: "NovaTech Sciences Pvt. Ltd.",
  url: "https://www.novatechsciences.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.novatechsciences.com/_next/image?url=%2Fassets%2Flogolight.png&w=256&q=75",
    width: 256,
    height: 80,
  },
  image:
    "https://www.novatechsciences.com/_next/image?url=%2Fassets%2Flogolight.png&w=256&q=75",
  description:
    "NovaTech Sciences is a WHO-GMP and ISO certified pharmaceutical and nutraceutical manufacturer specializing in testosterone supplements, legal steroids, anabolic muscle builders, and performance healthcare products. Trusted globally across Asia, Europe, and the Middle East.",
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 200,
  },
  slogan: "Science. Strength. Performance.",
  knowsAbout: [
    "Testosterone Supplements",
    "Legal Steroids",
    "WHO-GMP Pharmaceutical Manufacturing",
    "Nutraceuticals",
    "Anabolic Muscle Builders",
    "Hormonal Preparations",
    "Performance Healthcare Products",
    "Pharmaceutical Grade Steroids",
  ],
  areaServed: [
    { "@type": "Place", name: "Asia" },
    { "@type": "Place", name: "Europe" },
    { "@type": "Place", name: "Middle East" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "WHO-GMP Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO Certification",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/novatechsciences/",
    "https://www.facebook.com/profile.php?id=61583956722731",
    "https://x.com/NovaTechScience",
  ],
};

const supportedLanguages = new Set([
  "en",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ar",
  "ru",
  "zh",
  "ro",
  "sq",
  "el",
  "bg",
  "mk",
  "sr",
  "hr",
  "bs",
]);

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLang = cookieStore.get("lang")?.value;
  const initialLanguage = supportedLanguages.has(cookieLang) ? cookieLang : "en";
  const userAgent = headerStore.get("user-agent") || "";
  const pathname = headerStore.get("x-novatech-pathname") || "";
  const blogSchema = BLOG_SCHEMAS_BY_PATH[pathname];
  const blogSchemaWithoutFaq = blogSchema
    ? {
        ...blogSchema,
        "@graph": blogSchema["@graph"].filter(
          (entity) => entity["@type"] !== "FAQPage"
        ),
      }
    : null;
  const shouldSkipInitialLoader =
    /bot|crawler|spider|crawling|google|bing|slurp|duckduckbot|baiduspider|yandex|gptbot|claudebot|perplexitybot|oai-searchbot/i.test(
      userAgent
    );

  return (
    <html lang={initialLanguage} dir={initialLanguage === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta
          name="keywords"
          content="Novatech Sciences, testosterone research, testosterone support, testosterone tablets, testosterone injectables, pharmaceutical grade testosterone, hormone research, men's health support, performance health, WHO-GMP testosterone, GMP compliant formulations, quality controlled testosterone, testosterone in UK, testosterone in Germany, testosterone in Spain, testosterone in Portugal, testosterone in Belgium, testosterone in Poland, testosterone in Netherlands, testosterone online information, anabolic hormone research, clinical grade formulations, research compounds, hormonal balance, male vitality support, Novatech testosterone, steroid research, anabolic steroids information, oral steroids research, injectable steroids research, performance enhancement compounds, pharmaceutical grade steroids"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-716DBKENPQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-716DBKENPQ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {blogSchemaWithoutFaq && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogSchemaWithoutFaq),
            }}
          />
        )}
      </head>

      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P78MRW5G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P78MRW5G');`,
          }}
        />

        <LanguageProvider initialLanguage={initialLanguage}>
          {shouldSkipInitialLoader ? (
            <>
              <Navbar />
              <main className="flex-1">{children}</main>
              <ScrollToTop />
              <Footer />
            </>
          ) : (
            <InitialLoaderGate>
              <Navbar />
              <main className="flex-1">{children}</main>
              <ScrollToTop />
              <Footer />
            </InitialLoaderGate>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
