"use client";

import React from "react";
import { motion } from "framer-motion";
import Tractor3D from "@/components/animations/Tractor3D";
import ParticlesBackground from "@/components/animations/ParticlesBackground";

import { Settings } from "lucide-react";

export default function TractorScene() {
  return (
    /*
     * OUTER section is 300vh tall — gives 200vh of scroll travel.
     * INNER sticky div stays locked to viewport top for the full 300vh,
     * so the canvas is always visible while user scrolls through the extra height.
     */
    <section
      id="tractor-scene"
      className="relative w-full bg-grain h-[180vh] md:h-[300vh]"
    >
      {/* Sticky viewport-locked container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <ParticlesBackground
          particleCount={40}
          particleColor="rgba(212,175,55,0.15)"
          lineColor="rgba(16,185,129,0.04)"
        />

        {/* Gradient flares */}
        <div className="absolute top-1/3 left-1/4 -z-10 h-64 w-64 rounded-full bg-emerald-600/8 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 -z-10 h-64 w-64 rounded-full bg-amber-600/8 blur-[100px]" />

        {/* 3D canvas — parentElement is this sticky div, parentElement.parentElement is the <section> */}
        <Tractor3D />

        {/* Top label */}
        <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none select-none w-[calc(100%-2rem)] sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-background/70 backdrop-blur-md px-3 sm:px-5 py-2 max-w-full"
          >
            <Settings className="h-4 w-4 text-amber-400 animate-spin shrink-0" style={{ animationDuration: "6s" }} />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-amber-400 uppercase text-center">
              5911 Tractor Mode: ON — Scroll to cultivate
            </span>
          </motion.div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-[11px] font-mono text-neutral-500 tracking-widest uppercase"
          >
            ↓ Keep scrolling — watch her move
          </motion.p>
        </div>

        {/* Sidhu tribute */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-6 sm:bottom-8 right-3 sm:right-8 z-10 max-w-[200px] sm:max-w-xs p-3 rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md pointer-events-none select-none"
        >
          <p className="text-[10px] italic text-neutral-400 leading-relaxed font-serif">
            "Dil da ni maada, tera Sidhu Moose Wala."
          </p>
          <span className="block text-[9px] font-mono text-amber-400 mt-1 tracking-widest uppercase">
            — Rest In Power (1993–2022)
          </span>
        </motion.div>

      </div>
    </section>
  );
}
