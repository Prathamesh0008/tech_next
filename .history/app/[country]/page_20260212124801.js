import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent"; // ✅ Keep this here
import TestosteroneCountryClient from "./TestosteroneCountryClient";

export default function Page({ params }) {
  const countrySlug = params.country;
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