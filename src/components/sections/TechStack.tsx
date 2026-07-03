"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/animations/SpotlightCard";
import {
  Cpu,
  Server,
  Database,
  Shield,
  CreditCard,
  Activity,
  Globe,
  Terminal,
  Box,
  Lock,
  Key,
  Package,
  Brain,
  Sparkles
} from "lucide-react";

interface TechItem {
  name: string;
  slug?: string;
  isInvertible?: boolean;
  fallback?: React.ComponentType<any>;
  projects: string;
}

interface TechCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  border: string;
  items: TechItem[];
}

const TechIcon = ({
  slug,
  isInvertible,
  fallback: Fallback,
}: {
  slug?: string;
  isInvertible?: boolean;
  fallback?: React.ComponentType<any>;
}) => {
  if (!slug && Fallback) {
    return <Fallback className="h-5 w-5 shrink-0 text-neutral-400" />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={slug}
      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
        isInvertible ? "invert brightness-200 [.light_&]:invert-0 [.light_&]:brightness-100" : ""
      }`}
      loading="lazy"
    />
  );
};

const categories: TechCategory[] = [
  {
    title: "Frontend",
    description: "UI structure, state orchestration, and smooth motion frameworks.",
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    color: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)",
    items: [
      { name: "React 19", slug: "react", projects: "PhotowalaGift, Achaarwaala, WhatChat" },
      { name: "Next.js", slug: "nextdotjs", isInvertible: true, projects: "This Portfolio" },
      { name: "Vite", slug: "vite", projects: "PhotowalaGift, Achaarwaala, WhatChat" },
      { name: "Tailwind CSS v4", slug: "tailwindcss", projects: "PhotowalaGift, Achaarwaala, WhatChat, Portfolio" },
      { name: "Framer Motion", slug: "framer", projects: "PhotowalaGift, Achaarwaala, WhatChat, Portfolio" },
      { name: "GSAP", slug: "greensock", projects: "WhatChat" },
      { name: "Three.js / RTF", slug: "threedotjs", isInvertible: true, projects: "WhatChat" },
      { name: "Zustand", fallback: Box, projects: "PhotowalaGift" },
      { name: "Radix / Shadcn", slug: "radixui", isInvertible: true, projects: "WhatChat" }
    ]
  },
  {
    title: "Backend",
    description: "Robust application servers, API layers, and systems programming.",
    icon: <Server className="h-5 w-5 text-violet-400" />,
    color: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)",
    items: [
      { name: "Node.js", slug: "nodedotjs", projects: "PhotowalaGift, Achaarwaala, YT-Clone" },
      { name: "Express (v4 & v5)", slug: "express", isInvertible: true, projects: "PhotowalaGift, Achaarwaala, YT-Clone, WhatChat" },
      { name: "Python", slug: "python", projects: "CogniOS" }
    ]
  },
  {
    title: "Databases & ORMs",
    description: "Structured query systems, document stores, and schema wrappers.",
    icon: <Database className="h-5 w-5 text-amber-400" />,
    color: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)",
    items: [
      { name: "PostgreSQL", slug: "postgresql", projects: "PhotowalaGift, Achaarwaala" },
      { name: "MongoDB", slug: "mongodb", projects: "YT-Clone" },
      { name: "SQLite", slug: "sqlite", projects: "CogniOS (telemetry daemon)" },
      { name: "Prisma", slug: "prisma", isInvertible: true, projects: "PhotowalaGift, Achaarwaala" },
      { name: "Mongoose", fallback: Database, projects: "YT-Clone" }
    ]
  },
  {
    title: "Auth & Security",
    description: "Secure session tokens, password hashing, and OAuth federations.",
    icon: <Shield className="h-5 w-5 text-red-400" />,
    color: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)",
    items: [
      { name: "PASETO", fallback: Lock, projects: "PhotowalaGift, Achaarwaala" },
      { name: "JWT", slug: "jsonwebtokens", isInvertible: true, projects: "YT-Clone" },
      { name: "Bcrypt", fallback: Key, projects: "YT-Clone" },
      { name: "Google OAuth", slug: "google", projects: "PhotowalaGift" },
      { name: "Firebase Auth", slug: "firebase", projects: "PhotowalaGift" }
    ]
  },
  {
    title: "Payments & Assets",
    description: "Transactional checkouts, logistics APIs, and media hosting pipelines.",
    icon: <CreditCard className="h-5 w-5 text-sky-400" />,
    color: "rgba(14, 165, 233, 0.12)",
    border: "rgba(14, 165, 233, 0.3)",
    items: [
      { name: "Razorpay", slug: "razorpay", projects: "PhotowalaGift, Achaarwaala" },
      { name: "Shiprocket", fallback: Package, projects: "PhotowalaGift, Achaarwaala (FSSAI/logistics)" },
      { name: "Cloudinary", slug: "cloudinary", projects: "PhotowalaGift, YT-Clone" }
    ]
  },
  {
    title: "Real-time & Data",
    description: "Bi-directional sockets, hardware telemetry, and anomaly classifiers.",
    icon: <Activity className="h-5 w-5 text-fuchsia-400" />,
    color: "rgba(217, 70, 239, 0.12)",
    border: "rgba(217, 70, 239, 0.3)",
    items: [
      { name: "Socket.io", slug: "socketdotio", isInvertible: true, projects: "WhatChat" },
      { name: "psutil", fallback: Activity, projects: "CogniOS (telemetry daemon)" },
      { name: "Isolation Forest", fallback: Brain, projects: "CogniOS (anomaly detection module)" }
    ]
  },
  {
    title: "DevOps & Deployment",
    description: "Self-hosted environments, reverse proxies, and continuous delivery setups.",
    icon: <Globe className="h-5 w-5 text-teal-400" />,
    color: "rgba(20, 184, 166, 0.12)",
    border: "rgba(20, 184, 166, 0.3)",
    items: [
      { name: "Linux", slug: "linux", projects: "Daily dev environment & VPS deployment" },
      { name: "Vercel", slug: "vercel", isInvertible: true, projects: "WhatChat, Portfolio" },
      { name: "Nginx", slug: "nginx", projects: "VPS Reverse Proxy" },
      { name: "PM2", fallback: Terminal, projects: "Node Process Manager" },
      { name: "Git", slug: "git", projects: "Version Control" },
      { name: "GitHub", slug: "github", isInvertible: true, projects: "Version Control" }
    ]
  }
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = React.useState<{ name: string; projects: string; categoryIdx: number } | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section id="tech-stack" className="relative py-24 md:py-32 overflow-hidden bg-neutral-950/20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400 tracking-widest uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            WHAT I WORK WITH
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Tech Stack
          </h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-lg">
            Tools I've actually shipped production code with — not a skills checklist.
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => {
            const isDevOps = category.title === "DevOps & Deployment";
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex ${isDevOps ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <SpotlightCard
                  className="flex flex-col w-full h-full bg-neutral-900/10 border-emerald-950/60 p-6 hover:border-emerald-800/40 transition-all duration-300"
                  spotlightColor={category.color}
                  borderColor={category.border}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-neutral-950/60 border border-emerald-950/60 shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Items Pills */}
                  <div className="flex flex-wrap gap-2.5 mt-2 flex-grow items-start">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        onMouseEnter={() => setHoveredTech({ name: item.name, projects: item.projects, categoryIdx: idx })}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="relative group/pill flex items-center gap-2 rounded-lg border border-neutral-800/80 bg-neutral-900/40 px-3 py-1.5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 cursor-help"
                      >
                        <TechIcon
                          slug={item.slug}
                          isInvertible={item.isInvertible}
                          fallback={item.fallback}
                        />
                        <span className="text-xs font-mono text-neutral-300 group-hover/pill:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Project Mapping Footer */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/40 text-[10px] font-mono h-6 flex items-center justify-between w-full">
                    {hoveredTech && hoveredTech.categoryIdx === idx ? (
                      <div className="flex items-center gap-1.5 overflow-hidden w-full">
                        <span className="text-amber-400 font-semibold shrink-0">{hoveredTech.name}:</span>
                        <span className="text-emerald-400 truncate">{hoveredTech.projects}</span>
                      </div>
                    ) : (
                      <span className="text-neutral-500/80">Hover over a tool to see where it's used.</span>
                    )}
                  </div>

                  {/* DevOps-specific Distro Shoutout Section */}
                  {isDevOps && (
                    <div className="mt-6 pt-6 border-t border-neutral-800/60">
                      <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3">
                        Linux Distros Cultivated (6+ distros)
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          { name: "Ubuntu", slug: "ubuntu" },
                          { name: "Arch Linux", slug: "archlinux" },
                          { name: "Kali Linux", slug: "kalilinux" },
                          { name: "Fedora", slug: "fedora" },
                          { name: "Zorin OS", slug: "zorin" }
                        ].map((distro, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300"
                          >
                            <img
                              src={`https://cdn.simpleicons.org/${distro.slug}`}
                              className="h-3.5 w-3.5"
                              alt={distro.name}
                              loading="lazy"
                            />
                            <span>{distro.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
