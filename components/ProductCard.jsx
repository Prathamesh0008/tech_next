"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import { handleCtrlClick } from "../utils/openInNewTab";
import { getTranslatedProduct } from "../utils/getTranslatedProduct";

export default function ProductCard({ product }) {
  const router = useRouter();
  const { translations } = useLanguage();
  const [loading, setLoading] = useState(true);

  // 🔑 Resolve translated product safely
  const translated = getTranslatedProduct(
    translations?.products,
    product.id
  );

  const displayName = translated?.name || product.name;
  const displayDesc =
    translated?.shortDescription ||
    product.shortDescription ||
    product.description?.slice(0, 80) + "...";

  const productURL = `/products/${product.category.toLowerCase()}/${product.id}`;

  const handleClick = (e) => {
    if (handleCtrlClick(e, productURL)) return;
    router.push(productURL);
  };

  const imageKey =
    translated?.imageKey || product.imageKey || product._baseName;

  return (
    <div
      onClick={handleClick}
      className="flex flex-col bg-white shadow-sm hover:shadow-lg p-4 cursor-pointer border border-gray-100 hover:scale-[1.02] transition"
    >
      {/* IMAGE */}
      <div className="w-full h-44 mb-3 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-[#18487d] border-t-[#3386bc] rounded-full animate-spin" />
          </div>
        )}

        <img
          src={`/products/${product.category.toLowerCase()}/${imageKey}_1.jpg`}
          alt={displayName}
          onLoad={() => setLoading(false)}
          onError={(e) => (e.currentTarget.src = "/products/placeholder.jpg")}
          className={`w-full h-full object-contain transition-opacity ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* TEXT */}
      <h3 className="text-lg font-semibold text-gray-800">
        {displayName}
      </h3>

      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {displayDesc}
      </p>

      <div className="mt-3 text-sm text-[#3386bc] font-semibold">
        CAS: {translated?.cas || product.cas || "N/A"}
      </div>
    </div>
  );
}



// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { handleCtrlClick } from "../utils/openInNewTab";

// export default function ProductCard({ product }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   /**
//    * 🔒 IMPORTANT:
//    * - slug must ALWAYS be generated from ORIGINAL English name
//    * - never from translated name
//    */
//   const slugify = (name) => {
//     if (!name) return "";
//     return name
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-+|-+$/g, "");
//   };

//   /**
//    * ✅ We expect:
//    * product._baseName  → original English name (stable)
//    * product.name       → translated name (display only)
//    */
//   const baseName = product._baseName || product.name;
//   const productSlug = slugify(baseName);

// const productURL = `/products/${product.category.toLowerCase()}/${product.id}`;


//   const handleClick = (e) => {
//     if (handleCtrlClick(e, productURL)) return;
//     router.push(productURL);
//   };

//   // ✅ Image path should also use BASE name
//   const getProductImage = () => {
//     if (product.image) return product.image;

//     const slug = baseName
//       .toUpperCase()
//       .replace(/\s+/g, "")
//       .replace(/[^A-Z0-9]/g, "");

//     return `/products/${product.category.toLowerCase()}/${slug}_1.jpg`;
//   };

//   const image = getProductImage();

//   return (
//     <div
//       onClick={handleClick}
//       className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-all p-4 text-center h-full cursor-pointer overflow-hidden hover:scale-[1.02] duration-300 border border-gray-100"
//     >
//       {/* IMAGE */}
//       <div className="w-full h-44 overflow-hidden mb-3 relative bg-white">
//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-white/40">
//             <div className="w-6 h-6 border-4 border-[#18487d] border-t-[#3386bc] rounded-full animate-spin" />
//           </div>
//         )}

//         <img
//           src={image}
//           alt={product.name}
//           loading="lazy"
//           onLoad={() => setLoading(false)}
//           onError={(e) => {
//             e.currentTarget.src = "/products/placeholder.jpg";
//             setLoading(false);
//           }}
//           className={`w-full h-full object-contain transition-opacity duration-500 ${
//             loading ? "opacity-0" : "opacity-100"
//           }`}
//         />
//       </div>

//       {/* TEXT */}
//       <div className="flex-1 flex flex-col justify-between">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//           {product.name}
//         </h3>

//         <p className="text-sm text-gray-600 mt-2 line-clamp-2">
//           {product.shortDescription ||
//             product.description?.substring(0, 80) + "..."}
//         </p>

//         <div className="mt-3 pt-3 border-t border-gray-100">
//           <span className="text-xs text-gray-500 font-medium">
//             Category: {product.category}
//           </span>

//           <div className="mt-1">
//             <span className="text-sm text-[#3386bc] font-semibold">
//               CAS: {product.cas || "N/A"}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
