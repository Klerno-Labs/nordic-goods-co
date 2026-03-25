export const ProductDetails = ({ slug }: { slug: string }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p className="text-gray-700">Details about the product with slug: {slug}</p>
      <p className="text-lg font-semibold">$49.99</p>
      <button className="mt-4 bg-accent text-white py-2 px-4 rounded-lg">Add to Cart</button>
    </div>
  );
};