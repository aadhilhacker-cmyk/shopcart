import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Minus, Package, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const freeShippingThreshold = 2000;
  const shippingFee = totalPrice >= freeShippingThreshold || totalPrice === 0 ? 0 : 99;
  const grandTotal = totalPrice + shippingFee;

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="border border-slate-200 rounded-xl bg-white p-8 sm:p-10">
          <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Order #BC-1042 Confirmed
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for shopping with Bluecrest Goods. Your items are being prepared for
            shipment.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shopping Cart</h1>
          <p className="mt-1.5 text-sm text-slate-600">
            {totalItems === 0
              ? 'Your cart is currently empty.'
              : `${totalItems} ${totalItems === 1 ? 'item' : 'items'} saved in your cart.`}
          </p>
        </div>

        {cartItems.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors self-start sm:self-auto cursor-pointer"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="mt-10 text-center py-16 px-6 border border-slate-200 rounded-xl bg-slate-50">
          <ShoppingBag className="w-10 h-10 text-blue-600 mx-auto" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-semibold text-slate-900">No items in your cart</h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Browse our product catalog and add items you like.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 bg-white border border-slate-200 rounded-xl"
              >
                <div className="w-full sm:w-28 aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shrink-0">
                  {failedImages[item.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                      <Package className="w-6 h-6" aria-hidden="true" />
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.category}
                  </p>
                  <h2 className="mt-0.5 text-base font-semibold text-slate-900 truncate">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 tabular-nums">
                    {formatPrice(item.price)} each
                  </p>
                </div>

                {/* Quantity Stepper & Remove */}
                <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="inline-flex items-center border border-slate-200 rounded-lg bg-slate-50">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-l-lg transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-9 text-center text-sm font-semibold text-slate-900 tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-r-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="w-24 text-right text-sm font-semibold text-slate-900 tabular-nums">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-600">
                <dt>Subtotal ({totalItems} items)</dt>
                <dd className="font-medium text-slate-900 tabular-nums">
                  {formatPrice(totalPrice)}
                </dd>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <dt>Shipping</dt>
                <dd className="font-medium text-slate-900 tabular-nums">
                  {shippingFee === 0 ? 'Free' : formatPrice(shippingFee)}
                </dd>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-base font-bold text-slate-900">
                <dt>Total</dt>
                <dd className="tabular-nums">{formatPrice(grandTotal)}</dd>
              </div>
            </dl>

            {totalPrice < freeShippingThreshold && (
              <p className="mt-3 text-xs text-slate-500">
                Add {formatPrice(freeShippingThreshold - totalPrice)} more for free shipping.
              </p>
            )}

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-6 w-full py-3 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Place Order
            </button>

            <Link
              to="/products"
              className="mt-3 block text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
