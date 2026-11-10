import {
  ApplyEpsButton,
  IMMERSION_OPTION,
  primaryBtn,
} from "@/components/female-eps/EpsCtas";
import { routes } from "@/lib/links";

// The 1-month full immersion: the complete executive protection curriculum,
// ending in the TACT OPS "Executive Protection Agent Operator" certification.
// Curriculum mirrors the certificate. Enrollment is by application.
const PRICE = "$8,999";

const curriculum = [
  {
    title: "Mind & Body",
    items: [
      "Awareness and threat detection",
      "Cardio, conditioning and endurance",
      "Strength, resistance and resilience",
      "Agility and mobility",
    ],
  },
  {
    title: "Combat & Weapons",
    items: [
      "CFM - Circular Footwork Mechanics",
      "Tactical training",
      "Close combat and defensive tactics",
      "Floor defense - ground control and survival",
      "Firearms - safety, handling, shooting and operational use",
      "Weaponry training and disarming, armed and unarmed",
      "Improvised weapons and deadly strategies",
    ],
  },
  {
    title: "Vehicles, Threats & Medicine",
    items: [
      "VIP driving and extraction - evasive, defensive and emergency",
      "Extraction procedures",
      "Vehicle ambush - recognition, reaction and extraction",
      "Carjacking defense - prevention and escape",
      "Road rage tactics and personal defense",
      "Home invasion defense and response",
      "Tactical medicine (Tact Medic / TECC)",
      "Use of force and lethal force in real-life scenarios",
    ],
  },
  {
    title: "Protective Operations",
    items: [
      "Operational planning",
      "Routing - secure movement and contingencies",
      "Mapping - reconnaissance and operational use",
      "Gathering intelligence - situational and operational",
      "Reporting - accurate and actionable",
      "Communications - team, client and crisis",
      "Ethics and professional conduct",
    ],
  },
];

const moduleCount = curriculum.reduce((n, g) => n + g.items.length, 0);

const facts = [
  { value: "1", unit: "Month", detail: "Full immersion" },
  { value: String(moduleCount), unit: "Modules", detail: "The full curriculum" },
  { value: "EP", unit: "Agent Operator", detail: "TACT OPS certified" },
];

const includes = [
  "A full month of hands-on, high-impact training directly with Franck Pala",
  `The complete executive protection curriculum - all ${moduleCount} modules`,
  "Executive Protection Agent Operator certification, issued by the TACT OPS Executive Protection Training Division, State of Florida",
  "Pressure-tested in realistic, real-life scenarios - not classroom theory",
];

