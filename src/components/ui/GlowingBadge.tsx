import * as React from "react";

interface GlowingBadgeProps {
  children: React.ReactNode;
  accent?: "cyan" | "blue" | "indigo" | "rose" | "emerald" | "amber" | "violet" | "slate";
  className?: string;
}

export function GlowingBadge({ children, accent = "cyan", className = "" }: GlowingBadgeProps) {
  const accentConfig = {
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    slate: "bg-slate-500/10 border-slate-500/20 text-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${accentConfig[accent]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full animate-ping bg-current`} style={{ opacity: 0.5 }} />
      {children}
    </span>
  );
}
