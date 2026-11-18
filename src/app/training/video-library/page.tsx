import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import BuyButton from "@/components/shop/BuyButton";
import { LockedLessonList } from "@/components/video-library/LessonList";
import { routes } from "@/lib/links";
import {
  formatMoney,
  getProduct,
  isShopifyConfigured,
  type Product,
} from "@/lib/shopify";
import { loginHref } from "@/lib/video-access";
import { libraryVideos, VIDEO_LIBRARY_PRODUCT_HANDLE } from "@/lib/video-library";

// Price and availability come live from the Shopify product, refreshed every
// minute like the rest of the shop.
export const revalidate = 60;

const CONTACT_EMAIL = "info@franckthesolution.com";

export const metadata: Metadata = {
  title: "Video Library - Train With Franck On Demand | FrancktheSolution",
  description:
    "Franck Pala's on-demand training videos. Stream every lesson on your phone, tablet, or computer and rewatch any technique as often as you need.",
  alternates: { canonical: routes.videoLibrary },
};

const steps = [
  {
    num: "01",
    title: "Get Access",
    body: "Check out securely through Shopify. It takes about a minute.",
  },
  {
    num: "02",
    title: "Sign In",
    body: "Use the same email you used at checkout. Shopify emails you a one-time code, so there is no password to remember.",
  },
  {
    num: "03",
    title: "Start Training",
    body: "Open My Videos and stream any lesson on your phone, tablet, or computer.",
  },
];

async function loadLibraryProduct(): Promise<Product | null> {
  if (!isShopifyConfigured()) return null;
  try {
    return await getProduct(VIDEO_LIBRARY_PRODUCT_HANDLE);
  } catch {
    return null;
  }
}

const signInHref = loginHref(routes.myVideos);

function SignInLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={signInHref}
      className={`inline-block text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body ${className}`}
    >
      Already bought it? Sign in to watch &rarr;
    </a>
  );
}

function BuyBox({ product }: { product: Product | null }) {
  const variant = product?.variants[0];
  const onSale = Boolean(product?.availableForSale && variant?.availableForSale);

  if (!variant || !onSale) {
    return (
      <div className="flex flex-col gap-4">
        <p className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white leading-none">
          Coming Soon
        </p>
        <p className="text-text-muted text-sm font-body leading-relaxed max-w-md">
          The library opens shortly. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-blue-light hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          to hear the moment it goes live.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-3">
        <p className="font-heading text-5xl lg:text-6xl font-bold text-white leading-none">
          {formatMoney(variant.price).replace(/\.00$/, "")}
        </p>
        <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body pb-1.5">
          Full library
        </p>
      </div>
      <BuyButton
        variantId={variant.id}
        available
        label="Get Instant Access"
        showQuantity={false}
      />
      <p className="text-text-muted text-xs font-body leading-relaxed max-w-md">
        Secure checkout by Shopify. Streaming only, so lessons play on this
        site and are not downloadable.
      </p>
    </div>
  );
}

export default async function VideoLibraryPage() {
  const product = await loadLibraryProduct();
  const lessonCount = libraryVideos.length;

  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/franck_instructor_portrait.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                On-Demand Video Library
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Train With Franck,
                <br />
                <span className="text-accent-blue-light">On Your Schedule.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                {lessonCount} lessons from Franck, ready to stream. Watch on
                your phone, tablet, or computer and rewatch any technique as
                often as you need.
              </p>
              <div className="hero-animate hero-animate-3 flex flex-col gap-6">
                <BuyBox product={product} />
                <SignInLink />
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* What's inside */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                {lessonCount} Lessons
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                What&apos;s Inside
              </h2>
            </div>
            {product?.descriptionHtml ? (
              <div
                className="animate-on-scroll shopify-prose text-text-secondary text-base leading-relaxed font-body mb-10 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            ) : null}
            <div className="animate-on-scroll">
              <LockedLessonList videos={libraryVideos} />
            </div>
          </div>
        </section>

        <RedDivider />

        {/* How it works */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Getting Started
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 stagger-children">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg"
                >
                  <span className="font-heading text-3xl font-bold text-accent-blue-light/60">
                    {s.num}
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase text-white mt-3 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/11_school_safety_presentation.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 animate-on-scroll">
            <div className="rounded-2xl border border-accent-blue/30 bg-bg-steel-card/60 p-6 sm:p-9 shadow-[0_0_50px_rgba(46,114,184,0.08)]">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6">
                Start Training Today
              </h2>
              <BuyBox product={product} />
              <SignInLink className="mt-6" />
            </div>
            <p className="text-text-muted text-xs font-body mt-6 text-center">
              Questions? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-blue-light hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
