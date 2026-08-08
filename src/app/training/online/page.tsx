import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";

const CONTACT_EMAIL = "info@franckthesolution.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=Online%20Training%20Inquiry`;

export const metadata: Metadata = {
  title: "Online Training — Live via Zoom | FrancktheSolution",
  description:
    "Train live with Franck Pala from anywhere in the world. Real-time online training sessions over Zoom — personalized coaching, CFM and CCDS fundamentals, awareness, and improvised-weapons skills.",
  alternates: { canonical: "/training/online" },
};

const features = [
  {
    title: "Live, Not Pre-Recorded",
    body: "Real-time sessions over Zoom with Franck himself — he watches you move, corrects you on the spot, and adapts the session as you go. This is coaching, not content.",
  },
  {
    title: "Personalized Curriculum",
    body: "Your sessions are built around your goals, your environment, and your starting point — the same programming approach as in-person private training.",
  },
  {
    title: "Train From Anywhere",
    body: "Miami to Manila — all you need is a camera and some floor space. Keep training on business trips, deployments, or wherever life puts you.",
  },
  {
    title: "CFM & CCDS Foundations",
    body: "Learn the footwork, positioning, and defensive mechanics of Franck's proprietary systems, broken down step by step so they translate through the screen.",
  },
  {
    title: "Awareness & Strategy",
    body: "Situational awareness, threat recognition, home and travel security, improvised weapons — the thinking skills that don't need a training partner.",
  },
  {
    title: "Drills & Accountability",
    body: "You leave every session with homework — solo drills, movement patterns, and checkpoints Franck reviews with you the next time you meet.",
  },
];

const audience = [
  "Clients outside South Florida who want direct access to Franck",
  "Busy professionals who need training that fits their calendar",
  "Beginners who want expert eyes on their fundamentals from day one",
  "Practitioners keeping their skills sharp between in-person sessions",
];

const steps = [
  {
    num: "01",
    title: "Reach Out",
    body: "Email us with your goals and time zone. Franck will set up a short call to understand what you need.",
  },
  {
    num: "02",
    title: "Schedule Your Sessions",
    body: "Pick a cadence that works — weekly, biweekly, or an intensive block. Sessions run live over Zoom.",
  },
  {
    num: "03",
    title: "Train Live",
    body: "Show up, move, get corrected in real time — and build real capability from wherever you are.",
  },
];

export default function OnlineTrainingPage() {
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
                Online Training — Live via Zoom
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Train With Franck,
                <br />
                <span className="text-accent-blue-light">From Anywhere.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-body">
                Live one-on-one and small-group training sessions over Zoom —
                real-time coaching from Franck, personalized to your goals, no
                matter where in the world you are.
              </p>
              <a
                href={MAILTO}
                className="hero-animate hero-animate-3 inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Book Online Training &rarr;
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
                Real Coaching, Through the Screen
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                How Online Training Works
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

        {/* Who it's for + steps */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Who It&apos;s For
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-8 leading-tight">
                  Online Training Fits You If…
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
                  Getting Started
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-8 leading-tight">
                  Three Steps to Your First Session
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

        {/* Complements */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Between Sessions
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6">
              Keep Training All Week
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-8">
              Live Zoom sessions are the core — and between them you can drill
              with Franck&apos;s Defensive Tactics community on Skool, with
              structured on-demand video courses launching soon.
            </p>
            <a
              href={links.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 border border-accent-blue-light/50 text-accent-blue-light text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 min-h-[52px]"
            >
              Join the Skool Community &rarr;
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <div className="absolute inset-0 bg-[url('/images/11_school_safety_presentation.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-on-scroll">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-5">
              Ready to Train Online?
            </h2>
            <p className="text-text-secondary text-base lg:text-lg mb-8 font-body">
              Tell us your goals and your time zone — we&apos;ll get your first
              live session on the calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Book Online Training
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
