import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/sections/ProductGrid";

export default function Shop() {
  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-16">Shop Our Collection</h1>
      <ProductGrid />
      <Footer />
    </main>
  );
}