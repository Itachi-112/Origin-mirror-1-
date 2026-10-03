'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { BrandLogo } from './BrandLogo';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0D0E]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Single visual unit) */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              aria-label="ORIGIN MIRRORS Home"
            >
              <BrandLogo className="h-8 sm:h-9" variant="light" showSubtitle={true} />
            </Link>

            {/* Zone 2: Clean Text Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-300">
              <Link
                href="/#collection"
                className="hover:text-white hover:underline underline-offset-8 transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/#craftsmanship"
                className="hover:text-white hover:underline underline-offset-8 transition-colors"
              >
                Craftsmanship
              </Link>
              <Link
                href="/#triple-lit"
                className="hover:text-white hover:underline underline-offset-8 transition-colors"
              >
                Triple-Lit LED
              </Link>
              <Link
                href="/#about"
                className="hover:text-white hover:underline underline-offset-8 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="hover:text-white hover:underline underline-offset-8 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2.5 rounded-full text-neutral-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label={`Open shopping cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-black text-[10px] font-bold font-mono rounded-full flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Inquiry CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#C5A028] rounded transition-colors whitespace-nowrap"
              >
                <span>Direct Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0C0D0E]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-6 text-sm font-medium uppercase tracking-widest text-neutral-300">
            <Link
              href="/#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#D4AF37] transition-colors"
            >
              Collection (4 Designs)
            </Link>
            <Link
              href="/#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#D4AF37] transition-colors"
            >
              Craftsmanship & S.S 304
            </Link>
            <Link
              href="/#triple-lit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#D4AF37] transition-colors"
            >
              Triple-Lit LED Technology
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#D4AF37] transition-colors"
            >
              About Origin Creative Glasses
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#D4AF37] transition-colors"
            >
              Contact & Karawal Nagar Studio
            </Link>
          </nav>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="text-xs text-neutral-400">
              <span className="block font-medium text-white">Origin Creative Glasses India</span>
              K-29, Pyare Lal Marg, Karawal Nagar, Delhi - 110094
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-xs font-medium uppercase tracking-widest text-center text-black bg-[#D4AF37] rounded block"
            >
              Inquire Directly
            </a>
          </div>
        </div>
      )}
    </>
  );
}
