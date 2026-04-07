export default function ProblemSection() {
  return (
    <section className="relative bg-bg-primary py-20 lg:py-28 noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Real Estate Column */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-accent-red">
                <path d="M24 4L4 20h6v20h28V20h6L24 4z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 44V32h8v12" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="26" r="2" fill="currentColor" />
              </svg>
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
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-accent-red">
                <path d="M24 4C14 4 8 14 8 22c0 12 16 22 16 22s16-10 16-22C40 14 34 4 24 4z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M24 14v10M19 19h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
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
