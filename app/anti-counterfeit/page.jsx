"use client";

import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export default function AntiCounterfeit() {
  const [serialNumber, setSerialNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (serialNumber.trim() && authCode.trim()) {
      setResult({
        status: "success",
        message: "✅ This product appears to be genuine and verified.",
      });
    } else {
      setResult({
        status: "error",
        message:
          "⚠️ Invalid or incomplete data. Please check your inputs.",
      });
    }
  };

  return (
    <>
      {/* Basic SEO tags – optional, these will be rendered in body but are safe */}
      <head>
        <title>NovaTech Anti-Counterfeit | Verify Genuine Steroid Products</title>
        <meta
          name="description"
          content="Ensure your NovaTech Sciences steroid products are authentic. Learn how our anti-counterfeit system protects customers with secure verification and advanced tracking technology."
        />
        <meta
          name="keywords"
          content="NovaTech product validation, genuine steroid product verification, NovaTech anti counterfeit"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://novatechsciences.com/anti-counterfeit"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://novatechsciences.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://novatechsciences.com/blog",
                },
              ],
            }),
          }}
        />
      </head>

      <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] mt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
          <div className="max-w-5xl mx-auto px-6">
            <Breadcrumbs />
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Anti-Counterfeit Verification
            </h1>
            <p className="text-white/80 mt-2 max-w-2xl">
              Verify the authenticity of your NovaTech product using the
              manufacturing and authentication details printed on your carton.
            </p>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 text-center border border-gray-100">
          <ShieldCheck className="w-14 h-14 text-[#3386bc] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Product Verification Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mfg Date */}
            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Mfg. Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., 02 / 2022 or before"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition"
                required
              />
            </div>

            {/* Serial Number */}
            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Serial Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                placeholder="Enter serial number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition uppercase"
                required
              />
            </div>

            {/* Authentication Code */}
            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Authentication Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                placeholder="Enter authentication code"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition uppercase"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3386bc] hover:bg-[#4bb2e5] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Verification Result */}
          {result && (
            <div
              className={`mt-6 p-4 rounded-lg font-medium ${
                result.status === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {result.message}
            </div>
          )}

          {/* Note & Warning Section */}
          <div className="mt-10 text-left space-y-4 text-gray-700">
            <div className="bg-[#f7fafc] border-l-4 border-[#3386bc] p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">Note:</h3>
              <p className="text-sm leading-relaxed">
                Each product can only be authenticated <strong>once</strong>.
                All fields are <strong>case sensitive</strong>. Please enter the
                exact serial number and authentication code printed on your pack.
              </p>
            </div>

            <div className="bg-[#fff7f5] border-l-4 border-red-500 p-4 rounded">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Warning:
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We strongly discourage purchasing loose ampoules, trays, or
                    blisters without cartons. Genuine NovaTech products are
                    always supplied in tamper-proof cartons with intact silver
                    scratch fields, except Oral Strips which do not include
                    authentication features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-10" />
      </div>
    </>
  );
}
