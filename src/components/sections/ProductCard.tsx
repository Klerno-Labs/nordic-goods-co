import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  isGrid?: boolean;
}

export default function ProductCard({ product, isGrid = true }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div
        className={cn(
          "relative bg-white border border-neutral-200 overflow-hidden rounded-xl transition-all duration-300",
          !isGrid && "flex flex-col"
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#C5A065] rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>

        <div className={cn("p-6", !isGrid && "p-0")}>
          <div className="mb-2">
            <h3 className="text-lg font-serif font-medium text-[#1A1A1A] truncate group-hover:underline">
              {product.title}
            </h3>
            <p className="text-sm text-neutral-500 font-medium">
              {product.brand}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-[#1A1A1A]">
              {formatPrice(product.price)}
            </span>
            <div className="h-5 w-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#C5A065]">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}