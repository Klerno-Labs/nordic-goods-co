export default function FAQPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="font-semibold">What is your return policy?</h2>
            <p className="text-gray-600">We offer a 30-day return policy on all items. Please contact us for more details.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="font-semibold">How long does shipping take?</h2>
            <p className="text-gray-600">Shipping typically takes 3-5 business days for domestic orders.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="font-semibold">Do you offer international shipping?</h2>
            <p className="text-gray-600">Yes, we ship internationally. Additional fees may apply.</p>
          </div>
        </div>
      </div>
    </div>
  );
}