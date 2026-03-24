"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold">Nordic Goods Co</h2>
            <p>Quality products delivered fast.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>(512) 555-0199</p>
            <p>info@nordicgoodsco.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} Nordic Goods Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;