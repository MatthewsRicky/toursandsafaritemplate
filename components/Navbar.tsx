"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Our Story", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 text-white transition-all duration-300 ${
        isScrolled
          ? "bg-emerald-950/70 shadow-[0_12px_30px_rgba(2,6,23,0.2)] backdrop-blur-xl"
          : "bg-emerald-950/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="text-xl font-bold tracking-wide transition hover:scale-[1.02]"
        >
          Trademark Tours
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:scale-105 hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-200 hover:scale-105 hover:bg-amber-300"
          >
            Book a Safari
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </span>
        </button>
      </nav>

      {isMobileOpen && (
        <div className="border-t border-white/10 bg-emerald-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5 hover:text-amber-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 rounded-full bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-slate-900"
            >
              Book a Safari
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
