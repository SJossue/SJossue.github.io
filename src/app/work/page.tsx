"use client";

import { motion } from "framer-motion";
import { HeroWindow } from "@/components/work/HeroWindow";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";

export default function WorkPage() {
  return (
    <div className="relative">
      {/* Global page spotlight - overhead studio light effect */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Primary spotlight - positioned high, bright center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 45% at 50% 20%, rgba(255,255,255,0.12) 0%, #1a1a1a 25%, #0a0a0a 50%, transparent 75%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <HeroWindow />
      </section>

      {/* Projects Stack */}
      <div className="relative z-10 pb-32 md:pb-40 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-16 md:space-y-20"
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
