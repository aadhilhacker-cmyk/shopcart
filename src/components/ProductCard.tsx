import { useState } from 'react';
import { Check, Package, ShoppingCart } from 'lucide-react';
import { formatPrice, type Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-blue-50 text-slate-400 p-4 text-center">
            <Package className="w-8 h-8 text-blue-600/60" aria-hidden="true" />
            <span className="text-xs font-medium text-slate-600">{product.name}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {product.category}
          </p>
          <h3 className="mt-1 text-base font-semibold text-slate-900 leading-snug">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <span className="text-base font-semibold text-slate-900 tabular-nums">
            {formatPrice(product.price)}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              added
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
