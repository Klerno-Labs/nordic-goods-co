import { z } from "zod";

export const ProductGallery = ({ slug }: { slug: string }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Product Gallery</h2>
      <img src={`https://mfile.z.ai/1774396975088-536d0cf7a987441a97ff5c81859e70e2.png?ufileattname=20260325080247b2b61b84ac1d47b7_watermark.png`} alt={`Gallery image for ${slug}`} className="w-full h-auto object-cover rounded-lg" />
    </div>
  );
};