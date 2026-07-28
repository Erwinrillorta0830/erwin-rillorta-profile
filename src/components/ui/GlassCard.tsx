"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  accent?: "cyan" | "blue" | "indigo" | "rose" | "emerald" | "amber" | "violet" | "slate";
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ accent = "cyan", children, className = "", ...props }, ref) => {
    
    const accentConfig = {
      cyan: "border-cyan-500/20 bg-cyan-950/20 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      blue: "border-blue-500/20 bg-blue-950/20 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      indigo: "border-indigo-500/20 bg-indigo-950/20 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      rose: "border-rose-500/20 bg-rose-950/20 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      emerald: "border-emerald-500/20 bg-emerald-950/20 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      amber: "border-amber-500/20 bg-amber-950/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      violet: "border-violet-500/20 bg-violet-950/20 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      slate: "border-slate-500/20 bg-slate-900/40 hover:border-slate-500/40 hover:shadow-[0_0_30px_rgba(100,116,139,0.15)]",
    };

    return (
      <motion.div
        ref={ref}
        className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${accentConfig[accent]} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";
