"use client";

import Link from "next/link";
import { NavToggle } from "@/components/ui/NavToggle";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Left - Name */}
          <Link
            href="/work"
            className="flex flex-col leading-tight hover:text-white transition-colors"
          >
            <span className="hidden sm:inline text-base font-medium text-[#f5f5f5] tracking-wide">
              Jossue Sarango
            </span>
            <span className="hidden sm:inline text-xs text-[#737373] tracking-wide">
              Mechanical &amp; Electrical Engineer
            </span>
            <span className="sm:hidden text-sm font-medium text-[#f5f5f5] tracking-wide">
              JS
            </span>
          </Link>

          {/* Center - Toggle */}
          <NavToggle />

          {/* Right - Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jossue-sarango/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-sm text-[#737373] hover:text-white transition-colors"
            >
              LinkedIn
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
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-[#737373] hover:text-white transition-colors"
            >
              Resume
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
    </header>
  );
}
