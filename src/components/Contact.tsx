import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
            Contact
          </p>
          <h2 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something thoughtful together.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Open to full-stack roles, collaborations, and conversations about
            product engineering.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-2xl text-ink transition-colors hover:text-accent sm:text-3xl"
            >
              {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="text-lg text-muted transition-colors hover:text-ink"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent-strong"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent-strong"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
