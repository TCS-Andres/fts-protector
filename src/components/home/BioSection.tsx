import { routes, links } from "@/lib/links";

const achievements = [
  {
    stat: "20+",
    label: "Years in Executive Protection",
  },
  {
    stat: "3",
    label: "Patents — The Self-Defender Tool",
  },
  {
    stat: "∞",
    label: "Countries Worked: LE, Feds, Special Ops",
  },
  {
    stat: "Active",
    label: "Fugitive Apprehension Agent, Florida",
  },
];

const credentials = [
  "Executive Protection Specialist",
  "Former Professional Boxer",
  "Defensive Tactics Instructor",
  "Improvised Weapons & Deadly-Force Strategy",
  "Inventor — The Self-Defender (3 Patents)",
  "Fork Self-Defense System (Patent Pending)",
  "Active Fugitive Apprehension Agent (FL)",
  "Licensed & Insured Security + Investigations",
  "Author — Circular Footwork Mechanics",
];

export default function BioSection() {
  return (
    <section id="about" className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Portrait + achievements */}
          <div className="animate-on-scroll">
            <div className="aspect-[3/4] bg-bg-card rounded-lg overflow-hidden relative">
              <img
                src="/images/16_professional_headshot_studio.png"
                alt="Franck Pala — executive protection specialist, instructor, and inventor"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-heading text-2xl font-bold uppercase text-white">
                  Franck Pala
                </p>
                <p className="text-accent-gold text-xs uppercase tracking-[3px] font-body">
                  The Solution
                </p>
              </div>
            </div>

            {/* Achievement grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="bg-bg-card border-l-2 border-accent-gold rounded-lg p-4"
                >
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-white leading-none">
                    {a.stat}
                  </p>
                  <p className="text-text-secondary text-[11px] uppercase tracking-[1px] mt-2 font-body leading-tight">
                    {a.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio copy */}
          <div className="animate-on-scroll">
            <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Who Is Franck
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold uppercase mb-6 text-white leading-[1.05]">
              A Lifetime On the Line — So You Don&apos;t Have to Be
            </h2>

            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              <p>
                Franck Pala has spent more than two decades in executive
                protection — protecting principals across multiple countries
                and working alongside law enforcement, federal agencies, and
                special operations units. This isn&apos;t theory learned from a
                screen. It&apos;s a career built in the field, where being wrong
                once is not an option.
              </p>
              <p>
                A former professional boxer, Franck is a recognized instructor
                in defensive tactics, improvised weapons, and deadly-force
                strategy. He is also an{" "}
                <span className="text-white font-semibold">inventor</span>: the
                creator of{" "}
                <a
                  href={links.selfDefender}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold font-semibold underline decoration-accent-gold/50 underline-offset-4 hover:text-white transition-colors"
                >
                  The Self-Defender
                </a>{" "}
                tool, protected by{" "}
                <span className="text-white font-semibold">three patents</span>,
                and the developer of a patent-pending system for turning an
                everyday fork into an effective self-defense tool.
              </p>
              <p>
                Today he remains an{" "}
                <span className="text-white font-semibold">
                  active fugitive apprehension agent
                </span>{" "}
                in the state of Florida, runs licensed and insured security and
                investigation operations, and is writing his book,{" "}
                <span className="text-white font-semibold italic">
                  Circular Footwork Mechanics
                </span>
                . When you train with Franck, learn from him, or hire his team,
                you&apos;re drawing on the real thing.
              </p>
            </div>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-3.5 py-1.5 border border-accent-gold/35 text-accent-gold text-[11px] uppercase tracking-[1.5px] rounded-full font-body"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={routes.about}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent-red text-white text-sm font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark hover:scale-[1.03] transition-all duration-300"
              >
                Read the Full Story
              </a>
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white text-sm font-bold uppercase tracking-[2px] rounded hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
              >
                Work With Franck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
