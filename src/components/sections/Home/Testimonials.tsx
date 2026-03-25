export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">"I absolutely love the curated selection of products! The quality is top-notch and the shipping was super fast."</p>
            <p className="mt-4 font-semibold">Maria L.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">"Nordic Goods Co has become my go-to for home decor. Every piece I&apos;ve purchased has been unique and beautiful."</p>
            <p className="mt-4 font-semibold">James T.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">"The customer service is outstanding! They helped me with my order and answered all my questions promptly."</p>
            <p className="mt-4 font-semibold">Sarah K.</p>
          </div>
        </div>
      </div>
    </section>
  );
};