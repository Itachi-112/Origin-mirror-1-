'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { motion, AnimatePresence } from 'framer-motion';
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
            className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FFFFFF] text-[#171717] h-full flex flex-col shadow-2xl border-l border-[rgba(23,23,23,0.08)] z-10"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(23,23,23,0.08)]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#B89A62]" />
                <h2 className="text-base font-serif font-medium tracking-tight">Your Cart</h2>
                <span className="text-xs text-[#68645D] font-mono">
                  ({totalItems} {totalItems === 1 ? 'mirror' : 'mirrors'})
                </span>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-1.5 rounded text-[#68645D] hover:text-[#171717] hover:bg-neutral-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            {orderComplete ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#F7F5F0]/50">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-600">
                  <Check className="w-7 h-7" />
                </div>
                <span className="label-mono text-[0.65rem] mb-1 text-[#B89A62]">
                  Order Confirmed
                </span>
                <h3 className="text-3xl font-serif text-[#171717] font-light mb-2">Thank You</h3>
                <p className="text-xs text-[#68645D] mb-6 max-w-xs leading-relaxed">
                  Your reference identifier is{' '}
                  <span className="text-[#171717] font-mono font-bold">{orderComplete}</span>. Origin
                  Creative Glasses India will prepare your bespoke mirror with insured wooden-crate
                  packaging.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderComplete(null);
                    closeCart();
                  }}
                  className="btn-primary-var5 text-xs py-3 px-6"
                >
                  Return to Storefront
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#F7F5F0]/30">
                <div className="w-16 h-16 rounded-full bg-neutral-100 border border-[rgba(23,23,23,0.08)] flex items-center justify-center mb-4 text-[#68645D]">
                  <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#171717] mb-1">Your cart is empty</h3>
                <p className="text-xs text-[#68645D] max-w-xs mb-6">
                  Select a statement mirror from our 4-piece collection to review dimensions,
                  lighting, and pricing.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="btn-primary-var5 text-xs py-3 px-6"
                >
                  Explore Collection
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Demo Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="border-b border-[rgba(23,23,23,0.08)] pb-3 mb-4">
                  <h3 className="text-base font-serif text-[#171717]">Delivery Verification</h3>
                  <p className="text-xs text-[#68645D] mt-0.5">
                    Insured fulfillment by {BRAND_INFO.company}, Delhi.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="label-mono text-[0.6rem] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#F7F5F0] border border-[rgba(23,23,23,0.12)] rounded-sm px-3.5 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-[#B89A62]"
                    />
                  </div>
                  <div>
                    <label className="label-mono text-[0.6rem] mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#F7F5F0] border border-[rgba(23,23,23,0.12)] rounded-sm px-3.5 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-[#B89A62]"
                    />
                  </div>
                  <div>
                    <label className="label-mono text-[0.6rem] mb-1">
                      Delivery City & State
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi, Delhi"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full bg-[#F7F5F0] border border-[rgba(23,23,23,0.12)] rounded-sm px-3.5 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-[#B89A62]"
                    />
                  </div>
                </div>

                <div className="bg-[#F7F5F0] p-4 rounded-sm border border-[rgba(23,23,23,0.08)] text-xs space-y-2 mt-4">
                  <div className="flex justify-between text-[#68645D]">
                    <span>Order Subtotal:</span>
                    <span className="font-mono text-[#171717] font-semibold">{formattedSubtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#68645D]">
                    <span>Insured Transit Crating:</span>
                    <span className="text-[#B89A62] font-mono font-medium">Complimentary</span>
                  </div>
                  <div className="flex justify-between font-medium text-[#171717] border-t border-[rgba(23,23,23,0.08)] pt-2 text-sm">
                    <span>Payable Total:</span>
                    <span className="font-mono text-[#B89A62] font-bold">{formattedSubtotal}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="btn-outline-var5 flex-1 justify-center py-3 text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary-var5 flex-1 justify-center py-3 text-xs"
                  >
                    Place Demo Order
                  </button>
                </div>
              </form>
            ) : (
              /* Itemized Cart List */
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-[rgba(23,23,23,0.08)]">
                {items.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                    {/* Visual Miniature */}
                    <div className="w-20 h-20 bg-[#EBE9E4] rounded-sm border border-[rgba(23,23,23,0.08)] flex-shrink-0 flex items-center justify-center overflow-hidden p-1">
                      <div className="text-[10px] text-center font-mono text-[#68645D]">
                        {item.product.size}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-serif font-medium text-[#171717] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            className="text-[#68645D] hover:text-red-600 p-0.5 transition-colors"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs text-[#B89A62] font-mono mt-0.5">
                          {item.product.size}
                        </div>
                      </div>

                      {/* Stepper & Price Row */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[rgba(23,23,23,0.15)] rounded-sm bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-[#68645D] hover:text-[#171717] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-mono">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-[#68645D] hover:text-[#171717] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-sm font-mono font-semibold text-[#171717]">
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
              <div className="border-t border-[rgba(23,23,23,0.08)] p-6 space-y-3.5 bg-[#F7F5F0]">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#68645D]">
                    <span className="font-mono uppercase tracking-wider text-[0.7rem]">Subtotal</span>
                    <span className="font-mono text-[#171717] text-base font-bold">
                      {formattedSubtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#68645D]">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Insured Wooden Transit
                    </span>
                    <span className="text-emerald-700 font-mono font-medium">Included</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCheckingOut(true)}
                  className="btn-primary-var5 w-full justify-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-center text-[#68645D] font-mono">
                  Direct dispatch from Karawal Nagar, Delhi. 100% replacement guarantee.
                </p>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
