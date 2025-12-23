type ContactSectionProps = {
  theme: "dark" | "light";
};

export function ContactSection({ theme }: ContactSectionProps) {
  const tone =
    theme === "dark" ? "bg-slate-900/60 text-slate-100" : "bg-white text-slate-900";

  return (
    <div
      className={`rounded-3xl border border-white/10 ${tone} p-6 shadow-xl backdrop-blur`}
    >
      <p className="text-sm text-slate-200/80">Best way to reach me:</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          href="mailto:js2823@njit.edu"
        >
          Academic Email
        </a>
        <a
          className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          href="mailto:jossuesarango1@gmail.com"
        >
          Professional Email
        </a>
        <a
          className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          href="https://www.linkedin.com/in/jossue-sarango/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-300/70">
        Thank You!
      </p>
    </div>
  );
}
