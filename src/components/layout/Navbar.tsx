"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Nordic Goods Co</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/collections" className="hover:underline">Collections</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/shipping" className="hover:underline">Shipping & Returns</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;