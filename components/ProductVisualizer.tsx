'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/products';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Sparkles, Eye, Ruler } from 'lucide-react';

interface ProductVisualizerProps {
  product: Product;
  interactive?: boolean;
  aspectRatio?: 'hero' | 'card' | 'pdp';
  showControls?: boolean;
  priority?: boolean;
  className?: string;
  onExplore?: () => void;
}

export type LightingMode = 'warm' | 'natural' | 'cool' | 'off';

export function ProductVisualizer({
  product,
  interactive = true,
  aspectRatio = 'card',
  showControls = true,
  className = '',
  onExplore,
}: ProductVisualizerProps) {
  const [lightMode, setLightMode] = useState<LightingMode>('natural');
  const [showDimensions, setShowDimensions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Color temperatures
  const lightColors = {
    warm: {
      glow: 'rgba(255, 204, 128, 0.45)',
      diffuse: '#FFF2D6',
      intense: '#FFE0A0',
      ambient: 'rgba(240, 180, 90, 0.25)',
      name: '3000K Warm Ambient',
    },
    natural: {
      glow: 'rgba(255, 245, 230, 0.5)',
      diffuse: '#FFFBF5',
      intense: '#FFFFFF',
      ambient: 'rgba(245, 235, 220, 0.25)',
      name: '4500K Natural Vanity',
    },
    cool: {
      glow: 'rgba(215, 235, 255, 0.55)',
      diffuse: '#F2F8FF',
      intense: '#FFFFFF',
      ambient: 'rgba(180, 215, 255, 0.25)',
      name: '6500K Daylight Clear',
    },
    off: {
      glow: 'rgba(0, 0, 0, 0)',
      diffuse: '#33373E',
      intense: '#4A505A',
      ambient: 'rgba(0, 0, 0, 0)',
      name: 'Ambient Room Reflection Only',
    },
  };

  const currentLight = lightColors[lightMode];

  // Specific renderers for each of the 4 products
  const renderProductScene = () => {
    switch (product.id) {
      case 'origin-01':
        // Moonlit Palm Triple-Lit LED Mirror
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#131417] overflow-hidden select-none">
            {/* Background Texture: Architectural Rustic Brick Wall */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 40%, rgba(35,38,44,0.8), rgba(12,13,15,1)), 
                  repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.03) 20px),
                  repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.02) 50px)`,
              }}
            />

            {/* Backlit Wall Glow */}
            <motion.div
              className="absolute w-[80%] h-[72%] rounded-2xl filter blur-2xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.9,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* 36x24 Mirror Chassis Frame */}
            <div className="relative w-[78%] max-w-[560px] aspect-[36/24] z-10 flex items-center justify-center p-[2px] rounded-lg shadow-2xl">
              {/* Glass Surface with Reflection Gradient */}
              <div className="relative w-full h-full rounded-md overflow-hidden bg-gradient-to-br from-[#1E232B] via-[#12161D] to-[#0A0D12] border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                {/* Mirror Shimmer & Room Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none transform -skew-x-12 translate-x-2" />

                {/* Laser-Etched Palm & Celestial Artwork Overlay */}
                <svg
                  viewBox="0 0 720 480"
                  className="w-full h-full absolute inset-0 z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="glow-palm" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Stars Constellation */}
                  <g
                    filter={lightMode !== 'off' ? 'url(#glow-palm)' : undefined}
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.25 : 0.95}
                    className="transition-colors duration-300"
                  >
                    {/* Stars along top */}
                    {[
                      [80, 90, 8], [115, 105, 5], [130, 80, 9], [175, 115, 6], [210, 100, 7],
                      [240, 70, 8], [270, 110, 5], [305, 85, 9], [340, 115, 6], [380, 90, 8],
                      [415, 75, 5], [440, 105, 8], [475, 80, 6], [510, 110, 7], [535, 70, 8],
                      [565, 95, 6], [600, 80, 9],
                    ].map(([cx, cy, r], i) => (
                      <polygon
                        key={i}
                        points={`${cx},${cy - r} ${cx + r * 0.3},${cy - r * 0.3} ${cx + r},${cy} ${cx + r * 0.3},${cy + r * 0.3} ${cx},${cy + r} ${cx - r * 0.3},${cy + r * 0.3} ${cx - r},${cy} ${cx - r * 0.3},${cy - r * 0.3}`}
                      />
                    ))}

                    {/* Crescent Moon in top right */}
                    <path
                      d="M 640 60 C 625 60 612 72 612 88 C 612 104 625 116 640 116 C 632 112 626 101 626 88 C 626 75 632 64 640 60 Z"
                    />
                  </g>

                  {/* Island & Shoreline Base */}
                  <path
                    d="M 60 325 Q 160 320 220 322 L 660 322 L 660 330 L 70 330 Q 60 330 60 325 Z"
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.3 : 0.95}
                    filter={lightMode !== 'off' ? 'url(#glow-palm)' : undefined}
                  />

                  {/* Luminous Tropical Palm Tree */}
                  <g
                    filter={lightMode !== 'off' ? 'url(#glow-palm)' : undefined}
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.3 : 1}
                    className="transition-colors duration-300"
                  >
                    {/* Trunk */}
                    <path d="M 195 324 Q 185 280 205 230 Q 212 210 215 195 L 222 196 Q 219 211 213 231 Q 193 281 204 324 Z" />
                    {/* Palm Fronds */}
                    {/* Left Fronds */}
                    <path d="M 216 198 Q 160 170 145 220 Q 170 205 214 200 Z" />
                    <path d="M 216 195 Q 150 140 160 190 Q 180 175 215 198 Z" />
                    <path d="M 217 192 Q 180 125 190 170 Q 200 160 217 194 Z" />
                    {/* Crown Fronds */}
                    <path d="M 218 190 Q 215 110 225 155 Q 223 170 219 191 Z" />
                    <path d="M 220 190 Q 245 115 240 165 Q 235 178 221 192 Z" />
                    {/* Right Fronds */}
                    <path d="M 221 193 Q 275 130 268 180 Q 255 175 221 196 Z" />
                    <path d="M 220 196 Q 285 170 265 225 Q 250 205 218 200 Z" />
                  </g>

                  {/* Capacitive Touch Switch Indicator */}
                  <rect
                    x="350"
                    y="355"
                    width="20"
                    height="20"
                    rx="3"
                    stroke={lightMode !== 'off' ? currentLight.diffuse : '#555'}
                    strokeWidth="1.5"
                    fill="rgba(0,0,0,0.5)"
                  />
                  <circle
                    cx="360"
                    cy="365"
                    r="4"
                    fill={lightMode !== 'off' ? currentLight.diffuse : '#555'}
                  />

                  {/* Discreet Brand Inscription */}
                  <text
                    x="620"
                    y="368"
                    fontSize="7"
                    fontWeight="600"
                    letterSpacing="1"
                    fontFamily="sans-serif"
                    fill="rgba(255,255,255,0.4)"
                  >
                    ORIGIN
                  </text>
                </svg>

                {/* Vanity Sink Reflection at Bottom */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[65%] h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </div>
            </div>

            {/* Bottom Vanity & Washbasin Scene Mockup */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] max-w-[480px] h-20 bg-gradient-to-t from-white/95 to-white/70 rounded-t-[100px] shadow-2xl z-20 border-t border-white/40 flex items-center justify-center">
              <div className="w-16 h-1 bg-neutral-300 rounded-full mb-8 opacity-60" />
            </div>
          </div>
        );

      case 'origin-02':
        // S.S 304 PVD Circular Orbit Mirror with Gold Frame
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#0D0F12] overflow-hidden select-none">
            {/* Background Texture: Nero Marquina Dark Marble with Mountain Window */}
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: `
                  radial-gradient(circle at 80% 30%, rgba(200, 160, 110, 0.08), transparent 50%),
                  linear-gradient(135deg, #121418 0%, #0A0B0D 100%)
                `,
              }}
            />

            {/* Realistic Marble Veining SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M -20,120 Q 150,90 280,220 T 580,200 Q 800,280 900,450"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 120,-30 Q 220,150 450,180 T 750,420"
                stroke="rgba(212,175,55,0.2)"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            {/* Mountain View Sidelight (Simulating the window from the photo) */}
            <div className="absolute right-0 top-0 bottom-0 w-[24%] bg-gradient-to-l from-[#3A332C]/30 to-transparent border-l border-white/5 flex flex-col justify-end p-4">
              <div className="w-full h-24 bg-gradient-to-t from-[#1F241E]/40 to-transparent rounded-t-lg" />
            </div>

            {/* Ambient Gold Sconces */}
            <div className="absolute left-[12%] top-[35%] w-3 h-10 bg-gradient-to-b from-[#D4AF37] to-[#8C6D23] rounded-full shadow-[0_0_25px_#D4AF37] opacity-80" />
            <div className="absolute right-[28%] top-[35%] w-3 h-10 bg-gradient-to-b from-[#D4AF37] to-[#8C6D23] rounded-full shadow-[0_0_25px_#D4AF37] opacity-80" />

            {/* Circular Orbit Mirror: 30x30 inch frame (1:1 aspect) */}
            <div className="relative w-[65%] max-w-[400px] aspect-square z-10 flex items-center justify-center rounded-full p-[5px] bg-gradient-to-tr from-[#8A6A25] via-[#F4D068] to-[#99762C] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.25)]">
              {/* Mirror Glass Core */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#1C212A] via-[#10141A] to-[#0A0D12] shadow-inner">
                {/* Mirror Shimmer & Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none transform -rotate-12" />

                {/* Inner Concentric Floating Gold Orbit Ring */}
                <div
                  className="absolute w-[58%] h-[58%] rounded-full right-[8%] top-[14%] border-[4px] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4),inset_0_0_10px_rgba(212,175,55,0.2)] pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 80%)',
                  }}
                />

                {/* Subtle Brand Inscription at Bottom */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold tracking-widest text-[#D4AF37]/70 uppercase">
                  ORIGIN
                </div>
              </div>
            </div>

            {/* Floating Black Marble Countertop with Brass Handles */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[620px] h-20 bg-gradient-to-r from-[#181B20] via-[#121417] to-[#181B20] border-t-2 border-[#D4AF37]/50 rounded-t-lg shadow-2xl flex items-center justify-center px-8 z-20">
              <div className="w-[45%] h-1.5 bg-[#D4AF37] rounded-full mx-auto opacity-70" />
            </div>
          </div>
        );

      case 'origin-03':
        // S.S 304 Gold PVD Nova Curve Triple-Lit LED Mirror
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#171614] overflow-hidden select-none">
            {/* Background Texture: High-End Warm Ivory & Plaster Vanity Suite */}
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(245, 235, 220, 0.12), transparent 60%),
                  linear-gradient(135deg, #1C1B18 0%, #100F0E 100%)
                `,
              }}
            />

            {/* Backlit Ambient Wall Glow */}
            <motion.div
              className="absolute w-[60%] h-[80%] rounded-[40px] filter blur-3xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.85,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Sculptural Asymmetric Arch Frame: 24x36 inches */}
            <div
              className="relative w-[52%] max-w-[340px] aspect-[24/36] z-10 p-[4px] rounded-tl-[150px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] bg-gradient-to-tr from-[#9B772E] via-[#F1CE6D] to-[#8C6B28] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(212,175,55,0.2)]"
            >
              {/* Inner Triple-Lit Diffuser Ribbon */}
              <motion.div
                className="relative w-full h-full rounded-tl-[146px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] p-[10px] overflow-hidden"
                animate={{
                  backgroundColor: lightMode === 'off' ? '#2A2620' : currentLight.glow,
                  boxShadow:
                    lightMode === 'off'
                      ? 'none'
                      : `inset 0 0 15px ${currentLight.intense}, 0 0 20px ${currentLight.glow}`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Mirror Glass Core */}
                <div className="relative w-full h-full rounded-tl-[138px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] overflow-hidden bg-gradient-to-br from-[#23211D] via-[#161513] to-[#0E0D0C] shadow-inner">
                  {/* Subtle Light Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none" />

                  {/* Capacitive Feather Touch Switch */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div
                      className="w-5 h-5 rounded-[4px] border border-[#D4AF37]/80 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          lightMode !== 'off' ? 'rgba(212,175,55,0.3)' : 'rgba(0,0,0,0.5)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Discreet Brand Name */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-semibold tracking-widest text-[#D4AF37]/60">
                    ORIGIN
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contemporary Curved White Floating Vanity with Walnut Strip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] max-w-[420px] h-24 bg-gradient-to-b from-[#F7F5EE] to-[#E5E1D5] rounded-t-3xl shadow-2xl z-20 flex flex-col items-center justify-start pt-2 border-t border-white">
              {/* Walnut Accent Groove */}
              <div className="w-full h-1.5 bg-[#4A3728] mt-3 opacity-90" />
              {/* Minimalist Basin */}
              <div className="w-32 h-6 -mt-8 bg-white rounded-full shadow-md border border-neutral-200" />
            </div>
          </div>
        );

      case 'origin-04':
      default:
        // S.S Matt Black Urban Curve Rectangular LED Mirror
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#101318] overflow-hidden select-none">
            {/* Background Texture: Horizontal Fluted Navy-Charcoal Tiles */}
            <div
              className="absolute inset-0 opacity-45 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, #18202A, #18202A 12px, #0F141A 13px, #0F141A 26px)',
              }}
            />

            {/* Perimeter Wall Backlight Wash */}
            <motion.div
              className="absolute w-[76%] h-[68%] rounded-[36px] filter blur-2xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.8,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Urban Curve Rectangular Chassis: 30x24 inches */}
            <div className="relative w-[72%] max-w-[500px] aspect-[30/24] z-10 p-[6px] rounded-[32px] bg-gradient-to-b from-[#2A2B30] to-[#121316] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_2px_4px_rgba(255,255,255,0.05)] border border-neutral-800">
              {/* Inner Frosted Diffuser Glow Ring */}
              <motion.div
                className="relative w-full h-full rounded-[26px] p-[10px] overflow-hidden"
                animate={{
                  backgroundColor: lightMode === 'off' ? '#22252B' : currentLight.glow,
                  boxShadow:
                    lightMode === 'off'
                      ? 'none'
                      : `inset 0 0 14px ${currentLight.intense}, 0 0 18px ${currentLight.glow}`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Mirror Glass Core */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-gradient-to-br from-[#1C2027] via-[#101419] to-[#0A0D11] shadow-inner">
                  {/* Subtle Botanical Leaf Reflection Simulation */}
                  <div className="absolute top-2 right-4 w-28 h-28 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-emerald-300">
                      <path
                        d="M 50 10 C 25 30 15 65 50 90 C 85 65 75 30 50 10 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Reflection Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none transform -skew-x-6" />

                  {/* Capacitive Feather Touch Switch */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div
                      className="w-5 h-5 rounded-[4px] border border-white/60 flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor:
                          lightMode !== 'off' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Discreet Brand Inscription */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-semibold tracking-widest text-white/50">
                    ORIGIN
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Ceramic Vessel Basin Reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[65%] max-w-[440px] h-20 bg-gradient-to-t from-white/90 to-white/70 rounded-t-[100px] shadow-2xl z-20 border-t border-white/40" />
          </div>
        );
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-xl bg-[#0F1012] border border-white/10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Canvas Container */}
      <div
        className={`w-full relative ${
          aspectRatio === 'hero'
            ? 'h-[460px] sm:h-[540px] md:h-[620px]'
            : aspectRatio === 'pdp'
            ? 'h-[440px] sm:h-[520px] md:h-[600px]'
            : 'h-[360px] sm:h-[420px]'
        }`}
      >
        {renderProductScene()}

        {/* Dimension Overlay Callout */}
        <AnimatePresence>
          {showDimensions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="max-w-xs bg-neutral-900/90 border border-white/20 p-5 rounded-lg text-white">
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-mono">
                  Exact Architectural Specs
                </div>
                <div className="text-2xl font-serif mb-1">{product.size}</div>
                <div className="text-xs text-neutral-400 mb-4">
                  {product.dimensions.width}″ W × {product.dimensions.height}″ H ×{' '}
                  {product.dimensions.depth}″ D
                </div>

                <div className="space-y-1.5 text-left border-t border-white/10 pt-3 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Material:</span>
                    <span className="font-medium text-right ml-2">{product.finish}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Glass:</span>
                    <span className="font-medium">5mm Copper-Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Protection:</span>
                    <span className="font-medium">IP44 Rated</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowDimensions(false)}
                  className="mt-4 w-full py-1.5 text-xs font-medium text-neutral-900 bg-white rounded hover:bg-neutral-200 transition-colors"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Lighting Controls Toolbar (Floating at Top-Right) */}
        {showControls && (
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
            {/* 3 Color Temperature Modes + Off */}
            <button
              type="button"
              title="Warm 3000K Lighting"
              onClick={() => setLightMode('warm')}
              className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-colors ${
                lightMode === 'warm'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Natural 4500K Lighting"
              onClick={() => setLightMode('natural')}
              className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-colors ${
                lightMode === 'natural'
                  ? 'bg-neutral-200/20 text-white border border-white/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Cool 6500K Daylight"
              onClick={() => setLightMode('cool')}
              className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-colors ${
                lightMode === 'cool'
                  ? 'bg-sky-400/20 text-sky-200 border border-sky-400/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Turn LED Off"
              onClick={() => setLightMode('off')}
              className={`px-1.5 h-7 rounded text-[10px] font-mono transition-colors ${
                lightMode === 'off'
                  ? 'bg-neutral-800 text-white border border-white/30'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              OFF
            </button>

            <div className="w-[1px] h-4 bg-white/15 mx-0.5" />

            {/* Dimensions Toggle Button */}
            <button
              type="button"
              title="View Dimensions Diagram"
              onClick={() => setShowDimensions(!showDimensions)}
              className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-colors ${
                showDimensions
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Current Light Tone Tooltip / Subtle Indicator */}
        {showControls && (
          <div className="absolute bottom-3 left-3 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-tight text-neutral-400 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: lightMode === 'off' ? '#555' : currentLight.diffuse }}
            />
            <span>{currentLight.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
