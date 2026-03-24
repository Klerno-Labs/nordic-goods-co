import { images } from "@/config/images";

export const metadata = {
  title: "Nordic Goods Co - Curated E-commerce",
  description: "Discover unique, high-quality products at Nordic Goods Co with fast shipping and excellent customer service.",
  openGraph: {
    title: "Nordic Goods Co - Curated E-commerce",
    description: "Discover unique, high-quality products at Nordic Goods Co with fast shipping and excellent customer service.",
    images: [images.hero.src],
  },
};

const HomePage = () => {
  return (
    <main>
      <section className="min-h-[80vh] flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${images.hero.src})` }}>
        <h1 className="text-5xl font-bold text-white">Curated for Quality</h1>
      </section>
    </main>
  );
};

export default HomePage;