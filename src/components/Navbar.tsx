"use client";

import { useState, useEffect } from "react";
import { routes } from "@/lib/links";

type Child = { label: string; href: string; desc: string; external?: boolean };
type NavLink = { label: string; href: string; children?: Child[] };

const navLinks: NavLink[] = [
  { label: "Workshops", href: routes.workshops },
  {
    label: "Training",
    href: routes.training,
    children: [
      {
        label: "Online Training",
        href: routes.trainingOnline,
        desc: "Live sessions with Franck via Zoom",
      },
      {
        label: "Private Training",
        href: routes.trainingPrivate,
        desc: "One-on-one, built around you",
      },
      {
        label: "Group Training",
        href: routes.trainingGroup,
        desc: "Teams, families & organizations",
      },
      {
        label: "EPS Training",
        href: routes.trainingEps,
        desc: "Executive protection specialist track",
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
        className={`fixed top-0 left-0 right-0 z-50 h-[112px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
          scrolled ? "nav-neon-scrolled" : "nav-neon"
        }`}
      >
        {/* Animated neon sweep on the bottom edge */}
        <span className="nav-sweep" aria-hidden />

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="FrancktheSolution"
            className="h-[104px] lg:h-[92px] w-auto drop-shadow-[0_0_14px_rgba(46,114,184,0.45)]"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="nav-neon-link flex items-center gap-1 text-[13px] uppercase tracking-[1.5px] font-body whitespace-nowrap"
                >
                  {link.label}
                  <span className="text-[9px] mt-0.5 transition-transform duration-300 group-hover:rotate-180 group-hover:text-accent-blue-light">
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
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
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
                className="nav-neon-link text-[13px] uppercase tracking-[1.5px] font-body whitespace-nowrap"
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex items-center gap-3 ml-1">
            <a
              href={routes.training}
              className="px-5 py-2.5 border border-accent-blue-light/50 text-accent-blue-light text-[13px] font-bold uppercase tracking-[1.5px] rounded hover:bg-accent-blue hover:text-white hover:border-accent-blue hover:shadow-[0_0_22px_rgba(46,114,184,0.45)] transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
            >
              Train With Us
            </a>
            <a
              href={routes.hireUs}
              className="px-5 py-2.5 bg-accent-blue text-white text-[13px] font-bold uppercase tracking-[1.5px] rounded ring-1 ring-accent-blue/40 hover:bg-accent-blue-dark hover:ring-accent-blue-light hover:shadow-[0_0_22px_rgba(46,114,184,0.55)] transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
            >
              Hire Us
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden group flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-accent-blue-light shadow-[0_0_8px_#6ca8e2] transition-all group-hover:w-7" />
          <span className="block w-6 h-0.5 bg-white shadow-[0_0_6px_rgba(108,168,226,0.7)]" />
          <span className="block w-6 h-0.5 bg-accent-blue-light shadow-[0_0_8px_#6ca8e2] transition-all group-hover:w-7" />
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
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
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
          <div className="mt-2 flex flex-col items-center gap-3 w-full max-w-xs px-8">
            <a
              href={routes.hireUs}
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-10 py-4 bg-accent-blue text-white text-lg font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark transition-all duration-300"
            >
              Hire Us
            </a>
            <a
              href={routes.training}
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-10 py-4 border border-accent-blue-light/50 text-accent-blue-light text-lg font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300"
            >
              Train With Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
