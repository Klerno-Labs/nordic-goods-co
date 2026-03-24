"use client";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bgImage: string;
}

export default function HeroSection({
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
  bgImage,
}: HeroSectionProps) {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/70 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-4 text-lg">{subheading}</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-lg">{ctaPrimary}</button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg">{ctaSecondary}</button>
        </div>
      </div>
    </section>
  );
}