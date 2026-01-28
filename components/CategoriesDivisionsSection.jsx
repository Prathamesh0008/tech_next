"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CategoriesDivisionsSection() {
  const router = useRouter();

  // Handler for CTRL+Click to open in new tab
  function handleCtrlClick(e, path) {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      window.open(path, "_blank");
      return;
    }
    router.push(path);
  }

  return (
    <section className="my-12 md:my-16">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-transparent to-[#18487d]"></div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3386bc]">
            Our Therapeutic Expertise
          </span>
          <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-l from-transparent to-[#3386bc]"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 px-2">
          Pharmaceutical Divisions
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#18487d] to-[#3386bc] mx-auto mb-5 sm:mb-6 rounded-full"></div>

        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4">
          Novatech Sciences specializes in two core pharmaceutical divisions — precision-formulated Tablets and Injectables, designed to meet the highest standards of global healthcare and manufacturing excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto px-0 sm:px-4">
        {/* Tablets Division */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#18487d] via-transparent to-[#4bb2e5] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-300"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-[#18487d]/90 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Tablets
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#18487d] text-xs font-semibold backdrop-blur-sm">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GMP Certified
                </span>
              </div>

              <img
                src="/assets/smallBanners/Tablets-box.png"
                alt="Tablets Division"
                className="w-full h-56 sm:h-72 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#18487d]/90 via-[#18487d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Explore Our Tablets
                  </h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Precision coating technology
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Controlled release mechanisms
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Bioavailability optimization
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Research-grade formulations
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Quality-controlled production
                    </li>
                  </ul>

                  <button
                    onClick={(e) => handleCtrlClick(e, "/products/tablets")}
                    className="mt-5 sm:mt-6 inline-flex items-center bg-white text-[#18487d] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6f3fa] transition-all duration-300 group/btn"
                  >
                    <span>Explore Tablets</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-[#18487d] to-[#4bb2e5] rounded-full mr-3"></div>
                Tablets Division
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Advanced oral solid dosage forms featuring hormone therapies, anabolic compounds, and specialized therapeutic formulations. Each tablet is engineered with precision coating technology and bioavailability optimization for consistent therapeutic outcomes.
              </p>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Key Features
                  </span>
                  <span className="text-xs text-[#18487d] font-semibold">
                    ✓ Quality Assured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Injectables Division */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3386bc] via-transparent to-[#67c1f5] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-300"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-[#3386bc]/90 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Injectables
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#3386bc] text-xs font-semibold backdrop-blur-sm">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sterile Facility
                </span>
              </div>

              <img
                src="/assets/smallBanners/Injectable-box.png"
                alt="Injectables Division"
                className="w-full h-56 sm:h-72 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3386bc]/90 via-[#3386bc]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Explore Our Injectables
                  </h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      ISO-certified sterile production
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      High-purity formulations
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Precise dosage accuracy
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Bacterial endotoxin control
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Sterility assurance protocols
                    </li>
                  </ul>

                  <button
                    onClick={(e) => handleCtrlClick(e, "/products/injectables")}
                    className="mt-5 sm:mt-6 inline-flex items-center bg-white text-[#3386bc] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6f4fa] transition-all duration-300 group/btn"
                  >
                    <span>Explore Injectables</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-[#3386bc] to-[#67c1f5] rounded-full mr-3"></div>
                Injectables Division
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Premium sterile injectable formulations including testosterone blends, anabolic esters, and specialized therapeutic solutions. Manufactured in ISO-certified sterile facilities ensuring maximum purity, safety, and precise dosage accuracy.
              </p>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Key Features
                  </span>
                  <span className="text-xs text-[#3386bc] font-semibold">
                    ✓ Sterility Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesDivisionsSection;