'use client';

import React, { useState, useEffect } from 'react';
import { TvTransition } from './tv-transition';
import { Era, EraContext } from '@/lib/era-context';

export function EraProvider({ children }: { children: React.ReactNode }) {
  const [era, setEra] = useState<Era>('1950s');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetEra, setTargetEra] = useState<Era | null>(null);

  const toggleEra = () => {
    if (isTransitioning) return;

    const nextEra = era === '1950s' ? 'modern' : '1950s';

    // Start transition
    setTargetEra(nextEra);
    setIsTransitioning(true);

    // Wait for the static/colorbars to build up heavily (800ms)
    setTimeout(() => {
      // Swap the reality
      setEra(nextEra);

      // Hold the static to allow the new 3D scene to mount (1200ms)
      setTimeout(() => {
        setIsTransitioning(false);
        setTargetEra(null);
      }, 1200);

    }, 800);
  };

  // Inject a global class into the body for external CSS usage downstream
  useEffect(() => {
    if (era === 'modern') {
      document.body.classList.add('theme-modern');
    } else {
      document.body.classList.remove('theme-modern');
    }
  }, [era]);

  return (
    <EraContext.Provider value={{ era, isTransitioning, targetEra, toggleEra }}>
      {children}
      {/* The TV Transition overlay sits globally on top of the entire DOM */}
      {isTransitioning && <TvTransition />}
    </EraContext.Provider>
  );
}

