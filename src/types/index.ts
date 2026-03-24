export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  slug: string;
  brand: string;
  inventory: number;
  rating: number;
  reviews: number;
  badge?: 'new' | 'sale' | 'best-seller';
}

export interface ProductCardProps {
  product: Product;
  isGrid?: boolean;
}

export interface FeaturedGridProps {
  items: Array<{
    id: string;
    title: string;
    image: string;
    link: string;
  }>;
}

export interface ProductGridProps {
  products: Product[];
  featured?: Product[];
}

export interface NavItem {
  label: string;
  href: string;
}