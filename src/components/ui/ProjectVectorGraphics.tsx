'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectVectorProps {
  type?: 'divi-erp' | 'field-management' | 'vos-sync' | 'industrial-distribution' | 'mmpa-erp' | string;
  className?: string;
  imageUrl?: string;
  images?: string[];
  interval?: number;
}

export const ProjectVectorGraphics: React.FC<ProjectVectorProps> = ({ 
  type = 'divi-erp', 
  className = "w-full h-48",
  imageUrl,
  images,
  interval = 3000
}) => {
  // Consolidate image sources
  const imageList = Array.isArray(images) && images.length > 0
    ? images
    : imageUrl
    ? [imageUrl]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    if (imageList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  }, [imageList.length]);

  const prevSlide = useCallback(() => {
    if (imageList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  }, [imageList.length]);

  // Auto slide effect every 3 seconds
  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [imageList.length, isHovered, interval, nextSlide]);

  if (imageList.length > 0) {
    return (
      <div 
        className={`relative overflow-hidden rounded-2xl border border-white/10 group bg-slate-950 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Carousel Image */}
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={imageList[currentIndex]} 
            alt={`ERP System Screenshot ${currentIndex + 1}`} 
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </AnimatePresence>

        {/* Carousel Navigation Controls (if multiple images) */}
        {imageList.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white/80 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
              title="Previous Screenshot"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white/80 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
              title="Next Screenshot"
            >
              <ChevronRight size={16} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 z-20 shadow-md">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]' 
                      : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter Indicator */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-20 shadow-md">
              <span>{currentIndex + 1} / {imageList.length}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">3s AUTO</span>
            </div>
          </>
        )}

        {/* Confidential Watermark Badge */}
        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1.5 shadow-md z-20">
          <ShieldAlert size={12} className="text-amber-400" />
          <span>Confidential Data Obfuscated</span>
        </div>
      </div>
    );
  }

  switch (type) {
    case 'divi-erp':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="diviGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="diviGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M20 40H300M20 80H300M20 120H300" stroke="#3B82F6" strokeOpacity="0.1" strokeDasharray="4 4" />
            <path d="M80 20V140M160 20V140M240 20V140" stroke="#3B82F6" strokeOpacity="0.1" strokeDasharray="4 4" />
            
            <rect x="30" y="30" width="80" height="45" rx="8" fill="#090D16" stroke="#3B82F6" strokeWidth="1.5" />
            <rect x="38" y="40" width="40" height="6" rx="3" fill="#3B82F6" />
            <rect x="38" y="52" width="60" height="4" rx="2" fill="#3B82F6" fillOpacity="0.4" />

            <rect x="120" y="30" width="80" height="45" rx="8" fill="#090D16" stroke="#06B6D4" strokeWidth="1.5" />
            <path d="M130 62L145 45L160 55L185 38" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <rect x="210" y="30" width="80" height="45" rx="8" fill="#090D16" stroke="#6366F1" strokeWidth="1.5" />
            <circle cx="250" cy="52" r="14" stroke="#6366F1" strokeWidth="2" strokeDasharray="60 30" />

            <rect x="70" y="95" width="180" height="45" rx="10" fill="url(#diviGlow)" stroke="url(#diviGrad)" strokeWidth="2" />
            <text x="160" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="2">DIVI CORE ERP</text>

            <path d="M70 75V95M160 75V95M250 75V95" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="70" cy="95" r="3" fill="#3B82F6" />
            <circle cx="160" cy="95" r="3" fill="#06B6D4" />
            <circle cx="250" cy="95" r="3" fill="#6366F1" />
          </svg>
        </div>
      );

    case 'field-management':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="160" cy="80" r="60" stroke="#06B6D4" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="160" cy="80" r="40" stroke="#06B6D4" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="160" cy="80" r="20" stroke="#06B6D4" strokeOpacity="0.35" strokeWidth="1" />
            <path d="M100 80H220M160 20V140" stroke="#06B6D4" strokeOpacity="0.15" />

            <g transform="translate(160, 65)">
              <path d="M0 -18C-8 -18 -14 -12 -14 -4C-14 8 0 20 0 20C0 20 14 8 14 -4C14 -12 8 -18 0 -18Z" fill="#06B6D4" />
              <circle cx="0" cy="-4" r="5" fill="#090D16" />
            </g>
            <g transform="translate(105, 100)">
              <circle cx="0" cy="0" r="6" fill="#10B981" />
              <circle cx="0" cy="0" r="10" stroke="#10B981" strokeOpacity="0.5" strokeDasharray="3 3" />
            </g>
            <g transform="translate(215, 95)">
              <circle cx="0" cy="0" r="6" fill="#3B82F6" />
              <circle cx="0" cy="0" r="10" stroke="#3B82F6" strokeOpacity="0.5" strokeDasharray="3 3" />
            </g>

            <path d="M105 100 Q 140 110 160 85 Q 185 70 215 95" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" fill="none" />

            <rect x="25" y="25" width="70" height="40" rx="6" fill="#090D16" stroke="#06B6D4" strokeWidth="1" />
            <rect x="32" y="33" width="35" height="5" rx="2" fill="#06B6D4" />
            <rect x="32" y="43" width="50" height="4" rx="2" fill="#06B6D4" fillOpacity="0.4" />
            <rect x="32" y="51" width="25" height="4" rx="2" fill="#10B981" />

            <text x="160" y="148" textAnchor="middle" fill="#06B6D4" fontSize="10" fontWeight="800" letterSpacing="1.5">GEO-DISPATCH & FIELD HUD</text>
          </svg>
        </div>
      );

    case 'vos-sync':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="50" width="75" height="60" rx="10" fill="#090D16" stroke="#10B981" strokeWidth="1.5" />
            <path d="M60 70H95M60 80H85M60 90H90" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <text x="77" y="125" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700">CLIENT NODE</text>

            <rect x="205" y="50" width="75" height="60" rx="10" fill="#090D16" stroke="#10B981" strokeWidth="1.5" />
            <path d="M225 70H260M225 80H250M225 90H255" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <text x="242" y="125" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700">CLOUD SERVER</text>

            <path d="M125 68 C 145 55 175 55 195 68" stroke="#10B981" strokeWidth="2.5" fill="none" strokeDasharray="6 4" />
            <path d="M195 68 L185 62 M195 68 L188 74" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

            <path d="M195 92 C 175 105 145 105 125 92" stroke="#06B6D4" strokeWidth="2.5" fill="none" strokeDasharray="6 4" />
            <path d="M125 92 L135 98 M125 92 L132 86" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="160" cy="80" r="16" fill="#090D16" stroke="#10B981" strokeWidth="2" />
            <path d="M154 75L166 85M166 75L154 85" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

            <text x="160" y="148" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="800" letterSpacing="1.5">VOS SYNC ENGINE</text>
          </svg>
        </div>
      );

    case 'industrial-distribution':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-amber-500/20 group-hover:border-amber-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50, 45)">
              <rect x="0" y="15" width="22" height="60" rx="6" fill="#090D16" stroke="#F59E0B" strokeWidth="1.5" />
              <path d="M6 5V15H16V5C16 2 6 2 6 5Z" fill="#F59E0B" />
              <line x1="4" y1="35" x2="18" y2="35" stroke="#F59E0B" strokeOpacity="0.5" />
            </g>
            <g transform="translate(80, 35)">
              <rect x="0" y="15" width="24" height="70" rx="6" fill="#090D16" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M7 5V15H17V5C17 2 7 2 7 5Z" fill="#3B82F6" />
              <line x1="4" y1="40" x2="20" y2="40" stroke="#3B82F6" strokeOpacity="0.5" />
            </g>

            <g transform="translate(145, 35)">
              <rect x="0" y="0" width="120" height="75" rx="8" fill="#090D16" stroke="#F59E0B" strokeWidth="1" />
              <path d="M15 15H105M15 25H105M15 35H105" stroke="#F59E0B" strokeOpacity="0.15" />
              <line x1="25" y1="20" x2="25" y2="55" stroke="#F59E0B" strokeWidth="3" />
              <line x1="32" y1="20" x2="32" y2="55" stroke="#F59E0B" strokeWidth="1" />
              <line x1="37" y1="20" x2="37" y2="55" stroke="#F59E0B" strokeWidth="4" />
              <line x1="46" y1="20" x2="46" y2="55" stroke="#F59E0B" strokeWidth="2" />
              <line x1="53" y1="20" x2="53" y2="55" stroke="#F59E0B" strokeWidth="1" />
              <line x1="60" y1="20" x2="60" y2="55" stroke="#F59E0B" strokeWidth="3" />
              <line x1="68" y1="20" x2="68" y2="55" stroke="#F59E0B" strokeWidth="2" />

              <line x1="10" y1="38" x2="110" y2="38" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" />
            </g>

            <text x="160" y="148" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="800" letterSpacing="1.5">SERIALIZED LOGISTICS & RFID</text>
          </svg>
        </div>
      );

    case 'mmpa-erp':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-violet-500/20 group-hover:border-violet-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="45" width="60" height="75" rx="8" fill="#090D16" stroke="#8B5CF6" strokeWidth="1.5" />
            <rect x="48" y="55" width="44" height="6" rx="2" fill="#8B5CF6" />
            <rect x="48" y="67" width="30" height="4" rx="2" fill="#8B5CF6" fillOpacity="0.4" />
            <rect x="48" y="77" width="38" height="4" rx="2" fill="#8B5CF6" fillOpacity="0.4" />
            <rect x="48" y="87" width="25" height="4" rx="2" fill="#EC4899" />

            <rect x="130" y="30" width="60" height="90" rx="8" fill="#090D16" stroke="#EC4899" strokeWidth="1.5" />
            <rect x="138" y="40" width="44" height="6" rx="2" fill="#EC4899" />
            <rect x="138" y="52" width="34" height="4" rx="2" fill="#EC4899" fillOpacity="0.4" />
            <circle cx="160" cy="85" r="18" fill="#090D16" stroke="#EC4899" strokeWidth="1.5" />
            <path d="M152 85L158 91L168 79" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <rect x="220" y="45" width="60" height="75" rx="8" fill="#090D16" stroke="#8B5CF6" strokeWidth="1.5" />
            <rect x="228" y="55" width="44" height="6" rx="2" fill="#8B5CF6" />
            <rect x="228" y="67" width="34" height="4" rx="2" fill="#8B5CF6" fillOpacity="0.4" />
            <rect x="228" y="77" width="28" height="4" rx="2" fill="#8B5CF6" fillOpacity="0.4" />

            <path d="M100 82H130M190 82H220" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 2" />

            <text x="160" y="148" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="800" letterSpacing="1.5">MMPA MULTI-TENANT MATRIX</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-blue-500/20 ${className}`}>
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none">
            <rect x="20" y="20" width="280" height="120" rx="10" fill="#090D16" stroke="#3B82F6" strokeWidth="1" />
            <text x="160" y="90" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="700">PROJECT VECTOR GRAPHIC</text>
          </svg>
        </div>
      );
  }
};
