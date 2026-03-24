"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-sm">Discover our curated selection of unique products.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {siteConfig.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-sm">Phone: (512) 555-0199</p>
            <p className="mt-1 text-sm">Email: info@nordicgoodsco.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Nordic Goods Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;