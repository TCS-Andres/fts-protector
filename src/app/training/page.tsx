import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";

export const metadata: Metadata = {
  title: "Training & Online Courses | FrancktheSolution",
  description:
    "Learn from Franck Pala anywhere. Join the online community, train in person at the Everyone Is A Protector workshop, level up at the 7-day Protectors Camp, or get the upcoming video courses.",
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

const programs: Program[] = [
  {
    kicker: "Online Community",
    title: "Defensive Tactics on Skool",
    body: "Franck's online training community. Drills, breakdowns, Q&A, and a network of people committed to becoming capable protectors — train from anywhere, at your pace.",
    image: "/images/10_corporate_hr_training.png",
    cta: "Join the Community",
    href: links.skool,
    external: true,
    status: "live",
  },
  {
    kicker: "In Person",
    title: "Everyone Is A Protector Workshop",
    body: "The 2-hour hands-on self-defense workshop in Miami. No experience needed, every ticket includes a +1 free. The fastest way to walk out with real skills.",
    image: "/images/08_seminar_stage_speaking.png",
    cta: "See the Workshop",
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
  {
    kicker: "Stream Anywhere",
    title: "Video Courses",
    body: "Structured, on-demand video training covering situational awareness, defensive tactics, and improvised weapons — learn the system step by step from home. Launching soon.",
    image: "/images/11_school_safety_presentation.png",
    cta: "Coming Soon",
    href: routes.shop,
    status: "soon",
  },
];

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
                In person or online, beginner to advanced — every path to
                training under a working executive protection specialist, in
                one place.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Programs */}
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
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="animate-on-scroll group flex flex-col bg-bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
