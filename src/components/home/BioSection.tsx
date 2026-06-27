import { routes, links } from "@/lib/links";

const achievements = [
  { stat: "20+", label: "Years Protecting & Training" },
  { stat: "3", label: "Patents — TheSelfDefender" },
  { stat: "CFM", label: "Creator of the System" },
  { stat: "Active", label: "Fugitive Apprehension Agent, FL" },
];

const credentials = [
  "Executive Protection Specialist",
  "Contractor for Special Units",
  "Former Professional Boxer",
  "Expert — Close Combat & Defensive Tactics",
  "Improvised Weapons & Deadly Strategy",
  "Inventor — TheSelfDefender (3 Patents)",
  "Fork Self-Defense System (Patent Pending)",
  "Creator — Circular Footwork Mechanics (CFM)",
  "Active Fugitive Apprehension Agent (FL)",
  "Licensed & Insured Security + Investigations",
];

export default function BioSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg"
      style={{ background: "linear-gradient(180deg, #0C1118 0%, #0A0E14 100%)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Portrait + achievements */}
          <div className="animate-on-scroll">
            <div className="relative rounded-xl overflow-hidden border border-accent-blue/30 bg-black/40">
              <img
                src="/images/franck_instructor_portrait.jpg"
                alt="Franck Pala — executive protection specialist, instructor, and inventor"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-heading text-2xl font-bold uppercase text-white">
                  Franck Pala
                </p>
                <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-body">
                  The Solution
                </p>
              </div>
            </div>

            {/* Achievement grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="bg-bg-steel-card border-l-2 border-accent-blue rounded-lg p-4"
                >
                  <p className="font-heading text-2xl lg:text-3xl font-bold text-white leading-none">
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
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Who Is Franck
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold uppercase mb-6 text-white leading-[1.05]">
              Raising the Standard of Tactical Defense
            </h2>

            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              <p>
                Known worldwide as FrancktheSolution, Franck Pala is a
                high-performance tactical instructor and one of the most
                respected authorities in close-combat defensive tactics, deadly
                strategies, and improvised weapons. A former professional
                fighter turned elite protection specialist, he has built his
                reputation transforming ordinary individuals into highly capable
                operators through direct, efficient, combat-proven methods.
              </p>
              <p>
                He is the creator of the{" "}
                <span className="text-white font-semibold">
                  Circular Footwork Mechanics (CFM)
                </span>{" "}
                system — a breakthrough in movement efficiency used by athletes,
                law enforcement, contractors, and executive protection teams. He
                is also an inventor: the mind behind{" "}
                <a
                  href={links.selfDefender}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue-light font-semibold underline decoration-accent-blue/50 underline-offset-4 hover:text-white transition-colors"
                >
                  TheSelfDefender
                </a>
                , protected by{" "}
                <span className="text-white font-semibold">three patents</span>,
                plus a patent-pending system for turning an everyday fork into an
                effective self-defense tool.
              </p>
              <p>
                Franck teaches law-enforcement units, federal contractors,
                private security teams, and high-net-worth executive clients. His
                courses are built around real violence, real pressure, and real
                solutions — no theory, no fluff, only tactics that work when
                lives depend on it. His mission is simple: empower people to move
                smarter, strike faster, survive danger, and protect others with
                absolute confidence.
              </p>
            </div>

            <blockquote className="mt-7 border-l-2 border-accent-blue pl-5">
              <p className="font-heading text-lg lg:text-xl uppercase tracking-[1px] text-white italic">
                &ldquo;Adapting to chaos rather than resisting it.&rdquo;
              </p>
              <cite className="text-accent-blue-light text-xs uppercase tracking-[2px] font-body not-italic">
                — Franck Pala
              </cite>
            </blockquote>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-3.5 py-1.5 border border-accent-blue/35 text-accent-blue-light text-[11px] uppercase tracking-[1.5px] rounded-full font-body"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={routes.about}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent-blue text-white text-sm font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:scale-[1.03] transition-all duration-300"
              >
                Read the Full Story
              </a>
              <a
                href={routes.hireUs}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white text-sm font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300"
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
