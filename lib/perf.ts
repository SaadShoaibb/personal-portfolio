'use client';

import { useEffect, useState } from 'react';

/**
 * Heuristics for phones / old PCs / constrained networks.
 * Used to skip WebGL, blur, and heavy era transitions.
 */
export function detectLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    if (window.matchMedia('(max-width: 900px)').matches) return true;
    if (window.matchMedia('(pointer: coarse)').matches && window.matchMedia('(max-width: 1200px)').matches) {
      return true;
    }

    if (nav.connection?.saveData) return true;
    const net = nav.connection?.effectiveType;
    if (net === 'slow-2g' || net === '2g' || net === '3g') return true;

    if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4) return true;
    if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4) return true;

    // No usable WebGL → never mount Spline
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext('experimental-webgl', { failIfMajorPerformanceCaveat: true });
    if (!gl) return true;
  } catch {
    return true;
  }

  return false;
}

export function useLowEndDevice() {
  // null = not measured yet (avoid mounting WebGL or showing opt-in too early)
  const [lowEnd, setLowEnd] = useState<boolean | null>(null);

  useEffect(() => {
    setLowEnd(detectLowEndDevice());

    const onChange = () => setLowEnd(detectLowEndDevice());
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqWidth = window.matchMedia('(max-width: 900px)');
    mqMotion.addEventListener('change', onChange);
    mqWidth.addEventListener('change', onChange);

    return () => {
      mqMotion.removeEventListener('change', onChange);
      mqWidth.removeEventListener('change', onChange);
    };
  }, []);

  return lowEnd;
}
