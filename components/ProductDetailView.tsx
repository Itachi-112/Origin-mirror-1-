'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import { useCart } from '@/lib/cart-context';
import { Plus, Minus, Check, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailViewProps {
  product: Product;
  onBack?: () => void;
}

export function ProductDetailView({ product, onBack }: ProductDetailViewProps) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedLighting, setSelectedLighting] = useState('Triple-Lit Multi-Tone');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedLighting);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedLighting);
    openCart();
  };

  return (
    <div className="text-white">
      {/* Breadcrumb / Back Navigation */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider mb-6 flex items-center gap-1.5 transition-colors"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Interactive Visualizer & Lighting Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <ProductVisualizer
            product={product}
            aspectRatio="pdp"
            showControls={true}
            className="shadow-2xl border-white/15"
          />

          <div className="bg-[#14161A] p-4 rounded-lg border border-white/10 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-300">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Interactive Lighting Preview</span>
            </div>
            <span className="text-neutral-400 font-mono text-[11px]">
              Toggle 3000K · 4500K · 6500K in upper right controls
            </span>
          </div>
        </div>

        {/* Right: Contiguous Purchase Module (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Category & Name */}
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            {product.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight leading-snug mb-3">
            {product.name}
          </h1>

          {/* Price & Size Lockup */}
          <div className="flex items-baseline gap-4 pb-4 border-b border-white/10">
            <span className="text-3xl font-mono font-medium text-white">
              {product.formattedPrice}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Exact Size: <strong className="text-white font-medium">{product.size}</strong>
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light my-5">
            {product.description}
          </p>

          {/* Lighting Mode Selector */}
          <div className="mb-5">
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Illumination Configuration
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedLighting('Triple-Lit Multi-Tone')}
                className={`p-2.5 rounded text-left border transition-colors ${
                  selectedLighting === 'Triple-Lit Multi-Tone'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                    : 'border-white/15 bg-neutral-900 text-neutral-400 hover:border-white/30'
                }`}
              >
                <div className="font-medium text-white">Triple-Lit CCT</div>
                <div className="text-[10px] text-neutral-400">3000K, 4500K, 6500K Tunable</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLighting('Standard Warm 3000K')}
                className={`p-2.5 rounded text-left border transition-colors ${
                  selectedLighting === 'Standard Warm 3000K'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                    : 'border-white/15 bg-neutral-900 text-neutral-400 hover:border-white/30'
                }`}
              >
                <div className="font-medium text-white">Warm Gold 3000K</div>
                <div className="text-[10px] text-neutral-400">Constant Ambient Glow</div>
              </button>
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-white/20 rounded bg-neutral-900 h-11 px-2">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-neutral-400 hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center font-mono text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 h-11 text-xs font-semibold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 rounded flex items-center justify-center gap-2 transition-colors"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Buy Now / Quick Checkout */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full h-11 text-xs font-semibold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#E5C358] rounded flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Instant Checkout / Inquire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery & Assurance Notes */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>{product.leadTime} · Direct shipment from Karawal Nagar, Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Transit breakage replacement guarantee in heavy wooden crate</span>
            </div>
          </div>

          {/* Available Specifications Table (Strictly from brief) */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-3">
              Architectural Specifications
            </h3>
            <div className="divide-y divide-white/10 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="py-2.5 flex justify-between gap-4">
                  <span className="text-neutral-400">{spec.label}</span>
                  <span className="font-mono text-white text-right font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
