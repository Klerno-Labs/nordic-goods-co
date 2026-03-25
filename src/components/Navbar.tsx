"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-lg font-bold">
          Nordic Goods Co
        </Link>
        <div className="flex space-x-4">
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;