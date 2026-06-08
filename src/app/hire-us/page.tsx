import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import RedDivider from "@/components/RedDivider";
import EPStats from "@/components/hire-us/EPStats";
import EPImageMarquee from "@/components/hire-us/EPImageMarquee";

const PAGE_TITLE = "Executive Protection & Armed Driving | eProtection VIP";
const PAGE_DESCRIPTION =
  "Discreet, professional protection for executives, athletes, entertainers, and high-net-worth families. Licensed. Insured. Tactical medic trained. Led by Franck Pala, 25+ years of real-world protection.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Franck Pala protecting a client, eProtection VIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const CONTACT_EMAIL = "franck@eprotectionvip.com";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=eProtection%20VIP%20Inquiry`;

const services = [
  {
    title: "Executive Protection",
    image: "/images/01_vip_escort_red_carpet.png",
    body:
      "Close protection details for principals who can't afford to be unprepared. One agent or a full team, embedded into your day from arrival to departure, completely unobtrusive until the moment you need them.",
  },
  {
    title: "Armed Secure Transport",
    image: "/images/02_suv_motorcade_arrival.png",
    body:
      "Trained protective drivers and armored or low-profile vehicles. Route planning, counter-surveillance, and the discipline to keep you exactly on schedule, no matter what the city throws at us.",
  },
  {
    title: "Advance Work & Site Surveys",
    image: "/images/03_hotel_lobby_advance.png",
    body:
      "Every venue, restaurant, residence, and route is walked, photographed, and threat-assessed before you arrive. The work you never see is the reason nothing happens.",
  },
  {
    title: "Travel & Event Coverage",
    image: "/images/04_nightclub_vip_section.png",
    body:
      "International travel, premieres, galas, fight nights, ringside, courtside, on-set. Coordinated with hotel and venue security, integrated with your existing team if you have one.",
  },
  {
    title: "Residential Security Detail",
    image: "/images/06_boardroom_protection.jpg",
    body:
      "Standing details for primary residences, short-term protection during heightened threat windows, and discreet overnight coverage when needed. Professionals only, no rotating contractors.",
  },
  {
    title: "Family & Estate Protection",
    image: "/images/17_walking_downtown_miami.png",
    body:
      "Spouse and child protection at school, errands, and travel. The agents we put on your family detail go through the same selection as the ones we put on you.",
  },
];

const credentials = [
  { label: "Tactical Medic Trained", body: "Every agent on detail is trained to keep you alive long enough to reach a hospital." },
  { label: "Licensed", body: "Florida Class A and B licensed under TactOps USA LLC. License #A1900001, B1900003." },
  { label: "Fully Insured", body: "Commercial liability and professional indemnity coverage on every contract." },
  { label: "25+ Years Operational", body: "Led by Franck Pala. Special Units Instructor Contractor, professional boxer, working EP across continents." },
  { label: "Active Fugitive Apprehensions Agent", body: "Franck remains an actively-deployed fugitive apprehensions agent. The threat detection, tracking, and force-application skills that work in the field translate directly to the work we do for you." },
];

const audience = [
  "Executives & C-suite",
  "Professional athletes",
  "Entertainers & artists",
  "High-net-worth families",
  "Public-facing founders",
  "Visiting dignitaries",
];

const process = [
  {
    step: "01",
    title: "Inquire",
    image: "/images/06_boardroom_protection.jpg",
    body:
      "Send a brief message with the nature of the protection you need and the dates. Conversations are held in strict confidence.",
  },
  {
    step: "02",
    title: "Vet & Scope",
    image: "/images/03_hotel_lobby_advance.png",
    body:
      "We perform a threat and logistics assessment, define the team composition, vehicles, and tactics required, and present a scoped proposal.",
  },
  {
    step: "03",
    title: "Deploy",
    image: "/images/02_suv_motorcade_arrival.png",
    body:
      "Agents in position before the first movement. Mission-focused, low-profile, and ready for anything the day requires.",
  },
];

