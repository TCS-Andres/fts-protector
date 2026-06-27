import { routes } from "@/lib/links";

const tickerItems = [
  "Elite Executive Protection",
  "Inventor — TheSelfDefender (3 Patents)",
  "Former Professional Boxer",
  "Contractor for Special Units",
  "Active Fugitive Apprehension Agent — FL",
  "Expert — Close Combat, Defensive Tactics & Improvised Weapons",
  "Deadly-Force Strategy",
];

export default function BrandHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A0E14 0%, #0C1118 45%, #101A28 100%)",
      }}
    >
      {/* Steel-blue grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,168,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,168,226,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 sm:pt-40 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
              Franck Pala — FrancktheSolution
            </p>

            <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.92] text-white mb-6">
              Protect.
              <br />
              Train.
              <br />
              <span className="text-accent-blue-light">Be the Solution.</span>
            </h1>

            <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0 font-body">
              No theory. No fluff. Only tactics that work when lives depend on
              it. For over two decades, Franck Pala has forged ordinary people
              into highly capable protectors — through real violence, real
              pressure, and real solutions. Move smarter, strike faster, and
              protect the people who count on you with absolute confidence.
            </p>

            <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={routes.workshops}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Train With Franck
              </a>
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
              >
                Hire Protection
              </a>
            </div>
          </div>

          {/* Portrait — framed, full, no zoom */}
          <div className="hero-animate hero-animate-1 order-1 lg:order-2 relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/30 via-transparent to-accent-blue/10 rounded-2xl blur-xl" />
            <div className="relative rounded-xl overflow-hidden border border-accent-blue/30 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/images/franck_instructor_portrait.jpg"
                alt="Franck Pala — executive protection specialist and instructor"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5">
                <p className="font-heading text-xl font-bold uppercase text-white leading-none">
                  Franck Pala
                </p>
                <p className="text-accent-blue-light text-[11px] uppercase tracking-[3px] font-body mt-1">
                  TactOps — The Solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credential ticker */}
      <div
        className="ep-marquee relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="ep-marquee-track flex gap-10 items-center"
          style={{ ["--marquee-duration" as string]: "44s" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="shrink-0 text-text-secondary text-xs uppercase tracking-[3px] font-body flex items-center gap-10"
            >
              {item}
              <span className="text-accent-blue-light">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
