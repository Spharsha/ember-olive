"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-saffron/15 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-cream sm:text-2xl"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-chilli"
          />
          Ember <span className="text-saffron">&</span> Olive
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-cream/75 transition hover:text-saffron"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reservation"
            className="rounded-full bg-chilli px-6 py-2.5 text-sm font-medium text-white transition hover:bg-chilli-dark"
          >
            Book a Table
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-saffron/15 bg-ink px-5 pb-6 pt-4 md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-cream/10 py-4 text-base text-cream/85 hover:text-saffron"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-full bg-chilli px-5 py-3.5 text-center text-sm font-medium text-white"
            >
              Book a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
