import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import EPImmersionProgram from "@/components/training/EPImmersionProgram";
import {
  ApplyEpsButton,
  HireFemaleEpsButton,
  IMMERSION_OPTION,
  primaryBtn,
  secondaryBtn,
} from "@/components/female-eps/EpsCtas";
import { routes } from "@/lib/links";

const PAGE_TITLE = "Female Executive Protection Specialists | FrancktheSolution";
const PAGE_DESCRIPTION =
  "Hire a certified female executive protection specialist trained by Franck Pala - discreet, low-profile close protection for women, families, and events. Or apply to become an EPS.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/female-executive-protection" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/images/emma/emma_hero_belt.jpg",
        alt: "Emma, female executive protection specialist",
      },
    ],
  },
};

const reasons = [
  {
    title: "Low-Profile by Design",
    body: "She reads as a companion, an assistant, or a friend - not a bodyguard. Protection that never announces itself at dinners, galas, hotels, and shopping.",
  },
  {
    title: "Access Where Men Can't Go",
    body: "Restrooms, dressing rooms, fitting rooms, spas, salons, and women-only events. Coverage doesn't stop at the door.",
  },
  {
    title: "Comfort for Women & Families",
    body: "Many female principals, children, and nannies prefer a woman on the detail - for errands, school runs, travel, and time at home.",
  },
  {
    title: "Cultural & Religious Requirements",
    body: "Some families and visiting dignitaries require a female agent. We staff the detail to match, with full discretion.",
  },
  {
    title: "Travel Without a Footprint",
    body: "Close protection that moves as part of your party - airports, check-ins, and city movements without a visible security presence.",
  },
  {
    title: "Same Standard. No Shortcuts.",
    body: "Firearms, VIP driving, close combat, tactical medicine, and protective operations - the same curriculum every operator on our details completes.",
  },
];

const credentials = [
  "Professional boxing champion with multiple title belts",
  "Certified Executive Protection Agent Operator - TACT OPS",
  "Graduate of the 1-month full immersion EP program",
  "Trained directly by Franck Pala, active elite EP specialist",
];

const gallery = [
  {
    src: "/images/emma/emma_discreet_venue.jpg",
    alt: "Emma at a hotel entrance in evening wear",
    caption: "Blends into any room",
    position: "object-[center_30%]",
  },
  {
    src: "/images/emma/emma_training_gloves.jpg",
    alt: "Emma in boxing gloves at the gym",
    caption: "A fighter's composure",
    position: "object-[center_20%]",
  },
  {
    src: "/images/emma/emma_franck_tactops.jpg",
    alt: "Emma with Franck Pala, TACT OPS instructor",
    caption: "Trained by Franck",
    position: "object-top",
  },
  {
    src: "/images/emma/emma_portrait_belt.jpg",
    alt: "Emma holding a championship belt",
    caption: "Champion mindset",
    position: "object-[center_25%]",
  },
];

export default function FemaleExecutiveProtectionPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0A0E14 0%, #0C1118 45%, #101A28 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(108,168,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,168,226,0.5) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-36 lg:pb-24">
            <div className="grid lg:grid-cols-[1fr_minmax(0,440px)] gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                  Female Executive Protection Specialists
                </p>
                <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.92] text-white mb-6">
                  Protection
                  <br />
                  That <span className="text-accent-blue-light">Blends In.</span>
                </h1>
                <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0 font-body">
                  Certified female executive protection specialists, trained by
                  Franck Pala to the same standard as every agent on a detail.
                  Discreet enough to disappear into any room - and able to go
                  where a male agent can&apos;t.
                </p>
                <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <HireFemaleEpsButton />
                  <ApplyEpsButton />
                </div>
              </div>

              <div className="hero-animate hero-animate-1 order-1 lg:order-2 relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/30 via-transparent to-accent-gold/15 rounded-2xl blur-xl" />
                <div className="relative rounded-xl overflow-hidden border border-accent-blue/30 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <img
                    src="/images/emma/emma_hero_belt.jpg"
                    alt="Emma, female executive protection specialist, holding a championship belt"
                    className="w-full aspect-[4/5] object-cover object-[center_35%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-heading text-xl font-bold uppercase text-white leading-none">
                      Emma
                    </p>
                    <p className="text-accent-blue-light text-[11px] uppercase tracking-[3px] font-body mt-1">
                      Executive Protection Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Why a female EPS */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Why a Female EPS
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                The Agent No One Sees Coming
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
                Some details need a woman on them. Here is where a female
                protection specialist changes the outcome.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-heading text-sm font-bold text-accent-blue-light/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase mt-2 mb-3 text-white">
                    {r.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Meet Emma */}
        <section
          id="emma"
          className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
          style={{ background: "linear-gradient(180deg, #0C1118 0%, #101A28 100%)" }}
        >
          <div className="absolute top-1/3 right-0 w-[520px] h-[420px] bg-accent-blue/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Photos */}
              <div className="animate-on-scroll grid grid-cols-2 gap-3 sm:gap-4">
                <div className="row-span-2 rounded-xl overflow-hidden border border-accent-blue/25">
                  <img
                    src="/images/emma/emma_champion_belts.jpg"
                    alt="Emma holding four championship belts"
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-accent-gold/40">
                  <img
                    src="/images/emma/emma_certified_with_franck.jpg"
                    alt="Emma with her Executive Protection Agent Operator certificate, next to Franck Pala"
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover object-[center_32%]"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-accent-blue/25">
                  <img
                    src="/images/emma/emma_ring_victory.jpg"
                    alt="Emma celebrating a title win in the ring"
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover object-[45%_center]"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="animate-on-scroll">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold font-body">
                    Featured Specialist
                  </p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/15 border border-accent-red/40 text-[10px] uppercase tracking-[2px] font-bold font-body text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-red" />
                    Currently Booked
                  </span>
                </div>
                <h2 className="font-heading text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] mb-6">
                  Meet <span className="text-accent-blue-light">Emma.</span>
                </h2>
                <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-8">
                  <p>
                    Emma is a professional boxing champion with multiple title
                    belts - and now a certified Executive Protection Agent
                    Operator. She recently completed Franck Pala&apos;s 1-month
                    full immersion program: firearms, VIP driving and
                    extraction, close combat, tactical medicine, and the
                    operational planning that keeps a principal safe.
                  </p>
                  <p>
                    She brings a fighter&apos;s composure under pressure to
                    every detail, with a presence that blends into any room
                    until the moment it matters.
                  </p>
                </div>
                <ul className="space-y-3.5 mb-9">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                        ✓
                      </span>
                      <span className="text-white text-sm sm:text-base font-body leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                <HireFemaleEpsButton label="Request Emma" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="bg-bg-primary py-12 sm:py-16 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 stagger-children">
              {gallery.map((g) => (
                <figure
                  key={g.src}
                  className="animate-on-scroll group relative rounded-xl overflow-hidden border border-white/10"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`w-full aspect-[3/4] object-cover ${g.position} transition-transform duration-[1200ms] group-hover:scale-105`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
                  <figcaption className="absolute bottom-3 left-4 right-4 font-heading text-sm sm:text-base font-bold uppercase text-white leading-tight">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Two paths */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Two Ways In
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Hire One. Or Become One.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 stagger-children">
              <div className="animate-on-scroll flex flex-col rounded-2xl border border-accent-blue/30 bg-bg-steel-card/60 p-7 sm:p-9">
                <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold font-body mb-3">
                  For Clients
                </p>
                <h3 className="font-heading text-3xl font-bold uppercase text-white leading-tight mb-4">
                  Hire a Female EPS
                </h3>
                <p className="text-text-secondary text-base leading-relaxed font-body mb-8 flex-1">
                  For principals, families, and events that need a woman on the
                  detail. Tell us your dates and location and we&apos;ll
                  coordinate the right specialist - working alone or alongside
                  your existing team.
                </p>
                <HireFemaleEpsButton className={`${primaryBtn} self-start`} />
              </div>
              <div className="animate-on-scroll flex flex-col rounded-2xl border border-accent-gold/30 bg-bg-steel-card/60 p-7 sm:p-9">
                <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold font-body mb-3">
                  For Future Agents
                </p>
                <h3 className="font-heading text-3xl font-bold uppercase text-white leading-tight mb-4">
                  Become an EPS
                </h3>
                <p className="text-text-secondary text-base leading-relaxed font-body mb-8 flex-1">
                  Women are in demand across executive protection, and too few
                  are trained to the standard. Follow Emma&apos;s path through
                  the 1-month full immersion program and earn your Executive
                  Protection Agent Operator certification.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <ApplyEpsButton
                    className={`${secondaryBtn} self-start`}
                    defaultProgram={IMMERSION_OPTION}
                  />
                  <a
                    href="#ep-immersion"
                    className="inline-flex items-center px-2 py-3 text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
                  >
                    See the program &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EPImmersionProgram compact />

        {/* Final CTA */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/emma/emma_discreet_venue.jpg')] bg-cover bg-[center_30%] opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Need a Woman on the Detail?
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Leave your details and Franck&apos;s team will coordinate the
              right specialist for your dates. Every inquiry is held in strict
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <HireFemaleEpsButton />
              <ApplyEpsButton />
            </div>
            <p className="text-text-muted text-xs font-body mt-6">
              Looking for a full protection team?{" "}
              <a href={routes.hireUs} className="text-accent-blue-light hover:underline">
                See all executive protection services
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
