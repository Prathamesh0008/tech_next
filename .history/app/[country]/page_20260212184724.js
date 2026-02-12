import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "./TestosteroneCountryClient";

export default async function Page({ params }) {
  const resolvedParams = await params; // ✅ unwrap the promise
  const countrySlug = resolvedParams.country?.toLowerCase();

  const data = countryData[countrySlug];

  if (!data) {
    notFound();
  }

  return (
    <TestosteroneCountryClient
      country={data}
      countrySlug={countrySlug}
    />
    <Categ
  );
}
