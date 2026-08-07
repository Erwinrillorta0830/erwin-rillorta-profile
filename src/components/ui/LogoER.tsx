'use client';

import React from 'react';

interface LogoERProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const LogoER: React.FC<LogoERProps> = ({ className = "", size = 36, showText = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      
      {/* Graphical Logo Icon Container */}
      <div className="relative flex items-center justify-center p-1.5 rounded-xl group-hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.6)] transition-all duration-300">
        
        {/* Ambient subtle glow background */}
        <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Exact Vector Monogram Logo Artwork matching User Image */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transform group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="erLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>

          {/* TOP BAR OF 'E' THAT EXTENDS & FORMS THE LOOP OF 'R' */}
          <path
            d="M 60 145 
               L 125 70 
               L 330 70 
               C 420 70, 465 115, 465 195 
               C 465 270, 415 315, 325 315 
               L 275 250 
               C 345 250, 385 235, 385 195 
               C 385 155, 350 135, 290 135 
               L 155 135 
               Z"
            fill="url(#erLogoGradient)"
          />

          {/* MIDDLE BAR OF 'E' (Slanted Parallelogram) */}
          <path
            d="M 60 270 
               L 115 195 
               L 245 195 
               L 190 270 
               Z"
            fill="url(#erLogoGradient)"
          />

          {/* BOTTOM BAR OF 'E' (Slanted Parallelogram) */}
          <path
            d="M 50 430 
               L 105 355 
               L 285 355 
               L 230 430 
               Z"
            fill="url(#erLogoGradient)"
          />

          {/* LEG OF 'R' */}
          <path
            d="M 285 240 
               L 425 430 
               L 345 430 
               L 225 275 
               Z"
            fill="url(#erLogoGradient)"
          />
        </svg>
      </div>

      {/* Render text only if showText is explicitly set to true */}
      {showText && (
        <span className="text-xl font-title font-black italic tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
          ER<span className="text-cyan-400">.</span>
        </span>
      )}
    </div>
  );
};
