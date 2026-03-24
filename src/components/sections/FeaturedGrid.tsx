"use client";

import ProductCard from "@/components/sections/ProductCard";
import { Product } from "@/types";
import { cn } from "@/lib/cn";

const featuredProducts: Product[] = [
  {
    id: "1",
    title: "Handcrafted Wooden Bowl",
    price: 45.99,
    category: "Home Decor",
    image: "https://mfile.z.ai/1774356845781-c1ac9479ff0d44cda9e2e20fefb32e37.png?ufileattname=202603242053576bcd61ffe7264f5c_watermark.png",
    badge: "New",
    description: "A beautifully crafted wooden bowl perfect for any dining table.",
  },
  {
    id: "2",
    title: "Organic Wool Blanket",
    price: 89.99,
    category: "Textiles",
    image: "https://mfile.z.ai/1774356816182-d4e4bb5c337541f989f657f0d3795278.png?ufileattname=20260324205328769171c60c3e43ef_watermark.png",
    badge: "Best Seller",
    description: "Stay warm and cozy with our organic wool blanket.",
  },
  {
    id: "3",
    title: "Ceramic Vase",
    price: 29.99,
    category: "Home Decor",
    image: "https://mfile.z.ai/1774356827431-0c7a3219c20d4158b7ed6dc4fba5e817.png?ufileattname=20260324205339460b3f31a2b041db_watermark.png",
    badge: "Sale",
    description: "Add a touch of elegance to your home with this ceramic vase.",
  },
];

const FeaturedGrid = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGrid;