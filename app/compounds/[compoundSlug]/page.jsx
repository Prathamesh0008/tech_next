import { notFound } from "next/navigation";
import { getCompounds } from "../../../data/compounds";
import { slugifyCompound } from "../../../lib/compounds";
import CompoundClient from "./CompoundClient";

export async function generateMetadata({ params }) {
  const { compoundSlug } = await params;
  const compounds = getCompounds();

  const compound = compounds.find((item) => slugifyCompound(item.id) === compoundSlug);
  if (!compound) {
    return {
      title: "Compound Not Found | NovaTech Sciences",
      description: "The requested compound could not be found.",
    };
  }

  const description = compound.seoDescription || compound.shortDescription || compound.description;
  const canonical =
    compound.seoCanonical || `https://www.novatechsciences.com/compounds/${compoundSlug}`;

  return {
    title: compound.seoTitle || `${compound.name} Compound Details`,
    description,
    alternates: { canonical },
  };
}

export default async function CompoundDetailsPage({ params }) {
  const { compoundSlug } = await params;
  const compounds = getCompounds();
  const compound = compounds.find((item) => slugifyCompound(item.id) === compoundSlug);

  if (!compound) return notFound();

  return <CompoundClient compoundId={compound.id} />;
}
