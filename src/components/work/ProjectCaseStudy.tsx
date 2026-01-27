"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { FadeInView } from "@/components/effects/FadeInView";

type ProjectCaseStudyProps = {
  project: Project;
  prevProject: Project;
  nextProject: Project;
};

export function ProjectCaseStudy({
  project,
  prevProject,
  nextProject,
}: ProjectCaseStudyProps) {
  return (
    <article className="pt-24 pb-8 md:pt-28 md:pb-16">
      {/* Hero Section */}
      <header className="py-8 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInView>
            {project.category && (
              <span className="text-sm text-[#525252] tracking-wider uppercase">
                {project.category}
              </span>
            )}
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-6 text-xl text-[#a3a3a3]">{project.subtitle}</p>
            )}
          </FadeInView>
        </div>
      </header>

      {/* Hero Image */}
      {project.heroImage && (
        <FadeInView className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeInView>
      )}

      {/* Project Meta */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/[0.04] py-8">
              {project.role && (
                <div>
                  <span className="text-sm text-[#525252] tracking-wider uppercase">
                    Role
                  </span>
                  <p className="mt-2 text-[#d4d4d4]">{project.role}</p>
                </div>
              )}
              {project.timeline && (
                <div>
                  <span className="text-sm text-[#525252] tracking-wider uppercase">
                    Timeline
                  </span>
                  <p className="mt-2 text-[#d4d4d4]">{project.timeline}</p>
                </div>
              )}
              {project.tools && project.tools.length > 0 && (
                <div>
                  <span className="text-sm text-[#525252] tracking-wider uppercase">
                    Tools
                  </span>
                  <p className="mt-2 text-[#d4d4d4]">
                    {project.tools.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Problem Statement */}
      {project.problem && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInView>
              <h2 className="text-sm text-[#525252] tracking-wider uppercase mb-6">
                The Problem
              </h2>
              <p className="text-xl text-[#a3a3a3] leading-relaxed">
                {project.problem}
              </p>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInView>
              <h2 className="text-sm text-[#525252] tracking-wider uppercase mb-6">
                The Solution
              </h2>
              <p className="text-xl text-[#a3a3a3] leading-relaxed">
                {project.solution}
              </p>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <FadeInView>
              <div className="grid gap-4 md:grid-cols-2">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.04]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-12 border-t border-white/[0.04]">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInView>
              <h2 className="text-sm text-[#525252] tracking-wider uppercase mb-8">
                Results
              </h2>
              <ul className="space-y-6">
                {project.results.map((result, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 text-lg text-[#a3a3a3]"
                  >
                    <span className="text-[#404040] font-mono text-sm mt-1">
                      0{i + 1}
                    </span>
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Links */}
      {(project.href || project.github) && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInView>
              <div className="flex flex-wrap gap-4">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/[0.08] border border-white/[0.1] rounded-full hover:bg-white/[0.12] hover:border-white/[0.2] transition-all"
                  >
                    View Live
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#a3a3a3] border border-white/[0.08] rounded-full hover:text-white hover:border-white/[0.15] transition-all"
                  >
                    View Source
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.3-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                )}
              </div>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-[#737373] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
              <div className="text-left">
                <span className="text-xs text-[#525252] uppercase tracking-wider">
                  Previous
                </span>
                <p className="text-sm font-medium">{prevProject.title}</p>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-[#737373] hover:text-white transition-colors sm:text-right"
            >
              <div className="text-left sm:text-right">
                <span className="text-xs text-[#525252] uppercase tracking-wider">
                  Next
                </span>
                <p className="text-sm font-medium">{nextProject.title}</p>
              </div>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </article>
  );
}
