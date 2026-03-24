import { Truck, ShieldCheck, Headphones } from "lucide-react";
import { cn } from "@/lib/cn";

export default function TrustBar() {
  const features = [
    {
      icon: Truck,
      label: "Fast Shipping",
      subtext: "Orders over $50 free",
    },
    {
      icon: ShieldCheck,
      label: "Secure Checkout",
      subtext: "Encrypted payment",
    },
    {
      icon: Headphones,
      label: "24/7 Support",
      subtext: "We are here to help",
    },
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#F9F7F2] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6 overflow-x-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex items-center space-x-2 shrink-0">
                  <Icon className="h-4 w-4 text-[#C5A065]" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#F9F7F2]">
                      {feature.label}
                    </span>
                    <span className="text-[10px] text-[#888888]">
                      {feature.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}