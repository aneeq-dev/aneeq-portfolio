import { services } from "@/data/content";
import { SocialIcon } from "@/components/social-icon";

export function Services() {
  return (
    <section id="services" className="bg-[#121212] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">I like to make things easy and fun</p>
          <h2 className="section-title">My Special Services</h2>
          <p className="section-subtitle mx-auto">
            Full-stack web, frontend architecture, React Native apps, APIs, and
            payment systems — engineered for scale and delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="surface-card group">
              <div className="mb-5 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <SocialIcon name={service.icon} className="size-7" />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
