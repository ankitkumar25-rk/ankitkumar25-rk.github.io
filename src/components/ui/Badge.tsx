"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "indigo" | "violet" | "fuchsia" | "emerald" | "amber";
}

export default function Badge({
  children,
  className = "",
  variant = "indigo",
}: BadgeProps) {
  const variantStyles = {
    indigo: "bg-indigo-950/40 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.05)]",
    violet: "bg-violet-950/40 text-violet-400 border-violet-500/20 hover:border-violet-500/50 shadow-[0_0_10px_rgba(139,92,246,0.05)]",
    fuchsia: "bg-fuchsia-950/40 text-fuchsia-400 border-fuchsia-500/20 hover:border-fuchsia-500/50 shadow-[0_0_10px_rgba(217,70,239,0.05)]",
    emerald: "bg-emerald-950/40 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.05)]",
    amber: "bg-amber-950/40 text-amber-400 border-amber-500/20 hover:border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.05)]",
  };

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 backdrop-blur-sm select-none cursor-default",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}
