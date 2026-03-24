"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _gotcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Honeypot check
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "", _gotcha: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={cn("mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0", {
            "border-red-500": error,
          })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={cn("mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0", {
            "border-red-500": error,
          })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={cn("mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0", {
            "border-red-500": error,
          })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={cn("mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0", {
            "border-red-500": error,
          })}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500 text-sm mt-2">Thank you! We&apos;ll be in touch within 24 hours.</p>}
    </form>
  );
};

export default ContactForm;