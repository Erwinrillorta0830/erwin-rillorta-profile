'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Palette, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';
import { GlowingBadge } from './ui/GlowingBadge';
import { DesignVectorGraphics } from './ui/DesignVectorGraphics';

export default function DesignOverview() {
  const { data } = usePortfolio();
  const featuredDesigns = data.designs ? data.designs.slice(0, 3) : [];

  return (
    <section id="designs" className="relative py-24 overflow-hidden bg-slate-950/40 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-4">
              <Sparkles size={14} className="animate-spin-slow" />
              CREATIVE MEDIA & GRAPHIC DESIGN
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 hidden sm:block">
                <Palette className="w-8 h-8 text-rose-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
                Creative <span className="text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">Portfolio</span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-2xl mt-4 leading-relaxed text-sm md:text-base">
              Original branding graphics, e-commerce Shopify banners, custom t-shirt merchandise artwork, print brochures, and video reels created for international clients.
            </p>
          </div>

          <Link
            href="/design"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 hover:border-rose-400 text-rose-300 hover:text-slate-950 font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.15)] group shrink-0"
          >
            <span>View Graphic Portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Design Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {featuredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard accent="rose" className="h-full flex flex-col p-6 group hover:translate-y-[-4px] transition-transform duration-300">
                {/* Vector Artwork Header */}
                <div className="mb-6">
                  <DesignVectorGraphics styleType={design.vectorStyle} imageUrl={design.imageUrl} className="w-full h-44" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {design.client && (
                      <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest mb-1.5 block">
                        Client: {design.client}
                      </span>
                    )}
                    <h3 className="text-xl font-black italic tracking-tighter text-white uppercase group-hover:text-rose-400 transition-colors mb-3">
                      {design.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6 line-clamp-3">
                      {design.description}
                    </p>
                  </div>

                  <div>
                    {/* Tool Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {design.tools.map(tool => (
                        <GlowingBadge key={tool} accent="rose">{tool}</GlowingBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-violet-950/40 border border-rose-500/20 text-center flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="text-left">
            <h4 className="text-xl font-black italic uppercase tracking-tight text-white mb-1 flex items-center gap-2">
              <ImageIcon size={20} className="text-rose-400" />
              Explore All Graphic Design & Video Work
            </h4>
            <p className="text-slate-400 text-xs font-medium">
              Filter by Logos, T-Shirts, Social Media Banners, Print Tarpaulins, and Video Reels in our interactive design gallery.
            </p>
          </div>

          <Link
            href="/design"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-violet-500 hover:from-rose-400 hover:to-violet-400 text-slate-950 font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_25px_rgba(244,63,94,0.3)] hover:scale-105 shrink-0"
          >
            Launch Design Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
}
