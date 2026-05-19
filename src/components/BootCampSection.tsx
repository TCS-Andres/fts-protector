const modules = [
  "Circular Footwork Mechanics",
  "Firearms Training (Pistol, Rifle, Shotgun)",
  "Close Combat Defense System",
  "Ground Defense & Submissions",
  "Tactical Medic",
  "VIP & Vehicle Extraction",
  "Disarming & Improvised Weapons",
  "Mapping, Coordination & Intelligence",
];

export default function BootCampSection() {
  return (
    <section
      id="bootcamp"
      className="relative py-14 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #04111f 0%, #061a2c 40%, #0a2440 100%)",
      }}
    >
      {/* Cyan accent grid background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="animate-on-scroll">
            <p className="text-cyan-300 text-xs uppercase tracking-[4px] font-bold mb-4 font-body">
              TACTOPS EP Academy
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4 leading-tight">
              Ready for the Next Level?
            </h2>
            <p className="text-cyan-200 text-base uppercase tracking-[3px] font-bold mb-6 font-body">
              7-Day Protectors Training Camp
            </p>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 font-body">
              The June 6 workshop is the doorway. The 7-day camp is the
              transformation. Train. Protect. Survive. Be the standard.
            </p>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8 font-body">
              An immersive, competition-level program for advanced
              practitioners. Capacity is capped at 9 attendees. Bring your own
              gear and your own handgun. You walk out certified.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-cyan-400/60 pl-4">
                <p className="text-cyan-300 text-xs uppercase tracking-[2px] font-bold font-body">
                  Dates
                </p>
                <p className="text-white text-sm font-body mt-1">
                  June 22 to 28, 2026
                </p>
              </div>
              <div className="border-l-2 border-cyan-400/60 pl-4">
                <p className="text-cyan-300 text-xs uppercase tracking-[2px] font-bold font-body">
                  Capacity
                </p>
                <p className="text-white text-sm font-body mt-1">
                  9 attendees max
                </p>
              </div>
              <div className="border-l-2 border-cyan-400/60 pl-4">
                <p className="text-cyan-300 text-xs uppercase tracking-[2px] font-bold font-body">
                  Early Bird
                </p>
                <p className="text-white text-sm font-body mt-1">$3,800</p>
              </div>
              <div className="border-l-2 border-cyan-400/60 pl-4">
                <p className="text-cyan-300 text-xs uppercase tracking-[2px] font-bold font-body">
                  Regular
                </p>
                <p className="text-white text-sm font-body mt-1">$4,500</p>
              </div>
            </div>

            <a
              href="mailto:TACTOPSUSA@gmail.com?subject=7-Day%20Protectors%20Camp%20Application"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black text-sm sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]"
            >
              Apply for the Camp
            </a>
            <p className="text-white/50 text-xs uppercase tracking-[2px] mt-4 font-body">
              By application only. Advanced practitioners.
            </p>
          </div>

          {/* Right: modules grid */}
          <div className="animate-on-scroll">
            <div className="bg-black/60 backdrop-blur border border-cyan-400/30 rounded-lg p-6 sm:p-8">
              <p className="text-cyan-300 text-xs uppercase tracking-[3px] font-bold mb-5 font-body">
                Core curriculum
              </p>
              <ul className="space-y-3">
                {modules.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 text-white/90 font-body text-sm lg:text-base"
                  >
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/60 text-xs mt-6 pt-4 border-t border-white/10 font-body italic">
                Includes ammo and range fees. Certification awarded upon
                successful testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
