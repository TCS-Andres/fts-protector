import { routes } from "@/lib/links";

export default function FeaturedWorkshopCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <img
          src="/images/hero_workshop_background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-30"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
        <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
          Next Workshop — Saturday, July 18, 2026
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-tight">
          Everyone Is a Protector
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mb-8 font-body">
          A 2-hour hands-on self-defense workshop in Miami. No experience
          needed. Every ticket includes a +1 free — bring your partner, family,
          or a friend.{" "}
          <span className="text-white font-bold">
            $147 early bird through July 5.
          </span>
        </p>
        <a
          href={routes.workshops}
          className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
        >
          See the Workshop
        </a>
      </div>
    </section>
  );
}
