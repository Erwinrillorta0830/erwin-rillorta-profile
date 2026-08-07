'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, GitBranch, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Cpu, X, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { usePortfolio, Project } from '@/context/PortfolioContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingBadge } from '@/components/ui/GlowingBadge';
import { ProjectVectorGraphics } from '@/components/ui/ProjectVectorGraphics';

export default function ProjectsPage() {
  const { data } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'ERP Systems', 'Operations & Field', 'Cloud & Sync'];

  const filteredProjects = data.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-zinc-950">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-2/3 right-10 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 text-slate-300 hover:text-blue-400 font-mono text-xs font-bold transition-all group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="text-slate-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Showing {filteredProjects.length} of {data.projects.length} Systems
            </div>
          </div>

          {/* Hero Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-4">
              <Cpu size={14} />
              SOFTWARE ENGINEERING PORTFOLIO
            </div>
            
            <h1 className="text-4xl md:text-6xl font-title font-black uppercase tracking-tighter italic text-white mb-4">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Projects & Systems</span>
            </h1>
            
            <p className="text-slate-400 font-medium max-w-3xl text-sm md:text-base leading-relaxed">
              Explore vector schematics, architecture blueprints, and modular features of my custom enterprise resource planning (ERP) platforms, field management suites, real-time sync engines, and industrial logistics systems.
            </p>
          </div>

          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search projects by name, technology, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
                <Filter size={12} /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-slate-900/40 border border-white/10 my-12">
              <p className="text-slate-400 font-mono text-sm">No systems found matching &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <GlassCard accent="blue" className="h-full flex flex-col p-6 group hover:border-blue-500/50 transition-all duration-300">
                    
                    {/* Vector Graphic Banner */}
                    <div className="mb-6 relative">
                      <ProjectVectorGraphics type={project.vectorType} imageUrl={project.imageUrl} className="w-full h-48" />
                      {project.category && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                          {project.category}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title & Action Links */}
                        <div className="flex justify-between items-start mb-3 gap-3">
                          <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex gap-1.5 shrink-0">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                                title="View Code"
                              >
                                <GitBranch size={16} />
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
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6">
                          {project.description}
                        </p>

                        {/* Highlights & Metrics */}
                        {project.metrics && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.metrics.map(metric => (
                              <span key={metric} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-mono font-bold">
                                <CheckCircle2 size={11} className="text-blue-400" />
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer Tech Tags & Details CTA */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-4">
                          {project.tags.map(tag => (
                            <GlowingBadge key={tag} accent="blue">{tag}</GlowingBadge>
                          ))}
                        </div>

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Inspect System Specs</span>
                          <Sparkles size={14} className="group-hover/btn:rotate-12 transition-transform" />
                        </button>
                      </div>

                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* System Blueprint Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(59,130,246,0.2)]"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                    {activeModalProject.category || 'ENTERPRISE SYSTEM'}
                  </span>
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Large Vector Graphic / Screenshot Display */}
              <div className="mb-6">
                <ProjectVectorGraphics type={activeModalProject.vectorType} imageUrl={activeModalProject.imageUrl} className="w-full h-64" />
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Feature Checklist */}
              {activeModalProject.features && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3">Core Modules & Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3">Tech Stack & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map(tag => (
                    <GlowingBadge key={tag} accent="cyan">{tag}</GlowingBadge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-bold uppercase"
                >
                  Close Spec
                </button>
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <GitBranch size={15} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
