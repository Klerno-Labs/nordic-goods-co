import { images } from '@/config/images';

export const CuratedGrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Curated Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <img src={images["gallery-1"].src} alt={images["gallery-1"].alt} className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white">View Details</span>
            </div>
          </div>
          <div className="relative group">
            <img src={images["gallery-2"].src} alt={images["gallery-2"].alt} className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white">View Details</span>
            </div>
          </div>
          <div className="relative group">
            <img src={images["gallery-3"].src} alt={images["gallery-3"].alt} className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white">View Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};