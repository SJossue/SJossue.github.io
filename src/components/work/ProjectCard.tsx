"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0f0f0f] transition-all duration-500 hover:border-white/[0.12]">
          {/* Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#141414] to-[#0a0a0a] flex items-center justify-center">
                <span className="text-[#333333] text-sm tracking-wider uppercase">
                  {project.title}
                </span>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-10 space-y-5">
            {/* Category label */}
            {project.category && (
              <span className="text-xs text-[#525252] tracking-wider uppercase">
                {project.category}
              </span>
            )}

            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#f5f5f5] tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-base text-[#737373]">{project.subtitle}</p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-[#737373] border border-white/[0.06] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View indicator */}
            <div className="flex items-center gap-2 pt-3 text-sm text-[#525252] group-hover:text-[#a3a3a3] transition-colors">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
