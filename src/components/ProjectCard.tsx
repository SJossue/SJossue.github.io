import { Badge } from "@/components/Badge";
import type { Project } from "@/data/projects";

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function ProjectCard({
  p,
  accent = "#22d3ee",
}: {
  p: Project;
  accent?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl outline outline-1 outline-white/5 backdrop-blur">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${accent}33, transparent 35%), radial-gradient(circle at 80% 0%, #f472b633, transparent 40%), linear-gradient(120deg, ${accent}0d, transparent 50%, #c084fc0f)`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative flex flex-col gap-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner">
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="aspect-square w-full object-cover"
            />
          ) : (
            <div className="aspect-square w-full bg-gradient-to-br from-slate-800 via-slate-900 to-black">
              <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-wide text-slate-300/70">
                Project visual
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-tight text-white">
            {p.title}
          </h3>
          {p.subtitle ? (
            <p className="mt-1 text-sm text-slate-200/80">{p.subtitle}</p>
          ) : null}
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-slate-200">
        {p.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {(p.href || p.github) && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {p.href ? <LinkButton href={p.href}>Live</LinkButton> : null}
          {p.github ? <LinkButton href={p.github}>Code</LinkButton> : null}
        </div>
      )}
    </div>
  );
}
