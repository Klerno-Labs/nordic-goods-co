import Navbar from "@/components/layout/Navbar";
import TrustBar from "@/components/layout/TrustBar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedGrid from "@/components/sections/FeaturedGrid";
import ProductGrid from "@/components/sections/ProductGrid";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import { images } from "@/config/images";

export const metadata = {
  title: "Nordic Goods Co | Curated Home & Lifestyle",
  description: "Discover a curated selection of unique, high-quality home goods and lifestyle essentials designed for modern living.",
  openGraph: {
    title: "Nordic Goods Co",
    description: "Curated Home & Lifestyle",
    images: [{ url: images.hero.src }],
  },
};

export default function Home() {
  const featuredItems = [
    {
      id: "1",
      title: "Essential Collection",
      image: images["gallery-1"].src,
      link: "/shop",
    },
    {
      id: "2",
      title: "Winter Warmers",
      image: images["service-2"].src,
      link: "/shop",
    },
    {
      id: "3",
      title: "Modern Living",
      image: images["menu-1"].src,
      link: "/shop",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      title: "Ceramic Vase",
      price: 45,
      description: "Handcrafted ceramic vase with a matte finish, perfect for your favorite blooms.",
      category: "Home Decor",
      image: images["product-1"].src,
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
      image: images["menu-2"].src,
      slug: "wool-throw",
      brand: "Nordic Goods",
      inventory: 8,
      rating: 5.0,
      reviews: 45,
    },
    {
      id: "3",
      title: "Oak Bowl",
      price: 65,
      description: "Minimalist wooden bowl hand-turned from solid oak.",
      category: "Kitchen",
      image: images["gallery-3"].src,
      slug: "oak-bowl",
      brand: "Nordic Goods",
      inventory: 15,
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "4",
      title: "Table Lamp",
      price: 89,
      description: "Modern table lamp with adjustable brightness.",
      category: "Lighting",
      image: images["gallery-4"].src,
      slug: "table-lamp",
      brand: "Nordic Goods",
      inventory: 5,
      rating: 4.7,
      reviews: 32,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TrustBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedGrid items={featuredItems} />
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
                Best Sellers
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our most-loved items, hand-picked for their quality and design.
              </p>
            </div>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}