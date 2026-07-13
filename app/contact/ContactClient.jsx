"use client";

import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Send, Mail } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const COUNTRY_CODES = [
  { code: "+1", country: "US/CA" },
  { code: "+7", country: "RU/KZ" },
  { code: "+20", country: "EG" },
  { code: "+27", country: "ZA" },
  { code: "+30", country: "GR" },
  { code: "+31", country: "NL" },
  { code: "+32", country: "BE" },
  { code: "+33", country: "FR" },
  { code: "+34", country: "ES" },
  { code: "+36", country: "HU" },
  { code: "+39", country: "IT" },
  { code: "+40", country: "RO" },
  { code: "+41", country: "CH" },
  { code: "+43", country: "AT" },
  { code: "+44", country: "UK" },
  { code: "+45", country: "DK" },
  { code: "+46", country: "SE" },
  { code: "+47", country: "NO" },
  { code: "+48", country: "PL" },
  { code: "+49", country: "DE" },
  { code: "+51", country: "PE" },
  { code: "+52", country: "MX" },
  { code: "+53", country: "CU" },
  { code: "+54", country: "AR" },
  { code: "+55", country: "BR" },
  { code: "+56", country: "CL" },
  { code: "+57", country: "CO" },
  { code: "+58", country: "VE" },
  { code: "+60", country: "MY" },
  { code: "+61", country: "AU" },
  { code: "+62", country: "ID" },
  { code: "+63", country: "PH" },
  { code: "+64", country: "NZ" },
  { code: "+65", country: "SG" },
  { code: "+66", country: "TH" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+84", country: "VN" },
  { code: "+86", country: "CN" },
  { code: "+90", country: "TR" },
  { code: "+91", country: "IN" },
  { code: "+92", country: "PK" },
  { code: "+93", country: "AF" },
  { code: "+94", country: "LK" },
  { code: "+95", country: "MM" },
  { code: "+98", country: "IR" },
  { code: "+212", country: "MA" },
  { code: "+213", country: "DZ" },
  { code: "+234", country: "NG" },
  { code: "+351", country: "PT" },
  { code: "+352", country: "LU" },
  { code: "+353", country: "IE" },
  { code: "+354", country: "IS" },
  { code: "+355", country: "AL" },
  { code: "+356", country: "MT" },
  { code: "+357", country: "CY" },
  { code: "+358", country: "FI" },
  { code: "+359", country: "BG" },
  { code: "+370", country: "LT" },
  { code: "+371", country: "LV" },
  { code: "+372", country: "EE" },
  { code: "+373", country: "MD" },
  { code: "+374", country: "AM" },
  { code: "+375", country: "BY" },
  { code: "+376", country: "AD" },
  { code: "+377", country: "MC" },
  { code: "+380", country: "UA" },
  { code: "+381", country: "RS" },
  { code: "+382", country: "ME" },
  { code: "+385", country: "HR" },
  { code: "+386", country: "SI" },
  { code: "+387", country: "BA" },
  { code: "+389", country: "MK" },
  { code: "+420", country: "CZ" },
  { code: "+421", country: "SK" },
  { code: "+971", country: "AE" },
  { code: "+972", country: "IL" },
  { code: "+974", country: "QA" },
  { code: "+977", country: "NP" },
];

export default function ContactClient() {
  const { translations } = useLanguage();

  if (!translations?.contact) return null;

  const t = translations.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? value.replace(/\D/g, "").slice(0, 15) : value;
    setFormData({ ...formData, [name]: nextValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: t.status.sending });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || data?.message || "Failed to submit contact form.");
      }

      const data = await response.json().catch(() => null);
      setStatus({
        type: "success",
        message: data?.message || t.status.success,
      });
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submit error:", error);
      setStatus({ type: "error", message: error.message || t.status.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-auto bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] mt-20">
      <Breadcrumbs />

      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{t.header.title}</h1>
          <p className="text-white/80 mt-2 max-w-2xl">{t.header.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-20">
        <div>
          <h2 className="text-2xl font-bold mb-2">{t.left.title}</h2>
          <p className="text-gray-600">{t.left.description}</p>
          <div className="flex items-center gap-3 mt-4">
            <Mail className="w-5 h-5 text-[#3386bc]" />
            <span>info@novatechsciences.com</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              placeholder={t.form.name.placeholder}
              className="w-full border px-4 py-2 rounded-lg"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              placeholder={t.form.email.placeholder}
              className="w-full border px-4 py-2 rounded-lg"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-label="Country calling code"
                  className="w-28 rounded-l-lg border border-r-0 bg-gray-50 px-2 py-2"
                >
                  {COUNTRY_CODES.map(({ code, country }) => (
                    <option key={`${country}-${code}`} value={code}>
                      {country} {code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{6,15}"
                  minLength={6}
                  maxLength={15}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  autoComplete="tel-national"
                  placeholder={t.form.phone?.placeholder || "Phone number"}
                  aria-label={t.form.phone?.label || "Phone"}
                  title="Enter 6 to 15 digits"
                  className="min-w-0 flex-1 rounded-r-lg border px-4 py-2"
                />
              </div>

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                autoComplete="country-name"
                placeholder={t.form.country?.placeholder || "Enter your country"}
                aria-label={t.form.country?.label || "Country"}
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              placeholder={t.form.message.placeholder}
              className="w-full border px-4 py-2 rounded-lg h-32"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#3386bc] text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? t.status.sending : t.form.submit}
            </button>
          </form>

          {status.message && (
            <p
              className={`mt-4 text-center ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
