'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { GlowingBadge } from './ui/GlowingBadge';
import { Terminal } from 'lucide-react';

export default function About() {
  const { data } = usePortfolio();
  
  const skills = [
    'Next.js (React)', 'TypeScript', 'Vue 3', 'PHP (Laravel)', 
    'Tailwind CSS', 'MySQL', 'Supabase (PostgreSQL)', 'RESTful APIs', 
    'Agile / Scrum', 'Odoo Framework', 'Directus CMS', 'Git / GitLab'
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-slate-500/10 border border-slate-500/20">
            <Terminal className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
            About <span className="text-slate-400 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <GlassCard accent="slate" className="p-8 md:p-10 h-full">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Profile_Manifest</h3>
              <div className="space-y-6 text-slate-400 leading-relaxed font-medium">
                <p>{data.aboutText1}</p>
                <p>{data.aboutText2}</p>
              </div>
            </GlassCard>
          </div>
          
          <div className="lg:col-span-5">
            <GlassCard accent="blue" className="p-8 md:p-10 h-full">
              <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">Capabilities_Array</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <GlowingBadge accent="blue">{skill}</GlowingBadge>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
}
