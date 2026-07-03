"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for indicator
      const sections = ["about", "projects", "tech-stack", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync on Mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = savedTheme || (systemPrefersLight ? "light" : "dark");
    
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 border-b border-emerald-950/40 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white focus:outline-none"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent group-hover:to-amber-400 transition-all">
              Ankit.dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  activeSection === item.href.slice(1) ? "text-white font-semibold" : "text-neutral-400"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Theme Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-neutral-800/80 bg-neutral-900/40 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center justify-center h-10 w-10 hover:border-neutral-700"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-violet-500" />
              )}
            </button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group hover:border-amber-500/40"
            >
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-neutral-800/80 bg-neutral-900/40 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center justify-center h-10 w-10 hover:border-neutral-700"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-violet-500" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800/80 bg-background/40 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-background/95 border-b border-neutral-800 backdrop-blur-xl px-6 py-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-white ${
                    activeSection === item.href.slice(1) ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-neutral-800"
              >
                <Button
                  variant="neon"
                  className="w-full justify-center bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] border-amber-500/20"
                  onClick={() => {
                    setIsOpen(false);
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
