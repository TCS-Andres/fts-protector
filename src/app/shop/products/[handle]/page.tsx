import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import BuyButton from "@/components/shop/BuyButton";
import ProductGallery from "@/components/shop/ProductGallery";
import { routes } from "@/lib/links";
import {
  getProduct,
  getProducts,
  formatMoney,
  isShopifyConfigured,
  type Product,
} from "@/lib/shopify";

export const revalidate = 60;

type Params = { handle: string };

export async function generateStaticParams(): Promise<Params[]> {
  if (!isShopifyConfigured()) return [];
  try {
    const products = await getProducts();
    return products.map((p) => ({ handle: p.handle }));
  } catch {
    return [];
  }
}

async function loadProduct(handle: string): Promise<Product | null> {
  if (!isShopifyConfigured()) return null;
  try {
    return await getProduct(handle);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await loadProduct(handle);
  if (!product) return { title: "Shop | FrancktheSolution" };
  return {
    title: `${product.title} | FrancktheSolution`,
    alternates: { canonical: `/shop/products/${product.handle}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { handle } = await params;
  const product = await loadProduct(handle);
  if (!product) notFound();

  const variant = product.variants[0];

  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden noise-bg"
          style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}
        >
          <div className="absolute -top-32 left-1/3 w-[560px] h-[320px] bg-accent-blue/15 blur-[130px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-40 lg:pb-24 w-full">
            <a
              href={routes.shop}
              className="inline-flex items-center gap-2 text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body mb-8 hover:text-white transition-colors"
            >
              ← Back to Shop
            </a>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Gallery */}
              <ProductGallery media={product.media} title={product.title} />

              {/* Details */}
              <div>
                <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-4 font-body">
                  FrancktheSolution
                </p>
                <h1 className="font-heading text-3xl sm:text-5xl font-bold uppercase leading-[1.02] text-white mb-5">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 mb-7">
                  <span className="font-heading text-3xl lg:text-4xl font-bold text-white">
                    {formatMoney(product.price)}
                  </span>
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-bold font-body ${
                      product.availableForSale
                        ? "bg-accent-blue/15 border border-accent-blue/40 text-accent-blue-light"
                        : "bg-white/5 border border-white/15 text-text-muted"
                    }`}
                  >
                    {product.availableForSale ? "In Stock" : "Sold Out"}
                  </span>
                </div>

                {product.descriptionHtml ? (
                  <div
                    className="shopify-prose text-text-secondary text-base leading-relaxed font-body space-y-4 mb-9"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                  />
                ) : null}

                {variant ? (
                  <BuyButton
                    variantId={variant.id}
                    available={product.availableForSale && variant.availableForSale}
                    label="Buy Now"
                  />
                ) : (
                  <span className="text-text-muted font-body text-sm">
                    This product isn&apos;t available for purchase yet.
                  </span>
                )}

                <p className="text-text-muted text-xs font-body mt-5">
                  Secure checkout is handled by Shopify. You&apos;ll be taken to
                  Shopify&apos;s checkout to complete your order.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Back to shop */}
        <section className="bg-bg-primary py-14 sm:py-16 relative noise-bg">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <a
              href={routes.shop}
              className="inline-flex items-center justify-center px-9 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
            >
              See All Products
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
