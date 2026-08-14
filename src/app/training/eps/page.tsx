import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { routes } from "@/lib/links";

const CONTACT_EMAIL = "info@franckthesolution.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=EPS%20Training%20Inquiry`;

export const metadata: Metadata = {
  title: "Executive Protection Specialist (EPS) Training | FrancktheSolution",
  description:
    "Professional-track Executive Protection Specialist training with Franck Pala - advance work, protective details, threat assessment, and close-combat defensive tactics for aspiring and working EP agents.",
  alternates: { canonical: "/training/eps" },
};

const modules = [
  {
    title: "Protective Detail Operations",
    body: "Formations, positioning, and movement - solo details and team details, on foot and in vehicles, in crowds and controlled venues.",
  },
  {
    title: "Advance Work & Route Planning",
    body: "Site surveys, arrival and departure choreography, choke-point identification, and contingency planning before the client ever arrives.",
  },
  {
    title: "Threat Assessment",
    body: "Read people, patterns, and environments. Learn to identify hostile surveillance and pre-attack indicators before they become attacks.",
  },
  {
    title: "Close Combat Defensive Tactics",
    body: "Franck's CCDS applied to protective work - weapon retention, third-party protection, and controlling threats while covering a principal.",
  },
  {
    title: "Emergency Extraction",
    body: "When it goes wrong: cover-and-evacuate drills, vehicle work, and moving a principal through a hostile environment to safety.",
  },
  {
    title: "Professional Conduct & Client Relations",
    body: "The soft skills that keep you employed - protocol, discretion, dress, communication, and working alongside estates, EAs, and venue security.",
  },
];

const outcomes = [
  "Train under an active, working Elite Executive Protection specialist",
  "Learn the standards used with high-net-worth and high-profile clients",
  "Build a realistic path into the executive protection industry",
  "Pressure-tested skills - not classroom-only certification theater",
];

const steps = [
  {
    num: "01",
    title: "Apply",
    body: "Tell us about your background - military, law enforcement, security, martial arts, or committed civilian. Every applicant is screened.",
  },
  {
    num: "02",
    title: "Train the Standard",
    body: "Complete the EPS curriculum under Franck's direct instruction - classroom, hands-on, and scenario-based evaluation.",
  },
  {
    num: "03",
    title: "Enter the Industry",
    body: "Graduates leave with the skills, standards, and network to pursue real protective work.",
  },
];

export default function EpsTrainingPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/02_suv_motorcade_arrival.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                Executive Protection Specialist Training
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Become the One
                <br />
                <span className="text-accent-blue-light">They Trust.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                The professional track: EPS training built and taught by an
                active elite executive protection specialist. Advance work,
                protective details, threat assessment, and the tactics that
                keep principals alive.
              </p>
              <a
                href={MAILTO}
                className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Apply for EPS Training &rarr;
              </a>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Modules */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Curriculum
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                What the EPS Track Covers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {modules.map((m) => (
                <div
                  key={m.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                    {m.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Learn from the field */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Taught From the Field
                </p>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold uppercase mb-6 text-white leading-[1.05]">
                  Learn From Someone Still Doing the Job
                </h2>
                <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-8">
                  <p>
                    Most EP courses are taught by people who left the industry
                    years ago. Franck is an active elite executive protection
                    specialist and fugitive apprehension agent - the tactics
                    you learn are the ones being used on details right now.
                  </p>
                </div>
                <ul className="space-y-4">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3.5">
                      <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                        ▸
                      </span>
                      <span className="text-text-secondary text-base font-body leading-relaxed">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <div className="mx-auto w-full max-w-xs lg:max-w-sm rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/eps_training_poster.jpg"
                    className="w-full aspect-[9/16] object-cover bg-black"
                    src="/videos/eps_training.mp4#t=0.1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Steps */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Path
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                From Applicant to Agent
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {steps.map((s) => (
                <div key={s.num} className="animate-on-scroll text-center">
                  <span className="font-heading text-5xl font-bold text-accent-blue-light/50">
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
            <div className="absolute inset-0 bg-[url('/images/19_emergency_extraction.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Ready for the Professional Track?
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              EPS training is selective and class sizes are small. Apply and
              tell us why you belong in the room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Apply for EPS Training
              </a>
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-9 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
              >
                Hire Protection Instead
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
