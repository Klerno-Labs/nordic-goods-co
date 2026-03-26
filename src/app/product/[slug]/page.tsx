import { ProductDetails } from '@/components/sections/Product/ProductDetails';
import { ProductGallery } from '@/components/sections/Product/ProductGallery';
import { ProductBenefits } from '@/components/sections/Product/ProductBenefits';


export function generateStaticParams() {
  return [];
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGallery slug={params.slug} />
        <ProductDetails slug={params.slug} />
        <ProductBenefits slug={params.slug} />
      </div>
    </div>
  );
}