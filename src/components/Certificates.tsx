'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Award } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    { title: "Example Certificate 1", issuer: "Provider A", date: "2025" },
    { title: "Example Certificate 2", issuer: "Provider B", date: "2026" }
  ];

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Award className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-title font-black uppercase tracking-tighter italic text-white">
            Certificates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard accent="slate" className="h-full flex flex-col p-8 group">
                <div className="flex-1">
                  <h3 className="text-xl font-black italic tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-500/20 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-blue-500/70 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {cert.date}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
