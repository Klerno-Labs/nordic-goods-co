import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";
import ProductDetail from "@/components/sections/ProductDetail";

// Mock data for demonstration
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Ceramic Vase",
    price: 45,
    description: "Handcrafted ceramic vase with a matte finish, perfect for your favorite blooms.",
    category: "Home Decor",
    image: "https://mfile.z.ai/1774356845781-c1ac9479ff0d44cda9e2e20fefb32e37.png?ufileattname=202603242053576bcd61ffe7264f5c_watermark.png",
    slug: "ceramic-vase",
    brand: "Nordic Goods",
    inventory: 12,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: "2",
    title: "Wool Throw",
    price: 120,
    description: "Soft, warm wool throw blanket with natural texture.",
    category: "Textiles",
    image: "https://mfile.z.ai/1774356844790-8512e70f3de846e1984f205d59766fd0.png?ufileattname=2026032420535725a4cdadb15243ee_watermark.png",
    slug: "wool-throw",
    brand: "Nordic Goods",
    inventory: 8,
    rating: 5.0,
    reviews: 45,
  },
];

export const generateStaticParams = async () => {
  return MOCK_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ProductDetail product={product} />
    </div>
  );
}