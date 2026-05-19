import CountdownTimer from "./CountdownTimer";

type LogisticsItem = {
  icon: string;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
};

const logistics: LogisticsItem[] = [
  { icon: "📅", label: "Date", value: "Saturday, June 6, 2026" },
  { icon: "⏱", label: "Duration", value: "2 Hours (9:00 AM – 11:00 AM)" },
  {
    icon: "📍",
    label: "Location",
    value: "KO Zone, Miami",
    subValue: "301 NW 54th Street, Miami, FL 33127",
    href: "https://maps.app.goo.gl/H6nH8Lnvpn6tE1M66",
  },
  { icon: "💰", label: "Regular Price", value: "$197 per person (after May 31)" },
  { icon: "📦", label: "Includes", value: "Hands-on training, materials, follow-up resources, and certificate of completion" },
  { icon: "💪", label: "Fitness Level", value: "No requirements, scaled to every participant" },
  { icon: "👕", label: "What to Wear", value: "Comfortable, closed-toe sneakers, jeans, and a belt" },
  { icon: "🪑", label: "Capacity", value: "Only 16 spots, first come, first served" },
];

export default function WorkshopDetailsSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Pricing & Details
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase mb-4 text-white">
            Lock In $147 Before May 31
          </h2>
          <p className="text-accent-gold text-sm uppercase tracking-[3px] font-bold font-body">
            🔒 Only 16 spots available, first come, first served
          </p>
        </div>

        {/* Early-bird pricing banner */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16 relative overflow-hidden rounded-lg border-2 border-accent-red bg-gradient-to-br from-accent-red/20 via-bg-card to-bg-card shadow-[0_0_40px_rgba(196,30,30,0.25)]">
          <div className="absolute top-0 right-0 bg-accent-red text-white text-xs font-bold uppercase tracking-[2px] px-4 py-2 font-body">
            Limited Time
          </div>
          <div className="p-8 pt-14 lg:p-10 lg:pt-12 text-center">
            <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
              ⚡ Early Bird Pricing, Ends May 31
            </p>
            <div className="flex items-baseline justify-center gap-4 mb-2">
              <span className="text-text-muted text-3xl lg:text-4xl line-through font-heading font-bold">
                $197
              </span>
              <span className="font-heading text-6xl lg:text-7xl font-bold text-white">
                $147
              </span>
            </div>
            <p className="text-white text-base font-body mb-2">
              Save <span className="text-accent-gold font-bold">$50</span> when you register before May 31
            </p>
            <p className="text-text-secondary text-sm font-body mb-6">
              After May 31, the price returns to <span className="text-white font-bold">$197 per person</span>.
            </p>
            <div className="mb-6">
              <p className="text-text-muted text-xs uppercase tracking-[2px] mb-3 font-body">
                Offer ends in
              </p>
              <CountdownTimer variant="card" />
            </div>
            <a
              href="https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-10 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_30px_rgba(196,30,30,0.6)] hover:scale-[1.03] transition-all duration-300"
            >
              Lock In $147 Now
            </a>
            <p className="text-text-muted text-xs uppercase tracking-[2px] mt-4 font-body">
              Secure checkout via Stripe
            </p>
          </div>
        </div>

        {/* Logistics */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h3 className="font-heading text-2xl font-bold uppercase mb-8 text-white text-center">
            Workshop Details
          </h3>
          <div className="space-y-4">
            {logistics.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 py-3 border-b border-white/5"
              >
                <span className="text-xl w-8 flex-shrink-0">{item.icon}</span>
                <div>
                  <span className="text-text-muted text-xs uppercase tracking-[2px] font-body">
                    {item.label}
                  </span>
                  {item.href ? (
                    <>
                      <p className="text-white text-base font-body">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-accent-red/60 underline-offset-4 hover:text-accent-red transition-colors"
                        >
                          {item.value}
                        </a>
                      </p>
                      {item.subValue && (
                        <p className="text-text-secondary text-sm font-body mt-1">
                          {item.subValue}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-white text-base font-body">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Claim $147 Early Bird, Only 16 Spots
          </a>
          <p className="text-text-muted text-sm mt-4 font-body">
            Price returns to $197 after May 31. Group rates available for teams of 15+.
          </p>
        </div>
      </div>
    </section>
  );
}
