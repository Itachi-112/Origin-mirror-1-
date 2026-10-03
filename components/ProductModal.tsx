'use client';

import React from 'react';
import { Product } from '@/lib/products';
import { ProductDetailView } from './ProductDetailView';
import { motion, AnimatePresence } from 'framer-motion';
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
          className="fixed inset-0 bg-[#171717]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[rgba(23,23,23,0.08)] rounded-sm p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-sm text-[#68645D] hover:text-[#171717] bg-[#F7F5F0] hover:bg-neutral-200 transition-colors z-20"
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
