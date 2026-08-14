import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";
import {
  getProducts,
  formatMoney,
  isShopifyConfigured,
  type ProductListItem,
} from "@/lib/shopify";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Shop | FrancktheSolution",
  description:
    "Shop FrancktheSolution: the patented FranckTheSolution Fork, the Circular Footwork Mechanics (CFM) manual, TheSelfDefender, and more. Secure checkout by Shopify.",
  alternates: { canonical: "/shop" },
};

type ShopCard = {
  key: string;
  title: string;
  image: string;
  imageAlt?: string;
  href: string;
  external?: boolean;
  price?: string;
  badge: string;
  cta: string;
  body?: string;
  soldOut?: boolean;
  soon?: boolean;
  imgPos?: string;
};

// Products that are not in the Shopify store and stay curated.
const selfDefenderCard: ShopCard = {
  key: "selfdefender",
  title: "TheSelfDefender",
  image: "/images/19_emergency_extraction.png",
  href: links.selfDefender,
  external: true,
  badge: "Self-Defense Tool",
  cta: "Buy Now",
  body: "The patented everyday-carry self-defense tool invented by Franck. Three patents, built from 20+ years of real-world protection. Order from the official store.",
};

const videoCoursesCard: ShopCard = {
  key: "courses",
  title: "On-Demand Training",
  image: "/images/11_school_safety_presentation.png",
  href: routes.training,
  badge: "Video Courses",
  cta: "Coming Soon",
  soon: true,
  body: "Structured video courses covering situational awareness, defensive tactics, and improvised weapons - the full system, step by step, on your schedule.",
};

// Fallback cards used only when the Shopify store isn't connected yet.
const fallbackCards: ShopCard[] = [
  {
    key: "fork",
    title: "The FranckTheSolution Fork",
    image: "/images/fork_main.jpg",
    href: routes.ftsFork,
    badge: "Just Launched",
    cta: "See the Fork",
    body: "Franck's newest invention - an everyday fork, reengineered into a patented, legal-to-carry tool.",
  },
  selfDefenderCard,
  {
    key: "cfm",
    title: "Circular Footwork Mechanics",
    image: "/images/cfm_book_front.jpg",
    href: "mailto:info@franckthesolution.com?subject=CFM%20Book%20Order",
    external: true,
    badge: "Out Now",
    cta: "Get the Book",
    body: "Franck's new book - CFM. The biomechanics of circular footwork and the strategies behind it, in a manual.",
    imgPos: "object-top",
  },
  videoCoursesCard,
];

function toCard(p: ProductListItem): ShopCard {
  return {
    key: p.handle,
    title: p.title,
    image: p.featuredImage?.url ?? "/images/fork_main.jpg",
    imageAlt: p.featuredImage?.altText ?? p.title,
    href: `/shop/products/${p.handle}`,
    price: formatMoney(p.price),
    badge: "Shop",
    cta: "View Product",
    soldOut: !p.availableForSale,
  };
}

async function loadCards(): Promise<ShopCard[]> {
  if (!isShopifyConfigured()) return fallbackCards;
  try {
    const products = await getProducts();
    if (products.length === 0) return fallbackCards;
    // Live Shopify products first, then the items sold outside this store.
    return [...products.map(toCard), selfDefenderCard, videoCoursesCard];
  } catch {
    return fallbackCards;
  }
}

export default async function ShopPage() {
  const cards = await loadCards();

  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/04_nightclub_vip_section.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                The Shop
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Tools &amp; Knowledge
                <br />
                <span className="text-accent-blue-light">That Protect.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-body">
                The same tools and teaching Franck&apos;s own work is built on -
                the FranckTheSolution Fork, the CFM manual, TheSelfDefender, and
                more. Secure checkout handled by Shopify.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Products */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 stagger-children">
              {cards.map((p) => (
                <div
                  key={p.key}
                  className="animate-on-scroll group flex flex-col bg-bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-black">
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? ""}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-[1000ms] group-hover:scale-105 ${
                        p.imgPos ?? ""
                      } ${
                        p.soon
                          ? "opacity-40 grayscale"
                          : "opacity-85 group-hover:opacity-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-white bg-gradient-to-r from-accent-blue to-accent-blue-light shadow-[0_0_20px_rgba(46,114,184,0.65)] ring-1 ring-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                        {p.badge}
                      </span>
                      {p.soon && (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-black bg-gradient-to-r from-accent-gold to-[#F0DDA0] shadow-[0_0_22px_rgba(201,168,76,0.75)] ring-1 ring-black/10 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
                          Coming Soon
                        </span>
                      )}
                      {p.soldOut && (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-white bg-black/70 border border-white/20">
                          Sold Out
                        </span>
                      )}
                    </div>
                    {p.price && (
                      <span className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold font-body text-white bg-black/70 border border-white/15">
                        {p.price}
                      </span>
                    )}
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                      {p.title}
                    </h3>
                    {p.body && (
                      <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-6 font-body flex-1">
                        {p.body}
                      </p>
                    )}
                    <div className={p.body ? "" : "mt-auto pt-2"}>
                      {p.soon ? (
                        <span className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-text-muted text-sm font-bold uppercase tracking-[2px] rounded cursor-default">
                          {p.cta}
                        </span>
                      ) : (
                        <a
                          href={p.href}
                          target={p.external ? "_blank" : undefined}
                          rel={p.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white text-sm font-bold uppercase tracking-[2px] rounded hover:bg-white hover:text-bg-primary transition-colors duration-300"
                        >
                          {p.cta} &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-text-muted text-sm mt-12 font-body animate-on-scroll">
              Want to be first to know when new drops go live?{" "}
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue-light hover:text-white transition-colors"
              >
                Follow @FranckTheSolution
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
