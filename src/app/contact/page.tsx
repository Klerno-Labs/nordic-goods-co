import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}