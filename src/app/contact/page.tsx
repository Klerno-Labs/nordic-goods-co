import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-16">Contact Us</h1>
      <ContactForm />
      <Footer />
    </main>
  );
}