import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-base font-bold text-slate-900 tracking-tight">
              Bluecrest Goods
            </Link>
            <p className="mt-1 text-sm text-slate-500">
              Clean, dependable essentials for your desk and daily routine.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link to="/cart" className="hover:text-blue-600 transition-colors">
              Cart
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bluecrest Goods. All rights reserved.</p>
          <p>Free shipping on orders over ₹2,000</p>
        </div>
      </div>
    </footer>
  );
}
