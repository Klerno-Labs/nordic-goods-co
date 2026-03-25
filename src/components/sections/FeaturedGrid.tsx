import Link from "next/link";
import { cn } from "@/lib/cn";
import { FeaturedGridProps } from "@/types";

export default function FeaturedGrid({ items }: FeaturedGridProps) {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300",
                index === 1 ? "md:col-span-2 md:row-span-2" : ""
              )}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {item.title}
                  </h3>
                  <Link
                    href={item.link}
                    className="inline-block px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-[#C5A065] hover:text-white transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}