export function ValuePropBar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <div className="text-accent text-4xl">🚚</div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Free Shipping</h3>
              <p className="text-muted">On all orders over $50</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-accent text-4xl">🛠️</div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Curated Quality</h3>
              <p className="text-muted">Handpicked products for you</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-accent text-4xl">🤝</div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Customer Support</h3>
              <p className="text-muted">We're here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}