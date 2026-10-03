'use client';

import React from 'react';
import { BRAND_INFO } from '@/lib/products';
import { Shield, Sparkles, Box, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0C0D0E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Studio Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-mono mb-2">
              04. Heritage & Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight mb-6">
              Precision Glasscraft from {BRAND_INFO.company}
            </h2>

            <div className="space-y-4 text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                Headquartered at Karawal Nagar in Delhi, {BRAND_INFO.company} specializes in the
                manufacture and precision engineering of architectural mirrors, illuminated vanities,
                and artistic glass installations.
              </p>
              <p>
                Under our dedicated brand <strong className="text-white font-medium">ORIGIN MIRRORS</strong>,
                we merge industrial stainless steel metallurgy with solid-state illumination and
                high-clarity silver mirrors. Every design is built to withstand high humidity and daily
                use without the edge oxidation or tarnishing typical of standard mirrors.
              </p>
              <p>
                From laser-etched botanical silhouettes like the <em>Moonlit Palm</em> to the
                sculptural titanium-coated <em>Circular Orbit</em> and <em>Nova Curve</em>, each piece
                is individually inspected, wired with moisture-sealed internal electronics, and
                safely crated for delivery across the nation.
              </p>
            </div>

            {/* Studio Principles Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Austenitic Grade S.S 304 Stainless Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Physical Vapor Deposition (PVD) Titanium Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>5mm Copper-Free Anti-Oxidation Silver Glass</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>IP44 Rated Steam & Water Ingress Protection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Identity & Address Plaque (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#121418] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />

              <div className="text-xs font-mono uppercase text-[#D4AF37] tracking-widest mb-1">
                Manufacturing & Studio Address
              </div>
              <h3 className="text-xl font-serif text-white mb-4">
                {BRAND_INFO.company}
              </h3>

              <div className="space-y-1.5 text-xs text-neutral-300 font-mono leading-relaxed border-t border-b border-white/10 py-4 my-4">
                <div className="text-white font-medium">{BRAND_INFO.name}</div>
                <div>{BRAND_INFO.address.line1}</div>
                <div>{BRAND_INFO.address.line2}</div>
                <div>
                  {BRAND_INFO.address.city} - {BRAND_INFO.address.pincode}
                </div>
                <div className="text-neutral-500">{BRAND_INFO.address.country}</div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#D4AF37]" />
                  <span>Custom sizes and contract hospitality orders welcome</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>Insured crating with doorstep transit protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
