"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Info" },
];

export function NavToggle() {
  const pathname = usePathname();

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname.startsWith("/about")) return "/about";
    return "/work"; // Default to work for /work, /work/[slug], or /
  };

  const activeTab = getActiveTab();

  return (
    <div className="relative">
      {/* Small indicator line above toggle */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white/20 rounded-full" />

      {/* Toggle Container - The Glass Pill */}
      <div
        className="relative flex items-center rounded-full p-1"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative z-10 px-5 py-2 text-sm transition-colors"
          >
            {/* The Sliding Pill - Physical Background */}
            {activeTab === item.href && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span
              className={`relative z-10 tracking-[-0.01em] transition-colors duration-200 ${
                activeTab === item.href
                  ? "text-white font-bold"
                  : "text-[#a3a3a3] font-medium hover:text-[#d4d4d4]"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
