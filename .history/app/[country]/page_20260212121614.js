import { notFound } from "next/navigation";
import { countryData } from "@/data/countryContent";
import TestosteroneCountryClient from "./TestosteroneCountryClient";

export default async function Page({ params }) {
  const { country } = await params;   // ✅ unwrap promise

  const data = countryData[country];

  if (!data) {
    notFound();
  }

  return (
    <TestosteroneCountryClient 
      country={data} 
      countrySlug={country} 
    />
  );
}
