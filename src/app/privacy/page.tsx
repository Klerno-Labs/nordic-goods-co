import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nordic Goods Co",
  description: "Our privacy policy regarding the collection, use, and protection of your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-6 py-20 pt-28">
      <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-600 max-w-3xl">
        <p className="mb-4">
          Last updated: March 25, 2026
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us when you create an account, make a purchase, subscribe to our newsletter, or contact our customer service team.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to process transactions, send you technical notices and support messages, respond to your comments and questions, and provide customer service.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
        </p>
        <Link href="/" className="inline-block text-primary font-semibold hover:underline mt-8">
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}