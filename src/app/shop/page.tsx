import { Metadata } from "next";
import { ShopFilters } from "@/components/sections/Shop/ShopFilters";
import { ProductGrid } from "@/components/sections/Shop/ProductGrid";

export const metadata: Metadata = {
  title: "Nordic Goods Co - Shop",
  description: "Shop unique, high-quality products at Nordic Goods Co.",
};

export default function ShopPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-1">
        <ShopFilters />
      </div>
      <div className="col-span-3">
        <ProductGrid />
      </div>
    </div>
  );
}