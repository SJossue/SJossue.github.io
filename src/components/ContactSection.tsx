"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/effects/FadeInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contacts = [
  {
    label: "Academic",
    value: "js2823@njit.edu",
    href: "mailto:js2823@njit.edu",
  },
  {
    label: "Professional",
    value: "jossuesarango1@gmail.com",
    href: "mailto:jossuesarango1@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "jossue-sarango",
    href: "https://www.linkedin.com/in/jossue-sarango/",
  },
  {
    label: "GitHub",
    value: "SJossue",
    href: "https://github.com/SJossue",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Section label */}
        <FadeInView className="mb-8">
          <span className="text-[#404040] text-xs tracking-[0.3em] uppercase">
            Contact
          </span>
        </FadeInView>

        {/* Heading */}
        <FadeInView className="mb-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight">
            Let&apos;s work together
          </h2>
        </FadeInView>

        {/* Subtitle */}
        <FadeInView className="mb-16">
          <p className="text-lg text-[#737373] max-w-lg mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </FadeInView>

        {/* Contact links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              variants={fadeInUp}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-[#0f0f0f] hover:border-white/[0.12] transition-all"
            >
              <span className="block text-xs text-[#525252] tracking-wider uppercase mb-2">
                {contact.label}
              </span>
              <span className="block text-[#d4d4d4] group-hover:text-white transition-colors">
                {contact.value}
              </span>

              {/* Arrow */}
              <svg
                className="absolute top-6 right-6 w-4 h-4 text-[#404040] group-hover:text-[#737373] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
