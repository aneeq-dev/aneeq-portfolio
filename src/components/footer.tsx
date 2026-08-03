import { profile } from "@/data/content";
import { SocialIcon } from "@/components/social-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-canvas py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold">
          <span className="text-white">{profile.firstName}</span>{" "}
          <span className="text-primary">{profile.lastName}</span>
        </a>

        <p className="text-center text-sm text-ink-dim">
          Copyright © {year} , {profile.name}. All Rights Reserved
        </p>

        <div className="flex gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex size-10 items-center justify-center rounded-md border border-white/10 text-ink-muted transition hover:border-primary hover:text-primary"
            >
              <SocialIcon name={social.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
