export default function ProblemSection() {
  return (
    <section className="relative bg-bg-primary py-20 lg:py-28 noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Real Estate Column */}
          <div className="animate-on-scroll">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-8">
              <img
                src="/images/03_hotel_lobby_advance.png"
                alt="Hotel lobby security advance"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-6 text-white">
              Your Showing Could Be Your Last
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              You meet strangers in empty buildings for a living. You give out
              your personal number. You work evenings and weekends in
              neighborhoods you&apos;ve never been to. Your brokerage has a safety
              policy on paper — but when was the last time your agents actually
              practiced what to do when something goes wrong? A policy manual
              doesn&apos;t protect anyone. Training does.
            </p>
          </div>

          {/* Civilians Column */}
          <div className="animate-on-scroll">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-8">
              <img
                src="/images/19_emergency_extraction.png"
                alt="Emergency extraction scenario"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-6 text-white">
              You Protect Someone Every Day
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              You&apos;re a parent, a spouse, a professional. You&apos;re already
              protecting people you love — you just haven&apos;t been trained for
              it. The global climate has changed. Threats that felt distant are
              now local. And most self-defense content online? It will get you
              hurt. The techniques look good on camera but fail in real life.
              You deserve training from someone who has actually used these
              skills in the real world — not someone who invented them for
              social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
