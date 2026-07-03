"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-medium rounded-lg",
    md: "px-5 py-2.5 text-sm font-medium rounded-xl",
    lg: "px-7 py-3.5 text-base font-semibold rounded-2xl",
  };

  const variantClasses = {
    primary: "bg-emerald-650 hover:bg-emerald-600 text-[#ffffff] shadow-lg shadow-emerald-500/10 border border-emerald-500/20",
    secondary: "bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 border border-emerald-950/60 backdrop-blur-sm",
    ghost: "text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-colors",
    neon: "bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-[#ffffff] shadow-[0_0_20px_rgba(245,158,11,0.25)] border border-amber-500/20",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/40",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props as any}
    >
      {children}
    </motion.button>
  );
}