export default function HireUsPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary overflow-hidden">
            <img
              src="/images/02_suv_motorcade_arrival.png"
              alt=""
              className="ep-ken-burns absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15 md:from-black/85 md:via-black/40 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-32 lg:pb-12 w-full">
            <div className="max-w-3xl">
              <div className="hero-animate hero-animate-1 flex items-center gap-3 mb-6">
                <img
                  src="/eprotectionvip_logo.png"
                  alt="eProtection VIP"
                  className="h-12 w-12 object-contain"
                />
                <p className="text-accent-gold text-xs sm:text-sm uppercase tracking-[4px] font-bold font-body">
                  eProtection VIP, by Franck Pala
                </p>
              </div>

              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-6 text-white">
                Protection
                <br />
                That Goes
                <br />
                Where You Go.
              </h1>

              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 font-body">
                Executive protection and armed secure transport for the people
                who cannot afford to be unprepared. Discreet. Professional.
                Built around your schedule, your risk profile, and your life,
                not ours.
              </p>

              <div className="hero-animate hero-animate-2 flex flex-wrap items-center gap-2 mb-10">
                {["Tactical Medic Trained", "Licensed", "Fully Insured", "25+ Years", "Active Fugitive Apprehensions Agent"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-accent-gold/40 rounded-full text-accent-gold text-[11px] uppercase tracking-[2px] font-bold font-body"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={CONTACT_MAILTO}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]"
                >
                  Request a Consultation
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

        <EPStats />

        <RedDivider />

        {/* THE STANDARD */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Standard
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                We Take This Job As Seriously As Your Life Depends On It.
              </h2>
              <p className="text-text-secondary text-lg lg:text-xl leading-relaxed font-body">
                Because it does. Every agent on an eProtection VIP detail
                accepts a single, non-negotiable principle: your safety comes
                before ours. That is the bar we hire to, train to, and operate
                to, every single day.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* SERVICES */}
        <section id="services" className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Services
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                What We Provide
              </h2>
              <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto font-body">
                Full-spectrum protective services, scaled to a single principal
                or a full executive household.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className="animate-on-scroll group bg-bg-card rounded-lg overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/5 hover:border-accent-gold/40"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-black/60 backdrop-blur border border-accent-gold/40 rounded-full text-accent-gold text-[10px] uppercase tracking-[3px] font-bold font-body">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 border-l-2 border-accent-gold -mt-px">
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

        {/* THE TEAM */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                  The Team
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6 leading-tight">
                  Selected. Trained. Tested.
                </h2>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-6 font-body">
                  Franck personally selects every agent on our roster. They are
                  not part-time operators or weekend hobbyists. They are
                  professionals who have demonstrated, under pressure, that
                  they belong in the room with your family.
                </p>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
                  Each agent is tactical-medic trained, fitness-tested,
                  firearm-certified, and rehearsed in the specific tactics our
                  details require, advance work, close protection, vehicle
                  movement, and crisis response. The standard does not bend.
                </p>

                <ul className="space-y-3">
                  {[
                    "Quietly capable, never theatrical",
                    "Discreet around your staff, your guests, and your children",
                    "Briefed on your preferences and the people in your life",
                    "Trusted to keep what they see and hear in the room",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-white font-body">
                      <span className="text-accent-gold flex-shrink-0 mt-1">▸</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-on-scroll order-1 lg:order-2">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-card relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src="/images/franck_instructor_portrait.jpg"
                    alt="Franck Pala, Founder, eProtection VIP"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <p className="text-text-muted text-xs uppercase tracking-[3px] mt-3 font-body text-center lg:text-left">
                  Franck Pala, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        <EPImageMarquee />

        <RedDivider />

        {/* CREDENTIALS */}
        <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Bar
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
                Positioned to Be the Best in the U.S.
              </h2>
              <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto font-body">
                Credentials are the floor of this industry, not the ceiling.
                Here is the floor we operate above.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 stagger-children">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className={`animate-on-scroll bg-bg-card/60 backdrop-blur border border-accent-gold/30 rounded-lg p-6 sm:p-8 ${
                    i === credentials.length - 1 && credentials.length % 2 === 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
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
              src="/images/05_private_jet_security.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Who We Serve
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                Built For People Who Cannot Afford a Mistake.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-on-scroll">
              {audience.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-white text-sm uppercase tracking-[2px] font-bold font-body"
                >
                  {a}
                </span>
              ))}
            </div>

            <p className="text-text-secondary text-base lg:text-lg leading-relaxed text-center mt-10 max-w-3xl mx-auto font-body animate-on-scroll">
              If your name, your family, or your business creates exposure,
              eProtection VIP exists to absorb that risk for you, quietly,
              completely, on your schedule.
            </p>
          </div>
        </section>

        <RedDivider />

        {/* PROCESS */}
        <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Process
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                How Engagements Begin
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-children">
              {process.map((p) => (
                <article
                  key={p.step}
                  className="animate-on-scroll group bg-bg-card rounded-lg overflow-hidden border-t-2 border-accent-red hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover object-center opacity-70 transition-all duration-[1000ms] group-hover:opacity-95 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    <p className="absolute bottom-3 left-6 font-heading text-6xl text-accent-red font-bold leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
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
              src="/images/06_boardroom_protection.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <div className="animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Begin
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                Discuss Your Protection Needs
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-body">
                One message. One conversation. Held in strict confidence.
                Whether you need a one-off detail or a standing engagement,
                we will scope it precisely and quote it transparently.
              </p>
            </div>

            <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_30px_rgba(196,30,30,0.6)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]"
              >
                Email Franck Directly
              </a>
              <a
                href="https://eprotectionvip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 border border-accent-gold text-accent-gold text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-gold/10 transition-all duration-300 text-center min-h-[52px]"
              >
                Visit eProtectionVIP.com
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
