'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ExternalLink, GitBranch, Sparkles } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { GlowingBadge } from './ui/GlowingBadge';
import { ProjectVectorGraphics } from './ui/ProjectVectorGraphics';

export default function Projects() {
  const { data } = usePortfolio();
  // Overview highlights 3 projects on the homepage
  const featuredProjects = data.projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-4">
              <Sparkles size={14} className="animate-spin-slow" />
              SYSTEM ARCHITECTURE & PORTFOLIO
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 hidden sm:block">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
                Featured <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Projects</span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-2xl mt-4 leading-relaxed text-sm md:text-base">
              Overview of custom enterprise ERP systems, physical serial audit platforms, financial authorization queues, and inventory logistics solutions.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-blue-500/10 hover:bg-blue-500 border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-slate-950 font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] group shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard accent="blue" className="h-full flex flex-col p-6 group hover:translate-y-[-4px] transition-transform duration-300">
                {/* Visual Header with Blurred Screenshot Preview */}
                <div className="mb-6">
                  <ProjectVectorGraphics type={project.vectorType} imageUrl={project.imageUrl} className="w-full h-44" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h3 className="text-xl font-black italic tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-1.5 shrink-0">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                            title="GitHub Repository"
                          >
                            <GitBranch size={15} />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <GlowingBadge key={tag} accent="blue">{tag}</GlowingBadge>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-slate-500 font-mono font-bold px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-blue-500/20 text-center flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="text-left">
            <h4 className="text-xl font-black italic uppercase tracking-tight text-white mb-1">
              Explore All 5 Enterprise ERP Modules
            </h4>
            <p className="text-slate-400 text-xs font-medium">
              Inspect VOS-WEB Control Center, Physical Serial Audit, Cylinder Logistics, Financial Memo Approvals & Transmittals.
            </p>
          </div>

          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:scale-105 shrink-0"
          >
            Launch Projects Page →
          </Link>
        </div>

      </div>
    </section>
  );
}
