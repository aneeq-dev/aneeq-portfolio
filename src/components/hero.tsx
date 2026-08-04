"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ChevronDown, FileText } from "lucide-react";
import { profile } from "@/data/content";
import { SocialIcon } from "@/components/social-icon";

const rotatingTitles = [
  "Senior Full-Stack Engineer",
  "Senior Next.js Specialist",
  "Senior React Native Developer",
  "Senior Frontend Engineer",
];

function HeroTip({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`group/tip relative inline-flex ${className}`.trim()}>
      {children}
      <span
        role="tooltip"
      className="pointer-events-none absolute -top-12 left-1/2 z-20 w-max max-w-[220px] -translate-x-1/2 rounded-lg border border-primary/30 bg-[#161616]/95 px-3 py-1.5 text-center text-xs font-medium leading-snug text-white opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-150 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100"
      >
        {label}
        <span
          aria-hidden
          className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-primary/30 bg-[#161616]"
        />
      </span>
    </span>
  );
}

function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"bottom" | "top" | "right">(
    "bottom",
  );
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({
    top: "100%",
    left: 0,
    marginTop: 12,
  });
  const [ready, setReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setReady(false);
    }, 120);
  };

  const updatePlacement = () => {
    const button = buttonRef.current;
    const menu = menuRef.current;
    if (!button || !menu) return;

    const btn = button.getBoundingClientRect();
    const menuW = menu.offsetWidth || 448;
    const menuH = menu.offsetHeight || 280;
    const gap = 12;
    const pad = 12;

    const spaceBelow = window.innerHeight - btn.bottom - pad;
    const spaceAbove = btn.top - pad;
    const spaceRight = window.innerWidth - btn.right - pad;

    const fitsBottom = spaceBelow >= menuH + gap;
    const fitsTop = spaceAbove >= menuH + gap;
    const fitsRight = spaceRight >= menuW + gap;

    let next: "bottom" | "top" | "right" = "bottom";
    if (fitsBottom) next = "bottom";
    else if (fitsRight) next = "right";
    else if (fitsTop) next = "top";
    else {
      const ranked = [
        { key: "bottom" as const, space: spaceBelow },
        { key: "right" as const, space: spaceRight },
        { key: "top" as const, space: spaceAbove },
      ].sort((a, b) => b.space - a.space);
      next = ranked[0].key;
    }

    setPlacement(next);

    if (next === "bottom") {
      const maxLeft = window.innerWidth - menuW - pad;
      const left = Math.max(pad, Math.min(btn.left, maxLeft)) - btn.left;
      setMenuStyle({
        top: "100%",
        left,
        marginTop: gap,
        right: "auto",
        bottom: "auto",
        marginBottom: 0,
        marginLeft: 0,
      });
    } else if (next === "top") {
      const maxLeft = window.innerWidth - menuW - pad;
      const left = Math.max(pad, Math.min(btn.left, maxLeft)) - btn.left;
      setMenuStyle({
        bottom: "100%",
        left,
        marginBottom: gap,
        top: "auto",
        right: "auto",
        marginTop: 0,
        marginLeft: 0,
      });
    } else {
      const maxTop = window.innerHeight - menuH - pad;
      const top = Math.max(pad, Math.min(btn.top, maxTop)) - btn.top;
      setMenuStyle({
        left: "100%",
        top,
        marginLeft: gap,
        right: "auto",
        bottom: "auto",
        marginTop: 0,
        marginBottom: 0,
      });
    }

    setReady(true);
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePlacement();
    const frame = requestAnimationFrame(updatePlacement);
    const onResize = () => updatePlacement();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setReady(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setReady(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      ref={rootRef}
      className="relative flex w-full sm:inline-flex sm:w-auto"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={buttonRef}
        type="button"
        className="btn-primary w-full justify-center gap-2 sm:w-auto"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          if (open) {
            setOpen(false);
            setReady(false);
          } else {
            openMenu();
          }
        }}
        onFocus={openMenu}
      >
        Download Resume
        <ChevronDown
          className={`size-4 transition ${
            open
              ? placement === "right"
                ? "-rotate-90"
                : "rotate-180"
              : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label="Choose a resume"
          style={{
            ...menuStyle,
            visibility: ready ? "visible" : "hidden",
          }}
          className="absolute z-30 w-full min-w-full overflow-hidden rounded-xl border border-primary/25 bg-[#161616]/95 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-[28rem] sm:min-w-[28rem]"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="border-b border-white/5 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Choose a version
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Three tailored resumes for different roles
            </p>
          </div>

          <ul className="p-2">
            {profile.resumes.map((resume) => (
              <li key={resume.href}>
                <a
                  role="menuitem"
                  href={encodeURI(resume.href)}
                  download
                  onClick={() => {
                    setOpen(false);
                    setReady(false);
                  }}
                  className="flex items-start gap-3 rounded-lg px-3 py-3 transition hover:bg-primary/10"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <FileText className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">
                      {resume.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink-dim">
                      {resume.description}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = rotatingTitles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 1400);
          }
        } else if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % rotatingTitles.length);
        }
      },
      deleting ? 40 : 90,
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-canvas bg-grid-lines py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="order-2 animate-fade-up lg:order-1">
          <p className="section-eyebrow">{profile.heroIntro}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-primary">{profile.firstName}</span>{" "}
            <span className="text-white">{profile.lastName}</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-ink-muted sm:text-2xl">
            {display}
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-blink bg-primary align-middle sm:h-7" />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Based in {profile.location}.{" "}
            <span className="font-semibold text-primary">{profile.years}+ years</span>{" "}
            shipping scalable web platforms, APIs, and React Native apps across
            Fintech, Healthcare, and EdTech.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <ResumeDropdown />
            <HeroTip
              label="Let's talk about your next project"
              className="w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="btn-outline w-full justify-center sm:w-auto"
              >
                Contact Me
              </a>
            </HeroTip>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <HeroTip key={social.name} label={social.tooltip}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex size-11 items-center justify-center rounded-md border border-primary/30 bg-surface text-primary transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <SocialIcon name={social.icon} className="size-5" />
                </a>
              </HeroTip>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-2 lg:max-w-none">
          <div className="animate-fade-up relative aspect-square w-[min(100%,440px)] drop-shadow-[0_0_40px_rgba(255,1,79,0.25)] [animation-delay:180ms]">
            <div className="relative size-full animate-float">
              <Image
                src="/img/picofme2.png"
                alt={profile.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
