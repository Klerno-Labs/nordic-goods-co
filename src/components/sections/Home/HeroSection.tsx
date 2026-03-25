import { images } from '@/config/images';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">Curated Essentials</h1>
          <p className="mt-4 text-lg text-gray-700">Fast Shipping + Excellent Customer Service</p>
          <a href="/shop" className="mt-6 bg-accent text-white py-3 px-6 rounded-lg">Shop Collection</a>
        </div>
        <div className="w-full md:w-2/5">
          <img src={images.hero.src} alt={images.hero.alt} className="w-full h-auto object-cover" loading="eager" />
        </div>
      </div>
    </section>
  );
};