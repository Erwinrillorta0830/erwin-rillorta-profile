'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { GlowingBadge } from './ui/GlowingBadge';
import { Terminal, Server, Sparkles, Award, GraduationCap, Laptop, ArrowLeftRight } from 'lucide-react';

type Mode = 'all' | 'IT' | 'VA';

export default function About() {
  const { data } = usePortfolio();
  const [activeMode, setActiveMode] = useState<Mode>('all');
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  // Effective mode based on hover or manual selection
  const currentMode: Mode = hoverSide === 'left' ? 'IT' : hoverSide === 'right' ? 'VA' : activeMode;

  const getAccent = (): "cyan" | "violet" | "blue" => {
    if (currentMode === 'IT') return 'cyan';
    if (currentMode === 'VA') return 'violet';
    return 'blue';
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl transition-colors duration-500 ${
              currentMode === 'IT' ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400' :
              currentMode === 'VA' ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' :
              'bg-blue-500/10 border border-blue-500/30 text-blue-400'
            }`}>
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
                About <span className={`transition-colors duration-500 ${
                  currentMode === 'IT' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' :
                  currentMode === 'VA' ? 'text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]' :
                  'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                }`}>Erwin Rillorta</span>
              </h2>
              <p className="text-slate-400 text-xs font-mono tracking-widest uppercase mt-1">
                Dual Expertise // IT Specialist & Virtual Assistant
              </p>
            </div>
          </div>

          {/* Interactive Mode Controls (Mobile & Click Toggles) */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveMode('IT')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeMode === 'IT'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'text-slate-400 hover:text-cyan-400'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              IT & DEV
            </button>
            <button
              onClick={() => setActiveMode('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeMode === 'all'
                  ? 'bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'text-slate-400 hover:text-blue-400'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              DUAL VIEW
            </button>
            <button
              onClick={() => setActiveMode('VA')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeMode === 'VA'
                  ? 'bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                  : 'text-slate-400 hover:text-purple-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              FREELANCE & VA
            </button>
          </div>
        </div>

        {/* HOVER SPLIT TRIGGER BANNER */}
        <div className="relative mb-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md overflow-hidden hidden md:block">
          <div className="grid grid-cols-2 text-center text-xs font-mono font-bold uppercase tracking-wider">
            {/* Left Hover Zone */}
            <div
              onMouseEnter={() => setHoverSide('left')}
              onMouseLeave={() => setHoverSide(null)}
              className={`py-3 px-6 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-3 border ${
                currentMode === 'IT'
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                  : 'bg-slate-800/30 border-transparent text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-300'
              }`}
            >
              <Laptop className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>← Hover Left: IT & Developer Specialist</span>
            </div>

            {/* Right Hover Zone */}
            <div
              onMouseEnter={() => setHoverSide('right')}
              onMouseLeave={() => setHoverSide(null)}
              className={`py-3 px-6 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-3 border ${
                currentMode === 'VA'
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-[0_0_20px_rgba(192,132,252,0.2)]'
                  : 'bg-slate-800/30 border-transparent text-slate-400 hover:bg-purple-500/10 hover:text-purple-300'
              }`}
            >
              <span>Hover Right: Freelancer & Virtual Assistant →</span>
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* MAIN DISPLAY STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Profile Bio Card */}
          <div className="lg:col-span-7">
            <GlassCard accent={getAccent()} className="p-8 md:p-10 h-full relative overflow-hidden transition-all duration-500">
              
              {/* Dynamic Header Tag */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
                <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  {currentMode === 'IT' && <span className="text-cyan-400">{"// IT_SPECIALIST_MANIFEST"}</span>}
                  {currentMode === 'VA' && <span className="text-purple-400">{"// VIRTUAL_ASSISTANT_MANIFEST"}</span>}
                  {currentMode === 'all' && <span className="text-blue-400">{"// INTEGRATED_PROFILE_MANIFEST"}</span>}
                </h3>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  Mode: {currentMode.toUpperCase()}
                </span>
              </div>

              {/* Bio Content Switcher */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMode}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-slate-300 leading-relaxed font-medium"
                >
                  {currentMode === 'IT' && (
                    <>
                      <p>{data.aboutITText1}</p>
                      <p>{data.aboutITText2}</p>
                    </>
                  )}

                  {currentMode === 'VA' && (
                    <>
                      <p>{data.aboutVAText1}</p>
                      <p>{data.aboutVAText2}</p>
                    </>
                  )}

                  {currentMode === 'all' && (
                    <>
                      <p>{data.bio}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                          <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-1 flex items-center gap-2">
                            <Server className="w-3.5 h-3.5" /> IT & Systems
                          </h4>
                          <p className="text-xs text-slate-400">
                            BS IT Graduate, Odoo Framework, MySQL, Network (CCNA certified), System Architecture & Remote IT Support.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
                          <h4 className="text-xs font-mono font-bold text-purple-400 uppercase mb-1 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" /> Freelance & VA
                          </h4>
                          <p className="text-xs text-slate-400">
                            Executive VA, TikTok & YouTube SMM/Editing, Shopify/Etsy/eBay E-commerce, Zapier & AI Automations.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Education & Achievements Sub-section */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" /> Education
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-bold text-white">{data.education.tertiary.school}</p>
                      <p className="text-[11px] text-blue-400 font-medium">{data.education.tertiary.degree}</p>
                      <p className="text-[10px] text-slate-500">{data.education.tertiary.years} • {data.education.tertiary.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" /> Key Honors
                  </h4>
                  <ul className="space-y-1">
                    {data.achievements.map((item, idx) => (
                      <li key={idx} className="text-[11px] text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </GlassCard>
          </div>

          {/* Capabilities / Skills Array Card */}
          <div className="lg:col-span-5">
            <GlassCard accent={getAccent()} className="p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Capabilities_Array
                  </h3>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    currentMode === 'IT' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                    currentMode === 'VA' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {currentMode === 'IT' ? 'IT Specialist Stack' : currentMode === 'VA' ? 'VA & Creative Stack' : 'Combined Core Stack'}
                  </span>
                </div>

                {/* Dynamic Skills Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMode}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {(currentMode === 'IT' ? data.itSkills : currentMode === 'VA' ? data.vaSkills : [...data.itSkills.slice(0, 6), ...data.vaSkills.slice(0, 6)]).map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <GlowingBadge accent={currentMode === 'IT' ? 'cyan' : currentMode === 'VA' ? 'violet' : 'blue'}>
                          {skill}
                        </GlowingBadge>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quick Resume Link & Details */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="flex flex-col gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="text-slate-200">{data.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="text-slate-200">{data.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Portfolio:</span>
                    <span className="text-blue-400 font-bold">{data.portfolioUrl}</span>
                  </div>
                </div>
              </div>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