function Facts() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {facts.map((f) => (
        <div
          key={f.unit}
          className="rounded-xl border border-accent-gold/25 bg-black/30 px-3 py-4 sm:p-5 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl font-bold text-white leading-none">
            {f.value}
          </p>
          <p className="text-accent-gold text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold font-body mt-1.5">
            {f.unit}
          </p>
          <p className="text-text-muted text-[10px] sm:text-xs font-body mt-1 leading-snug">
            {f.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function Price() {
  return (
    <div className="flex items-end gap-3">
      <p className="font-heading text-5xl lg:text-6xl font-bold text-white leading-none">
        {PRICE}
      </p>
      <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body pb-1.5">
        Full curriculum
        <br />+ certification
      </p>
    </div>
  );
}

function Apply() {
  return (
    <div className="flex flex-col gap-3">
      <ApplyEpsButton
        label="Apply for the 1-Month Program"
        className={`${primaryBtn} w-full sm:w-auto self-start`}
        defaultProgram={IMMERSION_OPTION}
      />
      <p className="text-text-muted text-xs font-body leading-relaxed">
        By application only. Class sizes are small - apply and our team
        follows up with dates and logistics.
      </p>
    </div>
  );
}

function GraduateCard() {
  return (
    <a
      href={routes.femaleEps}
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-3 pr-5 hover:border-accent-blue-light/50 transition-colors"
    >
      <img
        src="/images/emma/emma_certified_with_franck.jpg"
        alt="Emma holding her Executive Protection Agent Operator certificate next to Franck Pala"
        loading="lazy"
        className="w-16 h-20 rounded-lg object-cover object-[center_30%] flex-shrink-0"
      />
      <div>
        <p className="text-accent-gold text-[10px] uppercase tracking-[2px] font-bold font-body">
          Recent Graduate
        </p>
        <p className="font-heading text-lg font-bold uppercase text-white leading-tight mt-0.5">
          Emma - Certified EP Agent Operator
        </p>
        <p className="text-accent-blue-light text-xs uppercase tracking-[1.5px] font-bold font-body mt-1 group-hover:text-white transition-colors">
          Meet our female EPS &rarr;
        </p>
      </div>
    </a>
  );
}

export default function EPImmersionProgram({
  compact = false,
}: {
  /** Compact mode drops the full curriculum - used on other pages. */
  compact?: boolean;
}) {
  return (
    <section
      id="ep-immersion"
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden noise-bg scroll-mt-[112px]"
      style={{
        background:
          "linear-gradient(180deg, #0C1118 0%, #13161C 50%, #0C1118 100%)",
      }}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-accent-gold/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {compact ? (
          <div className="animate-on-scroll rounded-2xl border border-accent-gold/30 bg-bg-steel-card/50 p-6 sm:p-9 lg:p-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-xl overflow-hidden border border-accent-gold/40 shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
                <img
                  src="/images/emma/emma_franck_tactops.jpg"
                  alt="Emma and Franck Pala, TACT OPS instructor"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
                1-Month Full Immersion
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white leading-[1.0] mb-4">
                Executive Protection{" "}
                <span className="text-accent-blue-light">Agent Operator.</span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed font-body mb-6">
                The complete executive protection curriculum in one month of
                hard, hands-on training with Franck - firearms, VIP driving,
                close combat, tactical medicine, and protective operations -
                ending in certification.
              </p>
              <div className="mb-7">
                <Facts />
              </div>
              <div className="mb-6">
                <Price />
              </div>
              <Apply />
              <a
                href={routes.epImmersion}
                className="inline-block mt-6 text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
              >
                See the full curriculum &rarr;
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                1-Month Full Immersion &middot; Certification Course
              </p>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-white mb-5 leading-[1.0]">
                Executive Protection
                <br />
                <span className="text-accent-blue-light">Agent Operator.</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
                A 1-month intensive, hands-on, high-impact program built to
                develop the skills, mindset, and operational competence of a
                professional executive protection agent. The full curriculum,
                taught directly by Franck, ending in certification.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12 sm:mb-14 animate-on-scroll">
              <Facts />
            </div>

            {/* Curriculum */}
            <div className="mb-12 sm:mb-14">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-6 text-center animate-on-scroll">
                Training Curriculum{" "}
                <span className="text-accent-gold">(1 Month - Hard Training)</span>
              </h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 stagger-children">
                {curriculum.map((group) => (
                  <div
                    key={group.title}
                    className="animate-on-scroll rounded-xl border border-accent-blue/20 bg-bg-steel-card/60 p-6"
                  >
                    <p className="font-heading text-lg font-bold uppercase text-white mb-4 pb-3 border-b border-white/10">
                      {group.title}
                    </p>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="text-accent-gold flex-shrink-0 mt-[3px] text-[10px]">
                            ■
                          </span>
                          <span className="text-text-secondary text-sm font-body leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll */}
            <div className="animate-on-scroll rounded-2xl border border-accent-gold/35 bg-bg-steel-card/60 p-6 sm:p-9 lg:p-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center shadow-[0_0_50px_rgba(201,168,76,0.08)]">
              <div>
                <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-4 font-body">
                  What&apos;s Included
                </p>
                <ul className="space-y-3 mb-7">
                  {includes.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="text-accent-gold flex-shrink-0 mt-0.5 text-sm">
                        ✓
                      </span>
                      <span className="text-text-secondary text-sm lg:text-base font-body leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                <GraduateCard />
              </div>
              <div className="flex flex-col gap-6">
                <Price />
                <Apply />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
