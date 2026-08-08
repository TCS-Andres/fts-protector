import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { routes } from "@/lib/links";

const CONTACT_EMAIL = "info@franckthesolution.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=Group%20Training%20Inquiry`;

export const metadata: Metadata = {
  title: "Group Training | FrancktheSolution",
  description:
    "Group self-defense and defensive-tactics training with Franck Pala — for families, companies, schools, churches, and teams. Hands-on, scalable, and built on real-world protection experience.",
  alternates: { canonical: "/training/group" },
};

const formats = [
  {
    title: "Families & Couples",
    body: "Train as the unit you actually are. Households learn to move, communicate, and react together — who leads, who covers, where to go when seconds matter.",
    image: "/images/11_school_safety_presentation.png",
  },
  {
    title: "Corporate Teams",
    body: "Workplace-violence readiness, travel safety, and situational awareness for staff — delivered on-site as a team-building experience with real takeaways.",
    image: "/images/10_corporate_hr_training.png",
  },
  {
    title: "Schools, Churches & Organizations",
    body: "Safety seminars and hands-on training scaled to any audience — from staff-only sessions to full community events.",
    image: "/images/08_seminar_stage_speaking.png",
  },
];

const benefits = [
  {
    title: "Hands-On, Not a Lecture",
    body: "Every participant physically rehearses every skill. No PowerPoints, no sitting still — muscle memory is built by doing.",
  },
  {
    title: "Scaled to Every Body",
    body: "No fitness requirements and no martial-arts background needed. Techniques are biomechanically sound and work for every age and build.",
  },
  {
    title: "Real-World Scenarios",
    body: "Parking lots, offices, lobbies, events. Your group trains for the environments it actually occupies every day.",
  },
  {
    title: "Team Communication",
    body: "Groups that train together protect together. Roles, signals, and reactions are drilled so nobody freezes or works against each other.",
  },
  {
    title: "Taught by a Working Professional",
    body: "Instruction comes straight from active executive protection and fugitive-apprehension work — not from theory.",
  },
  {
    title: "Any Group Size",
    body: "From a family of four to a company of hundreds — the format, duration, and content are tailored to your headcount and goals.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Group",
    body: "Family, company, school, or team — share your headcount, location, and what you want your people to walk away with.",
  },
  {
    num: "02",
    title: "Get a Tailored Session Plan",
    body: "Franck builds the format around your group: duration, curriculum, venue, and intensity.",
  },
  {
    num: "03",
    title: "Train Together",
    body: "A high-energy, hands-on session your group will talk about for months — and skills they keep for life.",
  },
];

export default function GroupTrainingPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/10_corporate_hr_training.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                Group Training
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Groups That Train Together
                <br />
                <span className="text-accent-blue-light">Protect Together.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                Hands-on self-defense and awareness training for families,
                companies, schools, and teams — delivered by Franck Pala and
                scaled to any group size.
              </p>
              <a
                href={MAILTO}
                className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Book Group Training &rarr;
              </a>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Formats */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Every Kind of Group
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Who We Train
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 stagger-children">
              {formats.map((f) => (
                <div
                  key={f.title}
                  className="animate-on-scroll group flex flex-col bg-bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={f.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover object-[center_25%] opacity-80 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 flex-1">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                      {f.title}
                    </h3>
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Benefits */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                What Your Group Gets
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Built for Real Life
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                    {b.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Steps */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                How It Works
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Three Steps to Book
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
            <div className="absolute inset-0 bg-[url('/images/08_seminar_stage_speaking.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Bring Franck to Your Group
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Tell us about your family, company, or team — we&apos;ll build
              the session around you. Group rates available for 15+.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Book Group Training
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
