"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-canvas/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="font-display text-3xl font-bold tracking-wide">
          <span className="text-white">{profile.firstName}</span>{" "}
          <span className="text-primary">{profile.lastName}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                active === link.href
                  ? "text-primary"
                  : "text-ink-muted hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary hidden lg:inline-flex">
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-canvas/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  active === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-ink-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
