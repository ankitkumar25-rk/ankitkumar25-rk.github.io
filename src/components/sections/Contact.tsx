"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import SpotlightCard from "@/components/animations/SpotlightCard";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear pending timer if component unmounts before the 5s banner auto-hides
  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId || formspreeId === "YOUR_FORM_ID") {
      setServerError("Contact form is not configured yet. Please check back soon.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Trigger confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#8b5cf6", "#6366f1", "#d946ef", "#10b981"],
      });

      // Auto-hide success banner after 5s — stored in ref so it can be cleared on unmount
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
      successTimerRef.current = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ankitkumar25-rk",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
      color: "hover:text-white hover:bg-neutral-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ankit-kumar-478316378/",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
      color: "hover:text-indigo-400 hover:bg-indigo-950/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px]" />
      <div className="absolute top-1/4 left-0 -z-10 h-72 w-72 rounded-full bg-fuchsia-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/10 bg-violet-500/5 px-3.5 py-1 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
            <Mail className="h-3.5 w-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Let's Start a Conversation
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Have a project idea, want to collaborate, or just want to say hi? Fill out the form or drop me a message directly. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Direct email card */}
              <SpotlightCard
                className="bg-neutral-900/10 border-emerald-950/60 p-5"
                spotlightColor="rgba(245, 158, 11, 0.08)"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-950/60 rounded-xl border border-amber-500/20 text-amber-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 tracking-wider uppercase font-mono">Direct Email</span>
                    <a href="mailto:ankitgia336@gmail.com" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                      ankitgia336@gmail.com
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              {/* Phone card */}
              <SpotlightCard
                className="bg-neutral-900/10 border-emerald-950/60 p-5"
                spotlightColor="rgba(139, 92, 246, 0.08)"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-950/60 rounded-xl border border-violet-500/20 text-violet-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 tracking-wider uppercase font-mono">Phone / WhatsApp</span>
                    <a href="tel:+919772609535" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                      +91 97726 09535
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              {/* Chat invitation card */}
              <SpotlightCard
                className="bg-neutral-900/10 border-emerald-950/60 p-5"
                spotlightColor="rgba(16, 185, 129, 0.08)"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/20 text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 tracking-wider uppercase font-mono">Quick Chat</span>
                    <span className="text-sm font-semibold text-neutral-200">
                      LinkedIn Messages
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Social media icons */}
            <div className="space-y-4">
              <span className="block text-xs font-semibold text-neutral-500 tracking-wider uppercase">Follow my work</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 text-neutral-400 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <SpotlightCard
              className="bg-neutral-950/20 border-emerald-950/80 p-5 sm:p-8"
              spotlightColor="rgba(16, 185, 129, 0.04)"
              borderColor="rgba(16, 185, 129, 0.25)"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hello Ankit, let's collaborate on..."
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit button & State alerts */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="neon"
                    className="w-full h-11 relative"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-400"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <span>Message sent! I'll reply within 24 hours. Check your inbox for a confirmation.</span>
                      </motion.div>
                    )}
                    {serverError && !isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-red-950/40 border border-red-500/20 px-4 py-3 text-sm text-red-400"
                      >
                        <span className="shrink-0 text-base">⚠️</span>
                        <span>{serverError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
