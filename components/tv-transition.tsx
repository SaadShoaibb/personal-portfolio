'use client';

import { motion } from 'framer-motion';
import { useEra } from '@/lib/era-context';

export function TvTransition() {
  const { targetEra } = useEra();
  const isSwitchingToModern = targetEra === 'modern';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* ─── Modern Era: Color Bars ─── */}
      {isSwitchingToModern && (
        <div className="absolute inset-0 flex transition-opacity duration-300">
          <div className="h-full flex-1 bg-[#C0C0C0]" />
          <div className="h-full flex-1 bg-[#C0C000]" />
          <div className="h-full flex-1 bg-[#00C0C0]" />
          <div className="h-full flex-1 bg-[#00C000]" />
          <div className="h-full flex-1 bg-[#C000C0]" />
          <div className="h-full flex-1 bg-[#C00000]" />
          <div className="h-full flex-1 bg-[#0000C0]" />
          
          {/* Bottom section of EBU Bars */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 flex">
            <div className="h-full flex-1 bg-[#0000C0]" />
            <div className="h-full flex-1 bg-[#131313]" />
            <div className="h-full flex-1 bg-[#C000C0]" />
            <div className="h-full flex-1 bg-[#131313]" />
            <div className="h-full flex-1 bg-[#00C0C0]" />
            <div className="h-full flex-1 bg-[#131313]" />
            <div className="h-full flex-1 bg-[#C0C0C0]" />
          </div>
        </div>
      )}

      {/* ─── 1950s Era: Heavy Static ─── */}
      {!isSwitchingToModern && (
        <div className="absolute inset-0 opacity-100 mix-blend-screen pointer-events-none bg-zinc-950">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[300%] h-[300%] absolute -top-[100%] -left-[100%] opacity-60 noise-layer">
             <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
             </filter>
             <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="white"/>
          </svg>
        </div>
      )}

      {/* ─── Overlay Scanlines & Flicker ─── */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-20 flicker-layer"
        style={{
          background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)'
        }}
      />

      {/* ─── Thematic Hardware Loaders ─── */}
      <div className="relative z-40 flex flex-col items-center justify-center scale-90 md:scale-100">
        
        {/* Case 1: Vintage TV (Switching to 1950s) */}
        {!isSwitchingToModern && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            {/* Antennas */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 h-32 flex justify-between px-2">
              <div className="w-1 h-32 bg-zinc-600 origin-bottom -rotate-[25deg] shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
              <div className="w-1 h-32 bg-zinc-600 origin-bottom rotate-[25deg] shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
            </div>

            {/* Cabinet */}
            <div className="relative w-[320px] h-[240px] bg-[#3d2b1f] rounded-[40px] p-6 border-b-8 border-r-8 border-black/40 shadow-2xl flex gap-4">
              {/* Screen Area */}
              <div className="flex-1 bg-zinc-800 rounded-[30px] border-4 border-[#2d1e15] overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-white/5 pointer-events-none z-10" />
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white font-mono text-xl font-black opacity-30 animate-pulse italic">VHF-9</span>
                </div>
              </div>

              {/* Controls */}
              <div className="w-16 flex flex-col items-center justify-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2d1e15] border-2 border-zinc-600 flex items-center justify-center">
                  <div className="w-6 h-1 bg-zinc-400 rotate-45" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2d1e15] border-2 border-zinc-600 flex items-center justify-center">
                  <div className="w-6 h-1 bg-zinc-400 -rotate-12" />
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="w-8 h-1 bg-black/40 rounded-full" />
                  <div className="w-8 h-1 bg-black/40 rounded-full" />
                  <div className="w-8 h-1 bg-black/40 rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] italic">Transmitting Vintage Signal...</p>
          </motion.div>
        )}

        {/* Case 2: Modern LED TV (Switching to Modern Era) */}
        {isSwitchingToModern && (
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex flex-col items-center"
          >
            {/* LED Frame */}
            <div className="relative w-[400px] h-[225px] bg-[#0f172a] rounded-lg p-1.5 shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
               <div className="h-full w-full rounded-md border border-white/5 overflow-hidden bg-black flex flex-col items-center justify-center relative">
                  {/* Smart HUB-style Loader */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="w-16 h-16 rounded-full border-t-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-6"
                  />
                  <div className="text-blue-500 font-black text-xs tracking-[0.6em] animate-pulse">SMART HUB</div>
                  <div className="absolute bottom-4 flex gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                  </div>
               </div>
            </div>
            
            {/* Stand */}
            <div className="w-32 h-2 bg-zinc-800 rounded-b-xl" />
            <div className="w-48 h-1.5 bg-zinc-900 rounded-t-full shadow-lg" />
            
            <p className="text-center mt-8 text-blue-400 font-bold text-[11px] uppercase tracking-[0.5em] drop-shadow-lg">Restoring 4K Broadcast...</p>
          </motion.div>
        )}

      </div>

      <style>{`
        .noise-layer {
          animation: noiseAnim 0.05s steps(2) infinite;
        }
        .flicker-layer {
          animation: flicker 0.15s infinite;
        }
        @keyframes flicker {
          0% { opacity: 0.35; }
          50% { opacity: 0.45; }
          100% { opacity: 0.35; }
        }
        @keyframes noiseAnim {
          0% { transform: translate(0,0); }
          10% { transform: translate(-1%,-1%); }
          20% { transform: translate(-2%,1%); }
          30% { transform: translate(1%,-2%); }
          40% { transform: translate(-1%,2%); }
          50% { transform: translate(-2%,1%); }
          60% { transform: translate(2%,0); }
          70% { transform: translate(0,2%); }
          80% { transform: translate(1%,3%); }
          90% { transform: translate(-2%,2%); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </motion.div>
  );
}
