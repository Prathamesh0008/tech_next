import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";  // ✅ THIS WAS MISSING
import TestosteroneCountryClient from "./TestosteroneCountryClient";

export default function Page({ params }) {
  const countrySlug = params.country?.toLowerCase();

  const data = countryData[countrySlug];

  if (!data) {
    notFound();
  }

  return (
    <TestosteroneCountryClient
      country={data}
      countrySlug={countrySlug}
    />
  );
}
