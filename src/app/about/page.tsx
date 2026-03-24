import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-16">About Us</h1>
      <p className="text-center px-4">
        At Nordic Goods Co, we are passionate about curating high-quality products that reflect our commitment to craftsmanship and sustainability. Our journey began with a vision to bring unique, handpicked items to our community, ensuring that every piece tells a story and adds value to your home.
      </p>
      <Footer />
    </main>
  );
}