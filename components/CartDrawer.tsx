'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { BRAND_INFO } from '@/lib/products';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    formattedSubtotal,
    subtotal,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `OM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderComplete(orderId);
    clearCart();
    setIsCheckingOut(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#121316] text-white h-full flex flex-col shadow-2xl border-l border-white/10 z-10"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-base font-medium tracking-tight">Your Cart</h2>
                <span className="text-xs text-neutral-400 font-mono">
                  ({totalItems} {totalItems === 1 ? 'mirror' : 'mirrors'})
                </span>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            {orderComplete ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono uppercase text-[#D4AF37] tracking-wider mb-1">
                  Order Confirmed
                </div>
                <h3 className="text-2xl font-serif mb-2">Thank You</h3>
                <p className="text-xs text-neutral-400 mb-4 max-w-xs leading-relaxed">
                  Your reference identifier is{' '}
                  <span className="text-white font-mono font-medium">{orderComplete}</span>. Origin
                  Creative Glasses India will prepare your bespoke mirror with insured wooden-crate
                  packaging.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderComplete(null);
                    closeCart();
                  }}
                  className="px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded transition-colors"
                >
                  Return to Storefront
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 text-neutral-500">
                  <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif mb-1">Your cart is empty</h3>
                <p className="text-xs text-neutral-400 max-w-xs mb-6">
                  Select a statement mirror from our curated 4-piece collection to review dimensions,
                  lighting, and pricing.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#C5A028] rounded transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Demo Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="border-b border-white/10 pb-3 mb-4">
                  <h3 className="text-sm font-medium text-white">Delivery & Contact Verification</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Insured shipping fulfilled by {BRAND_INFO.company}, Delhi.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-neutral-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-300 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-300 mb-1">
                      Delivery City & State
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi, Delhi"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="bg-neutral-900/80 p-3.5 rounded border border-white/10 text-xs space-y-1.5 mt-4">
                  <div className="flex justify-between text-neutral-400">
                    <span>Order Subtotal:</span>
                    <span className="font-mono text-white">{formattedSubtotal}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Insured Transit Crating:</span>
                    <span className="text-emerald-400 font-mono">Complimentary</span>
                  </div>
                  <div className="flex justify-between font-medium text-white border-t border-white/10 pt-2 text-sm">
                    <span>Payable Total:</span>
                    <span className="font-mono text-[#D4AF37]">{formattedSubtotal}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-white/10 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Back to Items
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-xs font-medium uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#C5A028] rounded transition-colors"
                  >
                    Place Demo Order
                  </button>
                </div>
              </form>
            ) : (
              /* Itemized Cart List */
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-white/10">
                {items.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                    {/* Visual Miniature */}
                    <div className="w-20 h-20 bg-neutral-900 rounded border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden p-1">
                      <div className="text-[10px] text-center font-mono text-neutral-400">
                        {item.product.size}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-medium text-white line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            className="text-neutral-500 hover:text-red-400 p-0.5 transition-colors"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-[#D4AF37] font-mono mt-0.5">
                          {item.product.size}
                        </div>
                      </div>

                      {/* Stepper & Price Row */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-white/15 rounded bg-neutral-900/60">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-neutral-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-mono">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-neutral-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-xs font-mono font-medium text-white">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer with Subtotal & Checkout Trigger */}
            {!orderComplete && items.length > 0 && !isCheckingOut && (
              <div className="border-t border-white/10 p-6 space-y-3 bg-[#0E0F12]">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-mono text-white text-sm font-medium">
                      {formattedSubtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Insured Wooden Transit
                    </span>
                    <span className="text-emerald-400 font-mono">Included</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3 text-xs font-medium uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#C5A028] rounded flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-center text-neutral-500">
                  Direct dispatch from Karawal Nagar, Delhi. 100% replacement transit guarantee.
                </p>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
