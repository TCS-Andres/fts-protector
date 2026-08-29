import { routes } from "@/lib/links";
import { getProducts, formatMoney, isShopifyConfigured } from "@/lib/shopify";

// Marketing copy per Shopify product handle. Anything not listed here still
// renders with the generic treatment, so new store products appear automatically.
type Spotlight = {
  name?: string;
  eyebrow: string;
  tagline: string;
  body: string;
  points: string[];
};

const SPOTLIGHTS: Record<string, Spotlight> = {
  "the-fork-by-franckthesolution": {
    name: "The FranckTheSolution Fork",
    eyebrow: "Patented Everyday-Carry Tool",
    tagline: "A tool is a tool. Nobody takes it from you.",
    body: "An everyday fork, engineered into a patented tool by Franck Pala. Because it is a fork, it carries the freedom of an everyday object instead of the restrictions of a weapon - no concealed-carry license, no permits, and nothing that looks threatening to anyone watching.",
    points: [
      "Patented as a tool, not a weapon",
      "Legal to carry across the U.S. and worldwide",
      "TSA-friendly - take off the magnet and it is simply a fork",
      "18/10 stainless steel, carabiner clip + magnet for quick-snap deployment",
    ],
  },
  "cfm-circular-footwork-mechanics-manual-by-franck-pala": {
    name: "CFM: Circular Footwork Mechanics",
    eyebrow: "The Manual",
    tagline: "Before the strike, there is movement.",
    body: "Circular Footwork Mechanics is the proprietary system Franck built over 20-plus years on the front line, and this manual puts it in your hands. It is the foundation underneath everything he teaches, and the core of his Close Combat Defense System.",
    points: [
      "Read distance, control angles, hold balance under pressure",
      "Footwork that multiplies the power of every strike",
      "Written for protectors, law enforcement, and athletes",
      "Drills that build real muscle memory, not theory",
    ],
  },
  "r-o-systeme": {
    name: "R-O System Furtif",
    eyebrow: "Rapid Extraction Strap",
    tagline: "Three seconds to get someone out.",
    body: "When things go wrong you will not have time to think. Designed by a career firefighter, the R-O System Furtif deploys in under three seconds with a single motion - no knots, no adjustments, nothing to figure out under pressure.",
    points: [
      "Deploys in under three seconds, one motion",
      "Locks onto a person so the pull comes from your legs",
      "No knots and no adjustments to make under stress",
      "Built by a career firefighter for real rescues",
    ],
  },
};

const GENERIC: Spotlight = {
  eyebrow: "From the Store",
  tagline: "Built for protectors.",
  body: "Part of the FrancktheSolution store - the same tools and knowledge Franck's own work is built on.",
  points: [],
};

type Card = {
  id: string;
  title: string;
  href: string;
  image: string | null;
  price: string | null;
  available: boolean;
  spotlight: Spotlight;
};

// Used only when the store isn't reachable, so the section never disappears.
const FALLBACK: Card[] = [
  {
    id: "fork",
    title: "The FranckTheSolution Fork",
    href: routes.ftsFork,
    image: "/images/fork_main.jpg",
    price: null,
    available: true,
    spotlight: SPOTLIGHTS["the-fork-by-franckthesolution"],
  },
  {
    id: "cfm",
    title: "CFM: Circular Footwork Mechanics",
    href: routes.shop,
    image: "/images/cfm_book_front.jpg",
    price: null,
    available: false,
    spotlight: SPOTLIGHTS["cfm-circular-footwork-mechanics-manual-by-franck-pala"],
  },
];

async function loadCards(): Promise<Card[]> {
  if (!isShopifyConfigured()) return FALLBACK;
  try {
    const products = await getProducts(12);
    if (products.length === 0) return FALLBACK;
    return products.map((p) => {
      const spotlight = SPOTLIGHTS[p.handle] ?? GENERIC;
      return {
        id: p.id,
        title: spotlight.name ?? p.title,
        href: `${routes.shop}/products/${p.handle}`,
        image: p.featuredImage?.url ?? null,
        price: formatMoney(p.price),
        available: p.availableForSale,
        spotlight,
      };
    });
  } catch {
    return FALLBACK;
  }
}

export default async function ShopSection() {
  const cards = await loadCards();
  if (cards.length === 0) return null;

  return (
    <section
      id="shop"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
      style={{ background: "linear-gradient(180deg, #0C1118 0%, #06090D 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-accent-blue/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Store
          </p>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold uppercase text-white mb-5 leading-[1.02]">
            Shop the <span className="text-accent-blue-light">Store.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body mb-8">
            Carry what Franck carries. Patented tools, rescue gear, and the
            manual behind the system - shipped direct, with secure checkout.
          </p>
          <a
            href={routes.shop}
            className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_28px_rgba(46,114,184,0.55)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
          >
            Shop the Store &rarr;
          </a>
        </div>

        {/* Quick product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 sm:mb-24 stagger-children">
          {cards.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="animate-on-scroll group flex flex-col rounded-xl overflow-hidden border border-accent-blue/20 bg-bg-steel-card hover:border-accent-blue-light/60 hover:shadow-[0_0_34px_rgba(46,114,184,0.25)] transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-black">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-text-muted font-body text-sm">
                    {c.title}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-steel-card via-transparent to-transparent" />
                {!c.available && (
                  <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-text-secondary text-[10px] uppercase tracking-[2px] font-bold font-body">
                    Sold Out
                  </span>
                )}
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <p className="text-accent-blue-light text-[10px] uppercase tracking-[2px] font-bold font-body mb-2">
                  {c.spotlight.eyebrow}
                </p>
                <h3 className="font-heading text-lg lg:text-xl font-bold uppercase text-white leading-tight mb-3 flex-1">
                  {c.title}
                </h3>
                <div className="flex items-center justify-between gap-3">
                  {c.price && (
                    <span className="font-heading text-xl font-bold text-white">
                      {c.price}
                    </span>
                  )}
                  <span className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body group-hover:text-white transition-colors">
                    {c.available ? "Buy Now" : "View"} &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Per-product spotlights */}
        <div className="space-y-16 sm:space-y-24">
          {cards.map((c, i) => (
            <div
              key={`spot-${c.id}`}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={`animate-on-scroll ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="rounded-xl overflow-hidden border border-accent-blue/25 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-square flex items-center justify-center text-text-muted font-body">
                      {c.title}
                    </div>
                  )}
                </div>
              </div>

              {/* Copy */}
              <div
                className={`animate-on-scroll ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  {c.spotlight.eyebrow}
                </p>
                <h3 className="font-heading text-3xl lg:text-5xl font-bold uppercase text-white leading-[1.02] mb-4">
                  {c.title}
                </h3>
                <p className="font-heading text-lg lg:text-xl uppercase tracking-[1px] text-accent-blue-light italic mb-5">
                  &ldquo;{c.spotlight.tagline}&rdquo;
                </p>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-6">
                  {c.spotlight.body}
                </p>

                {c.spotlight.points.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {c.spotlight.points.map((p) => (
                      <li key={p} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                          ▸
                        </span>
                        <span className="text-text-secondary text-sm lg:text-base font-body leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={c.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
                  >
                    {c.available ? "Buy Now" : "See Details"} &rarr;
                  </a>
                  {c.price && (
                    <span className="font-heading text-2xl font-bold text-white">
                      {c.price}
                    </span>
                  )}
                  {!c.available && (
                    <span className="text-text-muted text-xs uppercase tracking-[2px] font-body">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
