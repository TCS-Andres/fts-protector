const CONTACT_EMAIL = "info@franckthesolution.com";
const BOOK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=CFM%20-%20Circular%20Footwork%20Mechanics%20(Book)`;

const pillars = ["Footwork", "Control", "Awareness", "Decision", "Survival"];

const endorsements = [
  {
    quote:
      "Franck is a true master of his craft - intelligence matched with real-world experience. If you're looking to become elite, do whatever he tells you.",
    name: "Phil Daru",
    title: "5x Coach of the Year · 7x World Title Wins",
  },
  {
    quote:
      "Franck's ability to teach action and reaction skills is unparalleled. His instincts and situational awareness make me a top-tier operator.",
    name: "Lex Borrero",
    title: "Billboard Power Player · Grammy Award-Winning Producer",
  },
  {
    quote:
      "Franck's knowledge, movements, and close-combat defense skills should be a necessity for all in this day and age. Stay brutal.",
    name: 'Jake "Brutal" Bostwick',
    title: "Bare-Knuckle Champ · Pro Fighter & Protector",
  },
];

export default function AuthorSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative noise-bg"
      style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-accent-blue/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            The Author
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            He Wrote the Book on It.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            <span className="text-white font-semibold">
              CFM - Circular Footwork Mechanics
            </span>{" "}
            is Franck&apos;s manual on the biomechanics of circular footwork and
            the strategies behind it, written for protectors, law-enforcement
            officers, and athletes - the core of his Close Combat Defense System
            (CCDS).
          </p>
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 animate-on-scroll">
          {pillars.map((p) => (
            <span
              key={p}
              className="inline-flex items-center px-4 py-2 rounded-full border border-accent-blue/40 bg-accent-blue/10 text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Covers - front & back */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-12 mb-12 sm:mb-16">
          <figure className="animate-on-scroll w-full max-w-[460px]">
            <img
              src="/images/cfm_book_front.jpg"
              alt="CFM: Circular Footwork Mechanics - front cover"
              loading="lazy"
              className="w-full h-auto rounded-xl border border-accent-blue/30 shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="text-center text-text-muted text-xs uppercase tracking-[2px] mt-3 font-body">
              Front Cover
            </figcaption>
          </figure>
          <figure className="animate-on-scroll w-full max-w-[460px]">
            <img
              src="/images/cfm_book_back.jpg"
              alt="CFM: Circular Footwork Mechanics - back cover, with author bio and endorsements"
              loading="lazy"
              className="w-full h-auto rounded-xl border border-accent-blue/30 shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="text-center text-text-muted text-xs uppercase tracking-[2px] mt-3 font-body">
              Back Cover
            </figcaption>
          </figure>
        </div>

        {/* Endorsements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
          {endorsements.map((e) => (
            <blockquote
              key={e.name}
              className="animate-on-scroll rounded-xl border border-white/10 bg-bg-steel-card/60 p-6 flex flex-col"
            >
              <p className="text-text-secondary text-sm lg:text-[15px] leading-relaxed font-body italic flex-1">
                &ldquo;{e.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-white font-heading uppercase tracking-[1px] text-sm font-bold">
                  {e.name}
                </p>
                <p className="text-accent-blue-light text-[11px] uppercase tracking-[1.5px] font-body mt-0.5">
                  {e.title}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <p className="font-heading text-lg uppercase tracking-[1px] text-white italic mb-5">
            &ldquo;Train the body. Master the mind. Protect what matters.&rdquo;
          </p>
          <a
            href={BOOK_MAILTO}
            className="inline-flex items-center justify-center px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
          >
            Get the Book &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
