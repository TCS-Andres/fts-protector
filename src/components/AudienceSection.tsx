const audiences = [
  {
    image: "/images/17_walking_downtown_miami.png",
    alt: "A parent walking with family",
    title: "For Parents & Spouses",
    body1:
      "You're already the protector. Your kids look at you when something feels off. Your partner trusts you to act if it goes bad. That responsibility doesn't go away because you're tired, untrained, or hoping nothing happens. This workshop gives you the tools to actually protect the people you love, at the park, in the parking lot, on vacation, at home.",
    body2:
      "You don't need to be a fighter. You need to be prepared. Bring your spouse. Bring your kids. Two hours of training together is the difference between freezing and acting when seconds matter.",
    cta: "Train to protect your family",
  },
  {
    image: "/images/11_school_safety_presentation.png",
    alt: "Everyday people in a public space",
    title: "For Everyday Civilians",
    body1:
      "You're a professional, a friend, a son or daughter, a neighbor. You move through the world every day, restaurants, gas stations, gyms, ride-shares, travel, and you have no idea what you'd actually do if something went wrong. Most people don't. The instinct kicks in, but the body has nothing to fall back on.",
    body2:
      "This isn't martial arts. It isn't theory. It's the muscle memory and situational awareness that working executive protection professionals rely on, taught in a way regular people can absorb in two hours.",
    cta: "Reserve your spot, $147 early bird",
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="bg-bg-secondary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Everyone Is a Protector
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
            Who This Is For
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-6 font-body">
            If there is anyone in your life you would step in front of a
            threat for, this workshop is for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-children">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="animate-on-scroll bg-bg-card rounded-lg border border-white/5 overflow-hidden hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
              <div className="p-10">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4 text-white">
                  {a.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed mb-6 font-body">
                  {a.body1}
                </p>
                <p className="text-text-secondary text-base leading-relaxed mb-8 font-body">
                  {a.body2}
                </p>
                <a
                  href="https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-red text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
                >
                  {a.cta} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
