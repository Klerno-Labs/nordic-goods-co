import { Product } from "@/types";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Star, Package, CheckCircle2 } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-neutral-500 hover:text-neutral-900">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/shop`} className="text-neutral-500 hover:text-neutral-900">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li className="text-neutral-900 font-medium">{product.title}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={product.image}
                alt={product.title}
                width={800}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#C5A065]/10 rounded-full mb-4">
                {product.badge || "Best Seller"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-4">
              {product.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(product.rating)
                      ? "h-5 w-5 style={{ width: "100%", height: "100%", objectFit: "cover" }}-[#C5A065] text-[#C5A065]"
                      : "h-5 w-5 text-neutral-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-500">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-xl text-neutral-600 mb-8 font-light">
              {product.description}
            </p>

            <div className="flex items-center space-x-6 mb-10">
              <span className="text-3xl font-medium text-[#1A1A1A]">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-neutral-400 line-through">
                {formatPrice(product.price * 1.2)}
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-lg">
                <Package className="h-5 w-5 text-neutral-500" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    In Stock ({product.inventory})
                  </p>
                  <p className="text-xs text-neutral-500">
                    Ships within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    30-Day Returns
                  </p>
                  <p className="text-xs text-neutral-500">
                    Money-back guarantee
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center space-x-4">
              <button className="flex-1 bg-[#1A1A1A] text-white py-4 px-8 rounded-lg font-medium hover:bg-[#2A2A2A] transition-colors">
                Add to Cart
              </button>
              <button className="p-4 border border-neutral-200 rounded-lg hover:border-[#1A1A1A] transition-colors">
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}