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
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] selection:bg-[#B89A62] selection:text-white antialiased">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Cart Drawer Provider & Slide-over */}
      <CartDrawer />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Introduction (Dark Statement Section) */}
        <BrandIntroduction />

        {/* 3. Curated Collection (White Card Grid) */}
        <ProductGrid />

        {/* 4. Illumination Engineering / Technology */}
        <TripleLitShowcase />

        {/* 5. Studio Heritage & Craft */}
        <AboutSection />

        {/* 6. Direct Contact & Karawal Nagar Studio Details */}
        <ContactSection />
      </main>

      {/* 7. Architectural Footer */}
      <Footer />
    </div>
  );
}
