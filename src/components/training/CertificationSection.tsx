// The three TACT OPS Protector certification tiers. Awarded by TACT OPS
// (License A & B, State of Florida) and signed by Franck Pala.
const tiers = [
  {
    name: "Protector",
    stars: 4,
    summary:
      "The foundation. You have demonstrated the skills, knowledge, and attitude of a Protector in close combat defensive tactics.",
    accent: "from-accent-blue to-accent-blue-light",
  },
  {
    name: "Expert Protector",
    stars: 5,
    summary:
      "Advanced competence across the full syllabus - weapons, firearms, tact medic, and live scenario work under pressure.",
    accent: "from-accent-blue-dark to-accent-blue",
  },
  {
    name: "Elite Protector",
    stars: 6,
    summary:
      "The highest tier. Mastery of the system and the judgment to apply it - the standard Franck holds his own operators to.",
    accent: "from-accent-gold to-[#F0DDA0]",
  },
];

const requirements = [
  "Close combat defensive tactics",
  "Improvised weapons",
  "Firearms training & strikes",
  "CFM - Circular Footwork Mechanics",
  "Use of weapons in defense & disarming",
  "Basic tact medic",
  "Life encounter situations - home invasion, road rage, carjacking",
  "Self-defense definition & rules in application",
  "Real-life scenarios & force-on-force training",
];

export default function CertificationSection() {
  return (
    <section
      id="certification"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
      style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-accent-blue/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Certification
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            Train to Be <span className="text-accent-blue-light">Certified.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Complete the TACT OPS Protector Program and you earn a formal
            certificate - issued by TACT OPS under Florida licenses A &amp; B and
            signed by Franck Pala himself. Three tiers, earned in order.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 sm:mb-16 stagger-children">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll relative flex flex-col rounded-xl border border-accent-blue/25 bg-bg-steel-card/70 p-7 sm:p-8 hover:border-accent-blue-light/60 hover:shadow-[0_0_34px_rgba(46,114,184,0.22)] transition-all duration-300"
            >
              <span className="absolute top-6 right-6 font-heading text-4xl font-bold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Seal */}
              <span
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-black font-heading font-bold text-lg shadow-[0_0_24px_rgba(46,114,184,0.4)] mb-5`}
              >
                {t.stars}★
              </span>

              <p className="text-accent-blue-light text-[11px] uppercase tracking-[3px] font-bold font-body mb-2">
                Tier {i + 1}
              </p>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white leading-none mb-3">
                {t.name}
              </h3>
              <div className="flex gap-1 mb-4" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-accent-gold text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-text-secondary text-sm lg:text-[15px] leading-relaxed font-body flex-1">
                {t.summary}
              </p>
              <p className="text-text-muted text-[11px] uppercase tracking-[2px] font-body mt-5 pt-5 border-t border-white/10">
                Close Combat Defensive Tactics
              </p>
            </div>
          ))}
        </div>

        {/* What the certificate covers */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="animate-on-scroll">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-5 leading-tight">
              What the Certificate Certifies
            </h3>
            <p className="text-text-secondary text-base leading-relaxed font-body mb-6">
              Every certificate confirms the student has successfully completed
              the required training and demonstrated the skills, knowledge, and
              attitude of a Protector - in Franck&apos;s presence, under
              pressure:
            </p>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                    ✓
                  </span>
                  <span className="text-text-secondary text-sm lg:text-base font-body leading-relaxed">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Issuer card */}
          <div className="animate-on-scroll rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 p-7 sm:p-9">
            <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-5 font-body">
              Issued By
            </p>
            <p className="font-heading text-3xl font-bold uppercase text-white leading-none mb-2">
              Tact Ops
            </p>
            <p className="text-text-secondary text-sm font-body mb-6">
              Training. Experience. Excellence.
            </p>
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-text-muted text-[11px] uppercase tracking-[2px] font-body">
                  License
                </p>
                <p className="text-white text-sm font-body mt-0.5">
                  A &amp; B - State of Florida
                </p>
              </div>
              <div>
                <p className="text-text-muted text-[11px] uppercase tracking-[2px] font-body">
                  Instructor
                </p>
                <p className="text-white text-sm font-body mt-0.5">Franck Pala</p>
              </div>
              <div>
                <p className="text-text-muted text-[11px] uppercase tracking-[2px] font-body">
                  Program
                </p>
                <p className="text-white text-sm font-body mt-0.5">
                  TACTOPS Protector Program
                </p>
              </div>
            </div>
            <p className="text-text-muted text-xs font-body mt-6 leading-relaxed">
              Certificates are awarded in accordance with the curriculum and
              standards established by TACTOPS, State of Florida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
