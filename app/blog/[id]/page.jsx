import { notFound } from "next/navigation";
import enBlogs from "../../../data/blog/en.json";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateMetadata({ params }) {
  const { id } = await params;

 const SEO_MAP = {
    "best-steroids-muscle-growth-2025": {
      title: "Best Steroids for Muscle Growth in 2025 | Nova Techsciences",
      keywords: [
        "Best Steroids for Muscle Growth in 2025",
        "best steroids online",
        "best legal steroids",
        "muscle steroid pills",
        "legal steroids for muscle growth",
        "best anabolic muscle builder",
        "steroids in netherlands",
      ],
    },

    "why-testosterone-levels-are-dropping-worldwide": {
      title: "Why Testosterone Levels Are Dropping Worldwide",
      keywords: [
        "testosterone levels dropping",
        "low testosterone causes",
        "testosterone decline",
        "testosterone deficiency",
        "testosterone supplements",
        "best testosterone booster",
      ],
    },

    "best-testosterone-supplements-for-men": {
      title: "Best Testosterone Supplements for Men | Nova Techsciences",
      keywords: [
        "Best Testosterone Supplements for Men",
        "best testosterone supplements",
        "best testosterone booster",
        "testosterone booster for men over 50",
        "supplements to increase testosterone",
        "buy testosterone online",
      ],
    },

    "pharmaceutical-grade-steroids-quality-safety-compliance": {
      title: "Pharmaceutical Grade Steroids: Quality, Safety & Compliance",
      keywords: [
        "pharmaceutical grade steroids",
        "safe steroids",
        "WHO-GMP steroids",
        "legal steroids for muscle growth USA",
        "legal steroids for muscle growth Spain",
        "steroid quality standards",
      ],
    },

    "testosterone-products-manufactured-under-who-gmp-standards": {
      title: "WHO-GMP Testosterone Manufacturing Standards",
      keywords: [
        "WHO-GMP testosterone",
        "pharmaceutical grade testosterone",
        "certified testosterone products",
        "testosterone manufacturing standards",
        "Best Testosterone Supplements in Netherlands",
      ],
    },

    "testosterone-therapy-benefits-energy-mood-muscle-growth": {
      title: "Testosterone Therapy Benefits for Energy, Mood & Muscle Growth",
      keywords: [
        "testosterone therapy benefits",
        "testosterone energy",
        "testosterone mood",
        "testosterone muscle growth",
        "testosterone treatment",
        "testosterone supplements benefits",
      ],
    },
  };

  const blogsArray = enBlogs.blogs || enBlogs;
  const blog = blogsArray.find((b) => b.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found | Nova Techsciences",
      description: "The requested blog article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const seo = SEO_MAP[id];
  const canonical = `https://www.novatechsciences.com/blog/${id}`;

  return {
    title: seo?.title || blog.meta?.title || blog.title,
    description: blog.meta?.description || blog.intro,

    keywords: seo?.keywords || [],

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: seo?.title || blog.meta?.title || blog.title,
      description: blog.meta?.description || blog.intro,
      url: canonical,
      siteName: "Nova Techsciences",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.title || blog.meta?.title || blog.title,
      description: blog.meta?.description || blog.intro,
      images: [blog.image],
    },
  };
}


export default async function Page({ params }) {
  const { id } = await params;
  return <BlogDetailsClient id={id} />;
}
