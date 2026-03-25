"use client";

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { images } from '@/config/images';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center">
          <img src={images.logo.src} alt="Nordic Goods Co Logo" className="h-10" />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
          <a href="/shop" className="text-gray-900 hover:text-gray-700">Shop</a>
          <a href="/about" className="text-gray-900 hover:text-gray-700">About</a>
          <a href="/contact" className="text-gray-900 hover:text-gray-700">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="p-2 rounded-md hover:bg-gray-200">
            <Search />
          </button>
          <button aria-label="Cart" className="p-2 rounded-md hover:bg-gray-200">
            <ShoppingCart />
          </button>
          <button aria-label="Menu" onClick={toggleMenu} className="md:hidden p-2 rounded-md hover:bg-gray-200">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
            <a href="/shop" className="text-gray-900 hover:text-gray-700">Shop</a>
            <a href="/about" className="text-gray-900 hover:text-gray-700">About</a>
            <a href="/contact" className="text-gray-900 hover:text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};