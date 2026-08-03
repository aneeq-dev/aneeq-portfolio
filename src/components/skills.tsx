"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { skillCategories, skills, type SkillCategory } from "@/data/content";
import { SkillCard } from "@/components/skill-card";
import { useIsMobile } from "@/hooks/use-is-mobile";

const MOBILE_SKILL_LIMIT = 10;

export function Skills() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SkillCategory>("All");
  const [expanded, setExpanded] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const isMobile = useIsMobile();

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    return skills.filter((skill) => {
      const matchesCategory =
        category === "All" || skill.category === category;

      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        skill.name,
        skill.category,
        skill.description,
        ...(skill.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [category, deferredQuery]);

  useEffect(() => {
    setExpanded(false);
  }, [category, deferredQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: skills.length };
    for (const skill of skills) {
      counts[skill.category] = (counts[skill.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const shouldCollapse =
    isMobile && !expanded && filtered.length > MOBILE_SKILL_LIMIT;
  const visible = shouldCollapse
    ? filtered.slice(0, MOBILE_SKILL_LIMIT)
    : filtered;
  const canToggle = isMobile && filtered.length > MOBILE_SKILL_LIMIT;

  return (
    <section id="skills" className="bg-[#121212] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">My Talent</p>
          <h2 className="section-title">Professional Skills</h2>
          <p className="section-subtitle mx-auto">
            Frontend, backend, mobile, cloud, auth/billing, testing, and
            multi-tenant SaaS — search or filter the full production stack.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-dim" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills — e.g. tRPC, React Native, Neon…"
              className="w-full rounded-xl border border-white/10 bg-surface py-3.5 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-ink-dim focus:border-primary/60 focus:shadow-glow"
              aria-label="Search skills"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-dim transition hover:bg-white/5 hover:text-white"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {skillCategories.map((item) => {
            const active = category === item;
            const count = categoryCounts[item] ?? 0;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "border-primary bg-primary text-white shadow-glow"
                    : "border-white/10 bg-surface text-ink-muted hover:border-primary/40 hover:text-white"
                }`}
              >
                {item}
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

        <p className="mt-6 text-center text-sm text-ink-dim">
          Showing{" "}
          <span className="font-semibold text-primary">{visible.length}</span>{" "}
          of {filtered.length} skills
          {deferredQuery.trim() ? (
            <>
              {" "}
              for &ldquo;
              <span className="text-ink-muted">{deferredQuery.trim()}</span>
              &rdquo;
            </>
          ) : null}
        </p>

        {filtered.length > 0 ? (
          <>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {visible.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
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
          </>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-white/10 bg-surface/50 px-6 py-14 text-center">
            <p className="text-base font-medium text-white">No skills found</p>
            <p className="mt-2 text-sm text-ink-muted">
              Try another keyword or reset the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="btn-outline mt-6"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
