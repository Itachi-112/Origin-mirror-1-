'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function TripleLitShowcase() {
  const [activeTemp, setActiveTemp] = useState<'3000k' | '4500k' | '6500k'>('4500k');

  const temps = {
    '3000k': {
      title: '3000K Golden Warmth',
      desc: 'Inviting, restful ambient glow reminiscent of evening candlelight. Optimal for relaxation rituals and evening baths.',
      color: '#FFB85A',
      bgGlow: 'rgba(255, 184, 90, 0.25)',
      mood: 'EVENING AMBIENCE',
    },
    '4500k': {
      title: '4500K Pure Neutral',
      desc: 'Crisp, color-accurate neutral white calibrated to natural morning daylight. Ideal for precision grooming and true skin-tone clarity.',
      color: '#FFFFFF',
      bgGlow: 'rgba(255, 255, 255, 0.4)',
      mood: 'VANITY & GROOMING',
    },
    '6500k': {
      title: '6500K Architectural Daylight',
      desc: 'High-energy, focused clarity that highlights clean architectural lines, marble veining, and tile textures throughout the bath sanctuary.',
      color: '#CBE5FF',
      bgGlow: 'rgba(203, 229, 255, 0.3)',
      mood: 'CRISP CLARITY',
    },
  };

  const current = temps[activeTemp];

  return (
    <section id="triple-lit" className="py-28 bg-[#F7F5F0] border-b border-[rgba(23,23,23,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <span className="label-mono mb-2">Illumination Engineering</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#171717] font-light leading-tight mb-6">
              Solid-State Ambience Calibration
            </h2>
            <p className="text-base text-[#68645D] font-light leading-relaxed mb-10">
              Origin Mirrors integrates triple color temperature arrays with high Color Rendering
              Index (CRI &gt; 95), calibrated to morning daylight and evening tranquility.
            </p>

            {/* 3 Temperature Selector Rows (Matching Variation 5 HTML) */}
            <div className="space-y-0 divide-y divide-[rgba(23,23,23,0.08)] border-t border-b border-[rgba(23,23,23,0.08)]">
              {(['3000k', '4500k', '6500k'] as const).map((tempKey) => {
                const item = temps[tempKey];
                const isSelected = activeTemp === tempKey;
                return (
                  <button
                    key={tempKey}
                    type="button"
                    onClick={() => setActiveTemp(tempKey)}
                    className={`w-full text-left py-5 px-3 flex items-center justify-between transition-colors ${
                      isSelected ? 'bg-white/60' : 'hover:bg-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className="w-10 h-10 rounded-full border border-[rgba(23,23,23,0.15)] flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <p
                          className={`font-semibold text-sm ${
                            isSelected ? 'text-[#B89A62]' : 'text-[#171717]'
                          }`}
                        >
                          {item.title}
                        </p>
                        <p className="font-mono text-xs text-[#68645D] tracking-wider mt-0.5">
                          {item.mood}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded-sm ${
                        isSelected
                          ? 'bg-[#B89A62] text-white font-bold'
                          : 'text-[#68645D] border border-[rgba(23,23,23,0.1)]'
                      }`}
                    >
                      {tempKey.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Mirror Module Simulator (7 cols) */}
          <div className="lg:col-span-7 flex items-center justify-center bg-white border border-[rgba(23,23,23,0.08)] p-8 sm:p-12 shadow-sm rounded-sm">
            <div className="w-full max-w-[480px] aspect-[1.2] bg-[#F0EEEA] border border-[rgba(23,23,23,0.08)] rounded-sm p-8 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-inner">
              {/* Backlit Glow Animation */}
              <motion.div
                className="absolute inset-6 rounded-lg filter blur-2xl pointer-events-none"
                animate={{
                  backgroundColor: current.bgGlow,
                }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <span className="label-mono text-[0.6rem] mb-2 text-[#B89A62]">Vanity Module 04</span>
                <p className="font-serif text-3xl sm:text-4xl text-[#171717] font-light mb-3">
                  {current.title}
                </p>
                <p className="text-xs text-[#68645D] max-w-xs mx-auto leading-relaxed mb-6 font-light">
                  {current.desc}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[rgba(23,23,23,0.1)] rounded-sm shadow-sm">
                  <Zap className="w-3 h-3 text-[#B89A62]" />
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-[#B89A62] uppercase font-semibold">
                    Capacitive Touch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
