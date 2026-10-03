'use client';

import React from 'react';
import { BRAND_INFO } from '@/lib/products';
import { motion } from 'framer-motion';

const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function BrandIntroduction() {
  return (
    <section id="craftsmanship" className="py-28 bg-[#171717] text-[#F7F5F0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Centered Editorial Header (from Variation 5) */}
        <div className="text-center max-w-[800px] mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: luxuryEase }}
            className="label-mono mb-4 text-[#B89A62]"
          >
            The Architectural Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.15, ease: luxuryEase }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F7F5F0] leading-[1.18] [text-wrap:balance]"
          >
            Crafted for spaces where light is not merely illumination, but an architectural material.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.3, ease: luxuryEase }}
            className="mt-6 text-sm sm:text-base text-[rgba(247,245,240,0.7)] font-light leading-relaxed max-w-xl mx-auto"
          >
            At {BRAND_INFO.company}, every mirror is conceived as a functional sculpture, engineered with
            Grade 304 austenitic stainless steel and solid-state LED arrays.
          </motion.p>
        </div>

        {/* 3 Pillars Grid with Variation 5 border-top dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BRAND_INFO.ethos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 1.05,
                delay: 0.2 + index * 0.18,
                ease: luxuryEase,
              }}
              className="border-t border-[rgba(247,245,240,0.15)] pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#B89A62] block mb-2">
                  PILLAR 0{index + 1}
                </span>
                <h3 className="text-2xl font-serif text-[#F7F5F0] mb-4 font-normal">
                  {item.title}
                </h3>
                <p className="text-sm text-[rgba(247,245,240,0.7)] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(247,245,240,0.06)] flex items-center justify-between text-[10px] font-mono text-[rgba(247,245,240,0.4)] tracking-widest">
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
