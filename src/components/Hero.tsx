export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background image */}
      <div className="absolute inset-0 bg-bg-primary">
        <img
          src="/images/01_vip_escort_red_carpet.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-20 lg:pt-32 lg:pb-12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="md:flex-1 text-center md:text-left">
            <p className="hero-animate hero-animate-1 text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-6 font-body">
              FrancktheSolution Presents
            </p>

            <div className="hero-animate hero-animate-1 flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent-red/15 border border-accent-red/40 rounded-full text-accent-red text-xs uppercase tracking-[2px] font-bold font-body">
                ⚡ Early Bird $97 — Reg $197 — Ends May 5
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent-gold/15 border border-accent-gold/40 rounded-full text-accent-gold text-xs uppercase tracking-[2px] font-bold font-body">
                🔒 Only 16 Spots Available
              </span>
            </div>

            <h1 className="hero-animate hero-animate-2 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-3 text-white">
              Everyone Is
              <br />a Protector
            </h1>
            <p className="hero-animate hero-animate-2 text-white/90 text-base sm:text-lg lg:text-xl uppercase tracking-[3px] font-bold mb-6 font-body">
              Self-Defense Workshops
            </p>

            <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-10 max-w-2xl font-body">
              Your wife, your husband, your kids, your parents — someone in
              your life is counting on you to keep them safe. A 2-hour
              hands-on workshop built on 25 years of real-world executive
              protection. No martial arts background. No fitness
              requirements. Just the skills that turn instinct into action.
            </p>

            <div className="hero-animate hero-animate-3">
              <a
                href="https://buy.stripe.com/4gM28taUN8oB3mE56457W03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300 min-h-[50px]"
              >
                Claim $97 Early Bird
              </a>
              <p className="text-text-muted text-xs uppercase tracking-[2px] mt-3 font-body">
                <span className="line-through text-text-muted/70">$197</span>{" "}
                <span className="text-accent-gold font-bold">$97</span> until May 5
              </p>
              <p className="text-white text-sm mt-4 font-body">
                <span className="text-accent-gold font-bold">📅 Saturday, May 9, 2026</span> · 9 AM – 11 AM
                <br />
                📍{" "}
                <a
                  href="https://maps.app.goo.gl/H6nH8Lnvpn6tE1M66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent-red/60 underline-offset-4 hover:text-accent-red transition-colors"
                >
                  KO Zone — Miami
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="https://www.skool.com/defensivetactics/about?ref=5872d5e010f741d2a991a3878f95b264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:underline transition-colors hover:text-white font-body"
                >
                  Can&apos;t attend in person? Train online &rarr;
                </a>
              </p>
            </div>
          </div>

          {/* Logo badge — tablet & desktop only (side by side) */}
          <div className="hero-animate hero-animate-1 hidden md:block md:flex-shrink-0">
            <img
              src="/logo.png"
              alt="FrancktheSolution"
              className="md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] object-contain drop-shadow-[0_0_40px_rgba(196,30,30,0.3)]"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/60"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
