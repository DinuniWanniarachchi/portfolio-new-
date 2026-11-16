import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden grain"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(212,165,116,0.12),transparent_45%),radial-gradient(ellipse_at_80%_0%,rgba(80,110,150,0.18),transparent_40%),linear-gradient(180deg,#090b0f_0%,#0d1118_55%,#090b0f_100%)]" />
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
          <Image
            src={profile.photo}
            alt={`${profile.name} graduation portrait`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="animate-image-rise object-cover object-[center_18%] opacity-70 md:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent md:via-bg/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-xl">
          <p className="animate-fade-up delay-1 mb-4 text-sm uppercase tracking-[0.28em] text-accent">
            {profile.title}
          </p>
          <h1 className="animate-fade-up delay-2 font-display text-[clamp(3rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-ink">
            {profile.name}
          </h1>
          <div className="animate-line-grow delay-3 mt-6 h-px w-24 bg-accent" />
          <p className="animate-fade-up delay-3 mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {profile.headline}
          </p>
          <div className="animate-fade-up delay-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent-strong"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
