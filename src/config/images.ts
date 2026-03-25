export const images = {
  hero: {
    src: "https://mfile.z.ai/1774396940874-650981f265f540dc945b4a29905d30e9.png?ufileattname=2026032508021269d5f5a4aadd4a32_watermark.png",
    alt: "Sleek Scandinavian living room displaying curated goods on a wooden shelf",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://mfile.z.ai/1774396940350-66ef252088f44338aabb4561cd2f0755.png?ufileattname=20260325080213634edaeecaed4c6d_watermark.png",
    alt: "Close-up of textured hand-thrown ceramic pottery in a minimalist white studio",
    width: 1200,
    height: 800,
  },
  about: {
    src: "https://mfile.z.ai/1774396940844-6719738d98c748acb284622a0eb41add.png?ufileattname=20260325080213a8bf200d7c6d45a4_watermark.png",
    alt: "Fashion merchandiser holding fabric swatch in bright airy workspace",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://mfile.z.ai/1774396948476-b09be79167ac44d7bcc35b761357c6e0.png?ufileattname=20260325080221ca5b07be63604914_watermark.png",
    alt: "Hands carefully opening a premium cardboard shipping box",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://mfile.z.ai/1774396951194-6ab798994abb4b6f9f13bafe3344d822.png?ufileattname=20260325080221654eaaabc3634ced_watermark.png",
    alt: "Customer service representative smiling at a laptop screen",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://mfile.z.ai/1774396948487-8dd56a13d35d4cb1b42fbf9067c464fe.png?ufileattname=202603250802219ad9f7c345134e28_watermark.png",
    alt: "Magnifying glass revealing intricate details of craftsmanship",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://mfile.z.ai/1774396959320-baf30065b8fc487f94904bff55aa2626.png?ufileattname=20260325080231904b8eee03954367_watermark.png",
    alt: "Scandinavian coffee table setup with books and a throw",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://mfile.z.ai/1774396958587-013b82bd0e544fc384d4320f9e70d193.png?ufileattname=2026032508023121d725f7096744d8_watermark.png",
    alt: "Chunky knit wool throw on a beige sofa",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://mfile.z.ai/1774396958674-f36594c2f86d4827ab35d86a889b5d10.png?ufileattname=20260325080231076e3cd281e24cd9_watermark.png",
    alt: "Sleek Scandinavian pendant lamp hanging in a modern room",
    width: 1200,
    height: 800,
  },
  cta: {
    src: "https://mfile.z.ai/1774396967440-232d65c596dc430a8845d76492c427d2.png?ufileattname=202603250802390f7fc68a094b49b8_watermark.png",
    alt: "Modern wooden chair in a bright Scandinavian dining room",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://mfile.z.ai/1774396966871-d881223c8a7a4064a7a556521483a1af.png?ufileattname=202603250802396451a0ebd39844aa_watermark.png",
    alt: "Abstract background with soft muted earth tones and lines",
    width: 1200,
    height: 800,
  },
  "team-1": {
    src: "https://mfile.z.ai/1774396967243-a6e2175094f142eab6a4d11a37730f96.png?ufileattname=20260325080239ec8b3c66599b4df2_watermark.png",
    alt: "Friendly group of young women working together in a modern office",
    width: 1200,
    height: 800,
  },
  "product-1": {
    src: "https://mfile.z.ai/1774396975088-536d0cf7a987441a97ff5c81859e70e2.png?ufileattname=20260325080247b2b61b84ac1d47b7_watermark.png",
    alt: "Stack of matte white ceramic bowls on a rustic wooden bowl",
    width: 1200,
    height: 800,
  },
  "product-2": {
    src: "https://mfile.z.ai/1774396975153-8a91dcd35b31468eb47aab6b68be805c.png?ufileattname=202603250802479baec5b1f7f74462_watermark.png",
    alt: "Beautifully textured wool rug unrolled on concrete floor",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;