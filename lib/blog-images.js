const DEMO_IMAGE = "/blog/demo-image.svg";
const GENERIC_BLOG_IMAGE = "/assets/blogs/blog1.jpg";

const BLOG_IMAGE_RULES = [
  { keywords: ["cabernova", "cabergoline"], image: "/assets/products/tablets/CABERNOVA_1.jpg" },
  { keywords: ["drostanova p", "drostanolone propionate"], image: "/assets/products/injectables/DROSTANOVA_P_1.jpg" },
  { keywords: ["primonova 100mgml", "methenolone enanthate"], image: "/assets/products/injectables/PRIMONOVA_1.jpg" },
  { keywords: ["primonova", "metenolone acetate"], image: "/assets/products/tablets/PRIMONOVA_1.jpg" },
  { keywords: ["roxonova"], image: "/assets/products/injectables/ROXONOVA_1.jpg" },
  { keywords: ["stanova-10", "stanova 10"], image: "/assets/products/tablets/STANOVA_10_1.jpg" },
  { keywords: ["stanova-50", "stanova 50"], image: "/assets/products/tablets/STANOVA_50_1.jpg" },
  { keywords: ["stanozolol injectable"], image: "/assets/products/injectables/ROXONOVA_1.jpg" },
  { keywords: ["stanozolol"], image: "/assets/products/tablets/STANOVA_10_1.jpg" },
  { keywords: ["sustova", "testosterone blend"], image: "/assets/products/injectables/SUSTOVA_1.jpg" },
  { keywords: ["trenova a", "trenbolone acetate"], image: "/assets/products/injectables/TRENOVA_A_1.jpg" },
  { keywords: ["trenova e", "trenbolone enanthate"], image: "/assets/products/injectables/TRENOVA_E_1.jpg" },
  { keywords: ["trenova hexa", "trenbolone hexahydrobenzylcarbonate"], image: "/assets/products/injectables/TRENOVAHEXA_1.jpg" },
  { keywords: ["testova pp", "testosterone phenylpropionate"], image: "/assets/products/injectables/TESTOVA_PP_1.jpg" },
  { keywords: ["testova c"], image: "/assets/products/injectables/TESTOVA_C_1.jpg" },
  { keywords: ["testova e"], image: "/assets/products/injectables/TESTOVA_E_1.jpg" },
  { keywords: ["testova p"], image: "/assets/products/injectables/TESTOVA_P_1.jpg" },
  { keywords: ["testova base", "testosterone suspension"], image: "/assets/products/injectables/TESTOVA_BASE_1.jpg" },
  { keywords: ["nova gain c", "testosterone cypionate"], image: "/assets/products/injectables/NOVA_GAIN_C_1.jpg" },
  { keywords: ["nandrova d", "nandrolone decanoate"], image: "/assets/products/injectables/NANDROVA_D_1.jpg" },
  { keywords: ["nandrova p", "nandrolone phenylpropionate"], image: "/assets/products/injectables/NANDROVA_P_1.jpg" },
  { keywords: ["halonova", "fluoxymesterone"], image: "/assets/products/tablets/HALONOVA_1.jpg" },
  { keywords: ["turinova", "chlorodehydromethyltestosterone", "turinabol"], image: "/assets/products/tablets/TURINOVA_1.jpg" },
  { keywords: ["oxydrol", "oxymetholone", "anadrol"], image: "/assets/products/tablets/OXYDROL_1.jpg" },
  { keywords: ["methyldrostanolone", "superdrol", "supernova"], image: "/assets/products/tablets/SUPERNOVA_1.jpg" },
  { keywords: ["telmisartan", "telinova"], image: "/assets/products/tablets/TELINOVA_1.jpg" },
  { keywords: ["spiroclen", "clenbuterol"], image: "/assets/products/tablets/SPIROCLEN_1.jpg" },
  { keywords: ["nova t3", "liothyronine sodium"], image: "/assets/products/tablets/NOVA_T3_1.jpg" },
  { keywords: ["novazole", "anastrozole"], image: "/assets/products/tablets/NOVAZOLE_1.jpg" },
  { keywords: ["oxandrolone", "anavar"], image: "/assets/blogs/blog2.jpg" },
];

function buildSearchText(blog = {}) {
  const content = Array.isArray(blog.content) ? blog.content : [];
  const faqs = Array.isArray(blog.faqs) ? blog.faqs : [];

  return JSON.stringify({
    id: blog.id || "",
    title: blog.title || "",
    intro: blog.intro || "",
    meta: blog.meta || {},
    content,
    faqs,
  }).toLowerCase();
}

export function resolveBlogImage(blog = {}) {
  const currentImage = String(blog.image || "").trim();
  if (currentImage && currentImage !== DEMO_IMAGE) {
    return currentImage;
  }

  const haystack = buildSearchText(blog);
  const match = BLOG_IMAGE_RULES.find(({ keywords }) =>
    keywords.some((keyword) => haystack.includes(keyword))
  );

  return match?.image || currentImage || GENERIC_BLOG_IMAGE;
}

