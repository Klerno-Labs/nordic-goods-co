"use client";

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="border border-gray-300 p-2 w-full rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="border border-gray-300 p-2 w-full rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="border border-gray-300 p-2 w-full rounded-md" />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-accent text-white py-2 px-4 rounded-lg">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <p className="mt-4 text-green-600">Thank you! We&apos;ll be in touch soon.</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
};