import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg">{siteConfig.name}</h2>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            {siteConfig.links.menu.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact Info</h3>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}