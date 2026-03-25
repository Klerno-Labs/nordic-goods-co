export const ShopFilters = () => {
  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Categories</h3>
        <ul className="space-y-2">
          <li><input type="checkbox" id="category1" /><label htmlFor="category1" className="ml-2">Home Decor</label></li>
          <li><input type="checkbox" id="category2" /><label htmlFor="category2" className="ml-2">Kitchenware</label></li>
          <li><input type="checkbox" id="category3" /><label htmlFor="category3" className="ml-2">Textiles</label></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Price Range</h3>
        <input type="range" min="0" max="500" className="w-full" />
      </div>
    </aside>
  );
};