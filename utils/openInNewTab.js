export const handleCtrlClick = (e, url) => {
  if (e.ctrlKey || e.metaKey || e.button === 1) {
    e.preventDefault();
    window.open(url, "_blank");
    return true;  // 👈 IMPORTANT
  }
  return false;
};
