'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import { useCart } from '@/lib/cart-context';
import { ProductModal } from './ProductModal';
import { ArrowUpRight, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="collection" className="py-28 bg-[#FFFFFF] border-b border-[rgba(23,23,23,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: luxuryEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="label-mono mb-2">Curated Collection</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#171717] font-light tracking-tight">
              Illuminated Sculptures
            </h2>
          </div>
          <p className="max-w-md text-[#68645D] text-sm sm:text-base font-light leading-relaxed md:text-right">
            From laser-etched botanical silhouettes to sculptural titanium coatings, each piece is
            individually inspected and fabricated in Delhi.
          </p>
        </motion.div>

        {/* 2-Column Product Grid with Full Original Photo Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{
                duration: 1.1,
                delay: (index % 2) * 0.18,
                ease: luxuryEase,
              }}
              className="group flex flex-col"
            >
              {/* Product Visual Container with Full Photo Scene Preservation */}
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer border border-[rgba(23,23,23,0.12)] overflow-hidden rounded-sm group-hover:border-[#B89A62] transition-colors duration-300 shadow-md bg-neutral-900"
              >
                <ProductVisualizer
                  product={product}
                  aspectRatio="card"
                  showControls={true}
                  className="w-full rounded-none border-none"
                />
              </div>

              {/* Product Meta Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pt-4">
                <div>
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="text-2xl font-serif text-[#171717] hover:text-[#B89A62] transition-colors cursor-pointer mb-1 leading-snug"
                  >
                    {product.name}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#68645D]">
                    {product.size} · {product.finish}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                  <span className="font-mono text-xl font-bold text-[#B89A62]">
                    {product.formattedPrice}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#B89A62] rounded-sm flex items-center gap-1.5 transition-colors"
                    >
                      {addedId === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
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
                      onClick={() => setSelectedProduct(product)}
                      className="p-1.5 text-[#171717] hover:text-[#B89A62] border border-[rgba(23,23,23,0.15)] hover:border-[#B89A62] rounded-sm transition-colors"
                      title="View Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
