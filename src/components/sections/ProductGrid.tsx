import Link from "next/link";
import { cn } from "@/lib/cn";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  featured?: Product[];
}

export default function ProductGrid({ products, featured }: ProductGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}