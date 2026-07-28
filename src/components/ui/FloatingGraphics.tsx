'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LOGO_SLUGS = [
  'nextdotjs', 'directus', 'odoo', 'shopify', 
  'supabase', 'wordpress', 'canva', 'capcut', 
  'adobephotoshop', 'anthropic', 'openai', 
  'googlegemini', 'visualstudio'
];

const FloatingGraphics = () => {
  // Generate random positions for elements
  const generateElements = (count: number, type: 'plus' | 'circle' | 'bracket' | 'code' | 'dot') => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `${type}-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * (type === 'dot' ? 4 : 24) + (type === 'dot' ? 2 : 12),
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  };

  const pluses = generateElements(4, 'plus');
  const circles = generateElements(3, 'circle');
  const brackets = generateElements(2, 'bracket');
  const codes = generateElements(2, 'code');
  const dots = generateElements(8, 'dot');

  const generateLogos = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `logo-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 24 + 20,
      duration: Math.random() * 30 + 15,
      delay: Math.random() * 10,
      slug: LOGO_SLUGS[Math.floor(Math.random() * LOGO_SLUGS.length)],
    }));
  };
  const floatingLogos = generateLogos(15);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      
      {/* Floating Plus Signs */}
      {pluses.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-blue-500/20 font-mono"
          style={{ left: el.left, top: el.top, fontSize: el.size }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          +
        </motion.div>
      ))}

      {/* Floating Wireframe Circles */}
      {circles.map((el) => (
        <motion.div
          key={el.id}
          className="absolute border border-blue-500/10 rounded-full"
          style={{ 
            left: el.left, 
            top: el.top, 
            width: el.size * 2, 
            height: el.size * 2 
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Brackets */}
      {brackets.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-slate-500/20 font-mono font-bold"
          style={{ left: el.left, top: el.top, fontSize: el.size }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: el.duration * 1.2,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          {'{ }'}
        </motion.div>
      ))}

      {/* Floating Code Tags */}
      {codes.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-slate-500/20 font-mono font-bold"
          style={{ left: el.left, top: el.top, fontSize: el.size }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: el.duration * 1.5,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          {'</>'}
        </motion.div>
      ))}

      {/* Glowing Dots */}
      {dots.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bg-blue-400 rounded-full"
          style={{ 
            left: el.left, 
            top: el.top, 
            width: el.size, 
            height: el.size,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: el.duration * 0.5,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Tech Logos */}
      {floatingLogos.map((el) => {
        return (
          <motion.div
            key={el.id}
            className="absolute opacity-20"
            style={{ left: el.left, top: el.top, width: el.size, height: el.size }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "linear"
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`https://cdn.simpleicons.org/${el.slug}/60A5FA`} 
              alt={el.slug}
              className="w-full h-full object-contain mix-blend-screen opacity-50"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingGraphics;
