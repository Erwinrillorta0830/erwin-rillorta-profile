'use client';

import React from 'react';
import SettingsModal from './SettingsModal';
import { usePortfolio } from '@/context/PortfolioContext';

export default function Navbar() {
  const { data } = usePortfolio();
  const firstName = data.name.split(' ')[0].toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="text-xl font-black italic tracking-tighter text-white">
          {firstName}<span className="text-blue-500">.SYS</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
          <li><a href="#experiences" className="hover:text-white transition-colors">Work Experiences</a></li>
          <li><a href="#certificates" className="hover:text-white transition-colors">Certificates</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:flex px-6 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-black uppercase tracking-widest text-[10px] items-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
            Initiate
          </a>
          <SettingsModal />
        </div>
      </div>
    </nav>
  );
}
