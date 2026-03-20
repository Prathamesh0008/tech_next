import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import "flag-icons/css/flag-icons.min.css";
import ScrollToTop from "../components/ScrollToTop";
import Script from "next/script";
import { cookies } from "next/headers";
import InitialLoaderGate from "../components/InitialLoaderGate";




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
  const cookieLang = cookieStore.get("lang")?.value;
  const initialLanguage = supportedLanguages.has(cookieLang) ? cookieLang : "en";

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
        {/* Google Analytics */}
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

        {/* --- Organization Schema (FIXED LOGO) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.novatechsciences.com/#organization",
              name: "Nova Techsciences",
              url: "https://www.novatechsciences.com/",
              description:
                "Nova Techsciences delivers science-backed pharmaceutical, nutraceutical, and performance healthcare solutions worldwide.",
              logo: "https://www.novatechsciences.com/apple-touch-icon.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61583956722731",
                "https://x.com/NovaTechScience",
                "https://www.instagram.com/novatechsciences/",
                "https://in.pinterest.com/novatechscience/",
                "https://www.tumblr.com/novatechsciences/804353639006322688",
                "https://medium.com/@novaseo59",
              ],
            }),
          }}
        />

      </head>

      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P78MRW5G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P78MRW5G');`,
          }}
        />

        <InitialLoaderGate>
          <LanguageProvider initialLanguage={initialLanguage}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <ScrollToTop />
            <Footer />
          </LanguageProvider>
        </InitialLoaderGate>

      </body>
    </html>
  );
}
