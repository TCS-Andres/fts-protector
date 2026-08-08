import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";

export const metadata: Metadata = {
  title: "Training & Online Courses | FrancktheSolution",
  description:
    "Train with Franck Pala: online training, one-on-one private training, group training, and Executive Protection Specialist (EPS) training — plus workshops and the 7-day Protectors Camp.",
  alternates: { canonical: "/training" },
};

type Program = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  cta: string;
  href: string;
  external?: boolean;
  status?: "live" | "soon";
};

// The four core ways to train with Franck.
const trainingTypes: Program[] = [
  {
    kicker: "Train From Anywhere",
    title: "Online Training",
    body: "Franck's Defensive Tactics community on Skool — drills, breakdowns, Q&A, and a network of committed protectors. Structured video courses are launching soon.",
    image: "/images/10_corporate_hr_training.png",
    cta: "Join the Community",
    href: links.skool,
    external: true,
    status: "live",
  },
  {
    kicker: "One-on-One",
    title: "Private Training",
    body: "Train directly with Franck. A fully personalized curriculum — CFM, CCDS, improvised weapons, and real-world scenarios — built around your body, your risks, and your goals.",
    image: "/images/16_professional_headshot_studio.png",
    cta: "Explore Private Training",
    href: routes.trainingPrivate,
    status: "live",
  },
  {
    kicker: "Teams & Families",
    title: "Group Training",
    body: "Hands-on training for families, companies, schools, and organizations. Groups that train together protect together — scaled to any size and any experience level.",
    image: "/images/08_seminar_stage_speaking.png",
    cta: "Explore Group Training",
    href: routes.trainingGroup,
    status: "live",
  },
  {
    kicker: "Professional Track",
    title: "EPS Training",
    body: "Executive Protection Specialist training for aspiring and working EP agents — advance work, protective details, threat assessment, and close-combat defensive tactics.",
    image: "/images/02_suv_motorcade_arrival.png",
    cta: "Explore EPS Training",
    href: routes.trainingEps,
    status: "live",
  },
];

// Additional programs beyond the four core types.
const morePrograms: Program[] = [
  {
    kicker: "In Person",
    title: "Everyone Is A Protector Workshop",
    body: "The hands-on self-defense workshop in Miami. No experience needed. There's no date currently scheduled — stay tuned for the next workshop.",
    image: "/images/hero_workshop_background.jpg",
    cta: "About the Workshop",
    href: routes.workshops,
    status: "live",
  },
  {
    kicker: "Advanced",
    title: "7-Day Protectors Camp",
    body: "An immersive, competition-level program for serious practitioners. Firearms, close combat, tactical medic, vehicle extraction, and more. By application only.",
    image: "/images/06_boardroom_protection.jpg",
    cta: "Apply for the Camp",
    href: links.emailTactops + "?subject=7-Day%20Protectors%20Camp%20Application",
    external: true,
    status: "live",
  },
];

function ProgramCard({ p }: { p: Program }) {
  return (
    <div className="animate-on-scroll group flex flex-col bg-bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent-blue/40 transition-all duration-300">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={p.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-[center_25%] opacity-80 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1.5 bg-black/60 backdrop-blur border border-accent-blue/40 rounded-full text-accent-blue-light text-[10px] uppercase tracking-[2px] font-bold font-body">
            {p.kicker}
          </span>
          {p.status === "soon" && (
            <span className="inline-flex items-center px-3 py-1.5 bg-accent-blue text-white rounded-full text-[10px] uppercase tracking-[2px] font-bold font-body">
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
        {p.status === "soon" ? (
          <span className="text-text-muted text-sm uppercase tracking-[2px] font-bold font-body">
            {p.cta}
          </span>
        ) : (
          <a
            href={p.href}
            target={p.external ? "_blank" : undefined}
            rel={p.external ? "noopener noreferrer" : undefined}
            className="text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
          >
            {p.cta} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

export default function TrainingPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/08_seminar_stage_speaking.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                Learn From Franck
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Become the
                <br />
                <span className="text-accent-blue-light">Protector.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-body">
                Online, one-on-one, in a group, or on the professional EPS
                track — every path to training under a working executive
                protection specialist, in one place.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* The four ways to train */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Ways to Train
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Pick Your Path
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {trainingTypes.map((p) => (
                <ProgramCard key={p.title} p={p} />
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* More programs */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Go Further
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                More Ways to Train
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 stagger-children max-w-5xl mx-auto">
              {morePrograms.map((p) => (
                <ProgramCard key={p.title} p={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
