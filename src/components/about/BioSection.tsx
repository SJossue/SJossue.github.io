"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/effects/FadeInView";

export function BioSection() {
  return (
    <section className="spotlight relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section label */}
        <FadeInView className="mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[#525252] text-xs tracking-[0.3em] uppercase">
              About Me
            </span>
          </div>
        </FadeInView>

        {/* Large statement */}
        <FadeInView>
          <h1 className="text-4xl md:text-6xl font-medium text-[#e5e5e5] leading-[1.2] tracking-tight">
            I&apos;m passionate about building things that{" "}
            <em className="font-serif italic text-gradient-warm">
              work beautifully.
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
          This is my story—alongside some snapshots from the journey so far.
        </motion.p>
      </div>
    </section>
  );
}
