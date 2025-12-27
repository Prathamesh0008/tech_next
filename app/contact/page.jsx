"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Send, Mail } from "lucide-react";

export default function ContactUs() {
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
    setStatus({ type: "", message: "Sending..." });

    const SERVICE_ID = "service_7a3kidi";
    const ADMIN_TEMPLATE = "template_82kkgne";
    const USER_AUTOREPLY_TEMPLATE = "template_siria1f";
    const PUBLIC_KEY = "8iM3J39lZhLQbudet";

    const data = {
      ...formData,
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE, data, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, USER_AUTOREPLY_TEMPLATE, data, PUBLIC_KEY);

      setStatus({
        type: "success",
        message:
          "✅ Message sent successfully! We’ve emailed you a confirmation.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "❌ Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <div className="min-h-auto bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8] mt-20">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Contact Us</h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            We’d love to hear from you — whether you have a question about our
            products, partnership opportunities, or anything else.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-20">
        {/* LEFT — Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            NovaTech Sciences Pvt. Ltd.
            <br />
            We are always here to assist you with your queries, collaborations,
            or feedback. You can reach us via the form or contact details below.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-[#3386bc]" />
              <span>info@novatechsciences.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-[#3386bc] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#3386bc] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4bb2e5] hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {status.message && (
            <p
              className={`mt-4 text-sm font-medium text-center ${
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
