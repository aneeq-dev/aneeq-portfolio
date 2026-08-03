"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactHighlights, profile } from "@/data/content";

type FormStatus = "idle" | "sending" | "success" | "error";

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
    <section id="contact" className="bg-[#121212] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Talk For your Next Project(s)</h2>
          <p className="section-subtitle mx-auto">
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-4">
              {contactHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-muted">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-5 rounded-xl border border-white/5 bg-surface p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-canvas">
                  <img
                    src="/img/icons/gmail-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm text-ink-dim">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-0.5 block text-lg font-semibold text-white hover:text-primary"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-canvas">
                  <img
                    src="/img/icons/phone-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm text-ink-dim">Phone</p>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="mt-0.5 block text-lg font-semibold text-white hover:text-primary"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-canvas">
                  <img
                    src="/img/icons/whatsapp-brand.svg"
                    alt=""
                    className="size-5 object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm text-ink-dim">WhatsApp</p>
                  <a
                    href="https://wa.me/923137390852"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 block text-lg font-semibold text-white hover:text-primary"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-canvas text-primary">
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
                </span>
                <div>
                  <p className="text-sm text-ink-dim">Location</p>
                  <p className="mt-0.5 text-lg font-semibold text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-white/5 bg-surface p-6 shadow-card md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Full Name *
                </span>
                <input
                  required
                  name="name"
                  disabled={status === "sending"}
                  className="w-full rounded-md border border-white/10 bg-canvas px-4 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Email Address *
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  disabled={status === "sending"}
                  className="w-full rounded-md border border-white/10 bg-canvas px-4 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">
                  Phone Number
                </span>
                <input
                  name="phone"
                  disabled={status === "sending"}
                  className="w-full rounded-md border border-white/10 bg-canvas px-4 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60"
                  placeholder="+92 ..."
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-ink-muted">Subject</span>
                <input
                  name="subject"
                  disabled={status === "sending"}
                  className="w-full rounded-md border border-white/10 bg-canvas px-4 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60"
                  placeholder="Project inquiry"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm text-ink-muted">
                  Message *
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-md border border-white/10 bg-canvas px-4 py-3 text-sm text-white outline-none transition focus:border-primary disabled:opacity-60"
                  placeholder="Tell me about your project..."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
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
              <p className="mt-4 text-sm text-primary">
                Thanks! Your message was sent to {profile.email}. I&apos;ll get
                back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">
                {errorMessage} Or email me at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="underline hover:text-primary"
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
