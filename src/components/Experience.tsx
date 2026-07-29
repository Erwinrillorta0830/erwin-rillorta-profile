'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { Activity, Server, Sparkles, MapPin, Calendar, Layers } from 'lucide-react';

type FilterCategory = 'ALL' | 'IT' | 'VA';

export default function Experience() {
  const { data } = usePortfolio();
  const [filter, setFilter] = useState<FilterCategory>('ALL');
  const [hoverFilter, setHoverFilter] = useState<FilterCategory | null>(null);

  const activeFilter = hoverFilter || filter;

  const filteredExperiences = data.experiences.filter(exp => {
    if (activeFilter === 'ALL') return true;
    return exp.category === activeFilter;
  });

  return (
    <section id="experiences" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header & Split Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
                Work <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Experiences</span>
              </h2>
              <p className="text-slate-400 text-xs font-mono tracking-widest uppercase mt-1">
                Hover left for IT Jobs • Hover right for VA Jobs
              </p>
            </div>
          </div>

          {/* Timeline Filter Controls */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md self-start md:self-auto">
            
            {/* Hover Left: IT */}
            <button
              onMouseEnter={() => setHoverFilter('IT')}
              onMouseLeave={() => setHoverFilter(null)}
              onClick={() => setFilter('IT')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeFilter === 'IT'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'text-slate-400 hover:text-cyan-400'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              IT & DEV ({data.experiences.filter(e => e.category === 'IT').length})
            </button>

            {/* Center: ALL */}
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeFilter === 'ALL'
                  ? 'bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'text-slate-400 hover:text-blue-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              ALL ({data.experiences.length})
            </button>

            {/* Hover Right: VA */}
            <button
              onMouseEnter={() => setHoverFilter('VA')}
              onMouseLeave={() => setHoverFilter(null)}
              onClick={() => setFilter('VA')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeFilter === 'VA'
                  ? 'bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                  : 'text-slate-400 hover:text-purple-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              FREELANCE & VA ({data.experiences.filter(e => e.category === 'VA').length})
            </button>

          </div>
        </div>
        
        {/* Main Experience Card Timeline */}
        <GlassCard accent="slate" className="p-8 md:p-12 relative">
          <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10 pl-2 border-b border-slate-700/50 pb-4">
            <span>Audit_Log // Professional Career Timeline</span>
            <span className="font-mono text-blue-400">Showing: {activeFilter}</span>
          </div>

          <div className="relative border-l border-blue-500/20 ml-2 md:ml-6 space-y-12 pb-4">
            <AnimatePresence mode="popLayout">
              {filteredExperiences.map((exp, index) => {
                const isIT = exp.category === 'IT';

                return (
                  <motion.div 
                    key={`${exp.company}-${index}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative pl-6 md:pl-10 group"
                  >
                    {/* Node Dot with category glow */}
                    <div className={`absolute -left-[5px] top-1.5 w-3 h-3 rounded-full transition-all duration-300 ${
                      isIT 
                        ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] group-hover:scale-125' 
                        : 'bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.9)] group-hover:scale-125'
                    }`} />
                    
                    {/* Horizontal Connection Line */}
                    <div className={`absolute left-0 top-3 w-5 h-[1px] ${
                      isIT ? 'bg-cyan-500/30' : 'bg-purple-500/30'
                    }`} />

                    {/* Role Header & Category Badge */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-xl md:text-2xl font-black italic tracking-tight text-white uppercase group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h4>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          isIT 
                            ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30' 
                            : 'bg-purple-950/60 text-purple-300 border-purple-500/30'
                        }`}>
                          {isIT ? 'IT Specialist' : 'Virtual Assistant'}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5 self-start md:self-auto">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        {exp.date}
                      </span>
                    </div>
                    
                    {/* Company & Location */}
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                      <span className="text-slate-200">{exp.company}</span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                    
                    {/* Job Descriptions Bulleted */}
                    <div className="text-slate-300 leading-relaxed font-medium text-sm">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                isIT ? 'bg-cyan-400' : 'bg-purple-400'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
