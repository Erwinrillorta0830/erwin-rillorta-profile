'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { Activity } from 'lucide-react';

export default function Experience() {
  const { data } = usePortfolio();

  return (
    <section id="experiences" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Activity className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
            Work <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Experiences</span>
          </h2>
        </div>
        
        <GlassCard accent="slate" className="p-8 md:p-12 relative before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] before:opacity-5">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10 pl-6 border-b border-slate-700/50 pb-4">
            Audit_Log // Professional Timeline
          </h3>

          <div className="relative border-l border-blue-500/20 ml-4 md:ml-8 space-y-12 pb-4">
            {data.experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Node Dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                
                {/* Horizontal Connection Line */}
                <div className="absolute left-0 top-2.5 w-6 h-[1px] bg-blue-500/20" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl md:text-2xl font-black italic tracking-tight text-white uppercase">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-mono font-bold text-blue-500/70 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start md:self-auto">
                    {exp.date}
                  </span>
                </div>
                
                <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  {exp.company}
                </h5>
                
                <div className="text-slate-500 leading-relaxed font-medium">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
