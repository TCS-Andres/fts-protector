import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { routes } from "@/lib/links";

export const metadata: Metadata = {
  title: "The FranckTheSolution Fork - Patented Everyday-Carry Tool | FrancktheSolution",
  description:
    "The FranckTheSolution Fork by FrancktheSolution: a patented, non-lethal everyday-carry tool. Legal to carry across the U.S. and worldwide - because it's a fork. No concealed-carry license required, TSA-friendly, 18/10 stainless steel with carabiner clip and magnet.",
  alternates: { canonical: "/shop/fts-fork" },
};

const features = [
  {
    title: "Patented as a Tool",
    body: "This is patented as a tool - not a weapon. That's the whole point: a fork is a fork, so it carries the freedom of an everyday object, not the restrictions of a weapon.",
  },
  {
    title: "Legal to Carry, Anywhere",
    body: "Legal across the U.S. and everywhere in the world - because it's a fork. No concealed-carry license, no permits. Nobody stops you for carrying your own fork.",
  },
  {
    title: "TSA-Friendly",
    body: "Take off the magnet and carabiner and it's simply a fork - TSA-friendly and ready to travel with you anywhere, in your bag or your pocket.",
  },
  {
    title: "Quick-Snap Deployment",
    body: "18/10 stainless steel with a carabiner clip and a magnet, so it snaps into hand fast and quiet the moment you need it.",
  },
  {
    title: "Non-Lethal & Versatile",
    body: "Non-lethal, powerful, efficient, and versatile - a genuinely useful everyday tool that's also ready for close quarters in trained hands.",
  },
  {
    title: "Ergonomic & Non-Threatening",
    body: "The ergonomics are built for a natural, open-hand grip - so it never looks threatening or intimidating. To anyone watching, it's just a fork.",
  },
];

export default function FtsForkPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden noise-bg" style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}>
          {/* metallic glow accents */}
          <div className="absolute -top-32 left-1/3 w-[560px] h-[320px] bg-accent-blue/15 blur-[130px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-40 lg:pb-24 w-full">
            <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 lg:gap-16 items-center">
              <div>
                <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                  New From FrancktheSolution - Patented Tool
                </p>
                <h1 className="hero-animate hero-animate-2 font-heading text-[40px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                  The FranckTheSolution
                  <br />
                  <span className="text-accent-blue-light">Fork.</span>
                </h1>
                <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl font-body">
                  An everyday fork, engineered into a patented tool. Because
                  it&apos;s a fork, it&apos;s legal to carry across the U.S. and
                  around the world - no concealed-carry license, TSA-friendly,
                  and never threatening. An everyday tool that also happens to
                  be ready when you need it.
                </p>
                <div className="hero-animate hero-animate-2 flex flex-wrap gap-2 mb-9">
                  {["Patented Tool", "Legal to Carry", "TSA-Friendly", "18/10 Stainless Steel"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center px-4 py-2 bg-accent-blue/15 border border-accent-blue/40 rounded-full text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href="#buy"
                  className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
                >
                  Buy Online &rarr;
                </a>
              </div>

              {/* Product studio shot */}
              <div className="hero-animate hero-animate-2">
                <div className="rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-black">
                  <img
                    src="/images/fork_main.jpg"
                    alt="The FranckTheSolution Fork shown from three angles - carabiner clip, 18/10 stainless steel fork with signature engraving, and the quick-release magnet"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Features */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Why It Works
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                One Tool. Zero Restrictions.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* See it in action - vertical video */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                See It In Action
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white">
                The Fork, In Hand
              </h2>
            </div>
            <div className="animate-on-scroll mx-auto w-full max-w-xs rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/fts_fork_poster.jpg"
                className="w-full aspect-[9/16] object-cover bg-black"
                src="/videos/fts_fork.mp4#t=0.1"
              />
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Philosophy + real-world carry */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll order-2 lg:order-1 mx-auto w-full max-w-sm">
                <img
                  src="/images/fork_carry.jpg"
                  alt="The FranckTheSolution Fork clipped by its carabiner to a tactical pack"
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-accent-blue/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Why a Fork
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6">
                  A Tool Is a Tool
                </h2>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
                  At the end of the day, nobody will stop you anywhere in the
                  world for carrying your own fork - it&apos;s just a tool to eat
                  with. Where a tactical pen, pencil, or knife can be restricted
                  or confiscated when you travel, a fork goes wherever you go.
                  That&apos;s the genius of it: an everyday tool nobody looks at
                  twice, always on you, and - paired with Franck&apos;s training
                  - ready for close quarters the moment it matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Buy online - Shopify section */}
        <section id="buy" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden noise-bg" style={{ background: "linear-gradient(180deg, #0C1118 0%, #06090D 100%)" }}>
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[300px] bg-accent-blue/12 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Get Yours
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Buy the FranckTheSolution Fork Online
              </h2>
            </div>

            <div className="animate-on-scroll grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Product summary */}
              <div className="rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 p-7 sm:p-9">
                <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
                  FrancktheSolution
                </p>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-4">
                  The FranckTheSolution Fork
                </h3>
                <ul className="space-y-3 mb-7">
                  {[
                    "Patented as a tool - not a weapon",
                    "Legal to carry across the U.S. & worldwide - no license",
                    "18/10 stainless steel, carabiner clip + magnet for quick-snap deployment",
                    "TSA-friendly - take off the magnet and it's just a fork",
                    "Non-lethal, powerful, efficient & versatile",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary text-sm lg:text-base font-body">
                      <span className="text-accent-blue-light flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-text-muted text-xs font-body">
                  Ships from the USA. It&apos;s a fork - an everyday-carry tool
                  you can take just about anywhere.
                </p>
              </div>

              {/* Shopify buy-button mount point.
                  To connect the store: paste the Shopify Buy Button embed
                  (or storefront link) inside this container, replacing the
                  placeholder below. */}
              <div
                id="shopify-buy-fts-fork"
                className="rounded-xl border-2 border-dashed border-accent-blue/35 bg-black/30 p-7 sm:p-9 flex flex-col items-center justify-center text-center"
              >
                <span className="w-14 h-14 rounded-full bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-2xl mb-5">
                  🛒
                </span>
                <p className="text-white font-heading text-xl uppercase font-bold mb-2">
                  Online Checkout Launching Soon
                </p>
                <p className="text-text-secondary text-sm max-w-sm font-body">
                  Secure Shopify checkout for the FranckTheSolution Fork is being connected
                  and will live right here. Check back shortly - or follow
                  @FranckTheSolution for the drop announcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-sell */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/19_emergency_extraction.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Complete Your Carry
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Pair the FranckTheSolution Fork with TheSelfDefender - Franck&apos;s patented
              all-in-one survival keychain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={routes.selfDefender}
                className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Meet TheSelfDefender
              </a>
              <a
                href={routes.shop}
                className="inline-flex items-center justify-center px-9 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
              >
                Back to the Shop
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
