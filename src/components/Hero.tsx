export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Placeholder for hero image — replace src with actual image */}
        <div className="absolute inset-0 bg-[url('/images/01_vip_escort_red_carpet.png')] bg-cover bg-top bg-fixed opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="lg:flex-1 text-center lg:text-left">
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
                  href="https://floridadefensivetraining.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:underline transition-colors hover:text-white font-body"
                >
                  Can&apos;t attend in person? Train online &rarr;
                </a>
              </p>
            </div>
          </div>

          {/* Logo badge */}
          <div className="hero-animate hero-animate-1 lg:flex-shrink-0">
            <img
              src="/logo.png"
              alt="Franck The Solution"
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] object-contain drop-shadow-[0_0_40px_rgba(196,30,30,0.3)]"
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
