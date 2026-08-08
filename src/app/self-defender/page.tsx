import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links, routes } from "@/lib/links";

export const metadata: Metadata = {
  title: "TheSelfDefender — Non-Lethal Survival Tool | FrancktheSolution",
  description:
    "TheSelfDefender Keychain 3.0 — the patented, all-in-one non-lethal survival tool invented by Franck Pala. Self-defense striking, glass breaker, seatbelt cutter, tourniquet assist. No concealed-carry license needed.",
  alternates: { canonical: "/self-defender" },
};

// Core functions of the tool, per the official product site.
const functions = [
  {
    icon: "✊",
    title: "Self-Defense",
    body: "Deliver powerful, precise blunt-force strikes to subdue or deter an attacker — designed so ordinary people can generate real stopping power under stress.",
  },
  {
    icon: "🚗",
    title: "Glass Breaker",
    body: "A tungsten-carbide tip shatters vehicle or building glass in an instant — the difference-maker in a submerged car or a blocked exit.",
  },
  {
    icon: "🪢",
    title: "Seatbelt Cutter",
    body: "A recessed, replaceable blade slices through a jammed seatbelt in one pull — and a free replacement blade is included with every tool.",
  },
  {
    icon: "🩸",
    title: "Tourniquet Assist",
    body: "Built to help apply pressure and control serious bleeding until help arrives — a life-saving function most carry tools ignore.",
  },
  {
    icon: "🔑",
    title: "Keychain Carry",
    body: "Rides on your keys via the ring carrier, so it deploys in the same motion you already make a dozen times a day. The best tool is the one you have.",
  },
  {
    icon: "🖐",
    title: "Ambidextrous Grip",
    body: "Finger grooves seat the tool naturally in either hand, keeping it locked in your fist through impact — no special training required.",
  },
];

const specs = [
  { label: "Model", value: "TheSelfDefender® Keychain 3.0" },
  { label: "Weight", value: "5 ounces" },
  { label: "Body", value: "383 / ADC12 aluminum" },
  { label: "Glass-Breaker Tip", value: "Tungsten carbide" },
  { label: "Cutter Blade", value: "Replaceable — free spare included" },
  { label: "Classification", value: "Non-lethal · No concealed-carry license needed" },
];

// The four training pillars taught around the tool.
const trainingModes = [
  {
    title: "Subdue",
    body: "Control, move, and drop an aggressor by exploiting pressure points — end the threat without escalating it.",
  },
  {
    title: "Rescue",
    body: "Emergency life-saving skills: glass breaching, seatbelt cutting, and bleeding control when seconds decide the outcome.",
  },
  {
    title: "Escape",
    body: "Break free from grabs, holds, and threatening situations — create distance and get to safety.",
  },
  {
    title: "Strike",
    body: "Offensive techniques and combinations that turn the tool into a genuine force multiplier.",
  },
];

