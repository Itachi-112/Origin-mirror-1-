'use client';

import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showSubtitle?: boolean;
}

export function BrandLogo({
  className = 'h-9',
  variant = 'light',
  showSubtitle = true,
}: BrandLogoProps) {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const primaryFill = isGold
    ? '#D4AF37'
    : isLight
    ? '#FFFFFF'
    : '#121316';

  const subtitleFill = isGold
    ? '#C5A880'
    : isLight
    ? '#D4D0C8'
    : '#4A4D53';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full object-contain"
        aria-label="ORIGIN MIRRORS Logo"
      >
        {/* Geometric Trio above the second 'I' (centered at x = 208) */}
        {/* Circle */}
        <circle cx="208" cy="11" r="5.5" fill={primaryFill} />
        {/* Triangle */}
        <polygon points="208,21 213.5,31 202.5,31" fill={primaryFill} />
        {/* Rectangle */}
        <rect x="203" y="35" width="10" height="7.5" rx="0.5" fill={primaryFill} />

        {/* ORIGIN Letterforms */}
        <g fill={primaryFill}>
          {/* 'O' */}
          <path
            d="M 52 47 C 38 47 28 56 28 70 C 28 84 38 93 52 93 C 66 93 76 84 76 70 C 76 56 66 47 52 47 Z M 52 82 C 45 82 40 77 40 70 C 40 63 45 58 52 58 C 59 58 64 63 64 70 C 64 77 59 82 52 82 Z"
          />

          {/* 'R' */}
          <path
            d="M 86 48 L 108 48 C 117 48 123 53 123 61 C 123 67 119 72 113 73.5 L 124 93 L 111 93 L 102 75 L 98 75 L 98 93 L 86 93 L 86 48 Z M 98 58 L 98 67 L 107 67 C 111 67 113 65 113 62.5 C 113 60 111 58 107 58 L 98 58 Z"
          />

          {/* 'I' (first) */}
          <rect x="133" y="48" width="11" height="45" rx="0.5" />

          {/* 'G' */}
          <path
            d="M 174 47 C 160 47 150 56 150 70 C 150 84 160 93 174 93 C 187 93 196 85 197 74 L 185 74 C 184 79 180 82 174 82 C 167 82 162 77 162 70 C 162 63 167 58 174 58 C 180 58 184 61 185 66 L 197 66 C 195 55 186 47 174 47 Z"
          />
          {/* 'G' inner spur */}
          <rect x="178" y="68" width="19" height="10" />

          {/* 'I' (second, directly beneath geometric glyphs) */}
          <rect x="203" y="48" width="10" height="45" rx="0.5" />

          {/* 'N' */}
          <path
            d="M 223 48 L 234 48 L 253 79 L 253 48 L 264 48 L 264 93 L 253 93 L 234 62 L 234 93 L 223 93 L 223 48 Z"
          />

          {/* Registered Trademark ® */}
          <circle cx="282" cy="53" r="8" stroke={primaryFill} strokeWidth="1.5" fill="none" />
          <text
            x="282"
            y="56.5"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="sans-serif"
            textAnchor="middle"
            fill={primaryFill}
          >
            R
          </text>
        </g>

        {/* MIRRORS Subtitle */}
        {showSubtitle && (
          <text
            x="160"
            y="108"
            fontSize="14"
            fontWeight="600"
            letterSpacing="7"
            fontFamily="system-ui, -apple-system, sans-serif"
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
