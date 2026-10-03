import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, BRAND_INFO } from '@/lib/products';
import { ProductDetailView } from '@/components/ProductDetailView';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return {
      title: `Product Not Found - ${BRAND_INFO.name}`,
    };
  }

  return {
    title: `${product.name} (${product.size}) - ${BRAND_INFO.name}`,
    description: `${product.name}, ${product.size}, priced at ${product.formattedPrice}. ${product.description}`,
    openGraph: {
      title: `${product.name} - ${BRAND_INFO.name}`,
      description: `${product.size} · ${product.formattedPrice}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0C0D0E] text-white flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <CartDrawer />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/#collection"
              className="text-xs font-mono text-neutral-400 hover:text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>Back to Entire 4-Piece Collection</span>
            </Link>
          </div>

          <ProductDetailView product={product} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
