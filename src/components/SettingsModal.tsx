'use client';

import React, { useState } from 'react';
import { Settings, X, Save, RotateCcw } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';

export default function SettingsModal() {
  const { data, updateData, resetData } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: data.name,
    role: data.role,
    bio: data.bio
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateData(formData);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className="p-2 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 transition-all backdrop-blur-md" 
        onClick={() => setIsOpen(true)}
        aria-label="System Settings"
      >
        <Settings size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-lg"
            >
              <GlassCard accent="cyan" className="p-0 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-cyan-500/20 bg-cyan-950/30">
                  <h2 className="text-xl font-black italic tracking-tighter uppercase text-white">
                    System <span className="text-cyan-400">Config</span>
                  </h2>
                  <button className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2">Operator Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-lg px-4 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2">Designation</label>
                    <input 
                      type="text" 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange} 
                      className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-lg px-4 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2">Profile Overview</label>
                    <textarea 
                      name="bio" 
                      value={formData.bio} 
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-lg px-4 py-2 text-white outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 border-t border-cyan-500/20 bg-cyan-950/30">
                  <button 
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-rose-400 transition-colors" 
                    onClick={() => { resetData(); setIsOpen(false); }}
                  >
                    <RotateCcw size={14} /> Reset
                  </button>
                  <button 
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black uppercase tracking-widest transition-colors" 
                    onClick={handleSave}
                  >
                    <Save size={14} /> Commit
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
