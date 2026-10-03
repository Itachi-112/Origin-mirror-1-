'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandIntroduction } from '@/components/BrandIntroduction';
import { ProductGrid } from '@/components/ProductGrid';
import { TripleLitShowcase } from '@/components/TripleLitShowcase';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0C0D0E] text-white selection:bg-[#D4AF37] selection:text-black antialiased">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Cart Drawer Provider & Slide-over */}
      <CartDrawer />

      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. Brand Introduction & Craftsmanship Ethos */}
        <BrandIntroduction />

        {/* 3. Editorial 4-Product Asymmetric Collection */}
        <ProductGrid />

        {/* 4. Interactive Triple-Lit LED Technology Demo */}
        <TripleLitShowcase />

        {/* 5. Studio Heritage & Material Standards */}
        <AboutSection />

        {/* 6. Direct Contact & Karawal Nagar Studio Details */}
        <ContactSection />
      </main>

      {/* 7. Architectural Footer */}
      <Footer />
    </div>
  );
}
