import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { routes, links } from "@/lib/links";

export const metadata: Metadata = {
  title: "About Franck Pala | FrancktheSolution",
  description:
    "Franck Pala — 20+ years in executive protection, former professional boxer, defensive-tactics innovator, inventor of TheSelfDefender (patented), active fugitive apprehension agent, and author of Circular Footwork Mechanics.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    title: "Executive Protection",
    body: "20+ years protecting principals worldwide, working with law enforcement, federal agencies, and special operations units across multiple countries.",
  },
  {
    title: "The Ring",
    body: "A former professional boxer — the foundation of the striking, footwork, and composure under pressure that define his methodology.",
  },
  {
    title: "The Inventor",
    body: "Creator of TheSelfDefender (three patents) and a patent-pending system for improvised self-defense, including the everyday fork.",
  },
  {
    title: "Still in the Field",
    body: "An active fugitive apprehension agent in Florida, running licensed and insured security and investigation operations.",
  },
  {
    title: "The Instructor",
    body: "A recognized teacher of defensive tactics, improvised weapons, and deadly-force strategy — for civilians, professionals, and agencies alike.",
  },
  {
    title: "The Author",
    body: "Writing his book, Circular Footwork Mechanics (CFM), distilling the movement principles behind everything he teaches.",
  },
];

export default function AboutPage() {
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
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] opacity-55 md:object-[70%_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                About Franck Pala
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                The Standard,
                <br />
                <span className="text-accent-blue-light">Not the Story.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-body">
                Most people in this space talk about protection. Franck has
                lived it — every day, for over two decades, and still does.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Narrative */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 animate-on-scroll">
            <div className="space-y-6 text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              <p>
                Known worldwide as{" "}
                <span className="text-white font-semibold">FrancktheSolution</span>
                , Franck Pala is a high-performance tactical instructor and one
                of the most respected authorities in close-combat defensive
                tactics, deadly strategies, and improvised weapons. A former
                professional fighter turned elite protection specialist, he has
                built a reputation for transforming ordinary individuals into
                highly capable operators through direct, efficient, and
                combat-proven methods.
              </p>
              <p>
                He is the creator of the{" "}
                <span className="text-white font-semibold">
                  Circular Footwork Mechanics (CFM)
                </span>{" "}
                system — a breakthrough in movement efficiency used by athletes,
                security professionals, law enforcement, contractors, and
                executive protection teams. He is also an inventor: the mind
                behind{" "}
                <a
                  href={links.selfDefender}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue-light font-semibold underline decoration-accent-blue/50 underline-offset-4 hover:text-white transition-colors"
                >
                  TheSelfDefender
                </a>
                , protected by{" "}
                <span className="text-white font-semibold">three patents</span>,
                plus a patent-pending system for turning an everyday fork into an
                effective self-defense tool. His instruction blends biomechanics,
                real-world scenario training, and tactical psychology to produce
                controlled aggression, sharp decision-making, and unmatched
                situational dominance.
              </p>
              <p>
                Franck teaches law-enforcement units, federal contractors,
                private security teams, and high-net-worth executive clients. His
                courses are built around real violence, real pressure, and real
                solutions — no theory, no fluff, only tactics that work when
                lives depend on it. He remains an active fugitive apprehension
                agent in Florida and runs licensed, insured security and
                investigation operations.
              </p>
              <p>
                Relentless, precise, and driven by purpose, Franck Pala
                continues to raise the standard of what a true tactical expert
                should be.
              </p>
              <blockquote className="border-l-2 border-accent-blue pl-5 mt-2">
                <p className="font-heading text-xl lg:text-2xl uppercase tracking-[1px] text-white italic">
                  &ldquo;Adapting to chaos rather than resisting it.&rdquo;
                </p>
                <cite className="text-accent-blue-light text-xs uppercase tracking-[2px] font-body not-italic">
                  — Franck Pala
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Timeline / facets */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                The Full Picture
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {timeline.map((t) => (
                <div
                  key={t.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg"
                >
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                    {t.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* The book */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Coming Soon — The Book
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold uppercase text-white mb-5">
              Circular Footwork Mechanics
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
              Franck&apos;s forthcoming book breaks down the footwork and
              movement principles at the core of his protection system — the
              same mechanics he teaches operators, civilians, and agencies.
              Follow along to be first to know when it&apos;s released.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300"
              >
                Follow for Updates
              </a>
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue hover:text-accent-blue-light transition-all duration-300"
              >
                Work With Franck
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
