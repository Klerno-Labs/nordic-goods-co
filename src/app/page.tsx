import { HeroSection } from '@/components/sections/Home/HeroSection';
import { ValuePropBar } from '@/components/sections/Home/ValuePropBar';
import { CuratedGrid } from '@/components/sections/Home/CuratedGrid';
import { Testimonials } from '@/components/sections/Home/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropBar />
      <CuratedGrid />
      <Testimonials />
    </>
  );
}