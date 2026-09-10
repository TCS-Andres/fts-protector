import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import CertificationSection from "@/components/training/CertificationSection";
import RatesSection from "@/components/training/RatesSection";
import { routes } from "@/lib/links";

const CONTACT_EMAIL = "info@franckthesolution.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=Private%20Training%20Inquiry`;

export const metadata: Metadata = {
  title: "One-on-One Private Training | FrancktheSolution",
  description:
    "Train one-on-one with Franck Pala. A fully personalized close-combat and self-defense curriculum - Circular Footwork Mechanics, CCDS, and real-world protective skills, built around you.",
  alternates: { canonical: "/training/private" },
};

const curriculum = [
  {
    title: "Personal Threat Assessment",
    body: "Your life, your routine, your risks. Every program starts with an honest assessment of where you're exposed and what you actually need to be able to do.",
  },
  {
    title: "Circular Footwork Mechanics",
    body: "Franck's proprietary CFM system - the movement foundation that puts you in position to strike, escape, or control before the threat can.",
  },
  {
    title: "Close Combat Defense System",
    body: "CCDS, taught at your pace with constant hands-on correction. Strikes, control, escapes, and decision-making under pressure.",
  },
  {
    title: "Improvised Weapons",
    body: "Learn to turn everyday objects - keys, pens, even a fork - into effective defensive tools. The environment is always armed if you know how to use it.",
  },
  {
    title: "Scenario Pressure-Testing",
    body: "Parking lots, vehicles, elevators, home entries. Your training is rehearsed in the scenarios you actually live in, not on a mat with rules.",
  },
  {
    title: "Ongoing Progression Plan",
    body: "Each session builds on the last. You leave with drills, homework, and measurable milestones so the skills keep sharpening between sessions.",
  },
];

const audience = [
  "Executives and high-profile individuals who need discreet, private instruction",
  "Parents and spouses who want real protective capability, not gym cardio",
  "Professionals whose schedule demands flexible, focused sessions",
  "Practitioners who want direct access to the creator of CFM and CCDS",
];

const steps = [
  {
    num: "01",
    title: "Book a Consultation",
    body: "Reach out and tell Franck about you - your goals, your schedule, your starting point. Every private program begins with a conversation.",
  },
  {
    num: "02",
    title: "Get Your Custom Program",
    body: "Franck designs a curriculum around your body, your risks, and your objectives. No cookie-cutter routines.",
  },
  {
    num: "03",
    title: "Train One-on-One",
    body: "Private sessions, undivided attention, constant correction. You progress in weeks, not years.",
  },
];

export default function PrivateTrainingPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/16_professional_headshot_studio.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                One-on-One Private Training
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Train Directly
                <br />
                <span className="text-accent-blue-light">With Franck.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                A fully personalized curriculum built around your body, your
                risks, and your goals - taught one-on-one by the creator of
                Circular Footwork Mechanics and the Close Combat Defense
                System.
              </p>
              <a
                href={MAILTO}
                className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Request Private Training &rarr;
              </a>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Why private */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll relative rounded-xl overflow-hidden border border-accent-blue/30">
                <img
                  src="/images/franck_instructor_portrait.jpg"
                  alt="Franck Pala teaching a private session"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Why One-on-One
                </p>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold uppercase mb-6 text-white leading-[1.05]">
                  100% of the Attention, 100% of the Time
                </h2>
                <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body">
                  <p>
                    In a group class, you get a fraction of the instructor. In
                    a private session, every rep is watched, every mistake is
                    corrected in the moment, and every drill is chosen for
                    you. That&apos;s why private students progress in weeks
                    instead of years.
                  </p>
                  <p>
                    Sessions are scheduled around your life - at your home,
                    your office, or a private facility - and remain completely
                    confidential. It&apos;s the same standard of instruction
                    Franck delivers to executives, contractors, and
                    law-enforcement professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Curriculum */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Built Around You
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                What Your Program Covers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {curriculum.map((c) => (
                <div
                  key={c.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                    {c.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Who it's for + steps */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Who It&apos;s For
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-8 leading-tight">
                  Private Training Fits You If…
                </h2>
                <ul className="space-y-4">
                  {audience.map((a) => (
                    <li key={a} className="flex items-start gap-3.5">
                      <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                        ▸
                      </span>
                      <span className="text-text-secondary text-base font-body leading-relaxed">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  How It Works
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-8 leading-tight">
                  Three Steps to Start
                </h2>
                <div className="space-y-6">
                  {steps.map((s) => (
                    <div key={s.num} className="flex items-start gap-5">
                      <span className="font-heading text-3xl font-bold text-accent-blue-light/60">
                        {s.num}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-white mb-1">
                          {s.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed font-body">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        <CertificationSection compact />

        <RatesSection
          intro="Private one-on-one rates, monthly training blocks, and full immersion camps - every session taught directly by Franck."
        />

        {/* CTA */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/06_boardroom_protection.jpg')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Ready to Train One-on-One?
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Availability is limited - Franck takes on a small number of
              private students at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Request Private Training
              </a>
              <a
                href={routes.training}
                className="inline-flex items-center justify-center px-9 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
              >
                All Training Options
              </a>
            </div>
            <p className="text-text-muted text-xs font-body mt-6">
              Or email{" "}
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
