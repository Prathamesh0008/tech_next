// scripts/react-snap-routes.js
import fs from "fs";
import path from "path";

const enFile = path.join(process.cwd(), "data", "languages", "products", "en.json");
const enData = JSON.parse(fs.readFileSync(enFile, "utf8"));
const productEntries = Object.entries(enData?.products || {});

const inferCategory = (product, slug) => {
  const explicit = String(product?.category || "").toLowerCase();
  if (explicit === "tablets" || explicit === "injectables") return explicit;

  const legacyId = String(product?.id || "").toLowerCase();
  if (legacyId.startsWith("tab-")) return "tablets";
  if (legacyId.startsWith("inj-")) return "injectables";
  if (legacyId.includes("mgml") || slug.toLowerCase().includes("mgml")) return "injectables";
  return "tablets";
};

const routes = ["/"];
productEntries.forEach(([slug, product]) => {
  const category = inferCategory(product, slug);
  routes.push(`/products/${category}/${slug}`);
});

fs.writeFileSync("react-snap-routes.json", JSON.stringify(routes, null, 2));
console.log("React Snap routes generated:", routes.length);
