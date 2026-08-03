"use client";

import { useState } from "react";
import { education, experiences } from "@/data/content";

function TimelineDot({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={`absolute top-6 z-10 size-3.5 rounded-full border-2 border-primary bg-canvas shadow-[0_0_0_4px_rgba(255,1,79,0.15)] ${
        side === "left"
          ? "left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
          : "left-4 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
      }`}
    />
  );
}

export function Resume() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  return (
    <section id="resume" className="overflow-x-hidden bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">My Resume</p>
          <h2 className="section-title">Real Problem Solutions</h2>
          <p className="section-subtitle mx-auto">
            Shipping multi-tenant SaaS, fintech platforms, and cross-platform
            mobile apps from Lahore and remote teams.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {(
            [
              ["experience", "Experience"],
              ["education", "Education"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-md px-6 py-2.5 text-sm font-semibold transition ${
                tab === key
                  ? "bg-primary text-white shadow-glow"
                  : "bg-surface text-ink-muted hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {tab === "experience"
            ? experiences.map((job, index) => {
                const onLeft = index % 2 === 0;
                return (
                  <article
                    key={`${job.company}-${job.period}`}
                    className={`relative mb-10 md:w-[calc(50%-1.5rem)] ${
                      onLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <TimelineDot side={onLeft ? "left" : "right"} />
                    <div className="ml-8 rounded-xl border border-white/5 bg-surface p-6 shadow-card md:ml-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {job.period}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-white">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-ink-muted">
                        {job.role}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {job.bullets.slice(0, 3).map((bullet) => (
                          <li
                            key={bullet}
                            className="text-sm leading-relaxed text-ink-dim"
                          >
                            • {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })
            : education.map((item, index) => {
                const onLeft = index % 2 === 0;
                return (
                  <article
                    key={item.school}
                    className={`relative mb-10 md:w-[calc(50%-1.5rem)] ${
                      onLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <TimelineDot side={onLeft ? "left" : "right"} />
                    <div className="ml-8 rounded-xl border border-white/5 bg-surface p-6 shadow-card md:ml-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-white">
                        {item.school}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-ink-muted">
                        {item.degree}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                        {item.details}
                      </p>
                    </div>
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
}
