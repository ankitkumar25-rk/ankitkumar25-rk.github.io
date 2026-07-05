"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/animations/SpotlightCard";
import Badge from "@/components/ui/Badge";
import { Code2, ExternalLink, Sparkles, Tractor, Rocket } from "lucide-react";

const projectsList = [
  {
    title: "CogniOS (Open Source)",
    description: "Contributing to CogniOS, an open-source system telemetry & anomaly detection project, via DevLup Labs' Summer of Code. Built the multi-layer telemetry pipeline (Layers 1–4) and working on the BlackBox anomaly-detection module (Z-score/slope detection, Isolation Forest) with a SQLite-backed rolling-window daemon.",
    tech: ["Python", "SQLite", "psutil", "Isolation Forest"],
    liveUrl: "#",
    githubUrl: "#",
    color: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)",
    badgeColor: "fuchsia" as const,
    visual: (
      <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-emerald-950/60 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400">cognios_blackbox_daemon</span>
          </div>
          <span className="text-[9px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">Summer of Code</span>
        </div>
        <div className="flex items-end justify-between h-20 gap-1.5 pt-4">
          {[35, 75, 45, 90, 60, 85, 50, 95, 70, 100].map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${val}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
              className="w-full bg-gradient-to-t from-emerald-600 to-amber-500 rounded-t-sm shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-emerald-950/60 pt-2 mt-2 text-[8px] font-mono text-neutral-500">
          <span>sqlite3</span>
          <span>ANOMALY DETECTED (Z-SCORE)</span>
          <span>psutil v5.9</span>
        </div>
      </div>
    ),
  },
  {
    title: "WhatChat — Real-time Chat App",
    description: "A real-time chat application with animated 3D backgrounds and smooth room-based messaging. Built with Socket.io for instant message delivery, Three.js for the animated backdrop, and Framer Motion + GSAP for UI transitions.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Socket.io", "Three.js", "Framer Motion", "GSAP", "Express"],
    liveUrl: "#",
    githubUrl: "https://github.com/ankitkumar25-rk/WhatChat",
    color: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)",
    badgeColor: "indigo" as const,
    visual: (
      <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-emerald-950/60 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono text-blue-400">whatchat_room</span>
          </div>
          <span className="text-[9px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">Live on Vercel</span>
        </div>
        <div className="flex flex-col gap-2 py-1 h-full justify-center">
          <div className="flex items-center gap-2 max-w-[80%]">
            <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400">U1</div>
            <div className="bg-neutral-900 border border-emerald-950/40 rounded-lg p-1.5 text-[9px] text-neutral-300 leading-tight">
              Hey! Is the 3D room loaded?
            </div>
          </div>
          <div className="flex items-center gap-2 max-w-[80%] self-end flex-row-reverse">
            <div className="h-6 w-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-400">U2</div>
            <div className="bg-neutral-900 border border-amber-950/40 rounded-lg p-1.5 text-[9px] text-neutral-300 leading-tight">
              Yeah, looks sick with GSAP! <Rocket className="inline-block h-3 w-3 text-amber-400 ml-1 align-middle" />
            </div>
          </div>
        </div>
        <div className="h-6 w-full rounded-md bg-neutral-900 border border-emerald-950/40 flex items-center justify-between px-2 text-[8px] font-mono text-neutral-500">
          <span>Type message...</span>
          <span className="text-amber-500">Send</span>
        </div>
      </div>
    ),
  },
  {
    title: "PhotowalaGift — Gifting E-commerce Platform",
    description: "A live e-commerce platform for personalized gifts and custom printing, with a separate customer storefront and admin dashboard. Handles end-to-end checkout, Razorpay payments, order management, and analytics — built on a production-grade PERN stack with PASETO-based auth.",
    tech: ["React 19", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Razorpay", "Cloudinary", "Google OAuth"],
    liveUrl: "https://photowalagift.online",
    githubUrl: "https://github.com/ankitkumar25-rk/photowalagift",
    color: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)",
    badgeColor: "emerald" as const,
    visual: (
      <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-emerald-950/60 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400">photowalagift_admin</span>
          </div>
          <span className="text-[9px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">Live in Production</span>
        </div>
        <div className="flex gap-2 items-center py-2 h-full justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-500 font-mono">Monthly Revenue</span>
            <span className="text-lg font-bold text-white leading-none">₹84,250</span>
            <span className="text-[8px] text-emerald-400 font-mono">+12.4% vs last month</span>
          </div>
          <div className="h-12 w-24 bg-neutral-900 border border-emerald-950/30 rounded-lg p-1.5 flex items-end gap-1">
            {[40, 65, 50, 85, 75, 95].map((h, i) => (
              <div key={i} className="flex-grow bg-emerald-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="h-6 w-full rounded-md bg-neutral-900 border border-emerald-950/40 flex items-center justify-center text-[9px] font-semibold text-neutral-300">
          Secure Admin Dashboard (PASETO)
        </div>
      </div>
    ),
  },
  {
    title: "YT-Clone — Video Platform Backend",
    description: "A backend-only clone of a video-sharing platform, focused on core infrastructure: video/thumbnail uploads via Cloudinary, JWT-based auth, secure password hashing, and MongoDB aggregation pipelines for feeds, search, and pagination.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Cloudinary", "Multer"],
    liveUrl: "",
    githubUrl: "https://github.com/ankitkumar25-rk/yt-clone",
    color: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)",
    badgeColor: "fuchsia" as const,
    visual: (
      <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-red-950/60 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-red-400">yt_clone_backend</span>
          </div>
          <span className="text-[9px] font-mono bg-red-950/60 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded">Backend Project</span>
        </div>
        <div className="flex flex-col gap-1.5 py-1 justify-center h-full">
          <div className="flex justify-between items-center text-[9px] font-mono">
            <span className="text-neutral-500">POST /api/v1/videos/upload</span>
            <span className="text-emerald-400">201 Created</span>
          </div>
          <div className="w-full bg-neutral-900 rounded border border-neutral-800 p-2 font-mono text-[8px] text-neutral-400 leading-normal">
            {"{ status: 'success', upload: 'cloudinary_cdn', videoId: 'v_9821a' }"}
          </div>
        </div>
        <div className="h-6 w-full rounded-md bg-neutral-900 border border-red-950/40 flex items-center justify-between px-2 text-[8px] font-mono text-neutral-500">
          <span>MongoDB Pipeline: Active</span>
          <span>JWT Verified</span>
        </div>
      </div>
    ),
  },
  {
    title: "Ankit.dev — Personal Portfolio",
    description: "My personal portfolio site — built to reflect my journey from a farming family in Udaipurwati, Jhunjhunu to IIT Jodhpur and full-stack development. Features smooth scroll-based animations, a custom interactive tractor-scroll section, and a fully responsive dark-themed UI built from scratch.",
    tech: ["Next.js", "Tailwind CSS v4", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/ankitkumar25-rk/BrinX",
    color: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)",
    badgeColor: "amber" as const,
    visual: (
      <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-emerald-950/60 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-400">ankit_dev_portfolio</span>
          </div>
          <span className="text-[9px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">Live in Production</span>
        </div>
        <div className="flex gap-3 items-center py-2 h-full">
          <div className="h-14 w-14 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center gap-1 text-[10px] text-neutral-400 font-mono">
            <Tractor className="h-5 w-5 text-amber-500" />
            <span>5911</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-white leading-none">Ankit.dev</span>
            <span className="text-[9px] text-neutral-500 font-mono leading-none">Scroll Interactive 3D</span>
            <span className="text-[8px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1 py-0.5 rounded w-max">Tailwind v4</span>
          </div>
        </div>
        <div className="h-6 w-full rounded-md bg-neutral-900 border border-emerald-950/40 flex items-center justify-center text-[9px] font-semibold text-neutral-300">
          Dark / Light Theme Engine
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-neutral-950/20">
      {/* Background Gradients */}
      <div className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
            <Code2 className="h-3.5 w-3.5" />
            Heavy Engineering
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Code Systems Built Like Machinery
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full"
            >
              <SpotlightCard
                className="flex flex-col h-full bg-neutral-950/40 border-emerald-950/40 p-0 overflow-hidden hover:border-emerald-800/40 duration-300"
                spotlightColor={project.color}
                borderColor={project.border}
              >
                {/* Project Visual Representation */}
                <div className="relative w-full h-48 border-b border-emerald-950/40 bg-neutral-950/60 overflow-hidden">
                  {project.visual}
                </div>

                {/* Card details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant="emerald"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-emerald-950/30">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-200 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
