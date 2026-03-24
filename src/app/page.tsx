import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedGrid from "@/components/sections/FeaturedGrid";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/layout/TrustBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TrustBar />
      <HeroSection
        heading="Curated for Quality"
        subheading="Explore our unique selection of high-quality products."
        ctaPrimary="Shop Collection"
        ctaSecondary="Learn Our Story"
        bgImage={images.hero.src}
      />
      <FeaturedGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}