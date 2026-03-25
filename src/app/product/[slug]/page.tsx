import { Metadata } from "next";
import { ProductGallery } from "@/components/sections/Product/ProductGallery";
import { ProductDetails } from "@/components/sections/Product/ProductDetails";
import { ProductBenefits } from "@/components/sections/Product/ProductBenefits";

export const metadata: Metadata = {
  title: "Nordic Goods Co - Product Details",
  description: "Detailed view of the selected product.",
};

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1">
        <ProductGallery />
      </div>
      <div className="col-span-1">
        <ProductDetails />
        <ProductBenefits />
      </div>
    </div>
  );
}