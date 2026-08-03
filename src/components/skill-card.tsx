"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Skill = {
  name: string;
  icon: string;
  category: string;
  description: string;
};

type TipPos = {
  top: number;
  left: number;
  arrowLeft: number;
  placement: "top" | "bottom";
};

export function SkillCard({ skill }: { skill: Skill }) {
  const tipId = useId();
  const cardRef = useRef<HTMLElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<TipPos | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const updatePosition = useCallback(() => {
    const card = cardRef.current;
    const tip = tipRef.current;
    if (!card || !tip) return;

    const rect = card.getBoundingClientRect();
    const tipWidth = tip.offsetWidth || 288;
    const tipHeight = tip.offsetHeight || 150;
    const gap = 14;
    const padding = 12;

    let left = rect.left + rect.width / 2 - tipWidth / 2;
    left = Math.max(
      padding,
      Math.min(left, window.innerWidth - tipWidth - padding),
    );

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const preferTop =
      spaceAbove >= tipHeight + gap || spaceAbove >= spaceBelow;

    const placement: TipPos["placement"] = preferTop ? "top" : "bottom";
    const top = preferTop
      ? rect.top - tipHeight - gap
      : rect.bottom + gap;

    const cardCenterX = rect.left + rect.width / 2;
    const arrowLeft = Math.min(
      Math.max(cardCenterX - left, 20),
      tipWidth - 20,
    );

    setPos({ top, left, arrowLeft, placement });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }

    updatePosition();

    const onScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open, updatePosition]);

  return (
    <article
      ref={cardRef}
      className="group relative flex cursor-default flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-surface px-4 py-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow focus-within:border-primary/50 focus-within:shadow-glow focus:outline-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      tabIndex={0}
      aria-describedby={open && pos ? tipId : undefined}
    >
      <div className="relative flex size-14 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-canvas p-2.5">
        <Image
          src={skill.icon}
          alt=""
          width={40}
          height={40}
          className="size-10 object-contain"
        />
      </div>
      <span className="text-center text-sm font-medium leading-snug text-ink-muted group-hover:text-white">
        {skill.name}
      </span>
      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
        {skill.category}
      </span>

      {mounted &&
        open &&
        createPortal(
          <div
            ref={tipRef}
            id={tipId}
            role="tooltip"
            style={
              pos
                ? { top: pos.top, left: pos.left, visibility: "visible" }
                : { top: 0, left: 0, visibility: "hidden" }
            }
            className="pointer-events-none fixed z-[100] w-72"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-[#161616]/95 shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,1,79,0.1)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 size-20 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative p-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-canvas">
                    <Image
                      src={skill.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="size-7 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-sm font-bold leading-snug text-white">
                      {skill.name}
                    </p>
                    <span className="mt-1.5 inline-flex rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="my-3 h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />

                <p className="text-[13px] leading-relaxed text-ink-muted">
                  {skill.description}
                </p>
              </div>

              <div
                aria-hidden
                className={`absolute size-2.5 -translate-x-1/2 rotate-45 border-primary/30 bg-[#161616] ${
                  pos?.placement === "bottom"
                    ? "-top-[5px] border-l border-t"
                    : "-bottom-[5px] border-b border-r"
                }`}
                style={{ left: pos?.arrowLeft ?? "50%" }}
              />
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}
