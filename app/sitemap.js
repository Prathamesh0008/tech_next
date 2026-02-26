import { products } from "@/data/products";
import { countryData } from "@/data/countryContent";
import enBlogs from "@/data/blog/en.json";

const BASE_URL = "https://www.novatechsciences.com";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/anti-counterfeit",
  "/blog",
  "/contact",
  "/uk",
  "/de",
  "/es",
  "/pt",
  "/be",
  "/pl",
  "/nl",
];

const REDIRECT_COUNTRY_ALIASES = new Set([
  "germany",
  "spain",
  "portugal",
  "belgium",
  "poland",
  "netherlands",
]);

const SHORT_COUNTRY_ROUTES = new Set(["uk", "de", "es", "pt", "be", "pl", "nl"]);

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getRouteMeta = (path) => {
  if (path === "/") {
    return { changeFrequency: "weekly", priority: 1.0 };
  }

  if (path === "/about") {
    return { changeFrequency: "monthly", priority: 0.8 };
  }

  if (path === "/anti-counterfeit") {
    return { changeFrequency: "monthly", priority: 0.7 };
  }

  if (path === "/contact") {
    return { changeFrequency: "monthly", priority: 0.8 };
  }

  if (path === "/blog") {
    return { changeFrequency: "weekly", priority: 0.9 };
  }

  if (path.startsWith("/blog/")) {
    return { changeFrequency: "monthly", priority: 0.7 };
  }

  if (path.startsWith("/products/")) {
    return { changeFrequency: "monthly", priority: 0.6 };
  }

  if (
    path === "/uk" ||
    path === "/de" ||
    path === "/es" ||
    path === "/pt" ||
    path === "/be" ||
    path === "/pl" ||
    path === "/nl" ||
    path.startsWith("/usa") ||
    path.startsWith("/slovakia") ||
    path.startsWith("/hungary") ||
    path.startsWith("/greece") ||
    path.startsWith("/italy")
  ) {
    return { changeFrequency: "monthly", priority: 0.6 };
  }

  return { changeFrequency: "monthly", priority: 0.6 };
};

export default function sitemap() {
  const blogs = Array.isArray(enBlogs) ? enBlogs : enBlogs?.blogs || [];

  const productRoutes = products
    .filter((product) => product?.category && product?.id)
    .map(
      (product) =>
        `/products/${product.category.toLowerCase()}/${slugify(product.id)}`
    );

  const blogRoutes = blogs
    .filter((blog) => blog?.id)
    .map((blog) => `/blog/${blog.id}`);

  const countryRoutes = Object.keys(countryData || {})
    .filter(Boolean)
    .filter((country) => !REDIRECT_COUNTRY_ALIASES.has(country))
    .filter((country) => !SHORT_COUNTRY_ROUTES.has(country))
    .map((country) => `/${country}`);

  const allRoutes = [
    ...new Set([
      ...STATIC_ROUTES,
      ...countryRoutes,
      ...productRoutes,
      ...blogRoutes,
    ]),
  ].sort();

  const lastModified = new Date();

  return allRoutes.map((path) => {
    const { changeFrequency, priority } = getRouteMeta(path);

    return {
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
