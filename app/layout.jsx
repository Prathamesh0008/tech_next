import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

export const metadata = {
  alternates: {
    languages: {
      en: "https://novatechsciences.com/en/",
      es: "https://novatechsciences.com/es/",
      fr: "https://novatechsciences.com/fr/",
      de: "https://novatechsciences.com/de/",
      "x-default": "https://novatechsciences.com/",
    },
  },
  title: "Best Testosterone Boosters & Legal Steroids for Muscle Growth",
  description:
    "Explore the best testosterone supplements, natural steroids, and anabolic muscle builders designed for strength, performance, and lean muscle development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

        {/* --- Organization Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.novatechsciences.com/#organization",
              "name": "Nova Techsciences",
              "url": "https://www.novatechsciences.com/",
              "description":
                "Nova Techsciences provides innovative technology and science-based solutions across pharmaceutical, nutraceutical, and performance healthcare domains.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.novatechsciences.com/assets/footer.png",
                "width": 500,
                "height": 500,
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61583956722731",
                "https://x.com/NovaTechScience",
                "https://www.instagram.com/novatechsciences/",
                "https://in.pinterest.com/novatechscience/",
                "https://www.tumblr.com/novatechsciences/804353639006322688/best-testosterone-booster-supplements-for-men",
                "https://medium.com/@novaseo59/testosterone-phenylpropionate-100-mg-ml-injection-supply-premium-injectable-solution-8442d9381674",
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "url": "https://www.novatechsciences.com/contact",
                  "availableLanguage": [
                    "English",
                    "Portuguese",
                    "Italian",
                    "German",
                    "Dutch",
                    "French",
                    "Spanish"
                  ],
                },
              ],
            }),
          }}
        />

        {/* --- Global Breadcrumb Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.novatechsciences.com/" },
                { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.novatechsciences.com/about" },
                { "@type": "ListItem", position: 3, name: "Products", item: "https://www.novatechsciences.com/products" },
                { "@type": "ListItem", position: 4, name: "Blog", item: "https://www.novatechsciences.com/blog" },
                { "@type": "ListItem", position: 5, name: "Contact", item: "https://www.novatechsciences.com/contact" }
              ]
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

        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P78MRW5G');`,
          }}
        />

        {/* Main Layout */}
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
