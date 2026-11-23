import { services, type ServiceIcon } from "@/lib/services";

// "What We Do" grid: a heading cell plus one tile per service, so seven
// services fill a clean 2 x 4 grid on desktop and 4 x 2 on tablets. On phones
// the tiles become compact rows that are quick to scan.

const iconPaths: Record<ServiceIcon, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  bodyguard: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 21v-1.5A6.5 6.5 0 0 1 11.5 13h1a6.5 6.5 0 0 1 6.5 6.5V21" />
      <path d="M15.5 6.5c1 .2 1.5.9 1.5 1.8v1.2" />
    </>
  ),
  car: (
    <>
      <path d="M3 13l2.2-5.2A2 2 0 0 1 7 6.5h10a2 2 0 0 1 1.8 1.3L21 13v4.5a.5.5 0 0 1-.5.5H19.5M4.5 18h-1a.5.5 0 0 1-.5-.5V13h18" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M8.8 18h6.4" />
    </>
  ),
  vault: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5V7M12 17v-1.5M15.5 12H17M7 12h1.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M20 20l-5-5" />
    </>
  ),
  gavel: (
    <>
      <path d="M14.5 12.5l-8 8a2.12 2.12 0 0 1-3-3l8-8" />
      <path d="M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
};

function Icon({ name }: { name: ServiceIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-6 h-6 sm:w-7 sm:h-7"
    >
      {iconPaths[name]}
    </svg>
  );
}

type Props = {
  /** Short label above the title. */
  eyebrow?: string;
  /** Title, white part. */
  title?: string;
  /** Title, red part. */
  titleAccent?: string;
  intro?: string;
  /** Button in the heading cell. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Section id for in-page links. */
  id?: string;
  className?: string;
};

export default function ServicesGrid({
  eyebrow = "What We Do",
  title = "Our",
  titleAccent = "Services",
  intro = "Based in Miami. Available worldwide. Pick a service and we take it from there.",
  ctaLabel,
  ctaHref,
  id = "services-overview",
  className = "bg-bg-primary",
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-14 sm:py-20 lg:py-24 overflow-hidden noise-bg scroll-mt-[112px] ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 stagger-children">
          {/* Heading cell */}
          <div className="animate-on-scroll flex flex-col justify-center text-center sm:text-left pb-4 sm:pb-0 sm:pr-4">
            <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-3 font-body">
              {eyebrow}
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white leading-[0.95] mb-4">
              {title} <span className="text-accent-red">{titleAccent}</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed font-body mb-5 max-w-sm mx-auto sm:mx-0">
              {intro}
            </p>
            {ctaLabel && ctaHref && (
              <a
                href={ctaHref}
                className="self-center sm:self-start inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-[2px] font-body border-b-2 border-accent-red pb-1 hover:text-accent-red transition-colors"
              >
                {ctaLabel} <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>

          {services.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              className="animate-on-scroll group relative flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 rounded-xl border border-white/10 bg-bg-card/70 backdrop-blur px-4 py-4 sm:p-6 lg:p-7 overflow-hidden transition-all duration-300 hover:border-accent-red/60 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(196,30,30,0.18)]"
            >
              {/* Red bar that grows on hover */}
              <span className="absolute left-0 top-0 h-[3px] w-10 bg-accent-red transition-all duration-500 group-hover:w-full" />

              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-accent-red/40 bg-accent-red/10 text-accent-red transition-all duration-300 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_22px_rgba(196,30,30,0.55)] sm:mb-5">
                <Icon name={s.icon} />
              </span>

              <span className="flex-1 min-w-0">
                <span className="hidden sm:block text-text-muted text-[11px] uppercase tracking-[3px] font-bold font-body mb-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block font-heading text-lg sm:text-xl lg:text-[22px] font-bold uppercase text-white leading-tight mb-1 sm:mb-2">
                  {s.name}
                </span>
                <span className="block text-text-secondary text-sm leading-snug font-body">
                  {s.blurb}
                </span>
              </span>

              <span className="shrink-0 sm:mt-5 inline-flex items-center gap-2 text-accent-red text-xs font-bold uppercase tracking-[2px] font-body">
                <span className="hidden sm:inline">
                  {s.href.startsWith("/investigations") ? "Learn More" : "Hire Us"}
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
