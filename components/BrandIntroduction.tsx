'use client';

import React from 'react';
import { BRAND_INFO } from '@/lib/products';
import { motion } from 'framer-motion';

// Refined luxurious easing curve (Apple / Architectural Digest slow settling)
const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function BrandIntroduction() {
  return (
    <section id="craftsmanship" className="py-28 bg-[#0F1013] text-white border-t border-b border-white/5 relative overflow-hidden">
      {/* Subtle Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with Slow-Paced Staggered Scroll Reveals */}
        <div className="max-w-3xl mb-20">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: luxuryEase }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-[#D4AF37] font-mono mb-4"
          >
            <span>01. The Architectural Philosophy</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
          </motion.div>

          {/* Main Statement Title */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.15, ease: luxuryEase }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.18] [text-wrap:balance]"
          >
            Crafted for spaces where light is not merely illumination, but an architectural material.
          </motion.h2>

          {/* Narrative Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.3, ease: luxuryEase }}
            className="mt-6 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl"
          >
            At {BRAND_INFO.company}, every mirror is conceived as a functional sculpture. We reject
            fragile plastic housings and generic framing in favor of marine-grade S.S 304 stainless
            steel, precision PVD metallization, and multi-tone solid-state LED arrays.
          </motion.p>
        </div>

        {/* 3 Core Ethos Pillars with Cascading Luxurious Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_INFO.ethos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 1.05,
                delay: 0.25 + index * 0.18,
                ease: luxuryEase,
              }}
              className="group p-8 rounded-xl bg-[#14161A]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#D4AF37] tracking-[0.2em] mb-4">
                  PILLAR 0{index + 1}
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono tracking-wider">
                <span>ORIGIN CREATIVE GLASSES</span>
                <span>DELHI</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
