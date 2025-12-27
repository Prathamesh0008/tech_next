"use client"

import React from "react";
import Link from "next/link";

export default function CategoryCard({ name, image, link }) {
  return (
    <Link
      to={link}
      className="flex flex-col items-center bg-white shadow hover:shadow-lg transition p-4 rounded-lg"
    >
      <img src={image} alt={name} className="w-20 h-20 object-cover mb-3" />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    </Link>
  );
}
