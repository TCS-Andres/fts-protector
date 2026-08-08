export default function FeaturedWorkshopCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <img
          src="/images/hero_workshop_background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-30"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
        <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
          The Workshop
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-tight">
          Everyone Is a Protector
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mb-6 font-body">
          A hands-on self-defense workshop in Miami. No experience needed —
          real skills, taught by a working executive protection specialist.
        </p>
        <p className="text-white text-lg sm:text-xl font-bold font-body">
          Stay tuned for our next workshop.
        </p>
        <p className="text-text-secondary text-sm sm:text-base mt-2 font-body">
          New dates and details will be announced soon.
        </p>
      </div>
    </section>
  );
}
