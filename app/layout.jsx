import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  alternates: {
    languages: {
      en: "https://novatechsciences.com/en/",
      es: "https://novatechsciences.com/es/",
      fr: "https://novatechsciences.com/fr/",
      de: "https://novatechsciences.com/de/",
      "x-default": "https://novatechsciences.com/",
    },
  },
  title: "Novatech Sciences – Premium Steroids & Performance Medicines Online",
  description:
    "Buy high-quality steroid medicines and performance-enhancing products online in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
