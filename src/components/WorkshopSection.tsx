import { videos } from "@/lib/videos";

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
      "Drills for the moments that actually happen, parking lots, gas stations, hotel hallways, ride-shares, and crowded public spaces.",
  },
  {
    title: "Family Protection Mindset",
    description:
      "How to position, react, and lead the people you love through threats, at home, in transit, on vacation, and in everyday outings.",
  },
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Workshop
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase mb-4 text-white">
            2 Hours That Could Change Your Life
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            A hands-on, physical training experience, not a lecture, not a
            PowerPoint. Real skills you can use the next day.
          </p>
        </div>

        {/* Featured pitch video, single column on mobile, 2-column on desktop */}
        <div className="animate-on-scroll mb-12 sm:mb-20 max-w-5xl mx-auto">
          <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-6 font-body text-center lg:text-left">
            A Message From Franck
          </p>
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-12 items-center">
            {/* Video, 9:16 vertical, constrained width on desktop */}
            <div className="mx-auto w-full max-w-xs lg:max-w-none rounded-lg overflow-hidden border-t-2 border-accent-blue shadow-2xl">
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
                    body: "Built on real-world executive protection experience, not theory, not YouTube clips.",
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
                    body: "Situational awareness, de-escalation, boundary setting, and self-defense fundamentals, all in 2 hours.",
                  },
                ].map((point) => (
                  <li key={point.title} className="flex items-start gap-3">
                    <span className="text-accent-blue-light text-lg flex-shrink-0 leading-tight mt-1">▸</span>
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

        {/* What You Will Learn */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Curriculum
          </p>
          <h3 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-4">
            What You Will Learn in This Workshop
          </h3>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto font-body">
            Six core areas of training, every one of them rehearsed, not
            lectured, so you walk out with skills you can actually use.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {workshopCards.map((card) => (
            <div
              key={card.title}
              className="animate-on-scroll bg-bg-card border-l-2 border-accent-blue p-6 sm:p-8 rounded-lg hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
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
      </div>
    </section>
  );
}
