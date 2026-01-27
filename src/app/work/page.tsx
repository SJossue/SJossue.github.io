"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/work/ProjectCard";
import { FadeInView } from "@/components/effects/FadeInView";
import { projects } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";

export default function WorkPage() {
  return (
    <div>
      {/* Hero Section with Spotlight */}
      <section className="spotlight relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          {/* Section label */}
          <FadeInView className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[#525252] text-xs tracking-[0.3em] uppercase">
                Selected Work
              </span>
            </div>
          </FadeInView>

          {/* Large statement */}
          <FadeInView>
            <h1 className="text-4xl md:text-6xl font-medium text-[#e5e5e5] leading-[1.2] tracking-tight">
              Projects that{" "}
              <em className="font-serif italic text-gradient-warm">
                solve real problems.
              </em>
            </h1>
          </FadeInView>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-lg text-[#737373] leading-relaxed max-w-xl"
          >
            A collection of work spanning mechanical systems, embedded software, and full-stack development.
          </motion.p>
        </div>
      </section>

      {/* Projects stack */}
      <div className="pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-16 md:space-y-24"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
