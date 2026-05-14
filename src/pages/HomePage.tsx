import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export function HomePage() {
  const featured = MOCK_PRODUCTS.slice(0, 3);
  const latest = MOCK_PRODUCTS.slice(3, 6);

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 md:px-12 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_50%)]" />
        </div>
        
        <div className="relative z-10 flex max-w-2xl flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-blue-400"
          >
            <Zap className="h-3 w-3" />
            Seasonal Sale: Up to 40% OFF
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            Innovation in <br />
            <span className="text-zinc-500">Every Detail.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            Explore our curated collection of premium electronics designed to elevate your digital life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-zinc-200 transition-colors">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3 font-semibold text-white hover:bg-zinc-800 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Shield, title: '2 Year Warranty', desc: 'Peace of mind with every purchase.' },
          { icon: Zap, title: 'Express Delivery', desc: 'From our warehouse to your door in 24h.' },
          { icon: TrendingUp, title: 'Best Prices', desc: 'Unbeatable value for premium tech.' },
        ].map((feat, i) => (
          <div key={i} className="flex items-center gap-4 rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white">
              <feat.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{feat.title}</h3>
              <p className="text-sm text-zinc-400">{feat.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Featured Deals</h2>
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Latest Arrivals</h2>
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
