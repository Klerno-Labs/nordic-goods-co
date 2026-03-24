import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Shipping() {
  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-16">Shipping & Returns</h1>
      <p className="text-center px-4">
        We offer fast shipping on all orders, with a 30-day return policy to ensure your satisfaction. If you're not completely happy with your purchase, simply return it within 30 days for a full refund.
      </p>
      <Footer />
    </main>
  );
}