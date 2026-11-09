"use client";

import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "OUR STORY", href: "#story" },
  { name: "MENU", href: "#menu" },
  { name: "GALLERY", href: "#gallery" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#102019]/95 text-[#f5f0e6] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-serif tracking-widest">
          EMBER <span className="text-[#c6a56b]">&</span> OLIVE
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] tracking-[0.18em] text-white/75 transition hover:text-[#c6a56b]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reservation"
            className="border border-[#c6a56b] px-5 py-3 text-[11px] tracking-widest text-[#c6a56b] transition hover:bg-[#c6a56b] hover:text-[#102019]"
          >
            BOOK A TABLE
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 md:hidden"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#102019] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-widest text-white/80 hover:text-[#c6a56b]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="border border-[#c6a56b] px-5 py-3 text-center text-xs tracking-widest text-[#c6a56b]"
            >
              BOOK A TABLE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
