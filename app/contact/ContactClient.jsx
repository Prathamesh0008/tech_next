"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
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

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: t.status.sending });

    try {
      await emailjs.send(
        "service_7a3kidi",
        "template_82kkgne",
        formData,
        "8iM3J39lZhLQbudet"
      );

      await emailjs.send(
        "service_7a3kidi",
        "template_siria1f",
        formData,
        "8iM3J39lZhLQbudet"
      );

      setStatus({ type: "success", message: t.status.success });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ type: "error", message: t.status.error });
    }
  };

  return (
    <div className="min-h-auto bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] mt-20">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {t.header.title}
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            {t.header.subtitle}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-20">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{t.left.title}</h2>
          <p className="text-gray-600">{t.left.description}</p>
          <div className="flex items-center gap-3 mt-4">
            <Mail className="w-5 h-5 text-[#3386bc]" />
            <span>info@novatechsciences.com</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t.form.name.placeholder}
              className="w-full border px-4 py-2 rounded-lg"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t.form.email.placeholder}
              className="w-full border px-4 py-2 rounded-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t.form.message.placeholder}
              className="w-full border px-4 py-2 rounded-lg h-32"
            />

            <button
              type="submit"
              className="bg-[#3386bc] text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> {t.form.submit}
            </button>
          </form>

          {status.message && (
            <p
              className={`mt-4 text-center ${
                status.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
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
