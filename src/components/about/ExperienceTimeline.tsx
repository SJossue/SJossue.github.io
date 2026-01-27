"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/effects/FadeInView";
import type { ExperienceItem } from "@/data/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section label */}
        <FadeInView className="mb-8">
          <span className="text-[#404040] text-xs tracking-[0.3em] uppercase">
            Journey
          </span>
        </FadeInView>

        {/* Heading */}
        <FadeInView className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] tracking-tight">
            Experience
          </h2>
        </FadeInView>

        {/* Timeline */}
        <div className="relative">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#333333] to-transparent" />

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-[#525252] ring-4 ring-[#0a0a0a]"
              />

              {/* Content */}
              <div className="space-y-3">
                {/* Date */}
                <span className="text-xs font-medium text-[#525252] tracking-wider uppercase">
                  {item.date}
                </span>

                {/* Title & Org */}
                <div>
                  <h3 className="text-lg font-semibold text-[#f5f5f5] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#737373] mt-1">{item.org}</p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mt-4">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + bulletIndex * 0.05 + 0.3,
                      }}
                      className="flex items-start gap-3 text-sm text-[#a3a3a3] leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#404040] shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
