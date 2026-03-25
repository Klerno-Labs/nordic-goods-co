"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShopFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export function ShopFilters({ categories, selectedCategory, setSelectedCategory }: ShopFiltersProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-md transition-colors",
                selectedCategory === category
                  ? "bg-[#1C1C1C] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$500</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            defaultValue="500"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C1664E]"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Sort By</h3>
        <select className="w-full px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-[#C1664E]">
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
}