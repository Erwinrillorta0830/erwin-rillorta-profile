'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Satellite } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { GlassCard } from './ui/GlassCard';

export default function Contact() {
  const { data } = usePortfolio();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-8 animate-pulse-slow">
            <Satellite className="w-12 h-12 text-blue-500" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-title font-black uppercase tracking-tighter italic text-white mb-6">
            Contact <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Me</span>
          </h2>
          
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-16 italic">
            Interested in working together? Initiate a secure connection for project inquiries. 
            Awaiting transmission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            <GlassCard accent="slate" className="p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Comms_Channel</h3>
              <p className="text-white font-mono">{data.email}</p>
            </GlassCard>
            
            <GlassCard accent="slate" className="p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform delay-75">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Direct_Line</h3>
              <p className="text-white font-mono">{data.phone}</p>
            </GlassCard>

            <GlassCard accent="slate" className="p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform delay-150">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Coordinates</h3>
              <p className="text-white font-mono">{data.location}</p>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
