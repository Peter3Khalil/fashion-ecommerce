export interface User {
  name: string;
  email: string;
  password: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
  phone: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
  Token: string;
}

export interface Review {
  name: User['name'];
  review: string;
  rating: number;
  CreatedAt: string;
}

export interface DiscountCalcType {
  price: number;
  discount: number;
}

export interface Categories {
  categories: readonly ['tshirt', 'shirt', 'hoodie', 'jeans', 'short'];
}

export interface PriceRange {
  price: [number, number];
}

export interface Colors {
  colors: readonly [
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-white border',
  ];
}

export interface Sizes {
  sizes: readonly ['small', 'medium', 'large', 'x-large'];
}

export interface DressStyle {
  dressStyle: readonly ['casual', 'formal', 'party', 'gym'];
}

export interface DefaultValues {
  categories: Categories['categories'][number]; // single category option
  price: PriceRange['price']; // price range as a tuple
  colors: Colors['colors'][number][]; // single color option
  sizes: Sizes['sizes'][number][]; // single size option
  dressStyle: DressStyle['dressStyle'][number]; // single dress style option
}

export interface Product {
  name: string;
  price: number;
  discount?: number;
  description?: string;
  Key?: DefaultValues; // Use DefaultValues interface for the Key property
  review?: Review[];
  photos: string[];
}
