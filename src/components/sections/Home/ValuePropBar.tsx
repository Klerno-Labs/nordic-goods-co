export const ValuePropBar = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Curated Quality</h3>
            <p className="text-gray-600">Handpicked products just for you</p>
          </div>
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <p className="text-gray-600">24/7 assistance for all your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};