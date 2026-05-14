import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all hover:border-zinc-700 shadow-xl"
    >
      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-zinc-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{product.category}</span>
          <Link to={`/product/${product.id}`}>
            <h3 className="mt-1 text-sm font-semibold text-white line-clamp-1">{product.name}</h3>
          </Link>
        </div>

        <p className="mb-4 text-xs text-zinc-400 line-clamp-2">{product.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-white">{formatPrice(product.price)}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-95 hover:bg-zinc-200"
            aria-label="Add to cart"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
