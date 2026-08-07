'use client';

import React from 'react';

interface DesignVectorProps {
  styleType?: 'logo' | 'banner' | 'tshirt' | 'brochure' | 'video' | string;
  className?: string;
  imageUrl?: string;
}

export const DesignVectorGraphics: React.FC<DesignVectorProps> = ({
  styleType = 'banner',
  className = "w-full h-48",
  imageUrl
}) => {
  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="Graphic Design Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    );
  }

  switch (styleType) {
    case 'banner':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-rose-500/20 group-hover:border-rose-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* E-Commerce Banner Mockup */}
            <rect x="25" y="25" width="270" height="110" rx="10" fill="#090D16" stroke="#F43F5E" strokeWidth="1.5" />
            <rect x="35" y="35" width="130" height="90" rx="6" fill="url(#bannerGrad)" fillOpacity="0.2" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="80" cy="70" r="18" fill="#F43F5E" fillOpacity="0.4" />
            <path d="M50 110L75 80L100 100L130 65L155 110H50Z" fill="#8B5CF6" fillOpacity="0.3" />

            {/* Typography Header vector */}
            <rect x="180" y="45" width="100" height="10" rx="5" fill="#F43F5E" />
            <rect x="180" y="63" width="80" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.6" />
            <rect x="180" y="75" width="90" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.3" />

            {/* Color Palette Swatches */}
            <circle cx="186" cy="102" r="7" fill="#F43F5E" />
            <circle cx="204" cy="102" r="7" fill="#8B5CF6" />
            <circle cx="222" cy="102" r="7" fill="#06B6D4" />
            <circle cx="240" cy="102" r="7" fill="#10B981" />

            <text x="160" y="148" textAnchor="middle" fill="#F43F5E" fontSize="9" fontWeight="800" letterSpacing="1.5">SHOPIFY & E-COMMERCE BANNERS</text>
          </svg>
        </div>
      );

    case 'tshirt':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* T-Shirt Vector Outline */}
            <g transform="translate(100, 20)">
              <path d="M40 10 C 50 20 70 20 80 10 L 110 30 L 95 50 L 85 40 V 110 H 35 V 40 L 25 50 L 10 30 Z" fill="#090D16" stroke="#06B6D4" strokeWidth="2" />
              {/* Graphic Emblem on Chest */}
              <circle cx="60" cy="65" r="16" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4 2" />
              <polygon points="60,53 72,73 48,73" fill="#06B6D4" fillOpacity="0.5" />
              <rect x="42" y="86" width="36" height="4" rx="2" fill="#06B6D4" />
            </g>

            {/* Print Marks */}
            <line x1="40" y1="40" x2="40" y2="120" stroke="#06B6D4" strokeOpacity="0.15" strokeDasharray="2 2" />
            <line x1="280" y1="40" x2="280" y2="120" stroke="#06B6D4" strokeOpacity="0.15" strokeDasharray="2 2" />

            <text x="160" y="148" textAnchor="middle" fill="#06B6D4" fontSize="9" fontWeight="800" letterSpacing="1.5">CUSTOM APPAREL & T-SHIRT MERCH</text>
          </svg>
        </div>
      );

    case 'logo':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-violet-500/20 group-hover:border-violet-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Logo Grid Guidelines */}
            <circle cx="160" cy="70" r="45" stroke="#8B5CF6" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx="160" cy="70" r="30" stroke="#8B5CF6" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M110 70H210M160 20V120" stroke="#8B5CF6" strokeOpacity="0.2" />

            {/* Geometric Vector Emblem */}
            <g transform="translate(160, 70)">
              <rect x="-22" y="-22" width="44" height="44" rx="8" fill="#090D16" stroke="#8B5CF6" strokeWidth="2" transform="rotate(45)" />
              <circle cx="0" cy="0" r="12" fill="#8B5CF6" fillOpacity="0.4" />
              {/* Anchor points */}
              <circle cx="0" cy="-31" r="3" fill="#EC4899" />
              <circle cx="31" cy="0" r="3" fill="#EC4899" />
              <circle cx="0" cy="31" r="3" fill="#EC4899" />
              <circle cx="-31" cy="0" r="3" fill="#EC4899" />
            </g>

            <text x="160" y="148" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="800" letterSpacing="1.5">BRAND IDENTITY & LOGO ARTWORK</text>
          </svg>
        </div>
      );

    case 'brochure':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tri-fold Brochure Panels */}
            <g transform="translate(45, 25)">
              {/* Panel 1 */}
              <rect x="0" y="0" width="70" height="100" rx="4" fill="#090D16" stroke="#10B981" strokeWidth="1.5" />
              <rect x="8" y="10" width="54" height="8" rx="2" fill="#10B981" />
              <rect x="8" y="24" width="40" height="4" rx="2" fill="#10B981" fillOpacity="0.4" />
              <rect x="8" y="32" width="50" height="40" rx="3" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeDasharray="2 2" />

              {/* Panel 2 */}
              <rect x="78" y="0" width="70" height="100" rx="4" fill="#090D16" stroke="#10B981" strokeWidth="1.5" />
              <rect x="86" y="10" width="54" height="25" rx="3" fill="#06B6D4" fillOpacity="0.2" />
              <rect x="86" y="42" width="50" height="4" rx="2" fill="#10B981" fillOpacity="0.4" />
              <rect x="86" y="50" width="45" height="4" rx="2" fill="#10B981" fillOpacity="0.4" />

              {/* Panel 3 */}
              <rect x="156" y="0" width="70" height="100" rx="4" fill="#090D16" stroke="#10B981" strokeWidth="1.5" />
              <rect x="164" y="10" width="54" height="4" rx="2" fill="#10B981" />
              <rect x="164" y="18" width="35" height="4" rx="2" fill="#10B981" fillOpacity="0.4" />
              <circle cx="191" cy="60" r="16" fill="#10B981" fillOpacity="0.3" />
            </g>

            <text x="160" y="148" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="800" letterSpacing="1.5">PRINT BROCHURES & TARPAULINS</text>
          </svg>
        </div>
      );

    case 'video':
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-amber-500/20 group-hover:border-amber-500/50 transition-all ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Video Player & Timeline */}
            <rect x="30" y="20" width="260" height="115" rx="8" fill="#090D16" stroke="#F59E0B" strokeWidth="1.5" />
            
            {/* Screen */}
            <rect x="40" y="30" width="130" height="70" rx="4" fill="#05080E" stroke="#F59E0B" strokeWidth="1" />
            <polygon points="98,55 115,65 98,75" fill="#F59E0B" />

            {/* Timeline Tracks */}
            <rect x="180" y="30" width="100" height="16" rx="4" fill="#F59E0B" fillOpacity="0.3" />
            <rect x="180" y="50" width="80" height="16" rx="4" fill="#06B6D4" fillOpacity="0.3" />
            <rect x="180" y="70" width="95" height="16" rx="4" fill="#EC4899" fillOpacity="0.3" />

            {/* Red Playhead line */}
            <line x1="220" y1="25" x2="220" y2="105" stroke="#EF4444" strokeWidth="2" />
            <polygon points="216,25 224,25 220,30" fill="#EF4444" />

            <text x="160" y="148" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="800" letterSpacing="1.5">VIDEO EDITING & REELS TIMELINE</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center bg-slate-950/80 rounded-2xl overflow-hidden border border-rose-500/20 ${className}`}>
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 160" fill="none">
            <rect x="20" y="20" width="280" height="120" rx="10" fill="#090D16" stroke="#F43F5E" strokeWidth="1" />
            <text x="160" y="90" textAnchor="middle" fill="#F43F5E" fontSize="12" fontWeight="700">GRAPHIC DESIGN VECTOR</text>
          </svg>
        </div>
      );
  }
};
