'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import { useCart } from '@/lib/cart-context';
import { Plus, Minus, Check, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';

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
    <div className="text-[#171717]">
      {/* Breadcrumb / Back Navigation */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-mono text-[#68645D] hover:text-[#171717] uppercase tracking-wider mb-6 flex items-center gap-1.5 transition-colors"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Interactive Visualizer & Lighting Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#EBE9E4] border border-[rgba(23,23,23,0.08)] rounded-sm overflow-hidden p-2 shadow-sm">
            <ProductVisualizer
              product={product}
              aspectRatio="pdp"
              showControls={true}
              className="border-none rounded-none shadow-none"
            />
          </div>

          <div className="bg-white p-4 rounded-sm border border-[rgba(23,23,23,0.08)] text-xs flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-[#171717] font-medium">
              <Sparkles className="w-4 h-4 text-[#B89A62]" />
              <span>Interactive Lighting Preview</span>
            </div>
            <span className="text-[#68645D] font-mono text-[11px]">
              Toggle 3000K · 4500K · 6500K in upper right controls
            </span>
          </div>
        </div>

        {/* Right: Contiguous Purchase Module (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Category & Name */}
          <span className="label-mono text-[0.65rem] text-[#B89A62] mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#171717] font-light tracking-tight leading-tight mb-3">
            {product.name}
          </h1>

          {/* Price & Size Lockup */}
          <div className="flex items-baseline gap-4 pb-4 border-b border-[rgba(23,23,23,0.08)]">
            <span className="text-3xl font-mono font-bold text-[#B89A62]">
              {product.formattedPrice}
            </span>
            <span className="text-xs font-mono text-[#68645D]">
              Exact Size: <strong className="text-[#171717] font-medium">{product.size}</strong>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#68645D] leading-relaxed font-light my-5">
            {product.description}
          </p>

          {/* Lighting Mode Selector */}
          <div className="mb-6">
            <label className="label-mono text-[0.6rem] mb-2 text-[#68645D]">
              Illumination Configuration
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedLighting('Triple-Lit Multi-Tone')}
                className={`p-3 rounded-sm text-left border transition-colors ${
                  selectedLighting === 'Triple-Lit Multi-Tone'
                    ? 'border-[#B89A62] bg-[#B89A62]/10 text-[#171717]'
                    : 'border-[rgba(23,23,23,0.1)] bg-white text-[#68645D] hover:border-[#171717]'
                }`}
              >
                <div className="font-semibold text-[#171717]">Triple-Lit CCT</div>
                <div className="text-[10px] text-[#68645D] mt-0.5">3000K, 4500K, 6500K Tunable</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLighting('Standard Warm 3000K')}
                className={`p-3 rounded-sm text-left border transition-colors ${
                  selectedLighting === 'Standard Warm 3000K'
                    ? 'border-[#B89A62] bg-[#B89A62]/10 text-[#171717]'
                    : 'border-[rgba(23,23,23,0.1)] bg-white text-[#68645D] hover:border-[#171717]'
                }`}
              >
                <div className="font-semibold text-[#171717]">Warm Gold 3000K</div>
                <div className="text-[10px] text-[#68645D] mt-0.5">Constant Ambient Glow</div>
              </button>
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[rgba(23,23,23,0.15)] rounded-sm bg-white h-12 px-2">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-[#68645D] hover:text-[#171717]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center font-mono text-sm text-[#171717]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-[#68645D] hover:text-[#171717]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-outline-var5 flex-1 justify-center h-12 text-xs py-0"
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

            {/* Instant Checkout / Inquire */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="btn-primary-var5 w-full justify-center h-12 text-xs py-0"
            >
              <span>Instant Checkout / Inquire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery & Assurance Notes */}
          <div className="mt-6 pt-5 border-t border-[rgba(23,23,23,0.08)] space-y-2 text-xs text-[#68645D]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#B89A62]" />
              <span>{product.leadTime} · Direct shipment from Karawal Nagar, Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B89A62]" />
              <span>Transit breakage replacement guarantee in heavy wooden crate</span>
            </div>
          </div>

          {/* Available Specifications Table */}
          <div className="mt-8 pt-6 border-t border-[rgba(23,23,23,0.08)]">
            <span className="label-mono text-[0.6rem] text-[#B89A62] mb-3">
              Architectural Specifications
            </span>
            <div className="divide-y divide-[rgba(23,23,23,0.08)] text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="py-2.5 flex justify-between gap-4">
                  <span className="text-[#68645D]">{spec.label}</span>
                  <span className="font-mono text-[#171717] text-right font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
