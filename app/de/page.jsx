import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const deTitle =
  "Testosteron in Deutschland Kaufen | Legale TRT & Steroide | Novatech Sciences";
const deDescription =
  "Kaufen Sie Testosteron online in Deutschland legal mit Rezept. Bestes Testosteron und Steroide in Deutschland - WHO-GMP zertifiziert. Jetzt bestellen!";

const deFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist es legal, Testosteron online in Deutschland zu kaufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, der Kauf von Testosteron online in Deutschland ist mit gültigem medizinischen Rezept von lizenzierten deutschen Ärzten legal. Novatech Sciences erfordert ordnungsgemäße Dokumentation vor der Bearbeitung von Bestellungen und stellt Compliance mit dem Arzneimittelgesetz sicher. Wir beliefern lizenzierte Apotheken, Kliniken und Forschungseinrichtungen mit vollständiger regulatorischer Dokumentation.",
      },
    },
    {
      "@type": "Question",
      name: "Was macht Novatech Sciences zum besten Testosteron-Lieferanten in Deutschland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Novatech Sciences zeichnet sich durch WHO-GMP-zertifizierte Herstellung, strenge HPLC-Reinheitstests und umfassende Analysezertifikate aus. Das Unternehmen unterhält EU-konforme Kühlketten-Logistik in deutschen Großstädten, bietet deutschsprachige Supportteams und blockchain-basierte Authentizitätsverifizierung zur Erfüllung strenger BfArM-Anforderungen.",
      },
    },
    {
      "@type": "Question",
      name: "Benötige ich ein Rezept, um Steroide in Deutschland zu kaufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das deutsche Recht verlangt gültige medizinische Rezepte für therapeutische Testosteron-Einkäufe. Forschungseinrichtungen können Verbindungen für Studien unter spezifischen regulatorischen Ausnahmen erwerben. Käuferberechtigungen und Lizenzdokumentation müssen vor der Auftragserteilung geprüft werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie stellen Sie Produktqualität für deutsche Kunden sicher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Qualitätssicherung erfolgt durch mehrphasige Kontrollen, einschließlich HPLC-Verifizierung, Sterilitätsprüfungen, Endotoxin-Screening und Schwermetallanalysen. Jede Charge verfügt über eindeutige Identifikatoren mit analytischer Dokumentation zur Authentizitätsverifizierung und zum Fälschungsschutz.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Testosteronprodukte bieten Sie in Deutschland an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der deutsche Produktkatalog umfasst Testosteron-Enantat, Cypionat, Propionat und Undecanoat in verschiedenen Konzentrationen. Zusätzlich sind Anti-Östrogen-Therapien wie TAMONOVA und AROMANOVA verfügbar. Alle Formulierungen entsprechen den Standards der Europäischen Pharmakopöe.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der Versand in deutsche Städte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Standardlieferung nach Berlin, München und Hamburg dauert in der Regel zwei bis drei Werktage per temperaturkontrolliertem Versand. Der Transport erfolgt über zertifizierte Logistikpartner mit durchgehender 2–8 °C Kühlkettenüberwachung.",
      },
    },
    {
      "@type": "Question",
      name: "Sind Ihre Produkte für deutsche pharmazeutische Standards zertifiziert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die Produktionsstätten verfügen über WHO-GMP-, ISO 9001- und ISO 14001-Zertifizierungen und erfüllen alle relevanten EU-Richtlinien. Analysezertifikate, Sicherheitsdatenblätter und Stabilitätsstudien stehen für Audit- und Prüfzwecke zur Verfügung.",
      },
    },
    {
      "@type": "Question",
      name: "Können Forschungseinrichtungen Testosteron für Studien in Deutschland kaufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, deutsche Forschungseinrichtungen können Testosteron für wissenschaftliche Untersuchungen unter geltenden Forschungsausnahmen erwerben. Erforderlich sind Genehmigungen von Ethikkommissionen sowie entsprechende Forschungslizenzen und regulatorische Dokumentation.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zahlungsmethoden stehen deutschen Kunden zur Verfügung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verfügbare Zahlungsmethoden umfassen SEPA-Überweisungen, gängige Kreditkarten und pharmazeutische Beschaffungssysteme. Alle Transaktionen erfolgen mit umsatzsteuerkonformer Rechnungsstellung. Unternehmenskunden können nach Bonitätsprüfung auf Rechnung bestellen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie sollte ich Testosteronprodukte nach Lieferung lagern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ungeöffnete Testosteron-Fläschchen sollten bei 2–8 °C im Kühlschrank und lichtgeschützt gelagert werden. Nach dem Öffnen sind die angegebenen Verwendungszeiträume einzuhalten. Produkte sollten stets in der Originalverpackung und außerhalb der Reichweite von Kindern aufbewahrt werden.",
      },
    },
  ],
};

export const metadata = {
  title: deTitle,
  description: deDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/de",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: deTitle,
    description: deDescription,
    url: "https://www.novatechsciences.com/de",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: deTitle,
    description: deDescription,
  },
};

export default function DePage() {
  const data = countryData.germany;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="germany"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
