"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/content";
import { useIsMobile } from "@/hooks/use-is-mobile";

const filters = [
  { key: "all", label: "All" },
  { key: "website", label: "Website Projects" },
  { key: "mobile", label: "Mobile Projects" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

const MOBILE_PROJECT_LIMIT = 9;

export function Projects() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.type === filter);
  }, [filter]);

  useEffect(() => {
    setExpanded(false);
  }, [filter]);

  const shouldCollapse =
    isMobile && !expanded && filtered.length > MOBILE_PROJECT_LIMIT;
  const visible = shouldCollapse
    ? filtered.slice(0, MOBILE_PROJECT_LIMIT)
    : filtered;
  const canToggle = isMobile && filtered.length > MOBILE_PROJECT_LIMIT;

  return (
    <section id="projects" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Latest Works</p>
          <h2 className="section-title">Explore My Popular Projects</h2>
          <p className="section-subtitle mx-auto">
            Website platforms and Google Play mobile apps — filter by type to
            explore each track.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((item) => {
            const active = filter === item.key;
            const count =
              item.key === "all"
                ? projects.length
                : projects.filter((p) => p.type === item.key).length;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "border-primary bg-primary text-white shadow-glow"
                    : "border-white/10 bg-surface text-ink-muted hover:border-primary/40 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`ml-1.5 tabular-nums ${
                    active ? "text-white/80" : "text-ink-dim"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => {
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {project.type === "website" ? "Website" : "Mobile"}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                </div>
              </>
            );

            const className =
              "group overflow-hidden rounded-xl border border-white/5 bg-surface shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow block";

            if (project.href) {
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {card}
                </a>
              );
            }

            return (
              <article key={project.title} className={className}>
                {card}
              </article>
            );
          })}
        </div>

        {canToggle && (
          <div className="mt-8 text-center md:hidden">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="btn-outline inline-flex items-center gap-2"
            >
              {expanded ? "Show less" : "See more"}
              <ChevronDown
                className={`size-4 transition ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-outline">
            Discuss a Project
          </a>
        </div>
      </div>
    </section>
  );
}
