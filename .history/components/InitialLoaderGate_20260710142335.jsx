"use client";

import { useEffect, useState } from "react";

const CRITICAL_IMAGES = [
  "/bannernova-force-v3.svg?v=1",
  "/assets/logolight.png",
  "/assets/logodark.png",
  "/assets/banners/1.jpg",
  "/assets/banners/2.jpg",
  "/assets/banners/3.jpg",
  "/assets/banners/4.jpg",
  "/assets/smallBanners/Tablets-box.png",
  "/assets/smallBanners/Injectable-box.png",
];

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });

const waitForFonts = () =>
  new Promise((resolve) => {
    if (typeof document === "undefined" || !document.fonts?.ready) {
      resolve(true);
      return;
    }

    document.fonts.ready.then(() => resolve(true)).catch(() => resolve(true));
  });

export default function InitialLoaderGate({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const waitForWindowLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
        return;
      }

      const done = () => {
        window.removeEventListener("load", done);
        resolve(true);
      };

      window.addEventListener("load", done, { once: true });
    });

    const preloadCritical = Promise.allSettled(CRITICAL_IMAGES.map(preloadImage));
    const preloadBanner = preloadImage("/bannernova-force-v3.svg?v=1");
    const waitMinLoader = new Promise((resolve) => setTimeout(resolve, 900));
    const hardTimeout = new Promise((resolve) => setTimeout(resolve, 8000));

    Promise.race([
      Promise.all([
        waitForWindowLoad,
        waitForFonts(),
        preloadCritical,
        preloadBanner,
        waitMinLoader,
      ]),
      hardTimeout,
    ]).then(() => {
      if (!mounted) return;
      setReady(true);
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d8e7f5] border-t-[#18487d]" />
          <p className="text-sm font-medium text-[#18487d]">Loading website...</p>
        </div>
      </div>
    );
  }

  return children;
}
