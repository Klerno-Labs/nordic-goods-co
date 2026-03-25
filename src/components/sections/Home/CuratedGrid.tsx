import { images } from "@/config/images";

export function CuratedGrid() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Curated Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white shadow-card rounded-lg overflow-hidden">
            <img src={images[`gallery-${index + 1}`].src} alt={images[`gallery-${index + 1}`].alt} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Title {index + 1}</h3>
              <p className="text-muted">$49.99</p>
              <a href={`/product/product-${index + 1}`} className="mt-2 inline-block bg-accent text-white py-2 px-4 rounded">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}