import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pro Audio Headphones X1',
    description: 'High-fidelity audio with active noise cancellation and 40-hour battery life.',
    price: 349.99,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    stock: 25,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Stealth Gaming Laptop 15"',
    description: 'Ultra-thin gaming laptop with RTX 4080 and 240Hz QHD display.',
    price: 2199.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    stock: 10,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Pulse Watch Pro',
    description: 'Advanced fitness tracking with blood oxygen monitoring and built-in GPS.',
    price: 199.99,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1544117518-e15811ddf35b?auto=format&fit=crop&q=80&w=800',
    stock: 50,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Nova Phone 13',
    description: 'Next-generation smartphone with pro-grade triple camera system.',
    price: 999.99,
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    stock: 30,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Zen Tablet Air',
    description: 'The ultimate canvas for creativity with 12.9" Liquid Retina display.',
    price: 799.99,
    category: 'tablets',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Echo Studio Speaker',
    description: 'Fill any room with immersive 360° spatial audio and deep bass.',
    price: 149.99,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1589003077984-844a36f8b921?auto=format&fit=crop&q=80&w=800',
    stock: 40,
    createdAt: new Date().toISOString()
  }
];
