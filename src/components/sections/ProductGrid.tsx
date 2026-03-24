"use client";

import ProductCard from "@/components/sections/ProductCard";
import { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    title: "Handcrafted Wooden Bowl",
    price: 45.99,
    category: "Home Decor",
    image: "https://mfile.z.ai/1774356845781-c1ac9479ff0d44cda9e2e20fefb32e37.png?ufileattname=202603242053576bcd61ffe7264f5c_watermark.png",
  },
  {
    id: "2",
    title: "Organic Wool Blanket",
    price: 89.99,
    category: "Textiles",
    image: "https://mfile.z.ai/1774356816182-d4e4bb5c337541f989f657f0d3795278.png?ufileattname=20260324205328769171c60c3e43ef_watermark.png",
  },
  {
    id: "3",
    title: "Ceramic Vase",
    price: 29.99,
    category: "Home Decor",
    image: "https://mfile.z.ai/1774356827431-0c7a3219c20d4158b7ed6dc4fba5e817.png?ufileattname=20260324205339460b3f31a2b041db_watermark.png",
  },
  {
    id: "4",
    title: "Minimalist Desk Lamp",
    price: 59.99,
    category: "Lighting",
    image: "https://mfile.z.ai/1774356835559-4c08a12ab3514894b1d786305a6ada02.png?ufileattname=202603242053473a34f70f6d104e3e_watermark.png",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;