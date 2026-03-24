import ProductCard from "@/components/sections/ProductCard";

export default function FeaturedGrid() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through featured products here */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}