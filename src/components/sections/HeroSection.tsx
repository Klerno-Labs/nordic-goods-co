"use client";

import { images } from "@/config/images";
import { cn } from "@/lib/cn";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center bg-gray-50">
      <div className="md:w-1/2 p-8">
        <h1 className="text-5xl font-heading leading-tight text-gray-900">Curated for Quality</h1>
        <p className="mt-4 text-lg text-gray-600">Discover unique, high-quality products with fast shipping and excellent customer service.</p>
        <div className="mt-6">
          <a href="/shop" className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
            Shop Collection
          </a>
          <a href="/about" className="inline-block border border-gray-900 text-gray-900 py-3 px-6 rounded-lg ml-4 hover:bg-gray-900 hover:text-white transition">
            Learn Our Story
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={images.hero.src} alt={images.hero.alt} className="object-cover w-full h-full" loading="eager" />
      </div>
    </section>
  );
};

export default HeroSection;