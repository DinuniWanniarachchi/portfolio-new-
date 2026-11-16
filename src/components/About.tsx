import { education, profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
            About
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Code that feels considered.
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="border-t border-line pt-8">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">
                Education
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">
                {education.school}
              </h3>
              <p className="mt-2 text-muted">{education.degree}</p>
              <p className="mt-1 text-sm text-muted/80">{education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
