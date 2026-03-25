import { Metadata } from "next";
import { HeroSection } from "@/components/sections/Home/HeroSection";
import { ValuePropBar } from "@/components/sections/Home/ValuePropBar";
import { CuratedGrid } from "@/components/sections/Home/CuratedGrid";
import { Testimonials } from "@/components/sections/Home/Testimonials";
import { CTASection } from "@/components/Common/CTASection";

export const metadata: Metadata = {
  title: "Nordic Goods Co - Home",
  description: "Discover curated essentials at Nordic Goods Co.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropBar />
      <CuratedGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}