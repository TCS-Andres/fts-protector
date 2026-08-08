export default function StayTunedSection() {
  return (
    <section id="register" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-[url('/images/10_corporate_hr_training.png')] bg-cover bg-top opacity-20" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className="animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Next Workshop
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
            Stay Tuned for Our Next Workshop
          </h2>
          <p className="text-text-secondary text-lg font-body max-w-xl mx-auto">
            There is no workshop currently scheduled. The next Everyone Is a
            Protector date, location, and details will be announced right
            here — check back soon.
          </p>
        </div>

        <div className="animate-on-scroll mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-accent-blue/30 bg-bg-steel-card/60">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue-light opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-blue-light" />
          </span>
          <span className="text-white text-sm uppercase tracking-[2px] font-bold font-body">
            New dates announced here first
          </span>
        </div>
      </div>
    </section>
  );
}
