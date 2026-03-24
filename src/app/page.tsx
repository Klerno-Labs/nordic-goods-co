import HeroSection from "@/components/sections/HeroSection";
import FeaturedGrid from "@/components/sections/FeaturedGrid";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/layout/TrustBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedGrid />
      <Testimonials />
    </>
  );
}