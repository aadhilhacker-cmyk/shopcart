import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          About Us
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Built around calm, useful everyday objects.
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
          Bluecrest Goods started with a simple idea: the tools you reach for every morning—your
          coffee mug, headphones, desk lamp, and daily bag—should feel quiet, durable, and easy to
          live with.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Minimal Catalog</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Instead of stocking thousands of nearly identical items, we focus on a compact catalog
            of essentials we have tested ourselves for comfort, finish, and reliability.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Honest Materials</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            From brushed aluminum task lighting to glazed stoneware and water-resistant canvas, we
            choose materials that hold up gracefully over years of everyday use.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Ready to explore the store?</h2>
          <p className="mt-1 text-sm text-slate-600">
            View our full collection or get in touch with our team if you have any questions.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
