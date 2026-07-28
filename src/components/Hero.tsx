'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import FloatingGraphics from './ui/FloatingGraphics';

// SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CHARS = '!<>-_\\\\/[]{}—=+*^?#_';
const ROLES = [
  "FULL STACK DEVELOPER",
  "PROJECT MANAGER",
  "GRAPHIC DESIGNER",
  "VIDEO EDITOR",
  "EXECUTIVE ASSISTANT",
  "IT SPECIALIST"
];

function useScrambleText(texts: string[], intervalMs = 2500) {
  const [displayText, setDisplayText] = React.useState(texts[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    let localIndex = 0;
    const maxFrames = 15;
    
    const interval = setInterval(() => {
      const nextIndex = (localIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      const targetText = texts[nextIndex];
      const oldText = texts[localIndex];
      const maxLength = Math.max(oldText.length, targetText.length);
      let frame = 0;

      const scramble = setInterval(() => {
        let output = "";
        for (let i = 0; i < maxLength; i++) {
          const targetChar = targetText[i];
          const oldChar = oldText[i];
          
          if (i < (frame / maxFrames) * maxLength) {
             output += targetChar || "";
          } else {
             if (targetChar === ' ' || (!targetChar && oldChar === ' ')) {
                 output += ' ';
             } else {
                 output += CHARS[Math.floor(Math.random() * CHARS.length)];
             }
          }
        }
        
        setDisplayText(output);
        frame++;
        
        if (frame > maxFrames) {
          clearInterval(scramble);
          setDisplayText(targetText);
          localIndex = nextIndex;
        }
      }, 50);

      return () => clearInterval(scramble);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [texts, intervalMs]);

  return { text: displayText, currentIndex };
}

export default function Hero() {
  const { data } = usePortfolio();
  const { text: displayText, currentIndex } = useScrambleText(ROLES);

  const currentRole = ROLES[currentIndex];
  const isVowel = /^[AEIOU]/i.test(currentRole);
  const article = isVowel ? 'an' : 'a';

  const roleParts = displayText.split(' ');
  const firstHalf = roleParts.slice(0, Math.ceil(roleParts.length / 2)).join(' ');
  const secondHalf = roleParts.slice(Math.ceil(roleParts.length / 2)).join(' ');

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden py-20 pt-32">
      {/* Background Fluid Core - Mission Control Aesthetic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FloatingGraphics />
        {/* Background glow effects */}
        <div className="absolute inset-0 z-0">
            <motion.div
                animate={{ x: [0, 100, -80, 0], y: [0, 100, -100, 0], scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[10%] w-[50%] h-[50%] bg-blue-500/20 blur-[100px] rounded-full will-change-transform"
            />
            <motion.div
                animate={{ x: [0, -100, 80, 0], y: [0, -100, 100, 0], scale: [1.2, 0.8, 1.1, 1.2] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-blue-500/20 blur-[100px] rounded-full will-change-transform"
            />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        
        {/* LEFT: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl text-slate-400 font-mono italic mb-4"
          >
            Hi, I&apos;m <span className="text-white">{data.name}</span>, {article}
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-title font-black uppercase tracking-tighter leading-[0.9] italic text-slate-900 dark:text-white mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 pr-4">{firstHalf}</span><br />
            <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] pr-4">{secondHalf}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
          >
            <a href="#projects" className="px-10 h-14 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-black uppercase tracking-widest text-[11px] flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1">
              Projects {'</>'}
            </a>
            <a href="#contact" className="px-10 h-14 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-2 transition-all backdrop-blur-md">
              Hire Me <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center justify-center lg:justify-start gap-6"
          >
            <a href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors shadow-xl">
              <GithubIcon />
            </a>
            <a href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-500/50 transition-colors shadow-xl">
              <LinkedinIcon />
            </a>
            <a href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-500/50 transition-colors shadow-xl">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Image Element */}
        <div className="relative w-full lg:w-[120%] lg:-ml-[10%] aspect-[4/5] md:aspect-[3/4] max-w-[500px] lg:max-w-none mx-auto order-1 lg:order-2 group mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full h-full"
          >
            {/* The primary image */}
            <Image 
              src="/profile.png" 
              alt={data.name} 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom z-10 relative [mask-image:linear-gradient(to_top,transparent_0%,black_15%)] transition-all duration-500 group-hover:brightness-110"
            />
            {/* Glitch Slice 1 - Cyan */}
            <Image 
              src="/profile.png" 
              alt="" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="glitch-slice-1 object-contain object-bottom absolute inset-0 opacity-0 group-hover:opacity-90 mix-blend-screen filter hue-rotate-90 pointer-events-none z-20 [mask-image:linear-gradient(to_top,transparent_0%,black_15%)]"
            />
            {/* Glitch Slice 2 - Magenta */}
            <Image 
              src="/profile.png" 
              alt="" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="glitch-slice-2 object-contain object-bottom absolute inset-0 opacity-0 group-hover:opacity-90 mix-blend-screen filter -hue-rotate-90 pointer-events-none z-20 [mask-image:linear-gradient(to_top,transparent_0%,black_15%)]"
            />
          </motion.div>
        </div>

        <style>{`
          .group:hover .glitch-slice-1 {
            animation: glitch-anim-slice-1 0.4s infinite linear alternate-reverse;
          }
          .group:hover .glitch-slice-2 {
            animation: glitch-anim-slice-2 0.3s infinite linear alternate-reverse;
          }
          
          @keyframes glitch-anim-slice-1 {
            0% { clip-path: inset(20% 0 80% 0); transform: translate(-8px, 0); }
            20% { clip-path: inset(60% 0 10% 0); transform: translate(8px, 0); }
            40% { clip-path: inset(40% 0 50% 0); transform: translate(-8px, 0); }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(8px, 0); }
            80% { clip-path: inset(10% 0 70% 0); transform: translate(-8px, 0); }
            100% { clip-path: inset(30% 0 50% 0); transform: translate(8px, 0); }
          }
          
          @keyframes glitch-anim-slice-2 {
            0% { clip-path: inset(10% 0 60% 0); transform: translate(12px, 0); }
            20% { clip-path: inset(30% 0 20% 0); transform: translate(-12px, 0); }
            40% { clip-path: inset(70% 0 10% 0); transform: translate(12px, 0); }
            60% { clip-path: inset(20% 0 50% 0); transform: translate(-12px, 0); }
            80% { clip-path: inset(50% 0 30% 0); transform: translate(12px, 0); }
            100% { clip-path: inset(5% 0 80% 0); transform: translate(-12px, 0); }
          }
        `}</style>
      </div>
    </section>
  );
}
