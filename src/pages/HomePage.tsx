import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [heroError, setHeroError] = useState(false);
  const featuredProducts = products.filter((item) => item.featured);

  return (
    <div>
      {/* Welcome Hero Banner */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Everyday Collection
              </p>
              <h1
                className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Thoughtful essentials for work and home.
              </h1>
              <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-lg">
                Clean design, reliable materials, and honest pricing. Explore our curated lineup of
                desk accessories, drinkware, and daily carry goods.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Shop Products</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/9] lg:h-full w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                {heroError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-slate-100 p-8 text-center">
                    <Package className="w-10 h-10 text-blue-600" aria-hidden="true" />
                    <p className="text-sm font-medium text-slate-700">
                      Bluecrest Everyday Workspace Essentials
                    </p>
                  </div>
                ) : (
                  <img
                    src="/src/assets/images/hero_minimal_desk_1795584316428.jpg"
                    alt="Minimalist desk setup featuring wireless headphones, a cobalt ceramic mug, and a notebook"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroError(true)}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Customer favorites designed for everyday comfort and clarity.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Store Highlights */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-semibold text-slate-900">01. Simple Craftsmanship</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Every item is chosen for clean lines, durable finishes, and practical daily use.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">02. Free Shipping Over ₹2,000</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Orders above ₹2,000 ship free, with transparent flat-rate ₹99 delivery on smaller orders.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">03. 30-Day Easy Returns</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Not quite right for your space? Return any unused item within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
