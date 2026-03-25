"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-xl font-bold">{siteConfig.name}</div>
        <div className="hidden md:flex space-x-4">
          {siteConfig.navigation.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-800 hover:text-gray-600">
              {link.title}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {siteConfig.navigation.map((link) => (
            <a key={link.title} href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}