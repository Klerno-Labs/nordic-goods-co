"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
        aria-label="Previous image"
      >
        <ArrowLeft size={32} />
      </button>

      <img
        src={images[selectedIndex]}
        alt={`Lightbox view ${selectedIndex + 1}`}
        className="max-w-full max-h-[85vh] object-contain"
        width={1000}
        height={1000}
      />

      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
        aria-label="Next image"
      >
        <ArrowRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
}