import { routes } from "@/lib/links";

const tickerItems = [
  "20+ Years Executive Protection",
  "Inventor — The Self-Defender (3 Patents)",
  "Former Professional Boxer",
  "Active Fugitive Apprehension Agent — FL",
  "International Law Enforcement & Special Ops",
  "Defensive Tactics & Improvised Weapons",
];

export default function BrandHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden noise-bg">
      {/* Background portrait */}
      <div className="absolute inset-0 bg-bg-primary">
        <img
          src="/images/franck_instructor_portrait.jpg"
          alt=""
          className="ep-ken-burns absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-60 md:opacity-70 md:object-[70%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-24 sm:pt-44 lg:pt-32 w-full">
        <div className="max-w-3xl">
          <p className="hero-animate hero-animate-1 text-accent-gold text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
            Franck Pala — FrancktheSolution
          </p>

          <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.92] text-white mb-6">
            Protect.
            <br />
            Train.
            <br />
            <span className="text-accent-red">Be the Solution.</span>
          </h1>

          <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-9 max-w-2xl font-body">
            Over two decades protecting executives across the globe. A former
            professional boxer, defensive-tactics innovator, inventor, and
            still-active fugitive apprehension agent. Whether you need
            protection, want to learn it, or are looking for the tools — this
            is where it starts.
          </p>

          <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={routes.workshops}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_24px_rgba(196,30,30,0.45)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
            >
              Train With Franck
            </a>
            <a
              href={routes.hireUs}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-accent-gold/60 text-accent-gold text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-gold hover:text-black transition-all duration-300 min-h-[52px]"
            >
              Hire Protection
            </a>
          </div>
        </div>
      </div>

      {/* Credential ticker */}
      <div
        className="ep-marquee absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="ep-marquee-track flex gap-10 items-center"
          style={{ ["--marquee-duration" as string]: "40s" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="shrink-0 text-text-secondary text-xs uppercase tracking-[3px] font-body flex items-center gap-10"
            >
              {item}
              <span className="text-accent-red">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
