export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAdmin?: boolean;
}

export interface Order {
  id?: string;
  userId: string;
  items: { productId: string; quantity: number; price: number; name: string }[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}
