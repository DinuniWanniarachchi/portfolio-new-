import { projects } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
            Projects
          </p>
          <h2 className="max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Selected work that shows how I think.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 100}>
              <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] md:gap-12 md:py-14">
                <div>
                  <p className="text-sm text-accent">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-muted">{project.subtitle}</p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="text-sm tracking-wide text-ink/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
