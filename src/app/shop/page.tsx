import { ShopFilters } from '@/components/sections/Shop/ShopFilters';
import { ProductGrid } from '@/components/sections/Shop/ProductGrid';

export default function ShopPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shop Our Collection</h1>
        <div className="flex flex-col md:flex-row">
          <ShopFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}