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
    title: "Real Estate Scenario Training",
    description:
      "Specific drills for open houses, solo showings, lockbox appointments, and vacant properties.",
  },
  {
    title: "Family Protection Mindset",
    description:
      "How to protect your family in public, while traveling, and in everyday situations.",
  },
];

const logistics = [
  { icon: "⏱", label: "Duration", value: "3 Hours (9:00 AM – 12:00 PM)" },
  { icon: "📅", label: "Day", value: "Saturday Morning" },
  { icon: "📍", label: "Location", value: "South Florida (Miami / Broward — venue confirmed upon registration)" },
  { icon: "💰", label: "Investment", value: "$300 per person" },
  { icon: "📦", label: "Includes", value: "Hands-on training, materials, follow-up resources, and certificate of completion" },
  { icon: "💪", label: "Fitness Level", value: "No requirements — scaled to every participant" },
  { icon: "🎯", label: "Early-Bird", value: "$250 for the first 5 registrations" },
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
            3 Hours That Could Change Your Life
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            A hands-on, physical training experience — not a lecture, not a
            PowerPoint. Real skills you can use the next day.
          </p>
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
                  <p className="text-white text-base font-body">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="#register"
            className="inline-block px-10 py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Secure Your Spot — Limited to 15 Attendees
          </a>
          <p className="text-text-muted text-sm mt-4 font-body">
            Group rates available for teams of 15+. Contact us to discuss.
          </p>
        </div>
      </div>
    </section>
  );
}
