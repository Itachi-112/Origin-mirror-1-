'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO, PRODUCTS } from '@/lib/products';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090B] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <BrandLogo className="h-10" variant="light" showSubtitle={true} />
            </Link>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
              &ldquo;{BRAND_INFO.subheading}&rdquo;
            </p>

            <div className="text-xs text-neutral-400 font-mono space-y-0.5">
              <div className="text-white font-medium">{BRAND_INFO.company}</div>
              <div>{BRAND_INFO.address.line1}</div>
              <div>{BRAND_INFO.address.line2}</div>
              <div>
                {BRAND_INFO.address.city} - {BRAND_INFO.address.pincode}, {BRAND_INFO.address.country}
              </div>
            </div>
          </div>

          {/* Collection Links (4 cols) */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              The 4 Creations
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </span>
                    <span className="font-mono text-neutral-500 text-[11px]">
                      {product.formattedPrice}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Architectural Notes & Scroll to Top (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                Materials & Standard
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-400 font-mono">
                <li>• Grade S.S 304 Stainless Steel</li>
                <li>• Physical Vapor Deposition (PVD)</li>
                <li>• Triple-Lit High-CRI LED Arrays</li>
                <li>• 5mm Copper-Free Mirror Glass</li>
                <li>• IP44 Water & Steam Ingress Resistance</li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Clean Unboxed Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name} · {BRAND_INFO.company}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Karawal Nagar, Delhi</span>
            <span aria-hidden="true">·</span>
            <span>Insured Domestic Shipping</span>
            <span aria-hidden="true">·</span>
            <span>Bespoke Glasscraft</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
