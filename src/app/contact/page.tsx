import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Nordic Goods Co - Contact Us",
  description: "Get in touch with Nordic Goods Co.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <ContactForm />
    </section>
  );
}