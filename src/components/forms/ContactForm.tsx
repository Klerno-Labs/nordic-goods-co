"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", _gotcha: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Honeypot check
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) setIsSuccess(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" id="name" required className="border rounded-md w-full p-2" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" required className="border rounded-md w-full p-2" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">Phone</label>
        <input type="tel" id="phone" required className="border rounded-md w-full p-2" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" required className="border rounded-md w-full p-2" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-primary text-white px-4 py-2 rounded-lg">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500 mt-2">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}