import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nordic Goods Co",
  description: "Curated online store offering unique, high-quality products.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}