export default function ProductCard() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src="https://mfile.z.ai/1774356845781-c1ac9479ff0d44cda9e2e20fefb32e37.png?ufileattname=202603242053576bcd61ffe7264f5c_watermark.png" alt="White ceramic vase with greenery" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Ceramic Vase</h3>
        <p className="text-gray-600">$45.00</p>
        <button className="mt-2 bg-primary text-white px-4 py-2 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
}