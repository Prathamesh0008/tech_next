import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { blogs } from "../../../data/blogs";

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

  const blog = blogs.find((b) => b.id === id);

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

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: seo?.keywords || [],

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



export default async function BlogDetails({ params }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  // Prepare FAQ JSON-LD dynamically
  const faqJsonLd = blog.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faqs.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">
      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{blog.title}</h1>
          <div className="flex items-center gap-3 text-white/80 mt-2 text-sm">
            <span className="bg-[#e6f4fa]/20 text-white px-3 py-1 rounded-full">Blog</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Updated</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16">
        {blog.image && (
          <div className="px-6 pt-6">
            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        )}

        <div className="p-8 text-left">
          {blog.intro && <p className="text-lg text-gray-600 mb-8">{blog.intro}</p>}

          <article className="space-y-8 text-gray-700 leading-relaxed">
            {blog.content.map((block, idx) => (
              <section key={idx} className="space-y-3">
                {block.heading && <h2 className="text-2xl font-semibold text-gray-800">{block.heading}</h2>}
                {block.text && <p>{block.text}</p>}
              </section>
            ))}
          </article>

          {/* ===== FAQ SECTION ===== */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {blog.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== RELATED POSTS ===== */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((b) => (
            <Link
              key={b.id}
              href={`/blog/${b.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-600">Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== SCHEMA JSON-LD ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.novatechsciences.com/blog/${blog.id}` },
            headline: blog.title,
            description: blog.intro,
            image: blog.image,
            author: { "@type": "Organization", name: "Nova Techsciences", url: "https://www.novatechsciences.com/" },
            publisher: {
              "@type": "Organization",
              name: "Nova Techsciences",
              logo: { "@type": "ImageObject", url: "https://www.novatechsciences.com/_next/image?url=%2Fassets%2Ffooter.png&w=256&q=75" },
            },
            datePublished: blog.datePublished || "",
          }),
        }}
      />

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </div>
  );
}
