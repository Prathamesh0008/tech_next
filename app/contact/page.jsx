import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Nova Techsciences | Pharmaceutical & Performance Health",
  description:
    "Get in touch with Nova Techsciences for inquiries related to pharmaceutical products, testosterone supplements, and performance healthcare solutions.",

  alternates: {
    canonical: "https://www.novatechsciences.com/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "contact novatech sciences",
    "steroid supplier contact",
    "testosterone supplements contact",
    "pharmaceutical contact",
    "buy steroids online contact",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
