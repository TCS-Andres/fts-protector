"use client";

import { useState, useEffect } from "react";
import { routes, links } from "@/lib/links";

type Child = { label: string; href: string; desc: string };
type NavLink = { label: string; href: string; children?: Child[] };

const navLinks: NavLink[] = [
  { label: "Workshops", href: routes.workshops },
  { label: "Training", href: routes.training },
  {
    label: "Hire Us",
    href: routes.hireUs,
    children: [
      {
        label: "Executive Protection",
        href: routes.hireUs,
        desc: "Close protection & secure transport",
      },
      {
        label: "Investigative Services",
        href: routes.investigations,
        desc: "Surveillance, due diligence & more",
      },
    ],
  },
  { label: "TheSelfDefender", href: routes.selfDefender },
  { label: "Shop", href: routes.shop },
  { label: "Vlog", href: routes.vlog },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[90px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="FrancktheSolution"
            className="h-[90px] lg:h-[70px] w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[13px] uppercase tracking-[1.5px] text-text-secondary group-hover:text-white transition-colors duration-300 font-body whitespace-nowrap"
                >
                  {link.label}
                  <span className="text-[9px] mt-0.5 transition-transform duration-300 group-hover:rotate-180">
                    ▾
                  </span>
                </a>
                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                  <div className="w-[280px] rounded-lg border border-accent-blue/25 bg-[#101A28] shadow-[0_16px_50px_rgba(0,0,0,0.6)] p-2">
                    {link.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-4 py-3 rounded-md hover:bg-white/5 transition-colors group/item"
                      >
                        <span className="block text-[13px] uppercase tracking-[1.5px] font-bold text-white group-hover/item:text-accent-blue-light transition-colors font-body">
                          {c.label}
                        </span>
                        <span className="block text-xs text-text-muted mt-0.5 font-body normal-case tracking-normal">
                          {c.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[1.5px] text-text-secondary hover:text-white transition-colors duration-300 font-body whitespace-nowrap"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={links.workshopStripe}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-5 py-2.5 bg-accent-red text-white text-[13px] font-bold uppercase tracking-[1.5px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
          >
            $147 Early Bird
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-primary/98 flex flex-col items-center justify-center gap-7 overflow-y-auto py-20">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col items-center gap-3">
                <span className="text-xl uppercase tracking-[3px] text-white font-bold">
                  {link.label}
                </span>
                {link.children.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm uppercase tracking-[2px] text-text-secondary hover:text-accent-blue-light transition-colors"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl uppercase tracking-[3px] text-text-secondary hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={links.workshopStripe}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-10 py-4 bg-accent-red text-white text-lg font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark transition-all duration-300"
          >
            $147 Early Bird, Until July 5
          </a>
        </div>
      )}
    </>
  );
}
