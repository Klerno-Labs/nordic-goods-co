"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          <Menu />
        </button>
        <div className={cn("flex space-x-4", isOpen ? "block" : "hidden lg:flex")}>
          {siteConfig.links.menu.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}