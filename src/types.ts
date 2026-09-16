export interface Product {
  id: string;
  name: string;
  category: 'phone' | 'laptop' | 'tablet' | 'headphone' | 'smartwatch' | 'accessory';
  categoryName: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  image: string;
  brand: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  description: string;
  specs: Record<string, string>;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  itemCount: number;
  iconName: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterOptions {
  searchQuery: string;
  category: string; // 'all' | category slug
  priceRange: string; // 'all' | 'under-5m' | '5m-15m' | '15m-30m' | 'over-30m'
  brand: string; // 'all' | specific brand
  minRating: number; // 0, 4, 4.5
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating-desc' | 'newest';
}

export interface UserProfile {
  name: string;
  email: string;
  isLoggedIn: boolean;
}
