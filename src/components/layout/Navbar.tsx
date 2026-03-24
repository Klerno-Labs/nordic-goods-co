"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-lg font-bold text-gray-900">
          Nordic Goods Co
        </Link>
        <div className="hidden md:flex space-x-4">
          {siteConfig.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-900 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="p-2">
            <Search className="h-5 w-5 text-gray-900" />
          </button>
          <Link href="/cart" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5 text-gray-900" />
          </Link>
          <button aria-label="Open menu" onClick={toggleMenu} className="md:hidden">
            <Menu className="h-5 w-5 text-gray-900" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-2 p-4">
            {siteConfig.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-900 hover:underline" onClick={toggleMenu}>
                {link.label}
              </Link>
            ))}
          </div>
          <button aria-label="Close menu" onClick={toggleMenu} className="absolute top-4 right-4">
            <X className="h-5 w-5 text-gray-900" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;