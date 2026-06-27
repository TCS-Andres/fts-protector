import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "TheSelfDefender — Patented Self-Defense Tool | FrancktheSolution",
  description:
    "TheSelfDefender is a patented everyday-carry self-defense tool invented by Franck Pala. Three patents. Built from 20+ years of real-world protection experience.",
  alternates: { canonical: "/self-defender" },
};

const features = [
  {
    title: "3 Patents",
    body: "TheSelfDefender is protected by three patents — a genuine innovation, not a rebranded keychain. Designed, tested, and refined by a working protector.",
  },
  {
    title: "Everyday Carry",
    body: "Discreet, legal to carry in most places, and always within reach. The best tool is the one you actually have on you when it matters.",
  },
  {
    title: "Built on Real Experience",
    body: "Engineered from 20+ years of executive protection and defensive-tactics instruction. Function over gimmick, designed for how confrontations actually unfold.",
  },
  {
    title: "Anyone Can Use It",
    body: "No martial arts background, no special strength. TheSelfDefender is built so that ordinary people can defend themselves effectively under stress.",
  },
];

export default function SelfDefenderPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/19_emergency_extraction.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                TheSelfDefender — 3 Patents
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                A Patented Edge,
                <br />
                <span className="text-accent-blue-light">Always On You.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                Invented by Franck Pala, TheSelfDefender is a patented
                everyday self-defense tool built from two decades of real-world
                protection work — designed so anyone can stay safe.
              </p>
              <a
                href={links.selfDefender}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-white hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Get TheSelfDefender &rarr;
              </a>
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
                Engineered to Protect
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg"
                >
                  <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* The fork system / improvised weapons */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Patent Pending
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6">
              Anything Can Be a Tool
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              Beyond TheSelfDefender, Franck has developed a patent-pending
              system for turning an everyday object — even a simple fork — into
              an effective means of self-defense. It&apos;s the same principle
              that runs through everything he teaches: awareness, leverage, and
              decisive action beat brute force every time.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/02_suv_motorcade_arrival.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Carry the Solution
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Order TheSelfDefender directly from the official store.
            </p>
            <a
              href={links.selfDefender}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-white hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
            >
              Visit theselfdefendertool.com &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
