"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavToggle } from "@/components/ui/NavToggle";

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-6 md:px-10 lg:px-16 py-5">
        <nav className="relative flex items-center justify-between">
          {/* Left: Identity */}
          <Link
            href="/work"
            className="group flex flex-col leading-tight transition-colors flex-shrink-0"
          >
            <span className="hidden sm:inline text-base font-semibold text-[#f5f5f5] tracking-[-0.01em] group-hover:text-white transition-colors">
              Jossue Sarango
            </span>
            <span className="hidden sm:inline text-sm text-[#a3a3a3] tracking-normal group-hover:text-[#d4d4d4] transition-colors">
              Mechanical Engineer
            </span>
            {/* Mobile: Initials only */}
            <span className="sm:hidden text-sm font-semibold text-[#f5f5f5] tracking-wide">
              JS
            </span>
          </Link>

          {/* Center: Nav Toggle (absolutely centered) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <NavToggle />
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/jossue-sarango/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200"
            >
              <span>LinkedIn</span>
              <svg
                className="w-3 h-3"
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
            <a
              href="/resume/Jossue_Sarango_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200"
            >
              <span>Resume</span>
              <svg
                className="w-3 h-3"
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
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
