function normalizeCategory(category = "") {
  return String(category || "").trim().toLowerCase();
}

function normalizeImageKey(imageKey = "") {
  return String(imageKey || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");
}

export function isLocalAssetPath(src = "") {
  return typeof src === "string" && src.startsWith("/");
}

export function getLocalProductImagePath(category, imageKey, index = 1) {
  const safeCategory = normalizeCategory(category);
  const safeImageKey = normalizeImageKey(imageKey);

  if (!safeCategory || !safeImageKey) {
    return "/products/placeholder.jpg";
  }

  return `/assets/products/${safeCategory}/${safeImageKey}_${index}.jpg`;
}

export function getLocalProductImages(category, imageKey, count = 3) {
  const total = Number.isFinite(count) && count > 0 ? count : 3;
  return Array.from({ length: total }, (_, idx) =>
    getLocalProductImagePath(category, imageKey, idx + 1)
  );
}

export function resolveStoredProductImages(category, imageKey, storedImages = []) {
  const localStoredImages = (Array.isArray(storedImages) ? storedImages : [])
    .map((img) => {
      if (typeof img === "string") return img;
      if (img && typeof img.url === "string") return img.url;
      return "";
    })
    .filter(isLocalAssetPath);

  if (localStoredImages.length > 0) {
    return localStoredImages;
  }

  return getLocalProductImages(category, imageKey, storedImages.length || 3);
}
