'use client';

import React from 'react';
import { Product } from '@/lib/products';
import { ProductDetailView } from './ProductDetailView';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-[#101216] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          <ProductDetailView product={product} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
