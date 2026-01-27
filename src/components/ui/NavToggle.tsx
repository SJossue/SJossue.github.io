"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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
    <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl p-1 shadow-lg shadow-black/20">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors ${
            activeTab === item.href
              ? "text-white"
              : "text-[#737373] hover:text-[#a3a3a3]"
          }`}
        >
          {activeTab === item.href && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute inset-0 rounded-full bg-white/[0.08] backdrop-blur-sm"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
