'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import Link from 'next/link';

const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const heroProduct = PRODUCTS[1]; // S.S 304 Circular Orbit Mirror

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 bg-[#F7F5F0] border-b border-[rgba(23,23,23,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Hero Typography & Actions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Label with Line Decor */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: luxuryEase }}
              className="flex items-center mb-4"
            >
              <span className="line-decor" />
              <span className="label-mono">Delhi, India</span>
            </motion.div>

            {/* Main Title (Cormorant Garamond font-size clamp(4rem, 8vw, 7rem)) */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.12, ease: luxuryEase }}
              className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-[#171717] tracking-tight leading-[0.98] mb-8 [text-wrap:balance]"
            >
              Reflection,
              <br />
              <i className="italic font-normal">Redefined.</i>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: luxuryEase }}
              className="text-base sm:text-lg text-[#68645D] font-light leading-relaxed max-w-lg mb-10"
            >
              Statement mirrors designed to bring light, form and character to contemporary spaces.
              Handcrafted precision in architectural stainless steel by Origin Creative Glasses India.
            </motion.p>

            {/* Buttons (Variation 5 styles) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.38, ease: luxuryEase }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#collection" className="btn-primary-var5">
                The Collection
              </a>
              <a href="#about" className="btn-outline-var5">
                Our Heritage
              </a>
            </motion.div>

            {/* Technical Sub-specifications */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: luxuryEase }}
              className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-[rgba(23,23,23,0.08)] text-xs"
            >
              <div>
                <span className="label-mono text-[0.6rem] mb-1">Metallurgy</span>
                <span className="font-mono text-[#171717] font-semibold">S.S 304 GRADE</span>
              </div>
              <div>
                <span className="label-mono text-[0.6rem] mb-1">Optics</span>
                <span className="font-mono text-[#171717] font-semibold">5MM COPPER-FREE</span>
              </div>
              <div>
                <span className="label-mono text-[0.6rem] mb-1">Array</span>
                <span className="font-mono text-[#171717] font-semibold">TRIPLE-LIT CCT</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Featured Mirror Artwork Showcase (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.2, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/5] bg-[#E2E0D8] border border-[rgba(23,23,23,0.08)] overflow-hidden rounded-sm shadow-xl">
              {/* Product Visualizer */}
              <ProductVisualizer
                product={heroProduct}
                aspectRatio="pdp"
                showControls={true}
                className="w-full h-full rounded-none border-none"
              />

              {/* Floating Architectural Badge (from Variation 5 HTML) */}
              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white p-6 border border-[rgba(23,23,23,0.08)] shadow-lg max-w-[240px] z-20">
                <span className="label-mono text-[0.55rem] mb-1.5">Featured Series</span>
                <p className="font-serif text-lg leading-tight text-[#171717] mb-2">
                  Orbit Masterpiece Circular Mirror
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[rgba(23,23,23,0.06)]">
                  <p className="font-mono text-xs text-[#B89A62] font-semibold">S.S 304 GRADE</p>
                  <p className="font-mono text-xs text-[#171717] font-semibold">{heroProduct.formattedPrice}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
