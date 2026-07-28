'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Layers } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { GlowingBadge } from './ui/GlowingBadge';

export default function Projects() {
  const { data } = usePortfolio();

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Layers className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
            My <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard accent="slate" className="h-full flex flex-col p-8 group">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors">
                        <GitBranch size={16} />
                      </a>
                      <a href={project.liveUrl} className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-8">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-500/10 mt-auto">
                  {project.tags.map(tag => (
                    <GlowingBadge key={tag} accent="blue">{tag}</GlowingBadge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
