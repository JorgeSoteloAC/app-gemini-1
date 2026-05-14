import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../lib/mockData';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  
  const products = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  return (
    <div className="pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white">
          {query ? `Search Results for "${query}"` : 'All Products'}
        </h1>
        <p className="mt-2 text-zinc-500">Found {products.length} matching items.</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-zinc-500">No products match your search criteria.</p>
        </div>
      )}
    </div>
  );
}
