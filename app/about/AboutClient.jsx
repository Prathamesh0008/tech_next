"use client";

import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import AboutBackground from "../../components/AboutBackground";
import DNAOverlay from "../../components/DNAOverlay";

export default function AboutClient() {
  return (
    <div className="max-w-full mx-auto mt-20 text-center">
      <Breadcrumbs />
      <AboutBackground />
      <DNAOverlay />
    </div>
  );
}
