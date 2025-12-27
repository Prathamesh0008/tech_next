// scripts/react-snap-routes.js
import fs from "fs";
import { products } from "../src/data/products.js";

const routes = ["/"]; // homepage
products.forEach(p => {
  const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  routes.push(`/products/${p.category}/${slug}`);
});

fs.writeFileSync("react-snap-routes.json", JSON.stringify(routes, null, 2));
console.log("React Snap routes generated:", routes.length);
