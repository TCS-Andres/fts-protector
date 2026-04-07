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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="md:flex-1 text-center md:text-left">
            <p className="hero-animate hero-animate-1 text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-6 font-body">
              Franck The Solution Presents
            </p>

            <h1 className="hero-animate hero-animate-2 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-6 text-white">
              Everyone Is
              <br />a Protector
            </h1>

            <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-10 max-w-2xl font-body">
              A 3-hour hands-on personal safety workshop built on 25 years of
              real-world executive protection experience. No martial arts
              background needed. No fitness requirements. Just real skills that
              could save your life.
            </p>

            <div className="hero-animate hero-animate-3">
              <a
                href="#register"
                className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300 min-h-[50px]"
              >
                Secure Your Spot
              </a>
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
              alt="Franck The Solution"
              className="md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] object-contain drop-shadow-[0_0_40px_rgba(196,30,30,0.3)]"
            />
          </div>
        </div>

        {/* Logo badge — mobile only (below text, centered) */}
        <div className="hero-animate hero-animate-1 md:hidden mt-8 flex justify-center">
          <img
            src="/logo.png"
            alt="Franck The Solution"
            className="w-[240px] h-[240px] object-contain drop-shadow-[0_0_40px_rgba(196,30,30,0.3)]"
          />
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
