import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const nlTitle =
  "Testosteron in Nederland | Geavanceerde Testosteron Ondersteuning - Novatech Sciences";
const nlDescription =
  "Ontdek testosteron in Nederland met Novatech Sciences. Diepgaande informatie over testosterononderzoek, testosteron verhogen-strategieen, formulatiestandaarden en verantwoorde testosteron ondersteuning voor een Nederlands publiek.";

const nlFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is testosteron en waarom is het belangrijk voor mannen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosteron is een belangrijk mannelijk hormoon dat spierkracht, botdichtheid, energieniveaus, zelfvertrouwen en mentale focus ondersteunt. In Nederland groeit het bewustzijn over de rol van testosteron in langdurige vitaliteit en cognitief welzijn.",
      },
    },
    {
      "@type": "Question",
      name: "Waardoor kunnen testosteronniveaus dalen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosteronniveaus kunnen dalen door veroudering, chronische stress, weinig lichaamsbeweging, slechte slaap, overgewicht of voedingstekorten. Moderne leefstijlfactoren in Nederland spelen hierbij vaak een rol.",
      },
    },
    {
      "@type": "Question",
      name: "Is testosteron legaal in Nederland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, testosteron is legaal in Nederland binnen gereguleerde medische en onderzoekscontexten. Klinisch gebruik vereist professionele begeleiding en onderzoeksformuleringen moeten voldoen aan Nederlandse en EU-regelgeving.",
      },
    },
    {
      "@type": "Question",
      name: "Wat betekent 'beste testosteron' vanuit wetenschappelijk oogpunt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wetenschappelijk gezien verwijst 'beste testosteron' naar zuiverheid, productieconsistentie, kwaliteitscontrole en transparante documentatie - niet naar extreme sterkte of snelle effecten.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen testosterontabletten en injecties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tabletten zijn orale formuleringen met gecontroleerde afgifte, terwijl injecteerbaar testosteron steriel wordt geproduceerd met focus op doseringsnauwkeurigheid. Beide vereisen gespecialiseerde productieprocessen.",
      },
    },
    {
      "@type": "Question",
      name: "Is testosteron een steroide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, testosteron is wetenschappelijk geclassificeerd als een anabole androgene steroide. Dit verschilt echter sterk van ongereguleerd of illegaal steroidengebruik zonder kwaliteitscontrole.",
      },
    },
    {
      "@type": "Question",
      name: "Waarom zoeken mensen in Nederland online naar testosteron?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veel mensen zoeken online naar testosteron om toegang te krijgen tot educatieve informatie, wetenschappelijke studies en inzicht in formulatiestandaarden. Dit benadrukt het belang van betrouwbare bronnen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat betekent testosteron verhogen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosteron verhogen verwijst naar strategieen die gezonde testosteronniveaus ondersteunen, zoals beweging, slaap, stressbeheersing en voeding - gebaseerd op wetenschap, niet op snelle oplossingen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat wordt bedoeld met testosteron ondersteuning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testosteron ondersteuning omvat evidence-based benaderingen om hormonale balans verantwoord te ondersteunen, met focus op kwaliteit, educatie en wetenschappelijke onderbouwing.",
      },
    },
    {
      "@type": "Question",
      name: "Waar moet ik op letten bij testosterongerelateerd onderzoek of producten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Let op GMP-conforme productie, transparante herkomst, steriele fabricage indien nodig en duidelijke documentatie. Vermijd overdreven claims en kies voor wetenschappelijke betrouwbaarheid binnen EU-normen.",
      },
    },
  ],
};

export const metadata = {
  title: nlTitle,
  description: nlDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/nl",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: nlTitle,
    description: nlDescription,
    url: "https://www.novatechsciences.com/nl",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: nlTitle,
    description: nlDescription,
  },
};

export default function NlPage() {
  const data = countryData.netherlands;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nlFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="netherlands"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
