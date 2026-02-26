import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "../[country]/TestosteroneCountryClient";
import CategoriesDivisionsSection from "@/components/CategoriesDivisionsSection";
import FeatureByCategory from "@/components/FeaturedByCategory";
import FeaturedBlogs from "@/components/FeaturedBlogsByCountry";

const ptTitle =
  "Testosterona em Portugal | Ciência Hormonal e Suporte Responsável – Novatech Sciences";
const ptDescription =
  "Conheça a testosterona em Portugal com a Novatech Sciences. Conteúdo científico sobre investigação em testosterona, equilíbrio hormonal, padrões de qualidade farmacêutica e suporte responsável, desenvolvido para o público português.";

const ptFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a testosterona e porque é importante para a saúde masculina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A testosterona é uma hormona essencial que influencia força muscular, densidade óssea, energia diária, foco mental e equilíbrio emocional. Em Portugal, o seu papel é cada vez mais associado à saúde preventiva, ao envelhecimento ativo e à manutenção da qualidade de vida a longo prazo.",
      },
    },
    {
      "@type": "Question",
      name: "Porque existe tanto interesse em testosterona em Portugal atualmente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O interesse crescente em testosterona em Portugal reflete maior consciência sobre saúde masculina, impacto do stress moderno e envelhecimento saudável. Muitas pessoas procuram informação científica fiável para compreender o equilíbrio hormonal, evitando soluções rápidas e privilegiando abordagens baseadas em evidência.",
      },
    },
    {
      "@type": "Question",
      name: "O que significa “melhor testosterona” do ponto de vista científico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do ponto de vista científico, “melhor testosterona” refere-se à qualidade da formulação, pureza, consistência de fabrico e controlo rigoroso. Não significa maior potência. Em Portugal, a qualidade é definida por padrões farmacêuticos, documentação técnica clara e conformidade com normas europeias.",
      },
    },
    {
      "@type": "Question",
      name: "A testosterona é legal em Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, a testosterona é legal em Portugal quando utilizada em contextos médicos regulamentados ou em investigação científica autorizada. O enquadramento legal segue diretivas nacionais e da União Europeia, exigindo controlo de qualidade, rastreabilidade e, em contexto clínico, supervisão profissional adequada.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é a diferença entre testosterona oral e injetável?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A testosterona oral utiliza tecnologias farmacêuticas de absorção e estabilidade química. A testosterona injetável é produzida em ambientes estéreis certificados, com elevada precisão de dosagem. Ambas exigem processos de fabrico especializados e controlos rigorosos para garantir fiabilidade e segurança.",
      },
    },
    {
      "@type": "Question",
      name: "A testosterona é considerada um esteroide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Cientificamente, a testosterona é classificada como um esteroide anabólico androgénico. Contudo, a investigação regulada e o uso médico supervisionado diferem totalmente do uso não controlado de esteroides, que carece de qualidade, segurança e enquadramento legal.",
      },
    },
    {
      "@type": "Question",
      name: "O que significa suporte ou apoio de testosterona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O suporte de testosterona refere-se a abordagens baseadas em ciência que ajudam a compreender e apoiar o equilíbrio hormonal. Inclui educação científica, investigação rigorosa, padrões GMP e comunicação responsável, sem recorrer a promessas exageradas ou intervenções sem fundamento técnico.",
      },
    },
    {
      "@type": "Question",
      name: "O termo “suplemento de testosterona” é correto em Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O termo “suplemento de testosterona” é frequentemente utilizado, mas pode gerar confusão. Em Portugal, é essencial distinguir entre suplementos nutricionais, compostos de investigação e terapias médicas reguladas, pois cada categoria possui finalidades, enquadramentos legais e níveis de controlo distintos.",
      },
    },
    {
      "@type": "Question",
      name: "Porque tantas pessoas pesquisam testosterona online em Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A pesquisa online sobre testosterona permite acesso discreto a informação científica, estudos técnicos e padrões de qualidade. Em Portugal, este comportamento reflete maior literacia em saúde e a necessidade de fontes credíveis para evitar desinformação comum em conteúdos não especializados.",
      },
    },
    {
      "@type": "Question",
      name: "O estilo de vida influencia os níveis de testosterona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A evidência científica demonstra que exercício regular, sono de qualidade, alimentação equilibrada e gestão do stress influenciam diretamente o equilíbrio hormonal. Em Portugal, a abordagem responsável privilegia estes fatores como base da saúde masculina sustentável.",
      },
    },
  ],
};

export const metadata = {
  title: ptTitle,
  description: ptDescription,
  alternates: {
    canonical: "https://www.novatechsciences.com/pt",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ptTitle,
    description: ptDescription,
    url: "https://www.novatechsciences.com/pt",
    siteName: "Novatech Sciences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ptTitle,
    description: ptDescription,
  },
};

export default function PtPage() {
  const data = countryData.portugal;

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ptFaqSchema) }}
      />
      <TestosteroneCountryClient
        country={data}
        countrySlug="portugal"
        compactSpacing={true}
      />
      <CategoriesDivisionsSection />
      <FeatureByCategory />
      <FeaturedBlogs />
    </>
  );
}
