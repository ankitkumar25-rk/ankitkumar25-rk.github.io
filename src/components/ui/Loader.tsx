"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading time
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200); // Small pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="relative flex flex-col items-center gap-6 max-w-xs w-full">
        {/* Glowing Circle */}
        <div className="relative h-20 w-20 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-neutral-800 border-t-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
          />
          <span className="font-mono text-sm font-bold text-neutral-300">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Loading status */}
        <div className="flex flex-col items-center gap-1.5 w-full">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 animate-pulse">
            Booting Workspace
          </span>
          {/* Progress bar background */}
          <div className="h-0.5 w-40 rounded-full bg-neutral-950 overflow-hidden border border-neutral-800/40">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
