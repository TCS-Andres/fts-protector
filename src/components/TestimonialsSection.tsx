const testimonials = [
  {
    quote:
      "I've been in real estate for 12 years and never had any physical safety training. This workshop changed everything. I feel prepared for the first time.",
    name: "Placeholder",
    role: "Real Estate Agent",
  },
  {
    quote:
      "Franck doesn't teach theory. He teaches what actually works. My wife and I both attended and we use what we learned every day.",
    name: "Placeholder",
    role: "Workshop Attendee",
  },
  {
    quote:
      "The most practical, no-nonsense training I've ever done. Three hours and I walked out a different person.",
    name: "Placeholder",
    role: "Workshop Attendee",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-bg-primary py-20 lg:py-28 relative noise-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/02_suv_motorcade_arrival.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
            What People Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-bg-card p-8 rounded-lg border-t-2 border-accent-red hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-accent-red mb-6"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>

              <p className="text-text-secondary text-base leading-relaxed mb-6 italic font-body">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white text-sm font-bold font-body">
                  — {t.name}
                </p>
                <p className="text-text-muted text-xs font-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-12 font-body animate-on-scroll">
          As featured in training with UFC fighters, law enforcement agencies,
          and international security professionals.
        </p>
      </div>
    </section>
  );
}
