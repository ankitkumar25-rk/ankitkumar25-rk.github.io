"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding / Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold text-white">Ankit Kumar</span>
          <span className="text-xs text-neutral-500">
            Portfolio Website. Built with Next.js, Tailwind v4, & Framer Motion.
          </span>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          <span>Back to Top</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-850 bg-neutral-950/60 text-neutral-400 hover:text-white">
            <ArrowUp className="h-4 w-4" />
          </div>
        </motion.button>

        {/* Copyright */}
        <div className="text-xs text-neutral-500 md:text-right">
          &copy; {new Date().getFullYear()} Ankit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
