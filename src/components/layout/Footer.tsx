import { cn } from '@/lib/cn';
import { images } from '@/config/images';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src={images.logo.src} alt="Nordic Goods Co Logo" className="h-10 mb-4" />
            <p className="text-sm">Curated online store offering unique, high-quality products.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin className="mr-2" /> 4521 Westheimer Rd, Suite 200, Houston, TX 77027</li>
              <li className="flex items-center"><Phone className="mr-2" /> (512) 555-1234</li>
              <li className="flex items-center"><Mail className="mr-2" /> info@nordicgoodsco.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm">Subscribe to our newsletter for updates and special offers.</p>
            <form className="mt-4">
              <input type="email" placeholder="Your email" className="p-2 rounded-md w-full" />
              <button type="submit" className="mt-2 bg-accent text-white p-2 rounded-md w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Nordic Goods Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};