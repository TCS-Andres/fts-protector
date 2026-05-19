import CountdownTimer from "./CountdownTimer";

export default function RegistrationSection() {
  return (
    <section id="register" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-[url('/images/10_corporate_hr_training.png')] bg-cover bg-top opacity-20" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className="animate-on-scroll">
          <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            ⚡ Limited-Time Early Bird
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            Lock In $147 Before May 31
          </h2>
          <p className="text-accent-gold text-sm uppercase tracking-[3px] font-bold font-body mb-6">
            🔒 Only 16 spots available
          </p>
          <p className="text-text-secondary text-lg mb-12 font-body">
            One workshop. Two hours. The skills you need to actually protect
            the people you love.
            <br />
            <span className="text-white font-bold">Save $50 and bring a +1 free, family, partner, or friend.</span>
          </p>
        </div>

        <div className="animate-on-scroll bg-bg-card/80 backdrop-blur p-8 pt-14 lg:p-12 lg:pt-12 rounded-lg border-2 border-accent-red shadow-[0_0_60px_rgba(196,30,30,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent-red text-white text-xs font-bold uppercase tracking-[2px] px-4 py-2 font-body">
            Ends May 31
          </div>

          <div className="flex items-baseline justify-center gap-4 mb-3">
            <span className="text-text-muted text-3xl lg:text-5xl line-through font-heading font-bold">
              $197
            </span>
            <span className="font-heading text-7xl lg:text-8xl font-bold text-white">
              $147
            </span>
          </div>
          <p className="text-accent-gold text-base uppercase tracking-[2px] font-bold mb-3 font-body">
            Save $50, Today Only Through May 31
          </p>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-gold text-black rounded-full text-xs sm:text-sm uppercase tracking-[2px] font-bold font-body shadow-[0_0_20px_rgba(212,175,55,0.45)]">
            🎟️ Includes a +1 FREE for your partner, family, or friend
          </div>

          <div className="mb-8">
            <p className="text-text-muted text-xs uppercase tracking-[2px] mb-3 font-body">
              Offer ends in
            </p>
            <CountdownTimer variant="card" />
          </div>

          <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex items-start gap-3 text-text-secondary font-body">
              <span className="text-accent-red flex-shrink-0 mt-1">✓</span>
              <span>
                <span className="text-white font-bold">Saturday, June 6, 2026</span> · 9:00 AM – 11:00 AM (2 hours)
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-secondary font-body">
              <span className="text-accent-red flex-shrink-0 mt-1">📍</span>
              <span>
                Held at{" "}
                <a
                  href="https://maps.app.goo.gl/H6nH8Lnvpn6tE1M66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold underline decoration-accent-red/60 underline-offset-4 hover:text-accent-red transition-colors"
                >
                  KO Zone, Miami
                </a>
                <span className="block text-xs text-text-muted mt-0.5">
                  301 NW 54th Street, Miami, FL 33127
                </span>
              </span>
            </li>
            {[
              "Hands-on personal protection training",
              "Bring a +1 FREE: partner, family member, or friend",
              "Materials, follow-up resources & certificate of completion",
              "Only 16 spots available, first come, first served",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                <span className="text-accent-red flex-shrink-0 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 text-text-secondary font-body">
              <span className="text-accent-red flex-shrink-0 mt-1">👕</span>
              <span>
                <span className="text-white font-bold">What to wear:</span>{" "}
                comfortable, closed-toe sneakers, jeans, and a belt
              </span>
            </li>
          </ul>

          <a
            href="https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-6 sm:px-12 py-5 bg-accent-red text-white text-base sm:text-lg font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_40px_rgba(196,30,30,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            Claim My $147 Spot Now
          </a>
          <p className="text-text-muted text-xs uppercase tracking-[2px] mt-4 font-body">
            Secure checkout via Stripe
          </p>

          <p className="text-text-secondary text-sm mt-6 font-body border-t border-white/10 pt-6">
            After May 31, the price returns to <span className="text-white font-bold">$197 per person</span>.
          </p>
        </div>

        <p className="text-text-muted text-xs font-body mt-8">
          Group rates available for teams of 15+. Contact{" "}
          <a
            href="mailto:franck@eprotectionvip.com"
            className="text-accent-red hover:underline"
          >
            franck@eprotectionvip.com
          </a>{" "}
          for details.
        </p>
      </div>
    </section>
  );
}
