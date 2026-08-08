import { routes, links } from "@/lib/links";

const CONTACT_EMAIL = "info@franckthesolution.com";

const socials = [
  { label: "Instagram", href: "https://instagram.com/FranckTheSolution", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
  { label: "TikTok", href: "#", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" },
  { label: "YouTube", href: "#", path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" },
  { label: "LinkedIn", href: "#", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
];

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Workshops", href: routes.workshops },
      { label: "Training", href: routes.training },
      { label: "Shop", href: routes.shop },
      { label: "Vlog", href: routes.vlog },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Executive Protection", href: routes.hireUs },
      { label: "Investigations", href: routes.investigations },
      { label: "TheSelfDefender", href: routes.selfDefender },
      { label: "About Franck", href: routes.about },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ===== CTA BAND ===== */}
      <div
        className="relative overflow-hidden border-t border-accent-blue/40"
        style={{ background: "linear-gradient(135deg, #101A28 0%, #0C1118 55%, #0A0E14 100%)" }}
      >
        {/* grid + glow */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,168,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,168,226,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-14 sm:py-16 text-center">
          <p className="text-accent-blue-light text-xs uppercase tracking-[5px] font-bold mb-4 font-body">
            Everyone Is a Protector
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] mb-6">
            Ready to Be <span className="text-accent-blue-light">the Solution?</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-9 font-body">
            Train with Franck, hire his team, or get the tools. One standard -
            the highest one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={routes.training}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_28px_rgba(46,114,184,0.55)] hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
            >
              Train With Franck
            </a>
            <a
              href={routes.hireUs}
              className="inline-flex items-center justify-center px-8 py-4 border border-accent-blue-light/50 text-accent-blue-light text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 min-h-[52px]"
            >
              Hire Protection
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="relative bg-[#080C12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt="FrancktheSolution"
                  className="w-16 h-16 object-contain drop-shadow-[0_0_24px_rgba(46,114,184,0.4)]"
                />
                <span className="text-white text-base sm:text-lg font-heading uppercase tracking-[2px] leading-tight whitespace-nowrap">
                  FranckTheSolution
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-body max-w-xs">
                Elite executive protection, tactical training, and the tools to
                protect the people who count on you.
              </p>
              <p className="font-heading text-sm uppercase tracking-[1px] text-accent-blue-light italic">
                &ldquo;Adapting to chaos rather than resisting it.&rdquo;
              </p>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-white text-xs uppercase tracking-[3px] font-bold mb-5 font-body">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors font-body text-sm"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-accent-blue-light transition-all duration-300" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect */}
            <div>
              <p className="text-white text-xs uppercase tracking-[3px] font-bold mb-5 font-body">
                Connect
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-3 rounded-lg border border-accent-blue/30 bg-accent-blue/10 px-4 py-3 mb-5 hover:border-accent-blue-light hover:bg-accent-blue/20 transition-all"
              >
                <span className="text-accent-blue-light text-lg">✉</span>
                <span className="text-white text-sm font-body break-all group-hover:text-accent-blue-light transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <a href="https://eprotectionvip.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors font-body">
                  eProtectionVIP.com
                </a>
                <a href="https://www.skool.com/defensivetactics/about?ref=5872d5e010f741d2a991a3878f95b264" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors font-body">
                  Skool
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-accent-blue hover:bg-accent-blue hover:shadow-[0_0_18px_rgba(46,114,184,0.5)] transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d={s.path} fill="currentColor" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-text-muted text-xs font-body">
              &copy; 2026 FrancktheSolution - TactOps USA LLC. All rights reserved.
            </p>
            <p className="text-text-muted text-xs font-body">
              Lic# A 1900001 &middot; B 1900003
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
