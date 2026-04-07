"use client";

const credentials = [
  "French Special Forces",
  "Professional Boxer",
  "25+ Years Active",
  "Licensed Security",
  "Patented Brand",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="animate-on-scroll">
            <div className="aspect-[3/4] bg-bg-card rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Replace with actual portrait */}
              <img
                src="/images/16_professional_headshot_studio.png"
                alt="Franck Pala — Executive Protection Specialist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio content */}
          <div className="animate-on-scroll">
            <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Your Instructor
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-6 text-white leading-tight">
              Franck Pala — 25 Years of Real-World Protection
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
              Franck Pala is not a YouTube self-defense instructor. He is a
              working executive protection specialist with over 25 years of
              operational experience spanning French Special Forces training,
              professional boxing, international protection details, fugitive
              recovery, and law enforcement instruction. He has protected
              executives, trained government agencies, and operated across
              continents.
            </p>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 font-body">
              His proprietary methodology is built on biomechanics — how the
              human body actually moves under stress — not flashy techniques
              that look good on camera. When you train with Franck, you are
              learning from someone who has done it. Not someone who teaches
              about it.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 border border-accent-gold/40 text-accent-gold text-xs uppercase tracking-[2px] rounded-full font-body"
                >
                  {cred}
                </span>
              ))}
            </div>

            <a
              href="https://eprotectionvip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary text-sm hover:text-white hover:underline transition-colors font-body"
            >
              Learn more at eprotectionvip.com &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
