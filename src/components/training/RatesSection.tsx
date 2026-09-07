import { routes } from "@/lib/links";

const sessions = [
  {
    name: "CCW License Permit",
    detail: "2 hrs - private or semi-private",
    price: "$200",
    note: "Includes certification",
  },
  {
    name: "1-on-1 Private",
    detail: "1 hr block",
    price: "$180",
  },
  {
    name: "1-on-1 Private",
    detail: "2 hr block",
    price: "$300",
  },
];

const packages = [
  { hours: "1 hr", per: "a week", price: "$180" },
  { hours: "2 hrs", per: "a week", price: "$350" },
  { hours: "3 hrs", per: "a week", price: "$460" },
  { hours: "4 hrs", per: "a week", price: "$550" },
];

const camps = [
  {
    name: "2-Day Weekend Camp",
    price: "$1,999",
    body: "An intensive weekend, private or semi-private, with your training tailored to your needs.",
  },
  {
    name: "7-Day Camp",
    price: "$3,599",
    body: "The full immersion. A week of private or semi-private training built around your goals.",
  },
];

const campIncludes = [
  "Certification on completion",
  "Everything included except evening meals and flights for out-of-state attendees",
  "Training tailored to your needs and level",
  "Bookable year-round, subject to instructor and calendar availability",
  "Run private or semi-private depending on the number of attendees",
];

const campBring = [
  "Your own gear",
  "A belt and pants with belt loops",
  "Holster for a Glock 19 / 17",
];

export default function RatesSection() {
  return (
    <section
      id="rates"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
      style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-accent-blue/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Rates &amp; Packages
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            Train on Your Terms
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Private and semi-private rates, monthly blocks, and full immersion
            camps - all taught directly by Franck.
          </p>
        </div>

        {/* Sessions */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-heading text-xl font-bold uppercase text-white mb-5 text-center sm:text-left animate-on-scroll">
            Single Sessions
          </h3>
          <div className="grid md:grid-cols-3 gap-5 stagger-children">
            {sessions.map((s) => (
              <div
                key={`${s.name}-${s.detail}`}
                className="animate-on-scroll flex flex-col rounded-xl border border-accent-blue/20 bg-bg-steel-card/60 p-6 sm:p-7 hover:border-accent-blue-light/50 transition-all duration-300"
              >
                <p className="font-heading text-lg lg:text-xl font-bold uppercase text-white leading-tight">
                  {s.name}
                </p>
                <p className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body mt-2">
                  {s.detail}
                </p>
                <p className="font-heading text-4xl font-bold text-white mt-5">
                  {s.price}
                </p>
                {s.note && (
                  <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body mt-2">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Monthly packages */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5 animate-on-scroll">
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              Monthly Packages
            </h3>
            <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body">
              Hours do not roll over to the next month
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {packages.map((p) => (
              <div
                key={p.hours}
                className="animate-on-scroll rounded-xl border border-accent-blue/20 bg-bg-steel-card/60 p-5 sm:p-6 text-center hover:border-accent-blue-light/50 hover:bg-accent-blue/5 transition-all duration-300"
              >
                <p className="font-heading text-2xl font-bold uppercase text-white leading-none">
                  {p.hours}
                </p>
                <p className="text-accent-blue-light text-[11px] uppercase tracking-[2px] font-bold font-body mt-1.5">
                  {p.per}
                </p>
                <p className="font-heading text-3xl font-bold text-white mt-4">
                  {p.price}
                </p>
                <p className="text-text-muted text-[10px] uppercase tracking-[1.5px] font-body mt-1">
                  per month
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Camps */}
        <div className="animate-on-scroll rounded-2xl border border-accent-blue/25 bg-bg-steel-card/40 p-6 sm:p-9 lg:p-10">
          <div className="text-center mb-8">
            <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
              Full Immersion
            </p>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white">
              Training Camps
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-9">
            {camps.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-accent-blue/25 bg-black/30 p-6 sm:p-7 flex flex-col"
              >
                <p className="font-heading text-xl lg:text-2xl font-bold uppercase text-white leading-tight">
                  {c.name}
                </p>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-accent-blue-light mt-4">
                  {c.price}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed font-body mt-4 flex-1">
                  {c.body}
                </p>
                <span className="inline-flex items-center self-start gap-2 mt-5 px-3.5 py-1.5 rounded-full bg-accent-blue/15 border border-accent-blue/40 text-accent-blue-light text-[10px] uppercase tracking-[2px] font-bold font-body">
                  Certification Included
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-4 font-body">
                What&apos;s Included
              </p>
              <ul className="space-y-3">
                {campIncludes.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-accent-blue-light flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </span>
                    <span className="text-text-secondary text-sm font-body leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-4 font-body">
                What to Bring
              </p>
              <ul className="space-y-3">
                {campBring.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-accent-blue-light flex-shrink-0 mt-0.5 text-sm">
                      ▸
                    </span>
                    <span className="text-text-secondary text-sm font-body leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href={routes.contact}
            className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_28px_rgba(46,114,184,0.55)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
          >
            Book Your Training &rarr;
          </a>
          <p className="text-text-muted text-xs font-body mt-4">
            Tell us your goals and availability and we will build the right
            program for you.
          </p>
        </div>
      </div>
    </section>
  );
}
