import {
  ApplyEpsButton,
  HireFemaleEpsButton,
} from "@/components/female-eps/EpsCtas";
import { routes } from "@/lib/links";

const points = [
  "Blends in where a bodyguard can't",
  "Goes where a male agent can't",
  "Trained to the same standard as every operator",
];

// Home-page emphasis for the female executive protection service.
export default function FemaleEpsSpotlight() {
  return (
    <section
      id="female-eps"
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden noise-bg scroll-mt-[112px]"
      style={{
        background:
          "linear-gradient(135deg, #0C1118 0%, #101A28 55%, #0C1118 100%)",
      }}
    >
      <div className="absolute -top-20 left-1/4 w-[620px] h-[420px] bg-accent-blue/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[460px] h-[360px] bg-accent-gold/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Photos */}
          <div className="animate-on-scroll relative mx-auto w-full max-w-md lg:max-w-none pb-10 sm:pb-12">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/25 via-transparent to-accent-gold/15 rounded-2xl blur-xl" />
            <div className="relative w-[82%] rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
              <img
                src="/images/emma/emma_hero_belt.jpg"
                alt="Emma, female executive protection specialist, holding a championship belt"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover object-[center_35%]"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[46%] rounded-xl overflow-hidden border-2 border-accent-gold/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-black">
              <img
                src="/images/emma/emma_certified_with_franck.jpg"
                alt="Emma with her Executive Protection Agent Operator certificate, next to Franck Pala"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover object-[center_32%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pt-8 pb-2.5">
                <p className="text-accent-gold text-[9px] sm:text-[10px] uppercase tracking-[2px] font-bold font-body leading-tight">
                  Certified EP Agent Operator
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="animate-on-scroll text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-blue text-white text-[10px] uppercase tracking-[2px] font-bold font-body">
                New
              </span>
              <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold font-body">
                Female Executive Protection
              </p>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-white leading-[0.92] mb-6">
              Meet Emma.
              <br />
              <span className="text-accent-blue-light">Champion.</span>{" "}
              Protector.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed font-body mb-7 max-w-xl mx-auto lg:mx-0">
              Professional boxing champion. Certified Executive Protection
              Agent Operator. Trained by Franck. Female executive protection
              specialists are now part of the team - for women, families, and
              events that need a woman on the detail.
            </p>
            <ul className="space-y-3 mb-9 max-w-md mx-auto lg:mx-0 text-left">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light text-xs">
                    ✓
                  </span>
                  <span className="text-white text-sm sm:text-base font-body leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <HireFemaleEpsButton />
              <ApplyEpsButton />
            </div>
            <a
              href={routes.femaleEps}
              className="inline-block mt-6 text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
            >
              Learn about female protection &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
