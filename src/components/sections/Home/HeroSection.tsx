import { images } from "@/config/images";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <img src={images.hero.src} alt={images.hero.alt} className="w-full h-full object-cover" width={images.hero.width} height={images.hero.height} loading="eager" />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">Curated Essentials</h1>
        <p className="mt-4 text-lg">Fast Shipping + Exceptional Service</p>
        <a href="/shop" className="mt-6 inline-block bg-accent text-white py-3 px-6 rounded-lg">Shop Collection</a>
      </div>
    </section>
  );
}