export const slugifyCompound = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getStrengthFromPresentation = (presentation = "") => {
  const lines = presentation
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const strengthLine = lines.find((line) => /^strength\s*:/i.test(line));
  if (!strengthLine) return "";

  return strengthLine.replace(/^strength\s*:\s*/i, "").trim();
};

const getActiveIngredientFromPresentation = (presentation = "") => {
  const lines = presentation
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const ingredientLine = lines.find((line) => /^active ingredient\s*:/i.test(line));
  if (!ingredientLine) return "";

  return ingredientLine.replace(/^active ingredient\s*:\s*/i, "").trim();
};

const getIngredientNameFromStrength = (strength = "") => {
  if (!strength) return "";

  let name = strength.trim();
  const unitPattern = "mg\\/ml|mcg\\/ml|g\\/ml|mg|mcg|g|iu|ml|%";

  name = name.replace(
    new RegExp(`^\\d+(\\.\\d+)?\\s*(${unitPattern})\\s*`, "i"),
    ""
  );
  name = name.replace(
    new RegExp(`\\s+\\d+(\\.\\d+)?\\s*(${unitPattern})$`, "i"),
    ""
  );
  name = name.replace(/\s+(per|in|total)\b.*$/i, "").trim();

  if (/^(total|multi-compound|varies)\b/i.test(name)) return "";

  return name;
};

export const normalizeCompounds = (productsObject = {}) =>
  (() => {
    const normalized = Object.entries(productsObject).map(([key, compound]) => {
      const safeName = compound?.name || key;
      const strength = getStrengthFromPresentation(compound?.presentation || "");
      const activeIngredient = getActiveIngredientFromPresentation(compound?.presentation || "");
      const ingredientFromStrength = getIngredientNameFromStrength(strength);
      const displayName = activeIngredient || ingredientFromStrength || safeName;
      const baseSlug =
        slugifyCompound(displayName) || slugifyCompound(safeName) || slugifyCompound(key);
      const defaultImageKey = safeName
        .toUpperCase()
        .replace(/\s+/g, "_")
        .replace(/[^A-Z0-9_]/g, "");

      return {
        id: key,
        name: safeName,
        displayName,
        activeIngredient,
        strength,
        baseSlug,
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

    const slugCounts = normalized.reduce((acc, item) => {
      acc[item.baseSlug] = (acc[item.baseSlug] || 0) + 1;
      return acc;
    }, {});

    return normalized.map(({ baseSlug, ...item }) => {
      const slug =
        slugCounts[baseSlug] > 1 ? `${baseSlug}-${slugifyCompound(item.id)}` : baseSlug;
      return { ...item, slug };
    });
  })();
