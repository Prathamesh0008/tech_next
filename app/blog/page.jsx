import BlogClient from "./BlogClient";

export const metadata = {
  title: "Steroids & Testosterone Blog | Nova Techsciences",
  description:
    "Read expert articles on steroids, testosterone supplements, muscle growth, and pharmaceutical-grade performance health.",

  alternates: {
    canonical: "https://www.novatechsciences.com/blog",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "Steroids blog",
    "Testosterone supplements blog",
    "Muscle growth blog",
    "Legal steroids information",
  ],
};

export default function BlogPage() {
  return <BlogClient />;
}
