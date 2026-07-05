"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles, Terminal, Download, Tractor } from "lucide-react";
import Button from "@/components/ui/Button";
import DecryptedText from "@/components/animations/DecryptedText";
import ShinyText from "@/components/animations/ShinyText";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("tractor-scene")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-20 pb-24 md:pb-16"
    >
      {/* Ambient gradient glow blobs */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* ── LEFT: Intro Text ── */}
          <div className="flex flex-col gap-5 md:gap-6 order-2 md:order-1 min-w-0">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                Open to Work · Full-Stack Dev
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-neutral-400 font-medium mb-1 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" /> Hey there, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ankit{" "}
                <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
            </motion.div>

            {/* Role / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-2 text-sm sm:text-base lg:text-lg text-neutral-300 font-mono"
            >
              <Terminal className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <DecryptedText
                  text="I build software the way we farm — with patience, discipline & zero shortcuts."
                  animateOn="view"
                  speed={40}
                  maxIterations={12}
                  sequential={true}
                  className="text-amber-400 font-bold font-mono"
                  encryptedClassName="text-amber-700/50"
                />
              </span>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-base leading-relaxed max-w-lg"
            >
              A full-stack developer from Udaipurwati, Jhunjhunu — Rajasthan farmland,
              not a metro city. Grew up around the fields, made it to IIT Jodhpur,
              and taught myself to code along the way. Village roots,
              production-grade code. Inspired by{" "}
              <span className="text-amber-400 font-semibold">Sidhu Moosewala</span> —
              proof that staying rooted and going global aren't opposites.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-3 gap-3 py-4 border-t border-b border-emerald-950/60"
            >
              {[
                { value: "2+", label: "Products Shipped" },
                { value: "1+", label: "Years Coding" },
                { value: "IIT-J", label: "IIT Jodhpur" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col min-w-0">
                  <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">{s.value}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-500 leading-tight mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                variant="neon"
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] border-amber-500/20"
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:border-amber-500/40"
              >
                <ShinyText text="Let's Talk" speed={2.5} color="var(--text-neutral-300)" shineColor="var(--amber-400)" />
              </Button>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center pt-8 md:pt-0"
          >
            <div className="relative">
              {/* Glowing ring backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 to-emerald-500/30 blur-2xl scale-110" />

              {/* Rotating dashed border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30"
                style={{ margin: "-12px" }}
              />

              {/* Static solid ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-emerald-500/20"
                style={{ margin: "-6px" }}
              />

              {/* Actual profile image */}
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-emerald-900/60 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <Image
                  src="/profile.png"
                  alt="Ankit Kumar - Full-Stack Developer"
                  fill
                  sizes="(max-width: 480px) 224px, (max-width: 640px) 288px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge: 5911 tractor */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-2 sm:-left-4 flex items-center gap-2 rounded-full border border-amber-500/30 bg-neutral-900/80 backdrop-blur-sm px-3 py-1.5 shadow-lg text-amber-400"
              >
                <Tractor className="h-4 w-4 shrink-0" />
                <span className="text-[11px] font-mono font-bold">5911</span>
              </motion.div>

              {/* Floating badge: code */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-neutral-900/80 backdrop-blur-sm px-3 py-1.5 shadow-lg text-emerald-400"
              >
                <Terminal className="h-4 w-4 shrink-0" />
                <span className="text-[11px] font-mono font-bold">Full-Stack</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll down hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors focus:outline-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Start 5911 Engine</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
