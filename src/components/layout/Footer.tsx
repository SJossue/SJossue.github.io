"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-[#525252]"
          >
            &copy; {new Date().getFullYear()} Jossue Sarango
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/SJossue"
              target="_blank"
              rel="noreferrer"
              className="text-[#525252] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jossue-sarango/"
              target="_blank"
              rel="noreferrer"
              className="text-[#525252] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jossuesarango1@gmail.com"
              className="text-[#525252] hover:text-white transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
