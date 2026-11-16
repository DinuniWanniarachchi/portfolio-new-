import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}
        </p>
        <p>Full Stack Developer · {profile.location}</p>
      </div>
    </footer>
  );
}
