import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import BuyButton from "@/components/shop/BuyButton";
import { VideoOfferList, type VideoOffer } from "@/components/video-library/LessonList";
import { routes } from "@/lib/links";
import {
  formatMoney,
  getProduct,
  isShopifyConfigured,
  type Product,
} from "@/lib/shopify";
import { loginHref } from "@/lib/video-access";
import { publishedVideos, VIDEO_BUNDLE_HANDLE } from "@/lib/video-library";

// Prices and availability come live from the Shopify products, refreshed
// every minute like the rest of the shop.
export const revalidate = 60;

const CONTACT_EMAIL = "info@franckthesolution.com";

export const metadata: Metadata = {
  title: "Video Library - Train With Franck On Demand | FrancktheSolution",
  description:
    "Franck Pala's on-demand training videos. Buy the videos you want, then stream them on your phone, tablet, or computer and rewatch any technique as often as you need.",
  alternates: { canonical: routes.videoLibrary },
};

const steps = [
  {
    num: "01",
    title: "Pick Your Videos",
    body: "Buy only the videos you want. Checkout is handled securely by Shopify and takes about a minute.",
  },
  {
    num: "02",
    title: "Sign In",
    body: "Use the same email you used at checkout. Shopify emails you a one-time code, so there is no password to remember.",
  },
  {
    num: "03",
    title: "Start Training",
    body: "Open My Videos and stream what you bought on your phone, tablet, or computer.",
  },
];

async function loadProduct(handle: string): Promise<Product | null> {
  if (!isShopifyConfigured()) return null;
  try {
    return await getProduct(handle);
  } catch {
    return null;
  }
}

function isOnSale(product: Product | null): boolean {
  const variant = product?.variants[0];
  return Boolean(product?.availableForSale && variant?.availableForSale);
}

const signInHref = loginHref(routes.myVideos);

function SignInLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={signInHref}
      className={`inline-block text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body ${className}`}
    >
      Already bought a video? Sign in to watch &rarr;
    </a>
  );
}

function BrowseButton() {
  return (
    <a
      href="#videos"
      className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
    >
      See the Videos &darr;
    </a>
  );
}

// Optional "all videos" bundle. Only rendered when that Shopify product exists
// and is for sale.
function BundleBox({
  bundle,
  count,
  singlesTotal,
}: {
  bundle: Product;
  count: number;
  singlesTotal: number;
}) {
  const variant = bundle.variants[0];
  const savings = singlesTotal - parseFloat(variant.price.amount);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <p className="font-heading text-5xl lg:text-6xl font-bold text-white leading-none">
          {formatMoney(variant.price).replace(/\.00$/, "")}
        </p>
        <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body pb-1.5">
          {count === 1 ? "Full library bundle" : `All ${count} videos`}
        </p>
        {savings >= 0.01 ? (
          <p className="text-accent-blue-light text-xs uppercase tracking-[1.5px] font-bold font-body pb-1.5">
            Save{" "}
            {formatMoney({
              amount: savings.toFixed(2),
              currencyCode: variant.price.currencyCode,
            }).replace(/\.00$/, "")}
          </p>
        ) : null}
      </div>
      <BuyButton
        variantId={variant.id}
        available
        label="Get Every Video"
        showQuantity={false}
      />
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white leading-none">
        Coming Soon
      </p>
      <p className="text-text-muted text-sm font-body leading-relaxed max-w-md">
        The first videos open shortly. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-blue-light hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        to hear the moment they go live.
      </p>
    </div>
  );
}

function PrimaryCta({
  bundle,
  count,
  anyOnSale,
  singlesTotal,
}: {
  bundle: Product | null;
  count: number;
  anyOnSale: boolean;
  singlesTotal: number;
}) {
  if (bundle && isOnSale(bundle) && count > 0) {
    return (
      <div className="flex flex-col gap-5">
        <BundleBox bundle={bundle} count={count} singlesTotal={singlesTotal} />
        <a
          href="#videos"
          className="text-text-secondary text-sm font-body hover:text-white transition-colors"
        >
          Or buy videos one at a time &darr;
        </a>
      </div>
    );
  }
  if (anyOnSale) return <BrowseButton />;
  return <ComingSoon />;
}

export default async function VideoLibraryPage() {
  const videos = publishedVideos();
  const [bundle, ...videoProducts] = await Promise.all([
    loadProduct(VIDEO_BUNDLE_HANDLE),
    ...videos.map((v) => loadProduct(v.productHandle)),
  ]);
  const offers: VideoOffer[] = videos.map((video, i) => ({
    video,
    product: videoProducts[i],
  }));
  const count = videos.length;
  const anyOnSale = offers.some((o) => isOnSale(o.product));
  // What buying every video one by one would cost, to show the bundle saving.
  const singlesTotal = offers.reduce(
    (sum, o) => sum + (isOnSale(o.product) ? parseFloat(o.product!.variants[0].price.amount) : 0),
    0
  );
  const countLabel = `${count} ${count === 1 ? "Video" : "Videos"}`;

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
                Pick the videos you want and stream them on your phone, tablet,
                or computer. Rewatch any technique as often as you need.
              </p>
              <div className="hero-animate hero-animate-3 flex flex-col gap-6">
                <PrimaryCta
                  bundle={bundle}
                  count={count}
                  anyOnSale={anyOnSale}
                  singlesTotal={singlesTotal}
                />
                <SignInLink />
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* The videos */}
        {count > 0 ? (
          <section
            id="videos"
            className="scroll-mt-24 bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg"
          >
            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  {countLabel}
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                  Pick Your Videos
                </h2>
                <p className="text-text-secondary text-base font-body mt-4 max-w-xl mx-auto leading-relaxed">
                  Each video is sold on its own. You only pay for the ones you
                  want, and they are yours to rewatch anytime.
                </p>
              </div>
              <div className="animate-on-scroll">
                <VideoOfferList offers={offers} />
              </div>
              <p className="text-text-muted text-xs font-body leading-relaxed text-center mt-8">
                Secure checkout by Shopify. Streaming only, so videos play on
                this site and are not downloadable.
              </p>
            </div>
          </section>
        ) : null}

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
              <PrimaryCta
                  bundle={bundle}
                  count={count}
                  anyOnSale={anyOnSale}
                  singlesTotal={singlesTotal}
                />
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
