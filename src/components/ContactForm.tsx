"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="border-b border-gray-300 focus:border-[#C1664E] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border-b border-gray-300 focus:border-[#C1664E] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="border-b border-gray-300 focus:border-[#C1664E] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="border-b border-gray-300 focus:border-[#C1664E] focus:outline-none"
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-[#C1664E] text-white py-2 px-4 rounded-lg">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
};

export default ContactForm;