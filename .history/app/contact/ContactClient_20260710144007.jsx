"use client";

import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Send, Mail } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ContactClient() {
  const { translations } = useLanguage();

  if (!translations?.contact) return null;

  const t = translations.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setFormData({ name: "", email: "", message: "" });
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
