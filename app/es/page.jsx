import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const esTitle =
  "Testosterona en España | Ciencia, Equilibrio y Soporte Responsable – Novatech Sciences";
const esDescription =
  "Análisis profundo sobre la testosterona en España. Descubra ciencia hormonal, cómo aumentar la testosterona de forma responsable, estándares farmacéuticos y apoyo avanzado en testosterona con Novatech Sciences.";

const esFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué se utiliza la testosterona desde un enfoque científico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desde una perspectiva científica, la testosterona se investiga por su papel en la regulación hormonal, la función muscular, la densidad ósea, el metabolismo energético y el equilibrio cognitivo. En España, su estudio se enfoca principalmente en salud masculina, envejecimiento activo y bienestar sostenible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a la testosterona de calidad farmacéutica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La testosterona de calidad farmacéutica se define por su pureza, consistencia de formulación, procesos GMP y controles de calidad rigurosos. Se priorizan estándares europeos, trazabilidad completa y documentación técnica clara, factores esenciales para investigación responsable y evaluación profesional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa “mejor testosterona” en el contexto español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En España, “mejor testosterona” no implica mayor potencia, sino mayor fiabilidad científica. Se refiere a productos con formulación precisa, estabilidad química, fabricación regulada y ausencia de afirmaciones exageradas. La calidad se mide por estándares técnicos, no por promesas comerciales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es legal investigar testosterona en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La investigación en testosterona es legal en España siempre que se realice dentro de los marcos regulatorios nacionales y de la Unión Europea. Las formulaciones deben cumplir normativas sanitarias, estándares de calidad y requisitos de trazabilidad establecidos por las autoridades competentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre testosterona oral e inyectable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La testosterona oral utiliza tecnologías de absorción y liberación controlada, mientras que la inyectable se produce en entornos estériles con alta precisión de dosificación. Ambas requieren procesos de fabricación especializados y controles estrictos para garantizar estabilidad y calidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿La testosterona es un esteroide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, científicamente la testosterona se clasifica como un esteroide anabólico androgénico. Sin embargo, esta clasificación no implica uso indebido. La investigación regulada y controlada difiere completamente del uso no supervisado o ilícito de esteroides.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué muchas personas investigan testosterona online en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La investigación online permite acceder a información científica, estándares de formulación y datos técnicos de forma privada. En España, este interés refleja una mayor conciencia sobre salud masculina y la necesidad de fuentes fiables frente a la desinformación digital.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa apoyo o soporte de testosterona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El soporte de testosterona hace referencia a enfoques basados en evidencia que ayudan a comprender y mantener el equilibrio hormonal. Incluye investigación científica, educación, control de calidad y estrategias responsables, siempre alineadas con regulaciones sanitarias y principios médicos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debo evaluar antes de investigar productos relacionados con testosterona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es importante evaluar la calidad de fabricación, cumplimiento GMP, trazabilidad, documentación técnica y transparencia informativa. Evitar productos con afirmaciones extremas o poco claras es clave para una investigación responsable y alineada con estándares españoles y europeos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué papel juega Novatech Sciences en la investigación de testosterona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Novatech Sciences actúa como una plataforma orientada a la investigación, priorizando estándares farmacéuticos, control de calidad y educación científica. Su enfoque se centra en ofrecer información clara y responsable, apoyando decisiones informadas dentro del marco regulatorio europeo.",
      },
    },
  ],
};

export const metadata = {
  title: esTitle,
  description: esDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/es",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: esTitle,
    description: esDescription,
    url: "https://www.novatechsciences.com/es",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: esTitle,
    description: esDescription,
  },
};

export default function EsPage() {
  const data = countryData.spain;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(esFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="spain"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
