"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  textRevealContainer,
  textRevealChar,
  wordRevealContainer,
  wordReveal
} from "@/lib/animations";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  mode?: "chars" | "words";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

export function AnimatedText({
  text,
  className = "",
  once = true,
  mode = "words",
  as = "p",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const Tag = as;

  if (mode === "chars") {
    const chars = text.split("");

    return (
      <Tag ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealContainer}
          aria-hidden="true"
          className="inline-block"
        >
          {chars.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={textRevealChar}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
        <span className="sr-only">{text}</span>
      </Tag>
    );
  }

  const words = text.split(" ");

  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={wordRevealContainer}
        aria-hidden="true"
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordReveal}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
