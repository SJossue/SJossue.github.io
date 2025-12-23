import type { ExperienceItem } from "@/data/experience";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200/80">
          {item.date}
        </p>
        <h3 className="text-lg font-semibold leading-tight text-white">
          {item.title}
        </h3>
        <p className="text-sm text-slate-200/80">{item.org}</p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
