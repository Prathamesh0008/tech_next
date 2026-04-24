export function getOptimizedImageUrl(url, { width, quality = "auto" } = {}) {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) {
    return url;
  }

  const parts = ["f_auto", `q_${quality}`, "dpr_auto"];
  if (width) parts.push(`w_${width}`, "c_limit");

  return url.replace("/image/upload/", `/image/upload/${parts.join(",")}/`);
}
