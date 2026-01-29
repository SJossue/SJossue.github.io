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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* ============================================
            THE CARD CONTAINER
            - Clips the browser at bottom
            ============================================ */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "#0e0e0e",
            border: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {/* Hover background overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #161616 0%, #101010 100%)",
            }}
          />

          {/* Inner content */}
          <div className="relative p-4 pb-0 md:p-5 md:pb-0">
            {/* ============================================
                HEADER - Two Row Layout
                ============================================ */}
            <div className="mb-3 md:mb-4">
              {/* Row 1: Title + Arrow */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.02em]">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              {/* Row 2: Metadata with fade effect */}
              <p className="mt-1 text-[13px] md:text-sm tracking-[-0.01em]">
                <span className="text-[#a3a3a3]">
                  {project.organization}, '{project.year.toString().slice(-2)}
                </span>
                {project.tagline && (
                  <>
                    <span className="text-[#525252]">&nbsp;—&nbsp;</span>
                    <span className="text-[#525252]">{project.tagline}</span>
                  </>
                )}
              </p>
            </div>

            {/* ============================================
                BROWSER VIEWPORT
                - Clips ~12px off the bottom of browser
                ============================================ */}
            <div
              className="relative overflow-hidden mx-1 md:mx-2"
              style={{ marginBottom: "-12px" }}
            >
              {/* ============================================
                  THE BROWSER WINDOW
                  - Default: pushed down 12px (bottom clipped)
                  - Hover: slides up to y=0 (fully visible)
                  ============================================ */}
              <motion.div
                className="relative rounded-lg overflow-hidden"
                style={{
                  y: 12,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  y: 0,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
              >
                {/* ============================================
                    WINDOW CHROME
                    ============================================ */}
                <div
                  className="relative flex items-center justify-between px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #ff6058 0%, #e5443c 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                      }}
                    />
                    <div
                      className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #ffca2c 0%, #dea81a 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                      }}
                    />
                    <div
                      className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #2dd634 0%, #24a82c 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                      }}
                    />
                  </div>

                  {/* Plus button */}
                  <div className="text-[#3a3a3a]">
                    <svg
                      className="w-3 h-3 md:w-3.5 md:h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>

                {/* ============================================
                    IMAGE CONTENT
                    ============================================ */}
                <div
                  className="relative aspect-video overflow-hidden"
                  style={{ background: "#000000" }}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                      <span className="text-[#2a2a2a] text-xs md:text-sm tracking-wider uppercase">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
