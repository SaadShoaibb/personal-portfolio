'use client';
import { motion } from 'framer-motion';
import { Tv } from 'lucide-react';
import { useEra } from '@/lib/era-context';

export function EraToggle() {
  const { era, toggleEra, isTransitioning } = useEra();
  const isModern = era === 'modern';

  return (
    <motion.button
      onClick={toggleEra}
      disabled={isTransitioning}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.8, type: "spring" }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-10 z-[50] flex items-center gap-3 px-6 py-4 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden group ${
        isModern 
          ? 'bg-blue-950/40 border-blue-500/30 text-blue-100 hover:bg-blue-900/80 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105' 
          : 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:bg-white hover:text-black hover:scale-105'
      }`}
    >
      <Tv className={`w-4 h-4 transition-transform duration-500 ${isModern ? 'text-blue-400' : ''}`} />
      <span className="text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap">
        {isModern ? 'Return to 1950s' : 'Switch to Modern Era'}
      </span>
      
      {/* Scanline hover effect */ }
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none" style={{
        background: 'repeating-linear-gradient(transparent, transparent 2px, black 2px, black 4px)'
      }} />
    </motion.button>
  );
}
