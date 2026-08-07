'use client';

import React from 'react';
import Link from 'next/link';
import SettingsModal from './SettingsModal';
import { LogoER } from './ui/LogoER';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Graphical ER Logo */}
        <Link href="/">
          <LogoER />
        </Link>
        
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <li><Link href="/#home" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link href="/#experiences" className="hover:text-white transition-colors">Experiences</Link></li>
          <li><Link href="/projects" className="text-blue-400 hover:text-white transition-colors">Projects</Link></li>
          <li><Link href="/design" className="text-rose-400 hover:text-white transition-colors">Graphic Design</Link></li>
          <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden sm:flex px-6 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-black uppercase tracking-widest text-[10px] items-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
            Initiate
          </Link>
          <SettingsModal />
        </div>
      </div>
    </nav>
  );
}
