import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Origin Mirrors | Architectural Reflection',
  description:
    'Statement mirrors designed to bring light, form and character to contemporary spaces. Handcrafted precision in architectural stainless steel by Origin Creative Glasses India.',
  openGraph: {
    title: 'Origin Mirrors | Architectural Reflection',
    description:
      'Statement mirrors designed to bring light, form and character to contemporary spaces. Handcrafted precision in architectural stainless steel.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Mirrors | Architectural Reflection',
    description:
      'Statement mirrors designed to bring light, form and character to contemporary spaces.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-[#F7F5F0] text-[#171717] min-h-screen font-sans selection:bg-[#B89A62] selection:text-white" suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
