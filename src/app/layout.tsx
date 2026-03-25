import './globals.css';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nordic Goods Co',
  description: 'Curated online store offering unique, high-quality products with fast shipping and excellent customer service.',
  openGraph: {
    title: 'Nordic Goods Co',
    description: 'Curated online store offering unique, high-quality products with fast shipping and excellent customer service.',
    url: 'https://nordicgoodsco.com',
    images: [
      'https://mfile.z.ai/1774396940874-650981f265f540dc945b4a29905d30e9.png?ufileattname=2026032508021269d5f5a4aadd4a32_watermark.png',
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}