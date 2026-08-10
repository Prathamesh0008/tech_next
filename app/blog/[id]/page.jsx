import BlogDetailsClient from "./BlogDetailsClient";
import { readBlogs } from "@/lib/blog-store";
import { turinovaBlogSchema } from "@/lib/schema/turinovaBlogSchema";
import { trenovaBlogSchema } from "@/lib/schema/trenovaBlogSchema";
import { testovaCBlogSchema } from "@/lib/schema/testovaCBlogSchema";
import { additionalBlogSchemas } from "@/lib/schema/additionalBlogSchemas";

const CUSTOM_BLOG_SCHEMAS = {
  "turinova-chlorodehydromethyltestosterone-guide": turinovaBlogSchema,
  "trenova-a-trenbolone-acetate-guide": trenovaBlogSchema,
  "testova-c-testosterone-cypionate-guide": testovaCBlogSchema,
  ...additionalBlogSchemas,
};

export async function generateMetadata({ params }) {
  const { id } = await params;

 const SEO_MAP = {
    "best-steroids-muscle-growth-2025": {
      title: "Best Steroids for Muscle Growth in 2025 ",
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
    "what-is-testosterone-importance-mens-health": {
      title: "What Is Testosterone and Why Is It So Important for Men’s Health?",
      keywords: [
        "what is testosterone",
        "testosterone importance",
        "men's health hormones",
        "low testosterone symptoms",
        "testosterone and muscle growth",
      ],
    },
    "testosterone-levels-too-low-or-too-high": {
      title: "What Happens If Testosterone Levels Are Too Low or Too High?",
      keywords: [
        "low testosterone",
        "high testosterone risks",
        "testosterone imbalance",
        "hormonal balance men",
        "testosterone symptoms",
      ],
    },
    "novazole-tablets-anastrozole-cas-120511-73-1": {
      title: "Novazole Tablets (Anastrozole) CAS 120511-73-1 | Nova Techsciences",
      keywords: [
        "novazole tablets",
        "anastrozole cas 120511-73-1",
        "anastrozole tablets",
        "aromatase inhibitor tablets",
        "pharmaceutical anastrozole manufacturer",
        "nova techsciences novazole",
      ],
    },
    "nova-gain-c-testosterone-cypionate-guide-netherlands": {
      title: "Nova Gain C (Testosterone Cypionate) Guide 2026 | Benefits, Uses, Dosage & Netherlands Market",
      keywords: [
        "nova gain c",
        "testosterone cypionate guide",
        "injectable testosterone netherlands",
        "testosterone cypionate benefits",
        "nova gain c review",
        "long acting testosterone ester"
      ]
    },
    "testova-pp-testosterone-phenylpropionate-netherlands-guide-2026": {
      title: "Testova PP (Testosterone Phenylpropionate) CAS 1255-49-8 | Complete Netherlands Guide 2026",
      keywords: [
        "testova pp",
        "testosterone phenylpropionate",
        "cas 1255-49-8",
        "testosterone phenylpropionate netherlands",
        "testova pp review",
        "medium acting testosterone ester"
      ]
    },
    "cabernova-cabergoline-tablets-pct-prolactin-control-2026": {
      title: "Cabernova (Cabergoline) Guide | CAS 81409-90-7 | Nova Techsciences",
      keywords: [
        "Cabernova",
        "Cabergoline",
        "CAS 81409-90-7",
        "pharmaceutical manufacturing standards",
        "pharmaceutical quality assurance",
        "Nova Techsciences",
        "Cabergoline guide"
      ]
    },
    "drostanova-p-drostanolone-propionate-guide": {
      title: "Drostanova P (Drostanolone Propionate) | Complete Guide to Lean Muscle Development",
      keywords: [
        "Drostanova P",
        "Drostanolone Propionate",
        "lean muscle preservation",
        "physique enhancement",
        "injectable performance compounds",
        "Nova Techsciences drostanolone"
      ]
    },
    "primonova-metenolone-acetate-guide": {
      title: "Primonova (Metenolone Acetate) Guide | CAS 434-05-9 | Nova Techsciences",
      keywords: [
        "Primonova",
        "Metenolone Acetate",
        "CAS 434-05-9",
        "pharmaceutical manufacturing quality",
        "Nova Techsciences Metenolone",
        "pharmaceutical tablet guide"
      ]
    },
    "nova-t3-liothyronine-sodium-t3-guide": {
      title: "Nova-T3 (Liothyronine Sodium T3) | CAS 55-06-1 | Complete Guide by Nova Techsciences",
      keywords: [
        "Nova-T3",
        "Liothyronine Sodium",
        "T3 CAS 55-06-1",
        "pharmaceutical T3 guide",
        "Nova Techsciences thyroid support",
        "quality pharmaceutical manufacturing"
      ]
    },
  };

  const { blogs: blogsArray } = await readBlogs("en");
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
  const customSchema = CUSTOM_BLOG_SCHEMAS[id];
  const customFaqSchema = customSchema?.["@graph"].find(
    (entity) => entity["@type"] === "FAQPage"
  );
  const { blogs } = await readBlogs("en");
  const initialBlog = blogs.find((blog) => blog.id === id) || null;
  const initialRelated = blogs.filter((blog) => blog.id !== id).slice(0, 3);

  return (
    <BlogDetailsClient
      id={id}
      initialBlog={initialBlog}
      initialRelated={initialRelated}
      customFaqSchema={customFaqSchema}
    />
  );
}
