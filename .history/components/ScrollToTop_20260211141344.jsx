"use client"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top whenever the route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
