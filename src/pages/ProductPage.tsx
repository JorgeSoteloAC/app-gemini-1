import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

export function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const found = MOCK_PRODUCTS.find((p) => p.id === id);
    if (found) setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-zinc-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <Link to="/" className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-square overflow-hidden rounded-3xl bg-zinc-900"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">{product.category}</span>
            <h1 className="mt-2 text-4xl font-bold text-white">{product.name}</h1>
            <p className="mt-4 text-3xl font-bold text-white">{formatPrice(product.price)}</p>
          </div>

          <p className="text-zinc-400 leading-relaxed">{product.description}</p>

          <div className="flex flex-col gap-4 py-6 border-y border-zinc-800">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <Truck className="h-5 w-5 text-blue-500" />
              <span>Free worldwide expression shipping</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <ShieldCheck className="h-5 w-5 text-blue-500" />
              <span>2-year extended manufacturer warranty</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <RefreshCcw className="h-5 w-5 text-blue-500" />
              <span>30-day no-questions-asked return policy</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-zinc-200 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="rounded-full border border-zinc-800 px-6 py-4 text-white hover:bg-zinc-900 transition-colors">
              <span className="sr-only">Wishlist</span>
              ❤
            </button>
          </div>

          <div className="mt-4">
            <span className="text-xs text-zinc-500">
              Stock available: <strong>{product.stock} units</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
