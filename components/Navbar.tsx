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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-[rgba(23,23,23,0.08)] py-4 shadow-sm'
            : 'bg-[#F7F5F0]/90 backdrop-blur-sm border-[rgba(23,23,23,0.08)] py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between">
            {/* Zone 1: Logo Wordmark (SVG matching Variation 5) */}
            <Link
              href="/"
              className="logo-container group flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A62]"
              aria-label="ORIGIN MIRRORS Home"
            >
              <BrandLogo className="h-8" variant="ink" showSubtitle={true} />
            </Link>

            {/* Zone 2: Navigation Links (Variation 5 typography) */}
            <nav className="hidden md:flex items-center gap-10 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-[#171717]">
              <Link
                href="/#collection"
                className="hover:text-[#B89A62] transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/#craftsmanship"
                className="hover:text-[#B89A62] transition-colors"
              >
                Craftsmanship
              </Link>
              <Link
                href="/#triple-lit"
                className="hover:text-[#B89A62] transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/#about"
                className="hover:text-[#B89A62] transition-colors"
              >
                Heritage
              </Link>
              <a
                href="#contact"
                className="text-[#B89A62] hover:text-[#171717] transition-colors"
              >
                Direct Inquiry
              </a>
            </nav>

            {/* Zone 3: Primary Actions (Cart trigger & CTA) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 text-[#171717] hover:text-[#B89A62] transition-colors focus:outline-none"
                aria-label={`Open shopping cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B89A62] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#171717] hover:text-[#B89A62] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F5F0]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 border-b border-[rgba(23,23,23,0.08)]">
          <nav className="flex flex-col gap-6 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[#171717]">
            <Link
              href="/#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[rgba(23,23,23,0.08)] hover:text-[#B89A62] transition-colors"
            >
              Collection
            </Link>
            <Link
              href="/#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[rgba(23,23,23,0.08)] hover:text-[#B89A62] transition-colors"
            >
              Craftsmanship
            </Link>
            <Link
              href="/#triple-lit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[rgba(23,23,23,0.08)] hover:text-[#B89A62] transition-colors"
            >
              Technology
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[rgba(23,23,23,0.08)] hover:text-[#B89A62] transition-colors"
            >
              Heritage
            </Link>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#B89A62] font-semibold"
            >
              Direct Inquiry
            </a>
          </nav>

          <div className="pt-6 border-t border-[rgba(23,23,23,0.08)] text-xs text-[#68645D]">
            <div className="font-serif text-[#171717] text-base mb-1">Origin Creative Glasses India</div>
            K-29, Pyare Lal Marg, Karawal Nagar, Delhi - 110094
          </div>
        </div>
      )}
    </>
  );
}
