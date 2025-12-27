import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Novatech Sciences – Premium Steroids & Performance Medicines Online",
  description:
    "Buy high-quality steroid medicines and performance-enhancing products online in India. Novatech Sciences provides trusted formulations, anti-counterfeit protection, and premium-grade results.",
  keywords: [
    "best steroids medicine online India",
    "buy steroids online India",
    "Novatech Sciences",
    "pharma-grade steroids",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://novatechsciences.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>{children}<Footer/></body>
    </html>
  );
}
