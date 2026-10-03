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
}: ProductVisualizerProps) {
  const [lightMode, setLightMode] = useState<LightingMode>('natural');
  const [showDimensions, setShowDimensions] = useState(false);

  // Lighting settings
  const lightColors = {
    warm: {
      glow: 'rgba(255, 204, 128, 0.55)',
      diffuse: '#FFF0D4',
      intense: '#FFE0A0',
      ambient: 'rgba(240, 180, 90, 0.35)',
      name: '3000K Warm Ambient',
    },
    natural: {
      glow: 'rgba(255, 245, 230, 0.6)',
      diffuse: '#FFFBF5',
      intense: '#FFFFFF',
      ambient: 'rgba(245, 235, 220, 0.3)',
      name: '4500K Natural Vanity',
    },
    cool: {
      glow: 'rgba(215, 235, 255, 0.65)',
      diffuse: '#F2F8FF',
      intense: '#FFFFFF',
      ambient: 'rgba(180, 215, 255, 0.3)',
      name: '6500K Daylight Clear',
    },
    off: {
      glow: 'rgba(0, 0, 0, 0)',
      diffuse: '#444850',
      intense: '#555B66',
      ambient: 'rgba(0, 0, 0, 0)',
      name: 'Ambient Room Reflection Only',
    },
  };

  const currentLight = lightColors[lightMode];

  // Specific renderers faithfully reproducing the original photo environments
  const renderProductScene = () => {
    switch (product.id) {
      case 'origin-01':
        // Product 4 from attachments: Moonlit Palm on exposed dark brick wall with tub reflection & wooden vanity
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#151210] overflow-hidden select-none">
            {/* Authentic Exposed Dark Rustic Brick Wall Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-90"
              style={{
                backgroundColor: '#1E1916',
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)),
                  repeating-linear-gradient(0deg, #120F0D, #120F0D 3px, transparent 3px, transparent 32px),
                  repeating-linear-gradient(90deg, #120F0D, #120F0D 3px, transparent 3px, transparent 68px)
                `,
              }}
            />

            {/* Ambient Edge Glow Washing onto Brickwork */}
            <motion.div
              className="absolute w-[86%] h-[74%] rounded-xl filter blur-2xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.85,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Frameless Floating Mirror (36x24 aspect) */}
            <div className="relative w-[84%] max-w-[580px] aspect-[36/24] z-10 flex items-center justify-center rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-amber-900/30 overflow-hidden">
              {/* Mirror Reflection: Luxury Bathroom with Freestanding Soaking Tub */}
              <div className="relative w-full h-full bg-gradient-to-b from-[#2B231D] via-[#1B1714] to-[#100D0B] overflow-hidden">
                {/* Background Soaking Tub Reflection in Mirror */}
                <div className="absolute top-[42%] left-[45%] -translate-x-1/2 w-[38%] h-[28%] rounded-[50px] bg-gradient-to-b from-[#38312B] to-[#1A1613] border border-white/10 shadow-lg pointer-events-none opacity-80" />
                {/* Chrome Shower Pipe Reflection */}
                <div className="absolute top-[12%] left-[48%] w-1.5 h-[34%] bg-gradient-to-r from-neutral-400 to-neutral-600 opacity-60 pointer-events-none" />

                {/* Laser-Etched Palm & Celestial Artwork */}
                <svg
                  viewBox="0 0 720 480"
                  className="w-full h-full absolute inset-0 z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="glow-palm-intense" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Top Constellation of Stars */}
                  <g
                    filter={lightMode !== 'off' ? 'url(#glow-palm-intense)' : undefined}
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.25 : 0.95}
                    className="transition-colors duration-300"
                  >
                    {[
                      [90, 85, 9], [128, 100, 5], [145, 78, 10], [195, 110, 6], [225, 95, 8],
                      [255, 68, 9], [285, 105, 5], [320, 82, 10], [355, 112, 6], [395, 88, 8],
                      [430, 72, 6], [455, 102, 9], [490, 78, 6], [525, 108, 8], [550, 68, 9],
                      [580, 92, 6], [615, 78, 10],
                    ].map(([cx, cy, r], i) => (
                      <polygon
                        key={i}
                        points={`${cx},${cy - r} ${cx + r * 0.3},${cy - r * 0.3} ${cx + r},${cy} ${cx + r * 0.3},${cy + r * 0.3} ${cx},${cy + r} ${cx - r * 0.3},${cy + r * 0.3} ${cx - r},${cy} ${cx - r * 0.3},${cy - r * 0.3}`}
                      />
                    ))}

                    {/* Crescent Moon in top right */}
                    <path
                      d="M 645 55 C 628 55 614 69 614 86 C 614 103 628 117 645 117 C 636 113 630 100 630 86 C 630 72 636 59 645 55 Z"
                    />
                  </g>

                  {/* Sand Dune / Shoreline Ground */}
                  <path
                    d="M 60 328 Q 150 322 210 325 L 660 325 L 660 334 L 70 334 Q 60 334 60 328 Z"
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.3 : 0.95}
                    filter={lightMode !== 'off' ? 'url(#glow-palm-intense)' : undefined}
                  />

                  {/* Illuminated Palm Tree */}
                  <g
                    filter={lightMode !== 'off' ? 'url(#glow-palm-intense)' : undefined}
                    fill={currentLight.diffuse}
                    opacity={lightMode === 'off' ? 0.3 : 1}
                    className="transition-colors duration-300"
                  >
                    {/* Palm Trunk */}
                    <path d="M 194 326 Q 183 280 205 230 Q 212 210 215 195 L 222 196 Q 219 211 213 231 Q 192 281 203 326 Z" />
                    {/* Fronds */}
                    <path d="M 216 198 Q 155 170 140 220 Q 168 205 214 200 Z" />
                    <path d="M 216 195 Q 145 140 155 190 Q 178 175 215 198 Z" />
                    <path d="M 217 192 Q 178 125 188 170 Q 198 160 217 194 Z" />
                    <path d="M 218 190 Q 215 110 225 155 Q 223 170 219 191 Z" />
                    <path d="M 220 190 Q 248 115 242 165 Q 236 178 221 192 Z" />
                    <path d="M 221 193 Q 278 130 270 180 Q 256 175 221 196 Z" />
                    <path d="M 220 196 Q 288 170 268 225 Q 252 205 218 200 Z" />
                  </g>

                  {/* Capacitive Square Touch Switch */}
                  <rect
                    x="350"
                    y="355"
                    width="20"
                    height="20"
                    rx="3"
                    stroke={lightMode !== 'off' ? currentLight.diffuse : '#666'}
                    strokeWidth="1.5"
                    fill="rgba(0,0,0,0.6)"
                  />
                  <circle
                    cx="360"
                    cy="365"
                    r="4"
                    fill={lightMode !== 'off' ? currentLight.diffuse : '#666'}
                  />

                  {/* ORIGIN logo mark */}
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
              </div>
            </div>

            {/* Wooden Countertop Vanity with Vessel Sink & Bonsai Plant (From Original Photo) */}
            <div className="absolute -bottom-8 left-0 right-0 h-28 bg-gradient-to-t from-[#201712] via-[#2D211A] to-[#3B2D24] border-t-2 border-[#544133] z-20 flex items-center justify-between px-10 shadow-2xl">
              {/* Bonsai on wood block on left */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-10 -mt-6 rounded-full bg-emerald-950/80 border border-emerald-800/40 shadow-md" />
                <div className="w-8 h-4 bg-[#4A3728] rounded-sm mt-1" />
              </div>

              {/* White Ceramic Vessel Sink & Black Faucet */}
              <div className="relative flex flex-col items-center -mt-10">
                {/* Black Gooseneck Faucet */}
                <div className="w-2.5 h-12 bg-neutral-900 rounded-t-full -mb-3 shadow-md" />
                {/* Oval Vessel Basin */}
                <div className="w-56 h-14 bg-gradient-to-b from-[#FFFFFF] to-[#E5E1D8] rounded-[60px] shadow-2xl border-t border-white" />
              </div>

              <div className="w-12" />
            </div>
          </div>
        );

      case 'origin-02':
        // Product 3 from attachments: S.S 304 Circular Orbit in Dark Nero Marquina Marble with Autumn Mountain Window
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#090A0D] overflow-hidden select-none">
            {/* Dark Nero Marquina Marble Wall Texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: '#0C0E12',
                backgroundImage: `
                  radial-gradient(circle at 75% 20%, rgba(184, 154, 98, 0.08), transparent 50%),
                  linear-gradient(135deg, #101217 0%, #060709 100%)
                `,
              }}
            />

            {/* Sweeping Gold & White Marble Veining */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M -40,140 Q 140,80 260,220 T 540,190 Q 760,260 880,480"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 100,-40 Q 200,140 420,170 T 700,400"
                stroke="rgba(212,175,55,0.35)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {/* Panoramic Floor-to-Ceiling Glass Window: Autumn Alpine Mountains & Trees */}
            <div className="absolute right-0 top-0 bottom-0 w-[30%] bg-gradient-to-b from-[#2E2822] via-[#3E342B] to-[#1C2018] border-l border-neutral-700/50 flex flex-col justify-between p-3 overflow-hidden shadow-2xl">
              {/* Mountain Peaks Silhouette */}
              <svg viewBox="0 0 200 300" className="w-full h-full absolute inset-0 opacity-85">
                {/* Distant Snow Peaks */}
                <polygon points="20,110 80,40 140,110" fill="#E2E8F0" opacity="0.6" />
                <polygon points="70,120 130,50 190,130" fill="#F1F5F9" opacity="0.7" />
                {/* Autumn Golden Larch Forest */}
                <path d="M 0,160 Q 60,140 120,150 T 200,170 L 200,300 L 0,300 Z" fill="#78350F" opacity="0.8" />
                <path d="M 20,180 Q 90,160 160,180 L 200,300 L 0,300 Z" fill="#92400E" opacity="0.7" />
              </svg>
              {/* Indoor Fern/Bonsai Branch in Window */}
              <div className="relative z-10 w-24 h-48 opacity-75 self-start">
                <svg viewBox="0 0 100 200" fill="none" className="text-emerald-700">
                  <path d="M 20,180 Q 60,100 40,30" stroke="#4A3B2C" strokeWidth="2" />
                  <circle cx="45" cy="40" r="12" fill="currentColor" opacity="0.6" />
                  <circle cx="55" cy="65" r="14" fill="currentColor" opacity="0.6" />
                  <circle cx="35" cy="90" r="16" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Glowing Twin Brass Cylindrical Sconces */}
            <div className="absolute left-[10%] top-[30%] w-3 h-14 bg-gradient-to-b from-[#D4AF37] to-[#8C6D23] rounded-full shadow-[0_0_30px_#D4AF37] opacity-90" />
            <div className="absolute right-[33%] top-[30%] w-3 h-14 bg-gradient-to-b from-[#D4AF37] to-[#8C6D23] rounded-full shadow-[0_0_30px_#D4AF37] opacity-90" />

            {/* S.S 304 Circular Orbit Mirror (30x30 inch 1:1) */}
            <div className="relative w-[56%] max-w-[390px] aspect-square z-10 flex items-center justify-center rounded-full p-[5px] bg-gradient-to-tr from-[#8A6A25] via-[#F4D068] to-[#99762C] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.3)]">
              {/* Mirror Glass Core */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#1C212A] via-[#10141A] to-[#0A0D12] shadow-inner">
                {/* Surface Reflection Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.09] to-transparent pointer-events-none transform -rotate-12" />

                {/* Inner Concentric Floating Gold Orbit Ring */}
                <div
                  className="absolute w-[58%] h-[58%] rounded-full right-[8%] top-[14%] border-[4px] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.45),inset_0_0_12px_rgba(212,175,55,0.25)] pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 80%)',
                  }}
                />

                {/* ORIGIN Logo Inscription */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold tracking-widest text-[#D4AF37]/80 uppercase">
                  ORIGIN
                </div>
              </div>
            </div>

            {/* Floating Black Marble Countertop with Brushed Brass Horizontal Drawer Handles */}
            <div className="absolute -bottom-10 left-0 right-0 h-28 bg-gradient-to-r from-[#171A1F] via-[#111317] to-[#171A1F] border-t-2 border-[#D4AF37]/60 shadow-2xl flex items-center justify-center gap-12 px-8 z-20">
              <div className="w-28 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
              <div className="w-28 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
            </div>
          </div>
        );

      case 'origin-03':
        // Product 2 from attachments: S.S 304 Gold Nova Curve in Bright Luxury Ivory Bathroom with Floating Curved Vanity
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#E5E2DA] overflow-hidden select-none">
            {/* Warm Ivory Architectural Plaster Wall with Morning Sun Shadows */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: '#EDEAE1',
                backgroundImage: `
                  linear-gradient(125deg, rgba(255,255,255,0.8) 0%, rgba(225,220,210,0.6) 50%, rgba(195,190,180,0.7) 100%)
                `,
              }}
            />

            {/* Sidelight Architectural Shadow on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-[24%] bg-gradient-to-r from-neutral-800/40 to-transparent pointer-events-none" />

            {/* Chrome Heated Towel Ladder Rail on Right */}
            <div className="absolute right-[8%] top-[18%] bottom-[30%] w-8 flex flex-col justify-between py-4 opacity-75">
              <div className="w-full h-1.5 bg-neutral-300 rounded-full shadow-sm" />
              <div className="w-full h-1.5 bg-neutral-300 rounded-full shadow-sm" />
              <div className="w-full h-1.5 bg-neutral-300 rounded-full shadow-sm" />
              <div className="w-full h-1.5 bg-neutral-300 rounded-full shadow-sm" />
            </div>

            {/* Ambient Diffuse Wall Glow */}
            <motion.div
              className="absolute w-[60%] h-[78%] rounded-[40px] filter blur-3xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.85,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Sculptural Asymmetric Arch Frame: 24x36 inches */}
            <div
              className="relative w-[50%] max-w-[330px] aspect-[24/36] z-10 p-[4px] rounded-tl-[150px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] bg-gradient-to-tr from-[#9B772E] via-[#F1CE6D] to-[#8C6B28] shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_35px_rgba(212,175,55,0.25)]"
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
                <div className="relative w-full h-full rounded-tl-[138px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] overflow-hidden bg-gradient-to-br from-[#282622] via-[#1A1916] to-[#12110F] shadow-inner">
                  {/* Subtle Light Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />

                  {/* Capacitive Feather Touch Switch */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div
                      className="w-5 h-5 rounded-[4px] border border-[#D4AF37]/90 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          lightMode !== 'off' ? 'rgba(212,175,55,0.3)' : 'rgba(0,0,0,0.5)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    </div>
                  </div>

                  {/* ORIGIN inscription */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-semibold tracking-widest text-[#D4AF37]/70">
                    ORIGIN
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contemporary Curved White Floating Vanity with Walnut Reveal Line (From Photo) */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[68%] max-w-[440px] h-28 bg-gradient-to-b from-[#FFFFFF] to-[#EAE6DD] rounded-t-3xl shadow-2xl z-20 flex flex-col items-center justify-start pt-2 border-t border-white">
              {/* Matte Black Wall-Mounted Gooseneck Tap & Handles */}
              <div className="w-3 h-8 bg-neutral-900 rounded-t-full -mt-10 shadow-md" />
              {/* Shallow White Basin */}
              <div className="w-36 h-6 -mt-3 bg-white rounded-full shadow-md border border-neutral-200" />
              {/* Walnut Accent Inlay Line */}
              <div className="w-full h-2 bg-[#423124] mt-4 opacity-95 shadow-inner" />
            </div>
          </div>
        );

      case 'origin-04':
      default:
        // Product 1 from attachments: S.S Matt Black Urban Curve on Slate-Blue Fluted Tiles with Foliage Reflection
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-[#151A22] overflow-hidden select-none">
            {/* Horizontal Slate-Blue Architectural Tiles */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundColor: '#161F2B',
                backgroundImage:
                  'repeating-linear-gradient(0deg, #101721, #101721 2px, #1D2A3A 2px, #1D2A3A 24px)',
              }}
            />

            {/* Hanging Exposed Bulb Wall Sconce on Right */}
            <div className="absolute right-[8%] top-[14%] flex flex-col items-center z-20">
              <div className="w-1 h-8 bg-neutral-800" />
              <div className="w-7 h-7 rounded-full bg-amber-100 shadow-[0_0_35px_rgba(255,200,100,0.9)] border border-amber-300/40" />
            </div>

            {/* Chrome Dual Flush Plate on Left Wall */}
            <div className="absolute left-[6%] bottom-[24%] w-10 h-14 bg-neutral-300 rounded border border-neutral-400 shadow-md flex flex-col items-center justify-center gap-2 opacity-80">
              <div className="w-6 h-3 rounded-full bg-neutral-400" />
              <div className="w-6 h-4 rounded-full bg-neutral-400" />
            </div>

            {/* Perimeter Wall Backlight Wash */}
            <motion.div
              className="absolute w-[80%] h-[72%] rounded-[36px] filter blur-2xl pointer-events-none"
              animate={{
                backgroundColor: currentLight.ambient,
                opacity: lightMode === 'off' ? 0 : 0.85,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Urban Curve Rectangular Mirror: 30x24 horizontal */}
            <div className="relative w-[75%] max-w-[510px] aspect-[30/24] z-10 p-[6px] rounded-[32px] bg-gradient-to-b from-[#2A2B30] to-[#121316] shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-neutral-800">
              {/* Inner Frosted Diffuser Glow Ring */}
              <motion.div
                className="relative w-full h-full rounded-[26px] p-[10px] overflow-hidden"
                animate={{
                  backgroundColor: lightMode === 'off' ? '#22252B' : currentLight.glow,
                  boxShadow:
                    lightMode === 'off'
                      ? 'none'
                      : `inset 0 0 16px ${currentLight.intense}, 0 0 20px ${currentLight.glow}`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Mirror Glass Core */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-gradient-to-br from-[#1C2027] via-[#101419] to-[#0A0D11] shadow-inner">
                  {/* Monstera & Tropical Botanical Leaves Reflection (From Photo) */}
                  <div className="absolute inset-0 flex items-center justify-end pr-4 opacity-35 pointer-events-none">
                    <svg viewBox="0 0 160 160" fill="none" className="w-48 h-48 text-emerald-400">
                      <path
                        d="M 80 15 C 40 40 25 90 80 145 C 135 90 120 40 80 15 Z"
                        fill="currentColor"
                      />
                      <path d="M 80 20 L 80 140" stroke="#052E16" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Surface Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none transform -skew-x-6" />

                  {/* Capacitive Feather Touch Switch */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div
                      className="w-5 h-5 rounded-[4px] border border-white/70 flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor:
                          lightMode !== 'off' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* ORIGIN logo */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-semibold tracking-widest text-white/60">
                    ORIGIN
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Natural Oak Vanity with White Vessel Basin & Apothecary Glassware (From Photo) */}
            <div className="absolute -bottom-10 left-0 right-0 h-28 bg-gradient-to-r from-[#8B5A2B] via-[#A06D3B] to-[#7B4F24] border-t-2 border-[#B88045] z-20 flex items-center justify-between px-10 shadow-2xl">
              {/* Apothecary Dropper Bottle & Eucalyptus */}
              <div className="w-6 h-10 bg-amber-900 rounded -mt-6 border border-amber-800" />

              {/* White Ceramic Vessel Basin */}
              <div className="relative flex flex-col items-center -mt-10">
                <div className="w-2.5 h-10 bg-neutral-900 rounded-t-full -mb-3" />
                <div className="w-56 h-14 bg-gradient-to-b from-white to-neutral-200 rounded-[50px] shadow-2xl border-t border-white" />
              </div>

              <div className="w-6" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-sm ${className}`}
    >
      {/* Visual Canvas Container */}
      <div
        className={`w-full relative ${
          aspectRatio === 'hero'
            ? 'h-[480px] sm:h-[560px] md:h-[640px]'
            : aspectRatio === 'pdp'
            ? 'h-[460px] sm:h-[540px] md:h-[620px]'
            : 'h-[380px] sm:h-[440px]'
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="max-w-xs bg-neutral-900/95 border border-white/20 p-6 rounded text-white shadow-2xl">
                <div className="text-[10px] uppercase tracking-widest text-[#B89A62] mb-2 font-mono">
                  Exact Architectural Specs
                </div>
                <div className="text-2xl font-serif mb-1">{product.size}</div>
                <div className="text-xs text-neutral-400 mb-4 font-mono">
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
                  className="mt-5 w-full py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-sm hover:bg-neutral-200 transition-colors"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Lighting Controls Toolbar */}
        {showControls && (
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-sm border border-white/15 shadow-lg">
            <button
              type="button"
              title="Warm 3000K Lighting"
              onClick={() => setLightMode('warm')}
              className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs transition-colors ${
                lightMode === 'warm'
                  ? 'bg-amber-400/25 text-amber-300 border border-amber-400/50'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Natural 4500K Lighting"
              onClick={() => setLightMode('natural')}
              className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs transition-colors ${
                lightMode === 'natural'
                  ? 'bg-neutral-200/25 text-white border border-white/50'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Cool 6500K Daylight"
              onClick={() => setLightMode('cool')}
              className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs transition-colors ${
                lightMode === 'cool'
                  ? 'bg-sky-400/25 text-sky-200 border border-sky-400/50'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              title="Turn LED Off"
              onClick={() => setLightMode('off')}
              className={`px-1.5 h-7 rounded-sm text-[10px] font-mono transition-colors ${
                lightMode === 'off'
                  ? 'bg-neutral-800 text-white border border-white/40'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              OFF
            </button>

            <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

            <button
              type="button"
              title="View Dimensions Diagram"
              onClick={() => setShowDimensions(!showDimensions)}
              className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs transition-colors ${
                showDimensions
                  ? 'bg-[#B89A62]/30 text-[#B89A62] border border-[#B89A62]/60'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Ambient Mode Caption */}
        {showControls && (
          <div className="absolute bottom-3 left-3 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-tight text-neutral-300 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10 shadow">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: lightMode === 'off' ? '#666' : currentLight.diffuse }}
            />
            <span>{currentLight.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
