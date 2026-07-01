import { notFound, permanentRedirect } from "next/navigation";
import { getCompounds } from "../../../data/compounds";
import { slugifyCompound } from "../../../lib/compounds";
import { getLocalProductImagePath } from "../../../lib/local-image-paths";
import CompoundClient from "./CompoundClient";

export async function generateMetadata({ params }) {
  const { compoundSlug } = await params;
  const compounds = getCompounds();

  const compound = compounds.find(
    (item) => item.slug === compoundSlug || slugifyCompound(item.id) === compoundSlug
  );
  if (!compound) {
    return {
      title: "Compound Not Found | NovaTech Sciences",
      description: "The requested compound could not be found.",
    };
  }

  const description = compound.seoDescription || compound.shortDescription || compound.description;
  const canonical = `https://www.novatechsciences.com/compounds/${compound.slug}`;

  return {
    title: compound.seoTitle || `${compound.displayName || compound.name} Compound Details`,
    description,
    alternates: { canonical },
  };
}

export default async function CompoundDetailsPage({ params }) {
  const { compoundSlug } = await params;
  const compounds = getCompounds();
  const compound = compounds.find(
    (item) => item.slug === compoundSlug || slugifyCompound(item.id) === compoundSlug
  );

  if (!compound) return notFound();
  if (compound.slug !== compoundSlug) {
    permanentRedirect(`/compounds/${compound.slug}`);
  }

  const siteUrl = "https://www.novatechsciences.com";
  const compoundUrl = `${siteUrl}/compounds/${compound.slug}`;
  const productImage = `${siteUrl}${getLocalProductImagePath(
    compound.category,
    compound.imageKey,
    1
  )}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: compound.displayName || compound.name,
    url: compoundUrl,
    image: [productImage],
    description: compound.seoDescription || compound.shortDescription || compound.description,
    sku: compound.id,
    mpn: compound.id,
    category: compound.category,
    brand: {
      "@type": "Brand",
      name: "Nova Techsciences",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Nova Techsciences",
    },
    additionalProperty: [
      compound.cas
        ? {
            "@type": "PropertyValue",
            name: "CAS Number",
            value: compound.cas,
          }
        : null,
      compound.activeIngredient
        ? {
            "@type": "PropertyValue",
            name: "Active Ingredient",
            value: compound.activeIngredient,
          }
        : null,
      compound.strength
        ? {
            "@type": "PropertyValue",
            name: "Strength",
            value: compound.strength,
          }
        : null,
    ].filter(Boolean),
  };

  const faqItems = (compound.faq || [])
    .map((item) => {
      const question = item?.q || item?.question;
      const answer = item?.a || item?.answer;
      if (!question || !answer) return null;
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems,
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <CompoundClient compoundId={compound.id} />
    </>
  );
}
