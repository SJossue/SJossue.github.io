"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { NavBar } from "@/components/NavBar";
import type { Project } from "@/data/projects";

export type ThemeMode = "dark" | "light";

type HeroProps = {
  projects: Project[];
  accentPalette: string[];
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Hero({ projects, accentPalette, theme, onToggleTheme }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // Show all projects in carousel but render only nearby cards to avoid clutter.
  const heroCards = useMemo(() => projects, [projects]);

  const handlePrev = () =>
    setActiveIdx((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  const handleNext = () => setActiveIdx((prev) => (prev + 1) % heroCards.length);

  const onPointerDown = (e: React.PointerEvent) => setDragStartX(e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    const threshold = 50;
    if (delta > threshold) handlePrev();
    if (delta < -threshold) handleNext();
    setDragStartX(null);
  };

  const bgGradient =
    theme === "dark"
      ? "from-[#040814] via-[#050a18] to-[#030611]"
      : "from-white via-slate-50 to-white";

  return (
    <section className="relative overflow-visible border-b border-white/10">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.12),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:520px_520px,520px_520px,80px_80px,80px_80px]" />
        <img
          src="/icons/FHRIC.jpg"
          alt="Mechanical drawing"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/70 to-[#01030a]/90" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 pb-28">
        <NavBar />

        <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.7)_0%,rgba(226,232,240,0.05)_45%,rgba(2,6,23,0)_70%)] blur-3xl" />

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Portfolio
          </div>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Jossue Sarango
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/90">
            A young latino engineer with a passion for technology and innovation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3" />
        </div>

        <div
          className="relative mx-auto flex w-full max-w-6xl items-start justify-center mb-14"
          style={{ minHeight: "560px" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {heroCards.map((p, idx) => {
            const len = heroCards.length;
            let offset = idx - activeIdx;
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;
            const absOffset = Math.abs(offset);
            const isActive = absOffset === 0;
            const show = absOffset <= 3; // render up to two layers back
            const scale =
              absOffset === 0 ? 1 : absOffset === 1 ? 0.9 : absOffset === 2 ? 0.82 : 0.75;
            const translateX = offset * 220 + (absOffset === 3 ? offset * -20 : 0);
            const zIndex = 30 - absOffset * 5;
            const opacity =
              absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : absOffset === 2 ? 0.3 : 0.15;
            const maxWidth =
              absOffset === 0 ? "w-[340px]" : absOffset === 1 ? "w-[300px]" : "w-[260px]";
            return (
              <div
                key={p.title}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                className="absolute transition-all duration-500 ease-out"
              >
                <div className={`${maxWidth} max-w-full`}>
                  <ProjectCard
                    p={p}
                    accent={accentPalette[idx % accentPalette.length]}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-white/10 backdrop-blur transition hover:border-white/40 hover:bg-white/20"
              aria-label="Previous card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-white/10 backdrop-blur transition hover:border-white/40 hover:bg-white/20"
              aria-label="Next card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="group relative flex h-12 w-40 items-center rounded-full border border-white/15 bg-white/10 px-2 backdrop-blur transition hover:border-white/30 hover:bg-white/15"
              aria-label="Toggle light/dark"
            >
              <div
                className={`absolute inset-y-1 w-[48%] rounded-full bg-slate-200/15 shadow-inner transition-all duration-300 ${
                  theme === "dark" ? "left-2" : "left-[52%]"
                }`}
              />
              <div className="flex w-full items-center justify-between px-3 text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${theme === "dark" ? "text-white" : "text-slate-400"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${theme === "light" ? "text-slate-900" : "text-slate-400"}`}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m18.36 6.36-1.42-1.42M6.05 6.05 4.64 4.64m12.72 0-1.41 1.41M6.05 17.95 4.64 19.36" />
                </svg>
              </div>
            </button>
            <p className="text-sm text-slate-200/80">Light and dark modes supported.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
