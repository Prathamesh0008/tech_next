export const slugifyCompound = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const normalizeCompounds = (productsObject = {}) =>
  Object.entries(productsObject).map(([key, compound]) => {
    const safeName = compound?.name || key;
    const defaultImageKey = safeName
      .toUpperCase()
      .replace(/\s+/g, "_")
      .replace(/[^A-Z0-9_]/g, "");

    return {
      id: key,
      name: safeName,
      shortDescription: compound?.shortDescription || "",
      description: compound?.description || "",
      indication: compound?.indication || "",
      presentation: compound?.presentation || "",
      precautions: compound?.precautions || "",
      contraindications: compound?.contraindications || "",
      faq: compound?.faq || [],
      category: (compound?.category || "Tablets").toLowerCase(),
      cas: compound?.cas || "",
      imageKey: compound?.imageKey || defaultImageKey,
      seoTitle: compound?.seo?.title || compound?.seoTitle || "",
      seoDescription: compound?.seo?.description || compound?.seoDescription || "",
      seoCanonical: compound?.seo?.canonical || compound?.seoCanonical || "",
    };
  });

