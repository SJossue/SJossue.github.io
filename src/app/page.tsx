"use client";

import { useState } from "react";
import { Hero, type ThemeMode } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { PersonalityGallery } from "@/components/PersonalityGallery";
import { AboutSection } from "@/components/AboutSection";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

const accentPalette = ["#22d3ee", "#f472b6", "#a78bfa", "#34d399"];

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      <Hero
        projects={projects}
        accentPalette={accentPalette}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <Section
        id="projects"
        title="Projects"
        eyebrow="Full list"
        className={`${
          theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.title}
              p={p}
              accent={accentPalette[idx % accentPalette.length]}
            />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        title="Experience timeline"
        eyebrow="Years in motion"
        className={`${
          theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
      >
        <div className="relative space-y-8 pl-6">
          <div className="absolute left-2 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-cyan-400/70 via-white/20 to-transparent" />
          {experience.map((item, idx) => (
            <div key={item.title} className="relative pl-3">
              <div className="absolute left-[-0.6rem] top-4 h-3 w-3 rounded-full border-2 border-cyan-300/80 bg-slate-950 shadow-[0_0_0_8px_rgba(14,165,233,0.25)]" />
              <ExperienceCard item={item} />
              {idx === experience.length - 1 ? null : (
                <div className="mt-2 h-px w-10 bg-gradient-to-r from-white/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title="About me"
        eyebrow="Who I am"
        className={`${
          theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
      >
        <AboutSection theme={theme} />
      </Section>

      <Section
        id="contact"
        title="Contact"
        eyebrow="Let’s collaborate"
        className={`${
          theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
      >
        <ContactSection theme={theme} />
      </Section>

      <Section
        id="personality"
        title="My personality"
        eyebrow="Snapshots I like"
        className={`${
          theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
      >
        <PersonalityGallery theme={theme} />
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-5xl px-4 text-sm text-slate-300/80">
          © {new Date().getFullYear()} Jossue Sarango • AuthKit-inspired portfolio
          build
        </div>
      </footer>
    </main>
  );
}
