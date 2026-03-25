import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Nordic Goods Co",
  description: "Terms and conditions for purchasing goods from Nordic Goods Co.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-6 py-20 pt-28">
      <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-lg text-gray-600 max-w-3xl">
        <p className="mb-4">
          Last updated: March 25, 2026
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using Nordic Goods Co, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Product Information</h2>
        <p className="mb-4">
          While we strive for accuracy, we do not warrant that descriptions, photos, or other content are accurate, complete, reliable, current, or error-free.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Orders and Payments</h2>
        <p className="mb-4">
          You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.
        </p>
        <Link href="/" className="inline-block text-primary font-semibold hover:underline mt-8">
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}