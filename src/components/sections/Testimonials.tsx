export default function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through testimonials here */}
        <div className="border rounded-lg p-4">
          <p>"The quality of the products is outstanding! I love my new vase!"</p>
          <p className="font-semibold">- Maria L.</p>
        </div>
        <div className="border rounded-lg p-4">
          <p>"Fast shipping and excellent customer service. Highly recommend!"</p>
          <p className="font-semibold">- James T.</p>
        </div>
        <div className="border rounded-lg p-4">
          <p>"I appreciate the curated selection. Each piece feels special."</p>
          <p className="font-semibold">- Sarah K.</p>
        </div>
      </div>
    </section>
  );
}