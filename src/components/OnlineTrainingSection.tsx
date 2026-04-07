export default function OnlineTrainingSection() {
  return (
    <section className="bg-bg-secondary py-16 lg:py-20 relative noise-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/04_nightclub_vip_section.png')] bg-cover bg-top opacity-15" />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
        <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-4">
          Can&apos;t Make It in Person?
        </h3>
        <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
          Franck also teaches through Florida Defensive Training&apos;s online
          platform. Access firearms training, defensive tactics, and
          scenario-based courses from anywhere.
        </p>
        <a
          href="https://floridadefensivetraining.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 border-2 border-accent-red text-accent-red text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red hover:text-white transition-all duration-300"
        >
          Explore Online Training &rarr;
        </a>
      </div>
    </section>
  );
}
