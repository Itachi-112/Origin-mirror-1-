'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import { useCart } from '@/lib/cart-context';
import { ProductModal } from './ProductModal';
import { ArrowUpRight, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Refined luxurious easing curve (slow-paced editorial settling)
const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function ProductGrid() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="collection" className="py-28 bg-[#0C0D0E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: luxuryEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-white/10 gap-4"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.26em] text-[#D4AF37] font-mono mb-2">
              02. The Curated Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Statement Mirrors & Illuminated Sculptures
            </h2>
          </div>
          <div className="text-xs text-neutral-400 font-mono tracking-wider">
            4 ARCHITECTURAL CREATIONS · ALL SIZES & SPECS DIRECT FROM STUDIO
          </div>
        </motion.div>

        {/* Asymmetric Editorial Layout (2 Staggered Pairs) */}
        <div className="space-y-28">
          {/* Pair 1: Product 1 (Wide 7-col) & Product 2 (Focused 5-col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Product 1: Moonlit Palm (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.15, ease: luxuryEase }}
              className="lg:col-span-7 flex flex-col group"
            >
              <div
                onClick={() => setSelectedProduct(PRODUCTS[0])}
                className="cursor-pointer overflow-hidden rounded-xl bg-[#121316] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
              >
                <ProductVisualizer
                  product={PRODUCTS[0]}
                  aspectRatio="pdp"
                  showControls={true}
                  className="rounded-b-none"
                />
              </div>

              {/* Card Meta Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: luxuryEase }}
                className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] tracking-[0.2em] mb-1.5">
                    01 · {PRODUCTS[0].category}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(PRODUCTS[0])}
                    className="text-2xl font-serif text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300"
                  >
                    {PRODUCTS[0].name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-mono mt-1.5">
                    Exact Size: <span className="text-white font-medium">{PRODUCTS[0].size}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                  <div className="text-xl font-mono font-medium text-white">
                    {PRODUCTS[0].formattedPrice}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(PRODUCTS[0], e)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded flex items-center gap-1.5 transition-colors duration-200"
                    >
                      {addedId === PRODUCTS[0].id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(PRODUCTS[0])}
                      className="p-2 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
                      title="View Full Product Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Product 2: S.S 304 Circular Orbit (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.15, delay: 0.22, ease: luxuryEase }}
              className="lg:col-span-5 flex flex-col group lg:mt-14"
            >
              <div
                onClick={() => setSelectedProduct(PRODUCTS[1])}
                className="cursor-pointer overflow-hidden rounded-xl bg-[#121316] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
              >
                <ProductVisualizer
                  product={PRODUCTS[1]}
                  aspectRatio="card"
                  showControls={true}
                  className="rounded-b-none"
                />
              </div>

              {/* Card Meta Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: luxuryEase }}
                className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] tracking-[0.2em] mb-1.5">
                    02 · {PRODUCTS[1].category}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(PRODUCTS[1])}
                    className="text-2xl font-serif text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300"
                  >
                    {PRODUCTS[1].name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-mono mt-1.5">
                    Exact Size: <span className="text-white font-medium">{PRODUCTS[1].size}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                  <div className="text-xl font-mono font-medium text-[#D4AF37]">
                    {PRODUCTS[1].formattedPrice}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(PRODUCTS[1], e)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C358] rounded flex items-center gap-1.5 transition-colors duration-200"
                    >
                      {addedId === PRODUCTS[1].id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-black" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(PRODUCTS[1])}
                      className="p-2 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
                      title="View Full Product Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Pair 2: Inverted Stagger - Product 3 (5 cols) & Product 4 (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Product 3: Nova Curve (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.15, ease: luxuryEase }}
              className="lg:col-span-5 flex flex-col group"
            >
              <div
                onClick={() => setSelectedProduct(PRODUCTS[2])}
                className="cursor-pointer overflow-hidden rounded-xl bg-[#121316] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
              >
                <ProductVisualizer
                  product={PRODUCTS[2]}
                  aspectRatio="card"
                  showControls={true}
                  className="rounded-b-none"
                />
              </div>

              {/* Card Meta Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: luxuryEase }}
                className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] tracking-[0.2em] mb-1.5">
                    03 · {PRODUCTS[2].category}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(PRODUCTS[2])}
                    className="text-2xl font-serif text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300"
                  >
                    {PRODUCTS[2].name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-mono mt-1.5">
                    Exact Size: <span className="text-white font-medium">{PRODUCTS[2].size}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                  <div className="text-xl font-mono font-medium text-white">
                    {PRODUCTS[2].formattedPrice}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(PRODUCTS[2], e)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded flex items-center gap-1.5 transition-colors duration-200"
                    >
                      {addedId === PRODUCTS[2].id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(PRODUCTS[2])}
                      className="p-2 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
                      title="View Full Product Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Product 4: Urban Curve Matt Black (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.15, delay: 0.22, ease: luxuryEase }}
              className="lg:col-span-7 flex flex-col group lg:mt-10"
            >
              <div
                onClick={() => setSelectedProduct(PRODUCTS[3])}
                className="cursor-pointer overflow-hidden rounded-xl bg-[#121316] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
              >
                <ProductVisualizer
                  product={PRODUCTS[3]}
                  aspectRatio="pdp"
                  showControls={true}
                  className="rounded-b-none"
                />
              </div>

              {/* Card Meta Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: luxuryEase }}
                className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] tracking-[0.2em] mb-1.5">
                    04 · {PRODUCTS[3].category}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(PRODUCTS[3])}
                    className="text-2xl font-serif text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300"
                  >
                    {PRODUCTS[3].name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-mono mt-1.5">
                    Exact Size: <span className="text-white font-medium">{PRODUCTS[3].size}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                  <div className="text-xl font-mono font-medium text-white">
                    {PRODUCTS[3].formattedPrice}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(PRODUCTS[3], e)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded flex items-center gap-1.5 transition-colors duration-200"
                    >
                      {addedId === PRODUCTS[3].id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(PRODUCTS[3])}
                      className="p-2 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
                      title="View Full Product Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick View / Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
