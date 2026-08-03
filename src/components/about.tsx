import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="relative overflow-x-hidden bg-canvas pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md px-3 pb-6">
          <div className="absolute inset-0 rounded-2xl border border-primary/30" />
          <div className="relative m-3 overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-card">
            <Image
              src="/img/picofme22.png"
              alt={`${profile.name} at work`}
              width={640}
              height={760}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-6 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
            {profile.years}+ Years Experience
          </div>
        </div>

        <div>
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">{profile.aboutTitle}</h2>
          <p className="section-subtitle">{profile.aboutBody}</p>

          <ul className="mt-8 space-y-3">
            {profile.aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink-muted">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
