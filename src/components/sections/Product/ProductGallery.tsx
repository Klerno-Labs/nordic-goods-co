"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Mock data for gallery
const images = [
  "https://mfile.z.ai/1774396975088-536d0cf7a987441a97ff5c81859e70e2.png?ufileattname=20260325080247b2b61b84ac1d47b7_watermark.png",
  "https://mfile.z.ai/1774396940350-66ef252088f44338aabb4561cd2f0755.png?ufileattname=20260325080213634edaeecaed4c6d_watermark.png",
  "https://mfile.z.ai/1774396975153-8a91dcd35b31468eb47aab6b68be805c.png?ufileattname=202603250802479baec5b1f7f74462_watermark.png",
];

export function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square cursor-zoom-in mb-4">
        <img
          src={images[selectedIndex]}
          alt={`Product view ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={800}
        />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
              index === selectedIndex ? "border-[#C1664E]" : "border-transparent hover:border-gray-300"
            )}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[selectedIndex]}
            alt={`Product view ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain"
            width={1000}
            height={1000}
          />

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}