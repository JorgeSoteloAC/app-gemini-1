import { ShoppingCart, User, Menu, Search, Laptop, Smartphone, Headphones, Watch } from 'lucide-react';
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Header() {
  const { user, login } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const categories = [
    { name: 'Laptops', icon: Laptop, slug: 'laptops' },
    { name: 'Phones', icon: Smartphone, slug: 'phones' },
    { name: 'Audio', icon: Headphones, slug: 'audio' },
    { name: 'Wearables', icon: Watch, slug: 'wearables' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                <span className="text-xl font-bold text-black italic">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">ELECTRO</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <cat.icon className="h-4 w-4" />
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-64 rounded-full bg-zinc-900 pl-10 pr-4 text-sm text-white border border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              />
            </form>

            <Link to="/cart" className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <Link to="/profile" className="flex items-center gap-2 p-1 pl-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors">
                <span className="hidden sm:block text-xs font-medium text-white">{user.displayName}</span>
                <img src={user.photoURL || ''} alt="" className="h-7 w-7 rounded-full border border-zinc-700" referrerPolicy="no-referrer" />
              </Link>
            ) : (
              <button 
                onClick={login}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                <User className="h-4 w-4" />
                Sign In
              </button>
            )}

            <button className="lg:hidden p-2 text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-zinc-800 bg-black px-4 py-4"
          >
            <nav className="flex flex-col gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="flex items-center gap-3 text-lg font-medium text-zinc-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <cat.icon className="h-5 w-5" />
                  {cat.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
