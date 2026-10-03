'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '@/lib/products';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6">
            <Link href="/" className="inline-block mb-6">
              <BrandLogo className="h-8" variant="light" showSubtitle={true} />
            </Link>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm mb-6">
              &ldquo;{BRAND_INFO.subheading}&rdquo; Handcrafted by {BRAND_INFO.company}.
            </p>
            <div className="font-mono text-xs text-white/40 space-y-1">
              <div>{BRAND_INFO.address.line1}</div>
              <div>{BRAND_INFO.address.line2}</div>
              <div>
                {BRAND_INFO.address.city} - {BRAND_INFO.address.pincode}, {BRAND_INFO.address.country}
              </div>
            </div>
          </div>

          {/* Sitemap (3 cols) */}
          <div className="md:col-span-3">
            <p className="label-mono text-[0.65rem] text-white/30 uppercase tracking-[0.2em] mb-5">
              Sitemap
            </p>
            <ul className="space-y-3 text-sm text-white/80 font-light">
              <li>
                <a href="#collection" className="hover:text-[#B89A62] transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[#B89A62] transition-colors">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#triple-lit" className="hover:text-[#B89A62] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B89A62] transition-colors">
                  Heritage
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Standards (3 cols) */}
          <div className="md:col-span-3">
            <p className="label-mono text-[0.65rem] text-white/30 uppercase tracking-[0.2em] mb-5">
              Standards
            </p>
            <ul className="space-y-2.5 font-mono text-xs text-white/60">
              <li>• S.S 304 Stainless Steel</li>
              <li>• PVD Titanium Metallization</li>
              <li>• 5mm Copper-Free Glass</li>
              <li>• IP44 Steam Resistance</li>
              <li>• Crated Domestic Transit</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (from Variation 5) */}
        <div className="border-t border-white/5 pt-10 text-[0.7rem] text-white/40 uppercase tracking-[0.1em] font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Origin Mirrors · Origin Creative Glasses India</span>
          <span>Delhi, India · Insured Domestic Shipping</span>
        </div>
      </div>
    </footer>
  );
}
