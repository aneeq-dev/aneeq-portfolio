import { profile } from "@/data/content";
import { SocialIcon } from "@/components/social-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-x-hidden border-t border-white/5 bg-canvas py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:gap-8 md:text-left lg:px-8">
        <a href="#home" className="shrink-0 font-display text-2xl font-bold">
          <span className="text-white">{profile.firstName}</span>{" "}
          <span className="text-primary">{profile.lastName}</span>
        </a>

        <p className="max-w-sm break-words text-sm text-ink-dim md:max-w-none">
          Copyright © {year}, {profile.name}. All Rights Reserved
        </p>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-end">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-ink-muted transition hover:border-primary hover:text-primary"
            >
              <SocialIcon name={social.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
