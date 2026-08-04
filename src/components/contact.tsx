"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactHighlights, profile } from "@/data/content";

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactDetail({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-canvas text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-ink-dim">{label}</p>
        <div className="mt-0.5 text-base font-semibold text-white sm:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || "Project inquiry";
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || "Not provided",
            subject,
            message,
            _subject: `Portfolio contact — ${subject}`,
            _template: "table",
            _captcha: "false",
            _replyto: email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      const result = (await response.json()) as { success?: string | boolean };
      if (!result.success) {
        throw new Error("Unable to send message right now.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="overflow-x-hidden bg-[#121212] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title text-balance px-1">
            Let&apos;s Talk For Your Next Project
          </h2>
          <p className="section-subtitle mx-auto">
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <ul className="space-y-3 sm:space-y-4">
              {contactHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-muted sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5 overflow-hidden rounded-xl border border-white/5 bg-surface p-4 sm:mt-10 sm:p-6">
              <ContactDetail
                label="Email"
                icon={
                  <img
                    src="/img/icons/gmail-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                }
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="block break-all hover:text-primary"
                >
                  {profile.email}
                </a>
              </ContactDetail>

              <ContactDetail
                label="Phone"
                icon={
                  <img
                    src="/img/icons/phone-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                }
              >
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="block break-words hover:text-primary"
                >
                  {profile.phone}
                </a>
              </ContactDetail>

              <ContactDetail
                label="WhatsApp"
                icon={
                  <img
                    src="/img/icons/whatsapp-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                }
              >
                <a
                  href="https://wa.me/923137390852"
                  target="_blank"
                  rel="noreferrer"
                  className="block break-words hover:text-primary"
                >
                  {profile.phone}
                </a>
              </ContactDetail>

              <ContactDetail
                label="Location"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                }
              >
                <p className="break-words">{profile.location}</p>
              </ContactDetail>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="min-w-0 overflow-hidden rounded-xl border border-white/5 bg-surface p-4 shadow-card sm:p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block min-w-0 sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Full Name *
                </span>
                <input
                  required
                  name="name"
                  disabled={status === "sending"}
                  className="w-full max-w-full rounded-md border border-white/10 bg-canvas px-3 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60 sm:px-4"
                  placeholder="Your name"
                />
              </label>
              <label className="block min-w-0 sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Email Address *
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  disabled={status === "sending"}
                  className="w-full max-w-full rounded-md border border-white/10 bg-canvas px-3 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60 sm:px-4"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block min-w-0 sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Phone Number
                </span>
                <input
                  name="phone"
                  disabled={status === "sending"}
                  className="w-full max-w-full rounded-md border border-white/10 bg-canvas px-3 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60 sm:px-4"
                  placeholder="+92 ..."
                />
              </label>
              <label className="block min-w-0 sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">Subject</span>
                <input
                  name="subject"
                  disabled={status === "sending"}
                  className="w-full max-w-full rounded-md border border-white/10 bg-canvas px-3 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60 sm:px-4"
                  placeholder="Project inquiry"
                />
              </label>
              <label className="block min-w-0 sm:col-span-2">
                <span className="mb-2 block text-sm text-ink-muted">
                  Message *
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  disabled={status === "sending"}
                  className="w-full max-w-full resize-y rounded-md border border-white/10 bg-canvas px-3 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60 sm:resize-none sm:px-4"
                  placeholder="Tell me about your project..."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 break-words text-sm text-primary">
                Thanks! Your message was sent to {profile.email}. I&apos;ll get
                back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 break-words text-sm text-red-400">
                {errorMessage} Or email me at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all underline hover:text-primary"
                >
                  {profile.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
