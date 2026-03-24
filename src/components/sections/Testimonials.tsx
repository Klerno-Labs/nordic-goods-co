"use client";

const testimonials = [
  {
    name: "Maria L.",
    text: "I purchased the handcrafted wooden bowl and it exceeded my expectations! The quality is outstanding and it looks beautiful on my dining table.",
  },
  {
    name: "James T.",
    text: "The organic wool blanket is incredibly warm and soft. I love that it's made from sustainable materials. Highly recommend!",
  },
  {
    name: "Sophia R.",
    text: "I bought the ceramic vase for my living room and it adds a perfect touch of elegance. The delivery was fast and the customer service was excellent.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;