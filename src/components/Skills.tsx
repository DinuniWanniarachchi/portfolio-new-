import { skills } from "@/data/profile";
import { Reveal } from "./Reveal";

const groups = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Databases", items: skills.databases },
  { title: "Tools", items: skills.tools },
  { title: "Soft skills", items: skills.soft },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-line bg-bg-elevated/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
            Skills
          </p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            The stack I work with daily.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-[0.22em] text-accent">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg text-ink/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
