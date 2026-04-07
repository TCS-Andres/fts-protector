"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Workshop Details", href: "#workshop" },
  { label: "Who It's For", href: "#audience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Franck The Solution"
            className="h-[70px] w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[2px] text-text-secondary hover:text-white transition-colors duration-300 font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-6 py-2.5 bg-accent-red text-white text-sm font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] transition-all duration-300 hover:scale-[1.03]"
          >
            Secure Your Spot
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
        <div className="fixed inset-0 z-[60] bg-bg-primary/98 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl uppercase tracking-[3px] text-text-secondary hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-10 py-4 bg-accent-red text-white text-lg font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark transition-all duration-300"
          >
            Secure Your Spot
          </a>
        </div>
      )}
    </>
  );
}
