// One-line "where we are" statement with a map pin. Franck's base is Miami,
// Florida; protection services deploy worldwide, training runs in South
// Florida and travels to groups across the U.S. Keep the wording consistent
// with src/lib/franck-ai/knowledge.ts.

export const BASE_LOCATION = "Miami, Florida";

type Props = {
  /** The part after the pin, before the highlighted part. */
  lead?: string;
  /** Highlighted (blue) tail. */
  highlight?: string;
  className?: string;
};

export default function LocationLine({
  lead = `Based in ${BASE_LOCATION}`,
  highlight = "Protection services worldwide",
  className = "",
}: Props) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-white/90 text-sm sm:text-base uppercase tracking-[2px] font-bold font-body ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-accent-blue-light"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
          fill="currentColor"
        />
      </svg>
      <span>{lead}</span>
      {highlight && (
        <>
          <span className="text-accent-blue-light" aria-hidden="true">
            &middot;
          </span>
          <span className="text-accent-blue-light">{highlight}</span>
        </>
      )}
    </p>
  );
}
