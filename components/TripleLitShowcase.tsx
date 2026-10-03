'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Sparkles, Eye, Shield, Sliders, Zap } from 'lucide-react';

export function TripleLitShowcase() {
  const [activeTemp, setActiveTemp] = useState<'3000k' | '4500k' | '6500k'>('4500k');

  const temps = {
    '3000k': {
      title: '3000K Golden Warmth',
      desc: 'Inviting, restful ambient glow reminiscent of evening candlelight. Optimal for relaxation rituals, evening baths, and architectural mood lighting.',
      color: '#FFB85A',
      bgGlow: 'rgba(255, 184, 90, 0.25)',
      mood: 'Evening Ambience',
    },
    '4500k': {
      title: '4500K Pure Natural Neutral',
      desc: 'Crisp, color-accurate neutral white calibrated to natural morning daylight. Ideal for precision grooming, makeup application, and true skin-tone clarity.',
      color: '#FFFFFF',
      bgGlow: 'rgba(255, 255, 255, 0.25)',
      mood: 'Vanity & Grooming',
    },
    '6500k': {
      title: '6500K Architectural Daylight',
      desc: 'High-energy, focused clarity that highlights clean architectural lines, marble veining, and tile textures throughout the bath sanctuary.',
      color: '#CBE5FF',
      bgGlow: 'rgba(203, 229, 255, 0.25)',
      mood: 'Architectural Daylight',
    },
  };

  const current = temps[activeTemp];

  return (
    <section id="triple-lit" className="py-24 bg-[#0F1014] text-white border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Technical Control (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-mono mb-2">
              03. Illumination Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight mb-4">
              Triple-Lit LED Technology with Feather-Touch Dimming
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
              Origin Mirrors integrates triple color temperature arrays with high Color Rendering
              Index (CRI &gt; 95), eliminating unnatural skin casts and harsh shadows. Switch seamlessly
              with a single capacitive touch.
            </p>

            {/* Interactive Mode Selector Tabs */}
            <div className="space-y-3">
              {(['3000k', '4500k', '6500k'] as const).map((tempKey) => {
                const item = temps[tempKey];
                const isSelected = activeTemp === tempKey;
                return (
                  <button
                    key={tempKey}
                    type="button"
                    onClick={() => setActiveTemp(tempKey)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'border-[#D4AF37] bg-[#16181D] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        : 'border-white/10 bg-[#121316] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-white">{item.title}</span>
                      </div>
                      <span className="text-xs text-neutral-400 mt-1 block pl-4.5">{item.mood}</span>
                    </div>

                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'text-neutral-500'
                      }`}
                    >
                      {tempKey.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Mirror Glow Simulator (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] p-8 flex items-center justify-center">
              {/* Backlit Wall Wash with Animated Color and Blur */}
              <motion.div
                className="absolute inset-4 rounded-3xl filter blur-3xl pointer-events-none"
                animate={{
                  backgroundColor: current.bgGlow,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Mirror Body with Active Perimeter Glow */}
              <motion.div
                className="relative w-full h-full rounded-2xl p-[6px] bg-gradient-to-tr from-neutral-800 to-neutral-700 shadow-2xl overflow-hidden flex flex-col justify-between"
                animate={{
                  boxShadow: `0 0 40px ${current.bgGlow}, 0 20px 40px rgba(0,0,0,0.8)`,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Diffuser Ribbon */}
                <motion.div
                  className="w-full h-full rounded-xl p-3 flex flex-col justify-between"
                  animate={{
                    backgroundColor: current.bgGlow,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Glass Mirror Center */}
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#1C2026] via-[#101419] to-[#0A0D10] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                    {/* Shimmer line */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />

                    <div className="z-10">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">
                        Solid State Array
                      </span>
                      <div className="text-2xl font-serif text-white mb-2">{current.title}</div>
                      <p className="text-xs text-neutral-400 max-w-[240px] leading-relaxed">
                        {current.desc}
                      </p>
                    </div>

                    {/* Touch Button Sensor Graphic */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <motion.div
                        className="w-6 h-6 rounded border border-white/60 flex items-center justify-center shadow-lg"
                        animate={{
                          borderColor: current.color,
                        }}
                      >
                        <Zap className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-[8px] font-mono text-neutral-500 uppercase mt-1">
                        Capacitive Touch
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
