"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Sparkles, AlertCircle, Quote } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";

const tractorFacts = [
  {
    title: "Raw Torque Config",
    description: "My dev server runs on AMD multi-thread performance, but my work ethic is calibrated to the 5911 tractor's raw, heavy-duty low-end torque. No stall, all pull.",
    icon: "🚜",
  },
  {
    title: "Late Night Beats",
    description: "The ideal compiler speed is 135 BPM—the exact average tempo of Sidhu Moose Wala's bass lines. Keeps code flow synchronized and distractions blocked.",
    icon: "🔊",
  },
  {
    title: "Double-Filter Cleanliness",
    description: "Just like a diesel tractor's double fuel filter keeps impurities out of the engine, my strict TypeScript configuration keeps bugs out of production.",
    icon: "⚙️",
  },
  {
    title: "Harvest & Deploy Cycles",
    description: "Farming teaches you patience: you seed in winter, tend in spring, and harvest in summer. I treat Git commits the same way—quality releases take consistent tending.",
    icon: "🌾",
  },
];

export default function TractorFacts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950/20">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-10 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 -z-10 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
            <Flame className="h-3.5 w-3.5 animate-pulse" />
            Rural Philosophy
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            5911 Tractor Facts & Tribute
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Facts Grid */}
          <div className="md:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
            >
              {tractorFacts.map((fact, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex h-full">
                  <SpotlightCard
                    className="bg-neutral-950/40 border-emerald-950/40 p-6 flex flex-col justify-between hover:border-emerald-800/40 duration-300 w-full"
                    spotlightColor="rgba(245, 158, 11, 0.05)"
                  >
                    <div>
                      <div className="text-3xl mb-4">{fact.icon}</div>
                      <h3 className="text-base font-bold text-white mb-2">{fact.title}</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">{fact.description}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Sidhu Moose Wala Tribute Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex"
          >
            <SpotlightCard
              className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 border-emerald-950/80 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-800/60 duration-300 relative w-full"
              spotlightColor="rgba(16, 185, 129, 0.08)"
              borderColor="rgba(16, 185, 129, 0.25)"
            >
              {/* Top Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded uppercase tracking-widest">
                  LEGENDS NEVER DIE
                </span>
                <Quote className="h-6 w-6 text-amber-500/40" />
              </div>

              {/* Tribute content */}
              <div className="my-8 space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-white uppercase leading-none">
                  Sidhu Moose Wala
                </h3>
                <p className="text-xs text-amber-400 font-mono tracking-widest uppercase">
                  Moosa Village to Global Airwaves
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  "Sidhu's music represents more than hits—it is a masterclass in staying uncompromised. He wrote lyrics in the same village dialect he grew up speaking, proving that authenticity is the ultimate competitive advantage. I bring this same uncompromised authenticity to software design."
                </p>
              </div>

              {/* Quote Footer */}
              <div className="border-t border-emerald-950/60 pt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-neutral-950 text-xs font-bold">
                  5911
                </div>
                <div>
                  <span className="block text-xs font-semibold text-neutral-200">Moosa Legacy</span>
                  <span className="block text-[10px] text-neutral-500 font-mono">ESTD. 1993 - FOREVER</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
