import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nordic Goods Co - FAQ",
  description: "Frequently asked questions about Nordic Goods Co.",
};

export default function FAQPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      <p className="mt-4 text-lg text-center">
        Here you can find answers to the most common questions about our products and services.
      </p>
    </section>
  );
}