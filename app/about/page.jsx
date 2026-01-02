"use client"
import Head from "next/head";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import AboutBackground from "../../components/AboutBackground";
import DNAOverlay from "../../components/DNAOverlay";



export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About NovaTech Sciences | Best Testosterone Supplements Brand</title>

        <meta
          name="description"
          content="NovaTech Sciences develops the best testosterone supplements and boosters for men, including natural solutions designed to support strength and performance."
        />
        <meta
          name="keywords"
          content="Steroid Pharma Maker, steroid pharma company, injectable steroid manufacturer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://novatechsciences.com/about" />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://novatechsciences.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://novatechsciences.com/about"
                }
              ]
            }
          `,
          }}
        />
      </Head>

      <div className="max-w-full mx-auto mt-20 text-center">
        <Breadcrumbs />
        <AboutBackground />
        <DNAOverlay />
      </div>
    </>
  );
}