'use client';

import { Tv } from 'lucide-react';
import { useEra } from '@/lib/era-context';

export function EraToggle() {
  const { era, toggleEra, isTransitioning } = useEra();
  const isModern = era === 'modern';

  return (
    <button
      type="button"
      onClick={toggleEra}
      disabled={isTransitioning}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-10 z-50 flex items-center gap-3 px-6 py-4 rounded-full border shadow-lg backdrop-blur-sm transition-colors duration-300 overflow-hidden group ${
        isModern
          ? 'bg-blue-950/80 border-blue-500/30 text-blue-100 hover:bg-blue-900/90'
          : 'bg-zinc-900/90 border-white/10 text-zinc-300 hover:bg-white hover:text-black'
      }`}
    >
      <Tv className={`w-4 h-4 transition-transform duration-500 ${isModern ? 'text-blue-400' : ''}`} />
      <span className="text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap">
        {isModern ? 'Return to 1950s' : 'Switch to Modern Era'}
      </span>
    </button>
  );
}
