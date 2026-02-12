export default function Page({ params }) {
  const countrySlug = params.country?.toLowerCase().trim();

  const data =
    countryData[countrySlug] ||
    countryData[params.country] ||
    countryData[params.country?.toUpperCase()];

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
