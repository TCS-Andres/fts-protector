import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";

export const metadata: Metadata = {
  title: "Shop | FrancktheSolution",
  description:
    "Get the new FTS Fork, TheSelfDefender (patented), upcoming video courses, and Franck Pala's forthcoming book, Circular Footwork Mechanics (CFM).",
  alternates: { canonical: "/shop" },
};

type Product = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  price?: string;
  cta: string;
  href?: string;
  external?: boolean;
  status: "live" | "soon";
};

const products: Product[] = [
  {
    kicker: "Just Launched",
    title: "The FTS Fork",
    body: "Franck's newest invention — an everyday fork, reengineered into a patented, legal-to-carry self-defense tool with a knuckle-style grip and precision striking tips.",
    image: "/images/fts_fork_poster.jpg",
    cta: "See the FTS Fork",
    href: routes.ftsFork,
    status: "live",
  },
  {
    kicker: "Self-Defense Tool",
    title: "TheSelfDefender",
    body: "The patented everyday-carry self-defense tool invented by Franck. Three patents, built from 20+ years of real-world protection. Order direct from the official store.",
    image: "/images/19_emergency_extraction.png",
    cta: "Buy Now",
    href: links.selfDefender,
    external: true,
    status: "live",
  },
  {
    kicker: "Video Courses",
    title: "On-Demand Training",
    body: "Structured video courses covering situational awareness, defensive tactics, and improvised weapons — learn the full system step by step, on your schedule.",
    image: "/images/11_school_safety_presentation.png",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    kicker: "The Book",
    title: "Circular Footwork Mechanics",
    body: "Franck's forthcoming book — CFM — distilling the footwork and movement principles behind everything he teaches. Be first to know when it drops.",
    image: "/images/17_walking_downtown_miami.png",
    cta: "Coming Soon",
    status: "soon",
  },
];

export default function ShopPage() {
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
                The same tools and teaching Franck&apos;s own work is built on —
                the new FTS Fork, TheSelfDefender, on-demand courses, and his
                upcoming book.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Products */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 stagger-children">
              {products.map((p) => (
                <div
                  key={p.title}
                  className="animate-on-scroll group flex flex-col bg-bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-[1000ms] group-hover:scale-105 ${
                        p.status === "soon"
                          ? "opacity-40 grayscale"
                          : "opacity-85 group-hover:opacity-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-white bg-gradient-to-r from-accent-blue to-accent-blue-light shadow-[0_0_20px_rgba(46,114,184,0.65)] ring-1 ring-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                        {p.kicker}
                      </span>
                      {p.status === "soon" && (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-black bg-gradient-to-r from-accent-gold to-[#F0DDA0] shadow-[0_0_22px_rgba(201,168,76,0.75)] ring-1 ring-black/10 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                      {p.title}
                    </h3>
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-6 font-body flex-1">
                      {p.body}
                    </p>
                    {p.status === "live" && p.href ? (
                      <a
                        href={p.href}
                        target={p.external ? "_blank" : undefined}
                        rel={p.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white text-sm font-bold uppercase tracking-[2px] rounded hover:bg-white transition-colors duration-300"
                      >
                        {p.cta} &rarr;
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-text-muted text-sm font-bold uppercase tracking-[2px] rounded cursor-default">
                        {p.cta}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-text-muted text-sm mt-12 font-body animate-on-scroll">
              Video courses and the CFM book are launching soon. Want to be
              notified first?{" "}
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
