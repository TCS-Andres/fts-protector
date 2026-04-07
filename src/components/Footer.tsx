export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-accent-red">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Franck The Solution"
              className="h-[60px] w-auto"
            />
            <span className="text-white text-sm font-heading uppercase tracking-wider">
              Franck The Solution
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://eprotectionvip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors font-body"
            >
              eprotectionvip.com
            </a>
            <a
              href="https://www.skool.com/defensivetactics/about?ref=5872d5e010f741d2a991a3878f95b264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors font-body"
            >
              Online Training (Skool)
            </a>
            <a
              href="https://instagram.com/FranckTheSolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors font-body"
            >
              @FranckTheSolution
            </a>
          </div>

          {/* Contact */}
          <a
            href="mailto:franck@eprotectionvip.com"
            className="text-text-secondary text-sm hover:text-white transition-colors font-body"
          >
            franck@eprotectionvip.com
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {[
            { label: "Instagram", href: "https://instagram.com/FranckTheSolution", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
            { label: "TikTok", href: "#", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" },
            { label: "YouTube", href: "#", path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" },
            { label: "LinkedIn", href: "#", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
            { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/60 hover:text-accent-red transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d={social.path} fill="currentColor" />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-text-muted text-xs font-body">
            &copy; 2026 Franck The Solution — TactOpsUSA LLC. All rights
            reserved. Lic# A 1900001 – B 1900003
          </p>
        </div>
      </div>
    </footer>
  );
}
