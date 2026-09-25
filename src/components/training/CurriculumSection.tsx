const curriculum = [
  "Close Combat Defense Tactics",
  "Weapons Training & Disarming",
  "Firearms",
  "Tact Medic",
  "Rules & Regulations",
  "Improvised Weapons & Deadly Strategies",
  "Home Invasion",
  "Road Rage",
  "Carjacking",
  "Car Ambush & Extraction",
  "VIP Protection & Extraction",
  "Cardio Conditioning & Strength",
  "Psychology & Ethics in Combat",
  "CFM - Circular Footwork Mechanics",
  "Awareness",
  "Use of Force",
  "Use of Lethal Force",
];

export default function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
      style={{ background: "linear-gradient(180deg, #0C1118 0%, #06090D 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-accent-blue/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Curriculum
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            Everything You Train
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            The complete TACT OPS syllabus. Every program is built from these
            disciplines and tailored to your level, your risks, and your goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 stagger-children">
          {curriculum.map((item, i) => (
            <div
              key={item}
              className="animate-on-scroll flex items-center gap-4 rounded-lg border border-accent-blue/20 bg-bg-steel-card/60 px-5 py-4 hover:border-accent-blue-light/50 hover:bg-accent-blue/5 transition-all duration-300"
            >
              <span className="font-heading text-lg font-bold text-accent-blue-light/50 w-7 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white text-sm lg:text-[15px] font-body leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
