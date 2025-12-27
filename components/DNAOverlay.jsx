"use client"

import React from "react";
import Lottie from "lottie-react";
import dnaAnimation from "../public/assets/json-animation/dna.json";

export default function DNAOverlay() {
  return (
    <div className="absolute inset-0 flex justify-center items-center opacity-70">
      <Lottie animationData={dnaAnimation} loop={true} />
    </div>
  );
}
