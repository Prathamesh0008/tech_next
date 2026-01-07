export function getTranslatedProduct(productsMap, productId) {
  if (!productsMap || !productId) return null;

  // Fast path (if someday keys match)
  if (productsMap[productId]) {
    return productsMap[productId];
  }

  // Resolve by internal id
  return Object.values(productsMap).find(
    (p) => p.id === productId
  ) || null;
}
