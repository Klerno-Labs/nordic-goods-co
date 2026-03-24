import { Metadata } from "next";
import { Inter, Libre_Baskerville, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { z } from "zod";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-heading",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Nordic Goods Co - Curated Online Store",
  description: "Discover unique, high-quality products with fast shipping and excellent customer service.",
  openGraph: {
    title: "Nordic Goods Co - Curated Online Store",
    description: "Discover unique, high-quality products with fast shipping and excellent customer service.",
    url: "https://nordicgoodsco.com",
    images: [
      "https://mfile.z.ai/1774356808347-552ba07d511045deb82e7af171b04586.png?ufileattname=202603242053207d7b38f2f55e4951_watermark.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Inter:wght@300;400;500&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} ${dmSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}