const notables = [
  "Phil Collins",
  "Gary Vaynerchuk",
  "Steve Harvey",
  "Ice-T",
  "Shemar Moore",
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
                TheSelfDefender® Keychain 3.0
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                The All-in-One
                <br />
                <span className="text-accent-blue-light">Survival Tool.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl font-body">
                The most versatile non-lethal survival tool on the market —
                invented by Franck Pala and protected by three patents.
                Self-defense striking, glass breaking, seatbelt cutting, and
                bleeding control, all on your keychain.
              </p>
              <div className="hero-animate hero-animate-2 flex flex-wrap gap-2 mb-9">
                {["3 Patents", "Non-Lethal", "No CCW License Needed", "Fortune Favors the Prepared"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-4 py-2 bg-accent-blue/15 border border-accent-blue/40 rounded-full text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={links.selfDefender}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-white hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
                >
                  Get It — $59.99 &rarr;
                </a>
                <span className="text-text-muted text-xs uppercase tracking-[2px] font-body">
                  Direct from the official store
                </span>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Overview video */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Meet the Tool
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white">
                One Tool, Every Emergency
              </h2>
            </div>
            <div className="animate-on-scroll rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/selfdefender_overview_poster.jpg"
                className="w-full bg-black"
                src="/videos/selfdefender_overview.mp4#t=0.1"
              />
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Six functions */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Six Functions, Zero Bulk
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Everything It Does
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {functions.map((f) => (
                <div
                  key={f.title}
                  className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="font-heading text-xl font-bold uppercase mt-3 mb-3 text-white">
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

        {/* Specs + inventor */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Specs */}
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  The Hardware
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-8 leading-tight">
                  Built Like It Matters
                </h2>
                <div className="rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 overflow-hidden">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-4 px-5 py-4 border-b border-white/5 last:border-b-0"
                    >
                      <span className="text-text-muted text-xs uppercase tracking-[2px] font-body mt-0.5 flex-shrink-0">
                        {s.label}
                      </span>
                      <span className="text-white text-sm lg:text-[15px] font-body text-right">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-text-muted text-xs font-body mt-4">
                  Battle-tested in real-world situations. Check local
                  regulations before carrying any self-defense tool.
                </p>
              </div>

              {/* Inventor + notables */}
              <div className="animate-on-scroll">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  The Inventor
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6 leading-tight">
                  Designed by a Working Protector
                </h2>
                <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-8">
                  <p>
                    TheSelfDefender wasn&apos;t drawn up in a marketing
                    meeting. It was engineered by Franck Pala — former
                    professional fighter, elite executive protection
                    specialist, and defensive-tactics instructor with 20+
                    years in the field — to be the tool he wished every client
                    carried.
                  </p>
                  <p>
                    Along the way it has found its way into some famous
                    hands — {notables.slice(0, -1).join(", ")}, and{" "}
                    {notables[notables.length - 1]} among them.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {notables.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white text-xs uppercase tracking-[2px] font-bold font-body"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <a
                  href={routes.about}
                  className="inline-block mt-8 text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
                >
                  Meet Franck &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Watch it work — YouTube */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Watch It Work
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                See TheSelfDefender in Action
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 stagger-children">
              <div className="animate-on-scroll rounded-xl overflow-hidden border border-accent-blue/30 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/IdX7JvGPiTw"
                  title="TheSelfDefender — official video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
              <div className="animate-on-scroll rounded-xl overflow-hidden border border-accent-blue/30 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/NXhSvtmOpE0"
                  title="TheSelfDefender — demonstration"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Training modes */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Tool Is Half the Equation
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                Train the Four Skills
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
                TheSelfDefender comes with a training methodology. Four
                pillars, taught by Franck and his partner instructors.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
              {trainingModes.map((m, i) => (
                <div
                  key={m.title}
                  className="animate-on-scroll rounded-xl border border-accent-blue/20 bg-bg-steel-card p-6 sm:p-7 hover:border-accent-blue-light/60 hover:shadow-[0_0_30px_rgba(46,114,184,0.2)] transition-all duration-300"
                >
                  <span className="font-heading text-3xl font-bold text-accent-blue-light/50">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase text-white mt-2 mb-2.5">
                    {m.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted text-sm mt-10 font-body animate-on-scroll">
              Want the skills to go with the tool?{" "}
              <a href={routes.training} className="text-accent-blue-light hover:text-white transition-colors">
                Explore training with Franck &rarr;
              </a>
            </p>
          </div>
        </section>

        <RedDivider />

        {/* Real-world demo */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                See It In Action
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white">
                The Tool, In the Real World
              </h2>
            </div>
            <div className="animate-on-scroll rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/selfdefender_demo_poster.jpg"
                className="w-full aspect-video bg-black"
                src="/videos/selfdefender_demo.mp4#t=0.1"
              />
            </div>
          </div>
        </section>

        <RedDivider />

        {/* The fork cross-link */}
        <section className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Also From Franck&apos;s Lab
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-6">
              Anything Can Be a Tool
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body mb-8">
              The same inventive mind turned an everyday fork into a patented,
              legal-to-carry self-defense tool — the new FranckTheSolution Fork. Awareness,
              leverage, and decisive action beat brute force every time.
            </p>
            <a
              href={routes.ftsFork}
              className="inline-flex items-center justify-center px-9 py-4 border border-accent-blue-light/50 text-accent-blue-light text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 min-h-[52px]"
            >
              Meet the FranckTheSolution Fork &rarr;
            </a>
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
              TheSelfDefender® Keychain 3.0 —{" "}
              <span className="text-white font-bold">$59.99</span>, with a free
              replacement cutter blade included. Order direct from the
              official store.
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
