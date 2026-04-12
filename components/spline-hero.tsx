'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load Spline — this is the #1 performance bottleneck
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => null,
});

import { useEra } from '@/lib/era-context';

export function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { era } = useEra();

  // Delay Spline mount slightly so the page shell renders instantly
  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Show loading indicator when era changes (since WebGL context rebuilds)
  useEffect(() => {
    setIsLoaded(false);
  }, [era]);

  const TARGET_SCENE = era === '1950s' ? "/scene.splinecode" : "/scene2.splinecode";

  return (
    <section className="relative w-full h-[65vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
        <div className="w-full h-[35vh] sm:h-[45vh] md:h-screen relative flex items-center justify-center">
          {shouldRender && !error ? (
            <Suspense fallback={null}>
              <Spline
                scene={TARGET_SCENE}
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
              />
            </Suspense>
          ) : error ? (
            <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
              <p className="text-zinc-800 font-black text-4xl uppercase tracking-tighter">Scene Error</p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Premium Loader overlay */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded && !error ? 'opacity-0 pointer-events-none scale-105 blur-md' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        <div className="relative flex items-center justify-center mb-10">
          <div className="w-16 h-16 rounded-full border border-zinc-800/80 flex items-center justify-center bg-zinc-950 overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-[-20px] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_10%,#000_20%)] opacity-40"
            />
            <div className="absolute inset-[2px] rounded-full bg-black z-10 flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>
        </div>
        <motion.span 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-light"
        >
          Initializing
        </motion.span>
      </div>

      {/* Scroll Indicator */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 animate-pulse font-medium">Scroll</span>
          <div className="relative w-[1px] h-16 bg-zinc-800/60 overflow-hidden">
            <motion.div 
              initial={{ top: "-50%" }}
              animate={{ top: "150%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-white to-transparent"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
