'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Era, EraContext } from '@/lib/era-context';
import { detectLowEndDevice } from '@/lib/perf';

const TvTransition = dynamic(
  () => import('./tv-transition').then((m) => m.TvTransition),
  { ssr: false }
);

export function EraProvider({ children }: { children: React.ReactNode }) {
  const [era, setEra] = useState<Era>('1950s');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetEra, setTargetEra] = useState<Era | null>(null);

  const toggleEra = useCallback(() => {
    if (isTransitioning) return;

    const nextEra = era === '1950s' ? 'modern' : '1950s';

    // Only skip the TV overlay for explicit reduced-motion preference
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setEra(nextEra);
      return;
    }

    setTargetEra(nextEra);
    setIsTransitioning(true);

    // Original timing: build up transition → swap era → hold → clear
    window.setTimeout(() => {
      setEra(nextEra);
      window.setTimeout(() => {
        setIsTransitioning(false);
        setTargetEra(null);
      }, 1200);
    }, 800);
  }, [era, isTransitioning]);

  useEffect(() => {
    if (era === 'modern') {
      document.body.classList.add('theme-modern');
    } else {
      document.body.classList.remove('theme-modern');
    }
  }, [era]);

  // Soften blur on weak hardware — does NOT kill the era transition UI
  useEffect(() => {
    const apply = () => {
      document.body.classList.toggle('perf-lite', detectLowEndDevice());
    };
    apply();
    const mq = window.matchMedia('(max-width: 900px)');
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <EraContext.Provider value={{ era, isTransitioning, targetEra, toggleEra }}>
      {children}
      {isTransitioning && <TvTransition />}
    </EraContext.Provider>
  );
}
