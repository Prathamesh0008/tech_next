"use client";

import { useEffect, useState } from "react";

const CRITICAL_IMAGES = [
  "/bannernova.svg",
  "/world-map-blue.png",
  "/assets/banners/1.jpg",
  "/assets/banners/2.jpg",
  "/assets/banners/3.jpg",
  "/assets/banners/4.jpg",
  "/assets/smallBanners/Tablets-box.png",
  "/assets/smallBanners/injection-box.png",
];

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
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

    const preloadCritical = Promise.all(CRITICAL_IMAGES.map(preloadImage));
    const fallbackTimeout = new Promise((resolve) => setTimeout(resolve, 3500));

    Promise.race([Promise.all([waitForWindowLoad, preloadCritical]), fallbackTimeout]).then(
      () => {
        if (!mounted) return;
        setReady(true);
      }
    );

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

