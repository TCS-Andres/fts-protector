export default function AudienceSection() {
  return (
    <section id="audience" className="bg-bg-secondary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
            Who This Is For
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-children">
          {/* Real Estate Card */}
          <div className="animate-on-scroll bg-bg-card rounded-lg border border-white/5 overflow-hidden hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/images/11_school_safety_presentation.png"
                alt="Safety presentation for professionals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4 text-white">
              For Realtors & Agents
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-6 font-body">
              Your agents meet strangers in empty buildings every week with zero
              physical preparation. Most brokerages have a safety policy — but
              your agents have never practiced a physical response. This
              workshop turns policy into muscle memory. Situational awareness
              for showings. De-escalation with aggressive clients. What to do
              if you&apos;re cornered in a property.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8 font-body">
              One incident can cost a brokerage $100,000+. Training 10 agents
              costs $3,000. That&apos;s insurance that actually teaches your
              people something.
            </p>
            <a
              href="#register"
              className="text-accent-red text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
            >
              Book for your brokerage &rarr;
            </a>
            </div>
          </div>

          {/* Civilians Card */}
          <div className="animate-on-scroll bg-bg-card rounded-lg border border-white/5 overflow-hidden hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/images/17_walking_downtown_miami.png"
                alt="Walking through downtown Miami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4 text-white">
              For Everyday Protectors
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-6 font-body">
              You don&apos;t need to be an operator to defend yourself. You just
              need a little bit of knowledge. This workshop is designed for
              regular people — not fighters, not athletes. Parents,
              professionals, couples, and anyone who wants the confidence that
              comes from knowing what to do when it matters.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8 font-body">
              Everything is scaled to your fitness level. People from age 16 to
              65 have completed this training. You will leave with real skills.
            </p>
            <a
              href="#register"
              className="text-accent-red text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
            >
              Reserve your spot &rarr;
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
