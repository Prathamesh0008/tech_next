import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Nova Techsciences | WHO-GMP Pharmaceutical Manufacturer",
  description:
    "Nova Techsciences is a WHO-GMP compliant pharmaceutical company manufacturing testosterone supplements and performance healthcare products.",

  alternates: {
    canonical: "https://www.novatechsciences.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "Novatech Sciences",
    "WHO-GMP certified pharmaceutical company",
    "Steroid manufacturer",
    "Testosterone supplements manufacturer",
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
