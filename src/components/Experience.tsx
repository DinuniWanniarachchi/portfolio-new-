import { experience } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line bg-bg-elevated/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
            Experience
          </p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Where I&apos;ve been building.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <Reveal key={job.role + job.period} delay={index * 80}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12">
                <div>
                  <p className="text-sm text-accent">{job.period}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-2 text-muted">{job.company}</p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
