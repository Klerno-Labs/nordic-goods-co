"use client";

import { Product } from "@/types";
import { cn } from "@/lib/cn";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={product.image} alt={product.title} className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button className="mt-2 bg-gray-900 text-white py-2 px-4 rounded-lg transition hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;