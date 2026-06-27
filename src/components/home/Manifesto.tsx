export default function Manifesto() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Faint operational backdrop */}
      <div className="absolute inset-0">
        <img
          src="/images/03_hotel_lobby_advance.png"
          alt=""
          className="w-full h-full object-cover object-[center_20%] opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0A0E14 0%, rgba(10,14,20,0.82) 50%, #0A0E14 100%)",
          }}
        />
      </div>

      {/* Steel-blue grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,168,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,168,226,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
        <p className="text-accent-blue-light text-sm uppercase tracking-[5px] font-bold mb-6 font-body">
          The Standard
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.05] mb-8">
          Everyone Is a Protector.
          <br />
          <span className="text-accent-blue-light">
            The Only Question Is Whether You&apos;re Ready.
          </span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-body">
          Protection isn&apos;t a product you buy once — it&apos;s a standard you
          live by. Franck has held that standard for over twenty years, in the
          field, where it counts. Now he brings it to you: the team to protect
          you, the training to prepare you, and the tools to back you up.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-accent-blue/50" />
          <span className="font-heading text-lg uppercase tracking-[3px] text-white">
            Protect. Train. Be the Solution.
          </span>
          <span className="h-px w-12 bg-accent-blue/50" />
        </div>
      </div>
    </section>
  );
}
