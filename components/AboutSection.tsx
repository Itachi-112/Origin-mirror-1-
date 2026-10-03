'use client';

import React from 'react';
import { BRAND_INFO } from '@/lib/products';
import { CheckCircle2, Box, Shield, Compass } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#FFFFFF] border-b border-[rgba(23,23,23,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="label-mono mb-2">Our Heritage & Craft</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#171717] font-light leading-tight mb-8">
              Precision Glasscraft from {BRAND_INFO.company}
            </h2>

            <div className="space-y-5 text-base text-[#68645D] font-light leading-relaxed">
              <p>
                Headquartered at Karawal Nagar in Delhi, {BRAND_INFO.company} specializes in the
                manufacture and precision engineering of architectural mirrors, illuminated vanities,
                and artistic glass installations.
              </p>
              <p>
                Under our dedicated brand <strong className="text-[#171717] font-medium">ORIGIN MIRRORS</strong>,
                we merge industrial stainless steel metallurgy with solid-state illumination and
                high-clarity silver mirrors. Every design is built to withstand high humidity and daily
                use without the edge oxidation or tarnishing typical of standard mirrors.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-[rgba(23,23,23,0.08)] text-xs text-[#171717]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89A62] flex-shrink-0" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider">Grade S.S 304 Stainless Steel</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89A62] flex-shrink-0" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider">PVD Titanium Metallization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89A62] flex-shrink-0" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider">5mm Copper-Free Eco Glass</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89A62] flex-shrink-0" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider">IP44 Steam Ingress Protection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Address Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F7F5F0] border border-[rgba(23,23,23,0.08)] p-8 sm:p-10 rounded-sm shadow-sm">
              <span className="label-mono text-[0.6rem] mb-2 text-[#B89A62]">Manufacturing Studio</span>
              <h3 className="text-2xl font-serif text-[#171717] font-normal mb-4">
                {BRAND_INFO.company}
              </h3>

              <div className="space-y-1.5 font-mono text-xs text-[#68645D] leading-relaxed border-t border-b border-[rgba(23,23,23,0.08)] py-5 my-5">
                <div className="text-[#171717] font-semibold">{BRAND_INFO.name}</div>
                <div>{BRAND_INFO.address.line1}</div>
                <div>{BRAND_INFO.address.line2}</div>
                <div>
                  {BRAND_INFO.address.city} - {BRAND_INFO.address.pincode}
                </div>
                <div className="text-[#171717] font-medium">{BRAND_INFO.address.country}</div>
              </div>

              <div className="space-y-2.5 text-xs text-[#68645D]">
                <div className="flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Custom sizes and contract hospitality orders welcome</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Insured crating with doorstep replacement guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
