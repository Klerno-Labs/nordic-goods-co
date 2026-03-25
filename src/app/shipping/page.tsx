import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nordic Goods Co - Shipping & Returns",
  description: "Information about shipping and returns at Nordic Goods Co.",
};

export default function ShippingPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center">Shipping & Returns</h1>
      <p className="mt-4 text-lg text-center">
        We offer fast shipping on all orders. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.
      </p>
    </section>
  );
}