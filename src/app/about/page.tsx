import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nordic Goods Co - About Us",
  description: "Learn about Nordic Goods Co and our mission.",
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="mt-4 text-lg text-center">
        At Nordic Goods Co, we are dedicated to curating unique, high-quality products that reflect the beauty and simplicity of Nordic design. Our mission is to provide exceptional customer service and fast shipping, ensuring that you receive your items promptly and in perfect condition.
      </p>
    </section>
  );
}