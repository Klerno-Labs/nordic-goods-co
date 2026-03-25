export const ProductGrid = () => {
  return (
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-lg font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Product Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://mfile.z.ai/1774396975088-536d0cf7a987441a97ff5c81859e70e2.png?ufileattname=20260325080247b2b61b84ac1d47b7_watermark.png" alt="Product 1" className="w-full h-auto object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">Product 1</h3>
          <p className="text-gray-600">$49.99</p>
          <button className="mt-4 bg-accent text-white py-2 px-4 rounded-lg">Add to Cart</button>
        </div>
        {/* Repeat for more products */}
      </div>
    </div>
  );
};