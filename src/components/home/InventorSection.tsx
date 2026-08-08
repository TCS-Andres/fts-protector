import { routes } from "@/lib/links";

const inventions = [
  {
    badge: "3 Patents",
    name: "TheSelfDefender",
    tagline: "The all-in-one non-lethal survival tool",
    body: "A patented everyday-carry tool that combines self-defense striking, a glass breaker, a seatbelt cutter, and bleeding control - protected by three patents and carried worldwide.",
    image: "/images/selfdefender_overview_poster.jpg",
    href: routes.selfDefender,
    cta: "Explore TheSelfDefender",
  },
  {
    badge: "Patented",
    name: "The FranckTheSolution Fork",
    tagline: "An everyday fork, reengineered",
    body: "Franck's newest invention: a patented, legal-to-carry tool built from an everyday fork - legal anywhere because it's a fork, TSA-friendly, and never threatening.",
    image: "/images/fts_fork_poster.jpg",
    href: routes.ftsFork,
    cta: "Explore the FranckTheSolution Fork",
  },
];

export default function InventorSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative noise-bg"
      style={{ background: "linear-gradient(180deg, #0C1118 0%, #06090D 100%)" }}
    >
      {/* glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-accent-blue/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Inventor
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            Not Just a Protector -<br className="hidden sm:block" />{" "}
            <span className="text-accent-blue-light">an Inventor.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Two decades in the field didn&apos;t just make Franck a protector -
            it made him a builder of tools that keep ordinary people alive.
            Real innovations, backed by real patents.
          </p>
        </div>

        {/* Patent stat strip */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 sm:mb-16 stagger-children">
          {[
            { stat: "4", label: "Patents Total" },
            { stat: "3", label: "TheSelfDefender" },
            { stat: "1", label: "FranckTheSolution Fork" },
          ].map((s) => (
            <div
              key={s.label}
              className="animate-on-scroll text-center rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 px-3 py-5 sm:py-6"
            >
              <p className="font-heading text-4xl lg:text-5xl font-bold text-white leading-none">
                {s.stat}
              </p>
              <p className="text-text-secondary text-[10px] sm:text-[11px] uppercase tracking-[1.5px] mt-2 font-body leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Invention cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
          {inventions.map((inv) => (
            <a
              key={inv.name}
              href={inv.href}
              className="animate-on-scroll group relative flex flex-col rounded-xl overflow-hidden border border-accent-blue/20 bg-bg-steel-card hover:border-accent-blue-light/60 hover:shadow-[0_0_40px_rgba(46,114,184,0.25)] transition-all duration-300"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={inv.image}
                  alt={inv.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-steel-card via-bg-steel-card/30 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-extrabold font-body text-white bg-gradient-to-r from-accent-blue to-accent-blue-light shadow-[0_0_22px_rgba(46,114,184,0.65)] ring-1 ring-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  {inv.badge}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white leading-none">
                  {inv.name}
                </h3>
                <p className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold mt-2 mb-4 font-body">
                  {inv.tagline}
                </p>
                <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-6 font-body flex-1">
                  {inv.body}
                </p>
                <span className="text-accent-blue-light text-sm uppercase tracking-[2px] font-bold font-body group-hover:text-white transition-colors">
                  {inv.cta} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
