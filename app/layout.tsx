import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Origin Mirrors - Reflection, Redefined',
  description:
    'Statement mirrors designed to bring light, form and character to contemporary spaces. Handcrafted by Origin Creative Glasses India.',
  openGraph: {
    title: 'Origin Mirrors - Reflection, Redefined',
    description:
      'Statement mirrors designed to bring light, form and character to contemporary spaces. Handcrafted by Origin Creative Glasses India.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Mirrors - Reflection, Redefined',
    description:
      'Statement mirrors designed to bring light, form and character to contemporary spaces. Handcrafted by Origin Creative Glasses India.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#0C0D0E] text-neutral-100 min-h-screen font-sans" suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
