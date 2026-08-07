'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Palette, X, Filter, Sparkles, User, Wrench, Eye, Info, LayoutGrid, List, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingBadge } from '@/components/ui/GlowingBadge';
import { DesignVectorGraphics } from '@/components/ui/DesignVectorGraphics';

export default function DesignGalleryPage() {
  const { data } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'Branding & Logos',
    'Social Media & Banners',
    'T-Shirt & Apparel',
    'Brochures & Print',
    'Video Editing'
  ];

  const designsList = data.designs || [];

  const filteredDesigns = designsList.filter(design => {
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (design.client && design.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          design.tools.some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || design.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return designsList.length;
    return designsList.filter(d => d.category === cat).length;
  };

  const handlePrevItem = () => {
    if (activeModalIndex !== null && activeModalIndex > 0) {
      setActiveModalIndex(activeModalIndex - 1);
    } else if (activeModalIndex === 0) {
      setActiveModalIndex(filteredDesigns.length - 1);
    }
  };

  const handleNextItem = () => {
    if (activeModalIndex !== null && activeModalIndex < filteredDesigns.length - 1) {
      setActiveModalIndex(activeModalIndex + 1);
    } else if (activeModalIndex === filteredDesigns.length - 1) {
      setActiveModalIndex(0);
    }
  };

  const currentActiveDesign = activeModalIndex !== null ? filteredDesigns[activeModalIndex] : null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-zinc-950">

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-rose-500/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-2/3 right-10 w-[600px] h-[350px] bg-violet-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 text-slate-300 hover:text-rose-400 font-mono text-xs font-bold transition-all group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="text-slate-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              {filteredDesigns.length} Gallery Artwork Items Loaded
            </div>
          </div>

          {/* Gallery Banner Header */}
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-4">
                <Palette size={14} />
                CREATIVE MEDIA & GRAPHIC DESIGN GALLERY
              </div>

              <h1 className="text-4xl md:text-6xl font-title font-black uppercase tracking-tighter italic text-white mb-4">
                Visual Art & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-violet-400">Design Portfolio</span>
              </h1>

              <p className="text-slate-400 font-medium max-w-3xl text-sm md:text-base leading-relaxed">
                Explore an interactive gallery showcasing Scandinavian Shopify banners, urban t-shirt merchandise graphics, credit marketing brochures, print tarpaulins, and video reels created for international clients.
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-white/10 shrink-0 backdrop-blur-xl">
              <div className="px-4 text-center border-r border-white/10">
                <span className="text-2xl font-black text-rose-400 block font-mono">5+</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">Global Brands</span>
              </div>
              <div className="px-4 text-center border-r border-white/10">
                <span className="text-2xl font-black text-cyan-400 block font-mono">100%</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">Custom Visuals</span>
              </div>
              <div className="px-4 text-center">
                <span className="text-2xl font-black text-violet-400 block font-mono">4+ Yrs</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">Design Exp</span>
              </div>
            </div>
          </div>

          {/* Controls Bar: Search, Category Pills, Grid/List View Switcher */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-12 p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search artwork by tool, client, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-rose-500/50 transition-colors"
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

            {/* Category Filter Pills with Item Count Badges */}
            <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
              <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider mr-1 hidden xl:inline-flex items-center gap-1">
                <Filter size={12} /> Filter:
              </span>
              {categories.map((cat) => {
                const count = getCategoryCount(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                      selectedCategory === cat
                        ? 'bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      selectedCategory === cat ? 'bg-slate-950 text-rose-300' : 'bg-white/10 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle Button */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-xl border border-white/10 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid Gallery View"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Gallery Showcase Content */}
          {filteredDesigns.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-slate-900/40 border border-white/10 my-12">
              <p className="text-slate-400 font-mono text-sm">No artwork found matching &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-xl bg-rose-500/20 text-rose-400 text-xs font-mono font-bold uppercase"
              >
                Reset Search Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Masonry-Style Gallery Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <GlassCard accent="rose" className="h-full flex flex-col p-6 group hover:border-rose-500/50 transition-all duration-300">
                    
                    {/* Visual Media Showcase Header */}
                    <div 
                      onClick={() => setActiveModalIndex(index)}
                      className="mb-6 relative rounded-2xl overflow-hidden cursor-pointer group/media border border-white/10"
                    >
                      <DesignVectorGraphics styleType={design.vectorStyle} imageUrl={design.imageUrl} className="w-full h-56" />

                      {/* Hover Overlay with Lightbox Icon */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-xs">
                        <div className="p-3 rounded-full bg-rose-500 text-slate-950 shadow-lg transform group-hover/media:scale-110 transition-transform">
                          <Maximize2 size={20} />
                        </div>
                        <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">Expand Artwork</span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest">
                        {design.category}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {design.client && (
                          <span className="text-[10px] font-mono font-bold text-rose-400/80 uppercase tracking-wider mb-1 block">
                            Client: {design.client}
                          </span>
                        )}

                        <h3 
                          onClick={() => setActiveModalIndex(index)}
                          className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-rose-400 transition-colors mb-3 cursor-pointer"
                        >
                          {design.title}
                        </h3>

                        <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6 line-clamp-3">
                          {design.description}
                        </p>
                      </div>

                      <div>
                        {/* Tool Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-4">
                          {design.tools.map(tool => (
                            <GlowingBadge key={tool} accent="rose">{tool}</GlowingBadge>
                          ))}
                        </div>

                        <button
                          onClick={() => setActiveModalIndex(index)}
                          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-rose-300 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <Eye size={14} className="group-hover/btn:scale-110 transition-transform" />
                          <span>Inspect High-Res Spec</span>
                        </button>
                      </div>

                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="flex flex-col gap-6 mb-16">
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <GlassCard accent="rose" className="p-6 flex flex-col md:flex-row gap-6 items-center justify-between group">
                    <div 
                      onClick={() => setActiveModalIndex(index)}
                      className="w-full md:w-64 h-40 shrink-0 relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <DesignVectorGraphics styleType={design.vectorStyle} imageUrl={design.imageUrl} className="w-full h-full" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-mono font-bold uppercase">
                          {design.category}
                        </span>
                        {design.client && (
                          <span className="text-[10px] font-mono text-slate-400">
                            Client: {design.client}
                          </span>
                        )}
                      </div>

                      <h3 
                        onClick={() => setActiveModalIndex(index)}
                        className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-rose-400 transition-colors mb-2 cursor-pointer"
                      >
                        {design.title}
                      </h3>

                      <p className="text-slate-400 text-xs leading-relaxed font-medium mb-4">
                        {design.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {design.tools.map(tool => (
                          <GlowingBadge key={tool} accent="rose">{tool}</GlowingBadge>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveModalIndex(index)}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 text-slate-300 hover:text-rose-300 font-mono text-xs font-bold uppercase tracking-wider shrink-0"
                    >
                      View Details
                    </button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* User Guide Box for Custom Images */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-4 text-xs text-slate-400">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
              <Info size={18} />
            </div>
            <div>
              <h4 className="font-mono font-bold uppercase text-white mb-1">Upload & Replace Gallery Artwork Images</h4>
              <p className="leading-relaxed">
                Add your real high-resolution graphic design image URLs to the <code className="text-rose-400 font-mono">imageUrl</code> property in <code className="text-cyan-400 font-mono">PortfolioContext.tsx</code> or store image files inside the <code className="text-cyan-400 font-mono">public/images/designs/</code> folder to display your custom artwork across this gallery!
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Interactive Gallery Lightbox Modal with Next / Prev Navigation */}
      <AnimatePresence>
        {currentActiveDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl">
            
            {/* Previous Item Arrow Button */}
            <button
              onClick={handlePrevItem}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-white/10 hover:bg-rose-500 text-white hover:text-slate-950 transition-all z-50 hidden sm:flex items-center justify-center"
              title="Previous Artwork"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Item Arrow Button */}
            <button
              onClick={handleNextItem}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-white/10 hover:bg-rose-500 text-white hover:text-slate-950 transition-all z-50 hidden sm:flex items-center justify-center"
              title="Next Artwork"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(244,63,94,0.25)]"
            >
              <button
                onClick={() => setActiveModalIndex(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest block">
                    {currentActiveDesign.category} • ITEM {(activeModalIndex ?? 0) + 1} OF {filteredDesigns.length}
                  </span>
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">
                    {currentActiveDesign.title}
                  </h3>
                </div>
              </div>

              {/* Large Media Display */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                <DesignVectorGraphics styleType={currentActiveDesign.vectorStyle} imageUrl={currentActiveDesign.imageUrl} className="w-full h-80 sm:h-96" />
              </div>

              {/* Metadata Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {currentActiveDesign.client && (
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-3">
                    <User className="text-rose-400 w-5 h-5 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Client / Brand</span>
                      <span className="text-xs font-bold text-white">{currentActiveDesign.client}</span>
                    </div>
                  </div>
                )}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-3 sm:col-span-2">
                  <Wrench className="text-cyan-400 w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Software & Creative Tools</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {currentActiveDesign.tools.map(tool => (
                        <GlowingBadge key={tool} accent="rose">{tool}</GlowingBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">Project Brief & Description</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {currentActiveDesign.description}
                </p>
              </div>

              {/* Lightbox Navigation & Footer Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevItem}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-bold uppercase inline-flex items-center gap-1.5"
                  >
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <button
                    onClick={handleNextItem}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-bold uppercase inline-flex items-center gap-1.5"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>

                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="px-6 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-black uppercase tracking-wider"
                >
                  Close Showcase
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
