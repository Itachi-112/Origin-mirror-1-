'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, BRAND_INFO } from '@/lib/products';
import { ProductVisualizer } from './ProductVisualizer';
import { ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  // Use product 2 (Circular Orbit) as the primary focal statement
  const heroProduct = PRODUCTS[1];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0C0D0E]">
      {/* Background Ambience & Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Brand Statement (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 text-left flex flex-col justify-center">
            {/* Editorial Brand Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#D4AF37] font-mono mb-4"
            >
              <span>{BRAND_INFO.name}</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
              <span className="text-neutral-400">Delhi, India</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.08] mb-6 [text-wrap:balance]"
            >
              REFLECTION,
              <br />
              <span className="italic font-light text-neutral-200">REDEFINED.</span>
            </motion.h1>

            {/* Exact Subheading Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-lg"
            >
              &ldquo;{BRAND_INFO.subheading}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#collection"
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-black bg-[#D4AF37] hover:bg-[#E5C358] rounded transition-all duration-200 shadow-[0_10px_25px_rgba(212,175,55,0.2)] flex items-center gap-2 group"
              >
                <span>EXPLORE THE COLLECTION</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                href={`/products/${heroProduct.id}`}
                className="px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
              >
                View Orbit Masterpiece
              </Link>
            </motion.div>

            {/* Discrete Trust & Material Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 mt-10 pt-6 text-xs text-neutral-400"
            >
              <div>
                <div className="text-white font-mono font-medium">S.S 304 Grade</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Physical Vapor Deposition</div>
              </div>
              <div>
                <div className="text-white font-mono font-medium">Triple-Lit CCT</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">3000K · 4500K · 6500K</div>
              </div>
              <div>
                <div className="text-white font-mono font-medium">5mm Eco Glass</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Copper-Free Distortionless</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visualizer Artwork (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col"
          >
            <div className="relative">
              {/* Product Visualizer with Lighting Controls */}
              <ProductVisualizer
                product={heroProduct}
                aspectRatio="hero"
                showControls={true}
                className="shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-white/15"
              />

              {/* Floating Architectural Spec Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 z-20 bg-[#14161A]/95 backdrop-blur-md border border-white/15 p-4 rounded-lg shadow-2xl max-w-[280px]">
                <div className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider mb-0.5">
                  Featured Masterpiece
                </div>
                <div className="text-sm font-serif text-white line-clamp-1">{heroProduct.name}</div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs">
                  <span className="font-mono text-neutral-300">{heroProduct.size}</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">
                    {heroProduct.formattedPrice}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
