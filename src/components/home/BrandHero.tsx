import { routes } from "@/lib/links";
import LocationLine from "@/components/LocationLine";

const tickerItems = [
  "Elite Executive Protection",
  "Inventor - TheSelfDefender (3 Patents)",
  "Inventor - FranckTheSolution Fork (Patented)",
  "Former Professional Boxer",
  "Contractor for Special Units",
  "Active Fugitive Apprehension Agent - FL",
  "Expert - Close Combat, Defensive Tactics & Improvised Weapons",
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
            <a
              href="#female-eps"
              className="hero-animate hero-animate-1 group inline-flex items-center gap-2.5 mb-6 pl-1.5 pr-4 py-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 hover:border-accent-blue-light hover:bg-accent-blue/20 transition-all duration-300"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-accent-blue text-white text-[10px] uppercase tracking-[2px] font-bold font-body">
                New
              </span>
              <span className="text-white text-xs sm:text-[13px] font-body">
                Female executive protection specialists
              </span>
              <span className="text-accent-blue-light transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
            {/* Phones and small laptops (narrow text column): 3 lines -
                Elite Executive / Protection / Services & Training.
                Tablets and xl desktops: exactly 2 lines, sized to the column.
                Widest lines: "Elite Executive Protection" 11.96em,
                "Services & Training" 8.88em. */}
            <h1 className="hero-animate hero-animate-2 font-heading text-[clamp(28px,calc((100vw_-_56px)_/_9.6),44px)] sm:text-[clamp(28px,calc((100vw_-_56px)_/_12.8),72px)] lg:text-[clamp(36px,calc((100vw_-_630px)_/_9.6),56px)] xl:text-[clamp(36px,calc((100vw_-_630px)_/_12.8),54px)] font-bold uppercase leading-[0.95] text-white mb-5">
              <span className="block text-accent-red">
                Elite Executive
                <br className="sm:hidden lg:inline xl:hidden" /> Protection
              </span>
              <span className="block">Services &amp; Training</span>
            </h1>

            <LocationLine className="hero-animate hero-animate-2 justify-center lg:justify-start mb-7" />

            <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0 font-body">
              No theory. No fluff. Only tactics that work when lives depend on
              it. For over two decades, Franck Pala has forged ordinary people
              into highly capable protectors - through real violence, real
              pressure, and real solutions. Move smarter, strike faster, and
              protect the people who count on you with absolute confidence.
            </p>

            <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-10 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded ring-1 ring-accent-red/40 hover:bg-accent-red-dark hover:shadow-[0_0_24px_rgba(196,30,30,0.55)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
              >
                Hire Us
              </a>
              <a
                href={routes.shop}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]"
              >
                Shop the Store
              </a>
            </div>
          </div>

          {/* Portrait - framed, full, no zoom */}
          <div className="hero-animate hero-animate-1 order-1 lg:order-2 relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/30 via-transparent to-accent-blue/10 rounded-2xl blur-xl" />
            {/* Brand seal on the portrait's top-left corner (dark backdrop, clear of the face) */}
            <img
              src="/logo.png"
              alt="FrancktheSolution - TACT USA badge"
              className="hidden sm:block absolute z-20 sm:-top-8 sm:-left-8 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 object-contain drop-shadow-[0_0_24px_rgba(196,30,30,0.45)]"
            />
            <div className="relative rounded-xl overflow-hidden border border-accent-blue/30 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/images/franck_instructor_portrait.jpg"
                alt="Franck Pala - executive protection specialist and instructor"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white leading-[1.05]">
                  Protect. Train.
                  <br />
                  <span className="text-accent-blue-light">Be the Solution.</span>
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
