export default function ProblemSection() {
  return (
    <section className="relative bg-bg-primary py-20 lg:py-28 noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Someone is counting on you */}
          <div className="animate-on-scroll">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-8">
              <img
                src="/images/03_hotel_lobby_advance.png"
                alt="Family walking together"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-6 text-white">
              Someone Is Counting On You
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              Your wife. Your husband. Your kids. Your mom. Your dad. Whoever
              you love, they expect you to keep them safe. Not because you
              asked for the role, but because you&apos;re the one they look at
              when something feels wrong. The instinct is already there. What
              most people are missing is the training to back it up. Hope is
              not a plan. Love is not a skill set.
            </p>
          </div>

          {/* Reality has changed */}
          <div className="animate-on-scroll">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-8">
              <img
                src="/images/19_emergency_extraction.png"
                alt="Emergency scenario"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-6 text-white">
              The World Changed. Most People Didn&apos;t.
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-body">
              Threats that used to feel distant are now local, in your
              parking lot, your hotel lobby, your kid&apos;s school pickup,
              your grocery store. And the self-defense content flooding your
              feed? Most of it will get you hurt. The techniques look good on
              camera and fail in real life. Being a protector isn&apos;t about
              fear. It&apos;s about being the calm, capable person in the room
              when seconds matter, and that only comes from real training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
