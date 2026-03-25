export const ProductBenefits = ({ slug }: { slug: string }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Why We Chose This Product</h2>
      <ul className="list-disc list-inside">
        <li>High quality craftsmanship</li>
        <li>Eco-friendly materials</li>
        <li>Unique design</li>
      </ul>
    </div>
  );
};