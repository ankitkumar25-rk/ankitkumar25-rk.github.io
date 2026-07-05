"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Music, Play, Pause, SkipForward, SkipBack, Disc, Headphones, BarChart2 } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";

// High-performance RAF counter
const MusicCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef<number>(0);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    };

    rafRef.current = window.requestAnimationFrame(step);

    // Cancel animation if component unmounts mid-animation
    return () => cancelAnimationFrame(rafRef.current);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-4xl font-extrabold text-amber-500 glow-text-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function MusicStats() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(72); // 1:12 in seconds
  const totalDuration = 245; // 4:05 in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => (prev < totalDuration ? prev + 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const progressPercentage = (currentTime / totalDuration) * 100;

  const topArtists = [
    { name: "Sidhu Moose Wala", streams: "14.2k", share: 95, tag: "The GOAT 👑" },
    { name: "Karan Aujla", streams: "6.8k", share: 72, tag: "Lyricist" },
    { name: "Prem Dhillon", streams: "5.1k", share: 64, tag: "Majha Vibes" },
    { name: "Travis Scott", streams: "4.3k", share: 55, tag: "Rage/Trap" },
  ];

  const tasteStats = [
    { label: "Raw Punjabi Bass & 808s", val: 98, color: "bg-amber-500" },
    { label: "Hustle & Rebellion Lyrics", val: 95, color: "bg-emerald-500" },
    { label: "Old-School Folk Fusion", val: 86, color: "bg-yellow-600" },
    { label: "Trap & Hip-Hop Beats", val: 78, color: "bg-zinc-600" },
  ];

  // Stable equalizer bar configs — generated once on mount via useMemo.
  // If inside JSX, Math.random() re-runs on every render (every 1s timer tick).
  const eqBars = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      height: Math.floor(Math.random() * 70) + 15,
      duration: +(0.5 + Math.random() * 0.8).toFixed(2),
      delay: +((i / 15) * 0.35).toFixed(2),
    })),
    [] // empty deps — values are intentionally stable across renders
  );

  return (
    <section id="music" className="relative py-24 md:py-32 overflow-hidden bg-grain">
      {/* Decorative Gradients */}
      <div className="absolute top-1/3 right-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-600/5 blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-amber-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
            <Music className="h-3.5 w-3.5 animate-bounce" />
            Spotify Telemetry
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            My Soundscape & Stats
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 (5 cols): Spotify overview & Top list */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Listening counter card */}
            <SpotlightCard
              className="bg-neutral-950/40 border-emerald-950/60 p-6 flex items-center justify-between"
              spotlightColor="rgba(245, 158, 11, 0.05)"
            >
              <div>
                <span className="block text-xs uppercase tracking-wider font-mono text-neutral-500">
                  Total Tracks Streamed
                </span>
                <div className="mt-2">
                  <MusicCounter value={32480} />
                </div>
              </div>
              <div className="p-4 bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-400">
                <Headphones className="h-6 w-6" />
              </div>
            </SpotlightCard>

            {/* Top Artists List */}
            <SpotlightCard
              className="bg-neutral-950/40 border-emerald-950/60 p-6"
              spotlightColor="rgba(16, 185, 129, 0.05)"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-emerald-400" />
                Heavy Rotation Artists
              </h3>
              <div className="space-y-4">
                {topArtists.map((artist, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2 text-sm min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-mono text-xs text-neutral-500 shrink-0">0{idx+1}</span>
                        <span className="font-semibold text-neutral-200 truncate">{artist.name}</span>
                        <span className="text-[9px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono shrink-0">
                          {artist.tag}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-400 shrink-0">{artist.streams}</span>
                    </div>
                    {/* Share Bar */}
                    <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${artist.share}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Column 2 (7 cols): Interactive Music Player & Taste Breakdown */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Interactive Custom Player */}
            <SpotlightCard
              className="bg-neutral-950/30 border-emerald-950/80 p-6 sm:p-8 relative overflow-hidden"
              spotlightColor="rgba(245, 158, 11, 0.08)"
              borderColor="rgba(245, 158, 11, 0.25)"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-400">Live_Playback_Mock</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                {/* Vinyl Record */}
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-800 shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center justify-center"
                  >
                    {/* Vinyl Grooves */}
                    <div className="h-24 w-24 rounded-full border border-neutral-900/60 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border border-neutral-900 flex items-center justify-center">
                        {/* Center Cover */}
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center">
                          <Disc className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Song Meta / Player Controls */}
                <div className="flex-grow w-full space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                      295 (Sidhu tribute)
                    </h4>
                    <p className="text-sm text-neutral-400">Sidhu Moose Wala</p>
                  </div>

                  {/* Dynamic Equalizer Bars — heights & durations are stable (useMemo) */}
                  <div className="h-8 flex items-end gap-1 pt-2">
                    {eqBars.map((bar, i) => (
                      <span
                        key={i}
                        className="w-1.5 bg-emerald-500 rounded-t-sm"
                        style={{
                          height: isPlaying ? `${bar.height}%` : "15%",
                          transition: "height 0.15s ease-in-out",
                          animation: isPlaying
                            ? `eq-pulse ${bar.duration}s ${bar.delay}s ease-in-out infinite`
                            : "none",
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress Slider */}
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(totalDuration)}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-6 justify-center">
                    <button className="text-neutral-500 hover:text-white transition-colors cursor-pointer">
                      <SkipBack className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="h-11 w-11 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                    >
                      {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
                    </button>
                    <button className="text-neutral-500 hover:text-white transition-colors cursor-pointer">
                      <SkipForward className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Music Taste Stats */}
            <SpotlightCard
              className="bg-neutral-950/40 border-emerald-950/60 p-6"
              spotlightColor="rgba(16, 185, 129, 0.05)"
            >
              <h3 className="text-lg font-bold text-white mb-4">Genre & Lyric Profile</h3>
              <div className="space-y-4">
                {tasteStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-neutral-300">{stat.label}</span>
                      <span className="text-amber-500 font-mono">{stat.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>

          </div>
        </div>
      </div>
    </section>
  );
}
