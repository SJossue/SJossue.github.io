"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

type FadeInViewProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer";
};

export function FadeInView({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  once = true,
  amount = 0.3,
  as = "div",
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </MotionComponent>
  );
}
