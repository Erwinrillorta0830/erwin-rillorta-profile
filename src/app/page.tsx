import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-12 border-t border-white/10 text-slate-500 font-medium">
        <p className="text-[10px] font-black uppercase tracking-widest">© {new Date().getFullYear()} ERWIN_SYS // All Systems Operational</p>
      </footer>
    </>
  );
}
