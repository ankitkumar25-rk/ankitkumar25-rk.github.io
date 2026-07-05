"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, ChevronRight, ChevronDown } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";

const experienceData = [
  {
    role: "Open Source Contributor",
    company: "CogniOS (DevLup Labs)",
    period: "2026 – Present",
    description: "Selected for Summer of Code at DevLup Labs, IIT Jodhpur. Building the telemetry collection layer and BlackBox anomaly-detection module.",
    achievements: [
      "Built Layer 1–4 telemetry collectors using psutil.",
      "Designing a rolling 30-minute SQLite window (blackbox.db) alongside permanent storage (cognios_telemetry.db).",
      "Working through rule-based → Z-score/slope → Isolation Forest anomaly detection, phased for production."
    ]
  },
  {
    role: "Developer",
    company: "PhotowalaGift & Achaarwaala",
    period: "2025 – Present",
    description: "Designed, built, and deployed two live production platforms solo — handling backend architecture, payments, shipping, and real-world business registration (FSSAI, Udyam, trademark filing).",
    achievements: [
      "Built full PERN-stack e-commerce with Razorpay, Shiprocket, Cloudinary.",
      "Handled GST, FSSAI registration, and logistics setup end-to-end.",
      "Delivered client work for EduMeasy (WordPress → MERN migration, landing pages)."
    ]
  },
  {
    role: "Self-Taught Full-Stack Developer",
    company: "Freelance / Open Source",
    period: "2023 – 2025",
    description: "Started with the Boot-Up Hackathon at DevLup Labs (IIT Jodhpur), placing 2nd. Self-taught JavaScript, React, Node.js, and full-stack deployment (VPS, Nginx, PM2) from there.",
    achievements: [
      "Went from first \"Hello World\" to deploying production PERN apps."
    ]
  }
];

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = React.useState<number | null>(0); // Open first milestone by default

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden bg-neutral-950/20">
      {/* Decorative Gradient Flares */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            My Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Professional Roadmap
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Milestone Cards Stack */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experienceData.map((item, idx) => {
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  className="bg-neutral-900/10 border-emerald-950/60 p-6 hover:border-emerald-800/40 transition-all duration-300 cursor-pointer"
                  spotlightColor="rgba(245, 158, 11, 0.05)"
                  borderColor="rgba(245, 158, 11, 0.2)"
                  onClick={() => toggleExpand(idx)}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Icon container */}
                      <div className="p-3 bg-neutral-950/60 border border-emerald-950/60 text-amber-400 rounded-xl shrink-0 mt-0.5 sm:mt-0">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      {/* Date pill */}
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/40 border border-neutral-800/60 px-3 py-1 text-xs font-semibold font-mono text-neutral-400">
                        <Calendar className="h-3.5 w-3.5 text-amber-400" />
                        <span>{item.period}</span>
                      </div>

                      {/* Expand Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-1.5 rounded-lg bg-neutral-950/40 border border-neutral-800/60 text-neutral-400"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Role Brief Summary */}
                  <p className="text-xs text-neutral-350 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expandable details (achievements) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-emerald-950/40 space-y-3">
                          <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                            Key Accomplishments
                          </span>
                          <ul className="space-y-3">
                            {item.achievements.map((ach, aIdx) => (
                              <li
                                key={aIdx}
                                className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed"
                              >
                                <ChevronRight className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
