import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold">About Us</h3>
          <p className="mt-2 text-sm">{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-2">
            {siteConfig.navigation.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="text-gray-400 hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact Info</h3>
          <p className="mt-2 text-sm">{siteConfig.phone}</p>
          <p className="mt-1 text-sm">{siteConfig.email}</p>
          <p className="mt-1 text-sm">{siteConfig.address}</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <ul className="mt-2">
            <li>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">Twitter</a>
            </li>
            <li>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">Instagram</a>
            </li>
            <li>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}