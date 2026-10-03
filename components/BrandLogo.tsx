'use client';

import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'ink' | 'light' | 'original';
  showSubtitle?: boolean;
}

export function BrandLogo({
  className = 'h-9',
  variant = 'original',
  showSubtitle = true,
}: BrandLogoProps) {
  // If original or ink, use the pure black design from logo.jpeg
  const isLight = variant === 'light';
  const primaryFill = isLight ? '#FFFFFF' : '#111111';
  const subtitleFill = isLight ? '#E5E5E5' : '#111111';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full object-contain"
        aria-label="ORIGIN MIRRORS Official Logo"
      >
        {/* Geometric Trio Stack directly above the second 'I' (aligned at x = 208) */}
        {/* 1. Circle */}
        <circle cx="208" cy="12" r="5.5" fill={primaryFill} />
        {/* 2. Triangle pointing up */}
        <polygon points="208,21 213.5,31.5 202.5,31.5" fill={primaryFill} />
        {/* 3. Rectangle / Square */}
        <rect x="203" y="36" width="10" height="8" rx="0.5" fill={primaryFill} />

        {/* ORIGIN Typography (Faithful stencil-inspired geometric letterforms) */}
        <g fill={primaryFill}>
          {/* 'O' */}
          <path
            d="M 52 48 C 37 48 26 57 26 72 C 26 87 37 96 52 96 C 67 96 78 87 78 72 C 78 57 67 48 52 48 Z M 52 84 C 44 84 38 78 38 72 C 38 66 44 60 52 60 C 60 60 66 66 66 72 C 66 78 60 84 52 84 Z"
          />

          {/* 'R' */}
          <path
            d="M 86 49 L 109 49 C 119 49 125 54 125 63 C 125 69 121 74 114 76 L 126 96 L 112 96 L 102 77 L 98 77 L 98 96 L 86 96 L 86 49 Z M 98 60 L 98 68 L 108 68 C 112 68 114 66 114 64 C 114 62 112 60 108 60 L 98 60 Z"
          />

          {/* 'I' (first) */}
          <rect x="133" y="49" width="11" height="47" rx="0.5" />

          {/* 'G' */}
          <path
            d="M 174 48 C 159 48 149 57 149 72 C 149 87 159 96 174 96 C 188 96 198 87 199 75 L 186 75 C 185 81 180 84 174 84 C 166 84 161 78 161 72 C 161 66 166 60 174 60 C 180 60 185 63 186 69 L 199 69 C 197 56 187 48 174 48 Z"
          />
          {/* 'G' horizontal spur */}
          <rect x="178" y="70" width="20" height="11" />

          {/* 'I' (second, directly beneath the geometric stack) */}
          <rect x="203" y="49" width="10" height="47" rx="0.5" />

          {/* 'N' */}
          <path
            d="M 223 49 L 235 49 L 254 81 L 254 49 L 265 49 L 265 96 L 254 96 L 235 64 L 235 96 L 223 96 L 223 49 Z"
          />

          {/* Registered Trademark ® directly to the right of 'N' */}
          <circle cx="283" cy="54" r="8.5" stroke={primaryFill} strokeWidth="1.6" fill="none" />
          <text
            x="283"
            y="57.8"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            fill={primaryFill}
          >
            R
          </text>
        </g>

        {/* MIRRORS Subtitle - centered, tracked uppercase */}
        {showSubtitle && (
          <text
            x="160"
            y="114"
            fontSize="14.5"
            fontWeight="700"
            letterSpacing="6.5"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
            fill={subtitleFill}
          >
            MIRRORS
          </text>
        )}
      </svg>
    </div>
  );
}
