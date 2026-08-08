export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background image */}
      <div className="absolute inset-0 bg-bg-primary">
        <img
          src="/images/hero_workshop_background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-75"
        />
        {/* Left-side darkening for text readability, lighter on the right so the image shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10 md:from-black/70 md:via-black/20 md:to-transparent" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-32 lg:pb-12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="md:flex-1 text-center md:text-left">
            <p className="hero-animate hero-animate-1 text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-6 font-body">
              FrancktheSolution Presents
            </p>

            <div className="hero-animate hero-animate-1 flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent-blue/15 border border-accent-blue/40 rounded-full text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body">
                📅 Next Workshop — To Be Announced
              </span>
            </div>

            <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-3 text-white">
              Everyone Is
              <br />a Protector
            </h1>
            <p className="hero-animate hero-animate-2 text-white/90 text-base sm:text-lg lg:text-xl uppercase tracking-[3px] font-bold mb-6 font-body">
              Self-Defense Workshops
            </p>

            <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-6 max-w-2xl font-body">
              Your wife, your husband, your kids, your parents. Someone in
              your life is counting on you to keep them safe. A hands-on
              workshop built on 25 years of real-world executive protection.
              No martial arts background. No fitness requirements. Just the
              skills that turn instinct into action.
            </p>

            <div className="hero-animate hero-animate-3 inline-block md:block">
              <div className="border-l-2 border-accent-blue pl-5 text-left max-w-xl">
                <p className="text-white text-lg sm:text-xl font-bold font-body">
                  Stay tuned for our next workshop.
                </p>
                <p className="text-text-secondary text-sm sm:text-base mt-1.5 font-body">
                  Dates for the next Everyone Is a Protector workshop will be
                  announced here soon.
                </p>
              </div>
            </div>
          </div>

          {/* Logo badge, tablet & desktop only (side by side) */}
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
