const workshopCards = [
  {
    title: "Situational Awareness",
    description:
      "How to read a room, identify threats before they escalate, and position yourself for safety in any environment.",
  },
  {
    title: "De-Escalation Techniques",
    description:
      "Verbal strategies to defuse confrontations and control aggressive individuals without physical contact.",
  },
  {
    title: "Boundary Setting",
    description:
      "How to establish and enforce physical and verbal boundaries with strangers, clients, and unknown individuals.",
  },
  {
    title: "Self-Defense Fundamentals",
    description:
      "Tested, biomechanically sound techniques for defending yourself when everything else fails. Works for any fitness level.",
  },
  {
    title: "Everyday Scenario Training",
    description:
      "Drills for the moments that actually happen — parking lots, gas stations, hotel hallways, ride-shares, and crowded public spaces.",
  },
  {
    title: "Family Protection Mindset",
    description:
      "How to position, react, and lead the people you love through threats — at home, in transit, on vacation, and in everyday outings.",
  },
];

import { videos } from "@/lib/videos";

type LogisticsItem = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const logistics: LogisticsItem[] = [
  { icon: "📅", label: "Date", value: "Saturday, May 9, 2026" },
  { icon: "⏱", label: "Duration", value: "2 Hours (9:00 AM – 11:00 AM)" },
  {
    icon: "📍",
    label: "Location",
    value: "KO Zone — South Florida",
    href: "https://maps.app.goo.gl/bH4ikCfB4YRGFELp6",
  },
  { icon: "💰", label: "Regular Price", value: "$197 per person (after May 5)" },
  { icon: "📦", label: "Includes", value: "Hands-on training, materials, follow-up resources, and certificate of completion" },
  { icon: "💪", label: "Fitness Level", value: "No requirements — scaled to every participant" },
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="bg-bg-primary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Workshop
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase mb-4 text-white">
            2 Hours That Could Change Your Life
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            A hands-on, physical training experience — not a lecture, not a
            PowerPoint. Real skills you can use the next day.
          </p>
        </div>

        {/* Featured pitch video — single column on mobile, 2-column on desktop */}
        <div className="animate-on-scroll mb-16 max-w-5xl mx-auto">
          <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-6 font-body text-center lg:text-left">
            A Message From Franck
          </p>
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-12 items-center">
            {/* Video — 9:16 vertical, constrained width on desktop */}
            <div className="mx-auto w-full max-w-xs lg:max-w-none rounded-lg overflow-hidden border-t-2 border-accent-red shadow-2xl">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/08_seminar_stage_speaking.png"
                className="w-full aspect-[9/16] object-cover bg-black"
                src={`${videos.pitch}#t=0.1`}
              />
            </div>

            {/* Value points */}
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-6 leading-tight">
                Why This Workshop Is Different
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "25 years on the front line",
                    body: "Built on real-world executive protection experience — not theory, not YouTube clips.",
                  },
                  {
                    title: "Hands-on, not a lecture",
                    body: "You'll physically practice every technique. No PowerPoints. No sitting still.",
                  },
                  {
                    title: "No fitness or martial arts required",
                    body: "Tested, biomechanically sound techniques scaled to every body type and age.",
                  },
                  {
                    title: "Skills you can use the next day",
                    body: "Situational awareness, de-escalation, boundary setting, and self-defense fundamentals — all in 2 hours.",
                  },
                ].map((point) => (
                  <li key={point.title} className="flex items-start gap-3">
                    <span className="text-accent-red text-lg flex-shrink-0 leading-tight mt-1">▸</span>
                    <div>
                      <p className="text-white font-bold font-body">{point.title}</p>
                      <p className="text-text-secondary text-sm font-body leading-relaxed">{point.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 stagger-children">
          {workshopCards.map((card) => (
            <div
              key={card.title}
              className="animate-on-scroll bg-bg-card border-l-2 border-accent-red p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Red divider */}
        <div className="h-[1px] bg-accent-red/30 mb-16 red-line" />

        {/* Early-bird pricing banner */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16 relative overflow-hidden rounded-lg border-2 border-accent-red bg-gradient-to-br from-accent-red/20 via-bg-card to-bg-card shadow-[0_0_40px_rgba(196,30,30,0.25)]">
          <div className="absolute top-0 right-0 bg-accent-red text-white text-xs font-bold uppercase tracking-[2px] px-4 py-2 font-body">
            Limited Time
          </div>
          <div className="p-8 lg:p-10 text-center">
            <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
              ⚡ Early Bird Pricing — Ends May 5
            </p>
            <div className="flex items-baseline justify-center gap-4 mb-2">
              <span className="text-text-muted text-3xl lg:text-4xl line-through font-heading font-bold">
                $197
              </span>
              <span className="font-heading text-6xl lg:text-7xl font-bold text-white">
                $97
              </span>
            </div>
            <p className="text-white text-base font-body mb-2">
              Save <span className="text-accent-gold font-bold">$100</span> when you register before May 5
            </p>
            <p className="text-text-secondary text-sm font-body mb-6">
              After May 5, the price returns to <span className="text-white font-bold">$197 per person</span>.
            </p>
            <a
              href="https://buy.stripe.com/4gM28taUN8oB3mE56457W03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_30px_rgba(196,30,30,0.6)] hover:scale-[1.03] transition-all duration-300"
            >
              Lock In $97 Now
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
            href="https://buy.stripe.com/4gM28taUN8oB3mE56457W03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Claim $97 Early Bird — Limited to 15 Spots
          </a>
          <p className="text-text-muted text-sm mt-4 font-body">
            Price returns to $197 after May 5. Group rates available for teams of 15+.
          </p>
        </div>
      </div>
    </section>
  );
}
