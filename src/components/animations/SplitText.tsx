"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // base delay in seconds
  staggerDelay?: number; // delay between items in seconds
  duration?: number; // duration of each animation in seconds
  splitBy?: "characters" | "words";
  animateOnView?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.02,
  duration = 0.6,
  splitBy = "characters",
  animateOnView = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const items = splitBy === "characters" ? text.split("") : text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1] as any, // Cubic-bezier for smooth slide in
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block overflow-hidden py-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={animateOnView ? (isInView ? "visible" : "hidden") : "visible"}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden"
          style={{ whiteSpace: splitBy === "words" ? "normal" : "pre" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block"
          >
            {item}
          </motion.span>
          {splitBy === "words" && idx < items.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
