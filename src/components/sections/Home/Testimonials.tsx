export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          { name: "Maria L.", text: "I love the unique selection of products! Fast shipping and great service." },
          { name: "James T.", text: "The quality is outstanding. I will definitely be back for more!" },
          { name: "Emily R.", text: "Excellent customer support and beautiful items. Highly recommend!" },
        ].map((testimonial, index) => (
          <div key={index} className="bg-white shadow-card rounded-lg p-4">
            <p className="text-muted">"{testimonial.text}"</p>
            <p className="mt-2 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}