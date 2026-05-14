import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 rounded-full bg-zinc-900 p-8">
          <ShoppingBag className="h-12 w-12 text-zinc-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-white">Your cart is empty</h2>
        <p className="mb-8 text-zinc-400">Looks like you haven't added anything yet.</p>
        <Link
          to="/"
          className="rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <h1 className="mb-8 text-3xl font-bold text-white">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="flex items-center gap-4 rounded-2xl bg-zinc-900 border border-zinc-800 p-4"
            >
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-800">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-zinc-500">{item.category}</p>
                </div>
                <div className="mt-2 text-lg font-bold text-white">{formatPrice(item.price)}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full bg-zinc-800 p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 text-zinc-400 hover:text-white"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-zinc-400 hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Tax</span>
                <span>{formatPrice(totalPrice * 0.08)}</span>
              </div>
              <div className="my-2 border-t border-zinc-800" />
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>{formatPrice(totalPrice * 1.08)}</span>
              </div>
            </div>
            <button className="mt-8 w-full flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-zinc-200 transition-colors">
              Checkout
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="rounded-2xl bg-blue-600/10 border border-blue-600/20 p-6">
            <p className="text-sm text-blue-400">
              Check out with Google for <strong>1% cashback</strong> on this order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
