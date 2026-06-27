import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import RedDivider from "@/components/RedDivider";

const PAGE_TITLE = "Investigative Services | FrancktheSolution";
const PAGE_DESCRIPTION =
  "Licensed, insured private investigations led by Franck Pala — an active fugitive apprehension agent with 20+ years in the field. Surveillance, due diligence, skip tracing, corporate and fraud investigations, asset searches, and more. Discreet, court-ready results.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/investigations" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Investigative Services by Franck Pala" }],
  },
  twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

const CONTACT_EMAIL = "franck@eprotectionvip.com";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Investigative%20Services%20Inquiry`;

const stats = [
  { stat: "20+", label: "Years in the Field" },
  { stat: "Active", label: "Fugitive Apprehension Agent, FL" },
  { stat: "100%", label: "Confidential & Discreet" },
  { stat: "Court", label: "Ready Evidence & Reporting" },
];

const services = [
  {
    title: "Surveillance & Covert Operations",
    image: "/images/04_nightclub_vip_section.png",
    imagePos: "object-[center_25%]",
    body: "Discreet physical and mobile surveillance by operators trained to stay invisible. Documented, time-stamped, and captured to a standard that holds up when it counts.",
  },
  {
    title: "Background Checks & Due Diligence",
    image: "/images/06_boardroom_protection.jpg",
    imagePos: "object-center",
    body: "Know exactly who you're dealing with before you sign, hire, partner, or invest. Identity, history, affiliations, and red flags — verified, not assumed.",
  },
  {
    title: "Skip Tracing & Locating",
    image: "/images/19_emergency_extraction.png",
    imagePos: "object-[center_18%]",
    body: "Finding people is what Franck does. As an active fugitive apprehension agent, he brings real tracking, source work, and field expertise to locating subjects others can't.",
  },
  {
    title: "Corporate & Fraud Investigations",
    image: "/images/10_corporate_hr_training.png",
    imagePos: "object-[center_25%]",
    body: "Internal theft, fraud, IP loss, and workplace misconduct. Quiet, methodical fact-finding that protects your business and stands up to legal scrutiny.",
  },
  {
    title: "Asset & Financial Searches",
    image: "/images/05_private_jet_security.jpg",
    imagePos: "object-center",
    body: "Locate and document assets, businesses, and financial interests for litigation, collections, divorce, or due diligence — within the bounds of the law.",
  },
  {
    title: "Domestic & Personal Investigations",
    image: "/images/17_walking_downtown_miami.png",
    imagePos: "object-[center_18%]",
    body: "Sensitive personal matters handled with discretion and zero judgment. Infidelity, child safety concerns, and family disputes documented clearly and confidentially.",
  },
];

const credentials = [
  { label: "Licensed & Insured", body: "Investigations conducted under licensed, insured operations — every engagement handled within the law and to a professional standard." },
  { label: "Active Fugitive Apprehension Agent", body: "Franck remains an actively-deployed fugitive apprehension agent in Florida. The tracking, source development, and field skills that find fugitives are the same ones we put to work for you." },
  { label: "20+ Years in the Field", body: "Two decades of real-world protection, surveillance, and field operations across multiple countries — alongside law enforcement and as a contractor for special units." },
  { label: "Confidential by Default", body: "Your case never becomes a story. Tight need-to-know handling, secure communication, and discretion around everyone in your life." },
];

const serve = [
  "Attorneys & law firms",
  "Businesses & employers",
  "Insurers & adjusters",
  "High-net-worth individuals",
  "Families & spouses",
  "Property & asset owners",
];

const process = [
  {
    step: "01",
    title: "Confidential Intake",
    image: "/images/06_boardroom_protection.jpg",
    imagePos: "object-center",
    body: "Tell us what you need to know. We listen, define the objective, and scope exactly what can be done — held in strict confidence from the first word.",
  },
  {
    step: "02",
    title: "Investigate",
    image: "/images/03_hotel_lobby_advance.png",
    imagePos: "object-[center_25%]",
    body: "Surveillance, research, source work, and field operations executed quietly and lawfully, with everything documented as we go.",
  },
  {
    step: "03",
    title: "Report",
    image: "/images/10_corporate_hr_training.png",
    imagePos: "object-[center_25%]",
    body: "You receive a clear, organized report with the evidence — photos, video, records, and findings — ready for your decision, your attorney, or the court.",
  },
];

export default function InvestigationsPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary overflow-hidden">
            <img
              src="/images/03_hotel_lobby_advance.png"
              alt=""
              className="ep-ken-burns absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-32 lg:pb-12 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-5 font-body">
                Investigative Services, by Franck Pala
              </p>

              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-4 text-white">
                Know.
                <br />
                Don&apos;t
                <br />
                Guess.
              </h1>

              <p className="hero-animate hero-animate-2 text-white/95 text-base sm:text-lg lg:text-xl uppercase tracking-[3px] font-bold mb-6 font-body">
                Licensed Private Investigations.
                <span className="text-accent-blue-light"> Real Answers.</span>
              </p>

              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 font-body">
                When the truth matters, guessing isn&apos;t an option. Led by an
                active fugitive apprehension agent with 20+ years in the field,
                we deliver discreet surveillance, deep due diligence, and
                court-ready evidence — quietly and lawfully.
              </p>

              <div className="hero-animate hero-animate-2 flex flex-wrap items-center gap-2 mb-10">
                {["Licensed & Insured", "Active Fugitive Apprehension Agent", "20+ Years in the Field", "100% Confidential"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-accent-blue/40 rounded-full text-accent-blue-light text-[11px] uppercase tracking-[2px] font-bold font-body"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={CONTACT_MAILTO}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_20px_rgba(46,114,184,0.4)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]"
                >
                  Request a Confidential Consult
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 border border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-center min-h-[52px]"
                >
                  See Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section
          className="py-12 sm:py-16 lg:py-20 relative border-y border-accent-blue/20"
          style={{ background: "linear-gradient(90deg, #0A0E14 0%, #101A28 50%, #0A0E14 100%)" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:divide-x lg:divide-white/10">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center ${i > 0 ? "lg:pl-6" : ""}`}>
                  <p className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-none">
                    {s.stat}
                  </p>
                  <p className="text-text-secondary text-[11px] sm:text-xs uppercase tracking-[2px] mt-3 font-body leading-tight max-w-[180px] mx-auto">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* THE STANDARD */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              The Standard
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
              Facts You Can Act On — and Defend.
            </h2>
            <p className="text-text-secondary text-lg lg:text-xl leading-relaxed font-body">
              Anyone can hand you a hunch. We deliver documented, lawful,
              court-ready evidence — gathered with the same discipline Franck
              brings to protection and fugitive work. No shortcuts, no
              exposure, no surprises.
            </p>
          </div>
        </section>

        <RedDivider />

        {/* SERVICES */}
        <section id="services" className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Services
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                What We Investigate
              </h2>
              <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto font-body">
                Full-spectrum private investigations for attorneys, businesses,
                and individuals who need certainty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className="animate-on-scroll group bg-bg-card rounded-lg overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/5 hover:border-accent-blue/40"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className={`w-full h-full object-cover ${s.imagePos} transition-transform duration-[1200ms] group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-black/60 backdrop-blur border border-accent-blue/40 rounded-full text-accent-blue-light text-[10px] uppercase tracking-[3px] font-bold font-body">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 border-l-2 border-accent-blue -mt-px">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                      {s.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* WHY FRANCK */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll order-1 lg:order-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-card relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src="/images/franck_instructor_portrait.jpg"
                    alt="Franck Pala — licensed investigator and fugitive apprehension agent"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <p className="text-text-muted text-xs uppercase tracking-[3px] mt-3 font-body text-center lg:text-left">
                  Franck Pala, Lead Investigator
                </p>
              </div>

              <div className="animate-on-scroll order-2 lg:order-2">
                <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  Why Franck
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6 leading-tight">
                  The Man Who Finds What Others Miss.
                </h2>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-6 font-body">
                  Most investigators read about the work. Franck lives it. As an
                  active fugitive apprehension agent, he tracks and locates
                  people for a living — and brings that same instinct, source
                  network, and field discipline to every case.
                </p>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
                  Twenty-plus years protecting principals, working alongside law
                  enforcement and as a contractor for special units, taught him
                  how to observe without being seen, document without being
                  noticed, and deliver the truth without leaving you exposed.
                </p>

                <ul className="space-y-3">
                  {[
                    "Lawful, court-ready evidence and reporting",
                    "Total confidentiality — your case stays yours",
                    "Real field tracking, not just database lookups",
                    "Calm under pressure, precise under scrutiny",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-white font-body">
                      <span className="text-accent-blue-light flex-shrink-0 mt-1">▸</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* CREDENTIALS */}
        <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Bar
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                Discreet. Lawful. Relentless.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 stagger-children">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="animate-on-scroll bg-bg-card/60 backdrop-blur border border-accent-blue/30 rounded-lg p-6 sm:p-8"
                >
                  <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
                    {c.label}
                  </p>
                  <p className="text-white text-base lg:text-lg leading-relaxed font-body">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* WHO WE SERVE */}
        <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/10_corporate_hr_training.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-20"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Who We Serve
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                For Anyone Who Needs the Truth.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-on-scroll">
              {serve.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-white text-sm uppercase tracking-[2px] font-bold font-body"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* PROCESS */}
        <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Process
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                How a Case Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-children">
              {process.map((p) => (
                <article
                  key={p.step}
                  className="animate-on-scroll group bg-bg-card rounded-lg overflow-hidden border-t-2 border-accent-blue hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className={`w-full h-full object-cover ${p.imagePos} opacity-70 transition-all duration-[1000ms] group-hover:opacity-95 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    <p className="absolute bottom-3 left-6 font-heading text-6xl text-accent-blue-light font-bold leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                      {p.step}
                    </p>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-white">
                      {p.title}
                    </h3>
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* CONTACT CTA */}
        <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/03_hotel_lobby_advance.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/85 to-black/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <div className="animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Begin
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                Tell Us What You Need to Know
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-body">
                One message, held in strict confidence. We&apos;ll tell you
                honestly what&apos;s possible, scope it clearly, and get you the
                answers you need.
              </p>
            </div>

            <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_30px_rgba(46,114,184,0.6)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]"
              >
                Request a Confidential Consult
              </a>
              <a
                href="/hire-us"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 border border-accent-blue text-accent-blue-light text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue/10 transition-all duration-300 text-center min-h-[52px]"
              >
                See Executive Protection
              </a>
            </div>

            <p className="text-text-muted text-sm mt-8 font-body animate-on-scroll">
              <a href={CONTACT_MAILTO} className="hover:text-white transition-colors">
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
