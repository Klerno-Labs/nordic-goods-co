"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShopFilters } from "@/components/sections/Shop/ShopFilters";

// Mock Product Data
const mockProducts = [
  { id: 1, title: "Minimalist Ceramic Bowl", price: 45.00, category: "Home Decor", image: "https://mfile.z.ai/1774396975088-536d0cf7a987441a97ff5c81859e70e2.png?ufileattname=20260325080247b2b61b84ac1d47b7_watermark.png" },
  { id: 2, title: "Textured Wool Throw", price: 120.00, category: "Textiles", image: "https://mfile.z.ai/1774396975153-8a91dcd35b31468eb47aab6b68be805c.png?ufileattname=202603250802479baec5b1f7f74462_watermark.png" },
  { id: 3, title: "Hand-Thrown Vase", price: 85.00, category: "Home Decor", image: "https://mfile.z.ai/1774396940350-66ef252088f44338aabb4561cd2f0755.png?ufileattname=20260325080213634edaeecaed4c6d_watermark.png" },
  { id: 4, title: "Oak Serving Tray", price: 95.00, category: "Kitchen", image: "https://mfile.z.ai/1774396967440-232d65c596dc430a8845d76492c427d2.png?ufileattname=202603250802390f7fc68a094b49b8_watermark.png" },
  { id: 5, title: "Ceramic Mug Set", price: 55.00, category: "Kitchen", image: "https://mfile.z.ai/1774396940874-650981f265f540dc945b4a29905d30e9.png?ufileattname=2026032508021269d5f5a4aadd4a32_watermark.png" },
  { id: 6, title: "Woven Storage Basket", price: 70.00, category: "Storage", image: "https://mfile.z.ai/1774396959320-baf30065b8fc487f94904bff55aa2626.png?ufileattname=20260325080231904b8eee03954367_watermark.png" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Home Decor", "Textiles", "Kitchen", "Storage"];

  const filteredProducts = selectedCategory === "All"
    ? mockProducts
    : mockProducts.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Shop Collection</h1>
          <p className="text-lg text-gray-600">Curated essentials for a modern home.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-28">
              <ShopFilters categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4 aspect-[3/4]">
                      <img
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={800}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 font-medium mt-1">${product.price.toFixed(2)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}