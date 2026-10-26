'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useEra } from '@/lib/era-context';

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => null,
});

type SplineApp = {
  stop: () => void;
  play: () => void;
  _renderer?: { setPixelRatio?: (n: number) => void };
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const splineRef = useRef<SplineApp | null>(null);
  const { era } = useEra();
  const reducedMotion = usePrefersReducedMotion();

  const skipSpline = reducedMotion;
  const scene = era === '1950s' ? '/scene.splinecode' : '/scene2.splinecode';

  // Track whether the hero is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.05;
        setInView(visible);
      },
      { root: null, rootMargin: '0px', threshold: [0, 0.05, 0.1, 0.25] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mount Spline ONLY while the hero is in view.
  // Theme changes off-screen → no download / no WebGL rebuild until you scroll back.
  useEffect(() => {
    if (skipSpline || !inView) {
      setShouldRender(false);
      splineRef.current = null;
      if (skipSpline || !inView) {
        // Keep a still backdrop when off-screen; don't show the loader spinner
        if (!inView) setIsLoaded(true);
        else setIsLoaded(true);
      }
      return;
    }

    setIsLoaded(false);
    setError(false);

    let cancelled = false;
    const start = () => {
      if (!cancelled) setShouldRender(true);
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const timer = setTimeout(start, 200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [skipSpline, inView, era]);

  // Pause if tab hidden while mounted
  useEffect(() => {
    if (!shouldRender) return;
    const onVis = () => {
      const app = splineRef.current;
      if (!app) return;
      if (document.hidden) app.stop();
      else app.play();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [shouldRender]);

  const handleLoad = (app: SplineApp) => {
    splineRef.current = app;
    setIsLoaded(true);
    try {
      app._renderer?.setPixelRatio?.(Math.min(window.devicePixelRatio || 1, 1.5));
    } catch {
      // ignore
    }
    if (document.hidden) app.stop();
  };

  const showLoader = shouldRender && !isLoaded && !error && inView && !skipSpline;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[65vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950 [contain:paint]"
    >
      {/* Static backdrop when unloaded / off-screen / reduced-motion */}
      {(!shouldRender || !isLoaded || skipSpline) && (
        <div
          className="absolute inset-0 z-0"
          aria-hidden
          style={{
            background:
              era === 'modern'
                ? 'radial-gradient(ellipse at 50% 30%, #312e81 0%, #020617 55%, #000 100%)'
                : 'radial-gradient(ellipse at 50% 40%, #27272a 0%, #09090b 50%, #000 100%)',
          }}
        />
      )}

      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
        <div className="w-full h-[35vh] sm:h-[45vh] md:h-screen relative flex items-center justify-center">
          {shouldRender && !error && !skipSpline ? (
            <Suspense fallback={null}>
              {/* key forces clean remount only when we intentionally mount a scene */}
              <Spline
                key={scene}
                scene={scene}
                onLoad={handleLoad}
                onError={() => setError(true)}
              />
            </Suspense>
          ) : error ? (
            <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
              <p className="text-zinc-800 font-black text-4xl uppercase tracking-tighter">
                Scene Error
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {showLoader && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/80 z-50">
          <div className="relative flex items-center justify-center mb-10">
            <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-transparent border-t-zinc-400 animate-spin" />
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-light animate-pulse">
            Initializing
          </span>
        </div>
      )}

      {isLoaded && inView && !skipSpline && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 z-10 pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
            Scroll
          </span>
          <div className="relative w-px h-12 bg-zinc-800/60 overflow-hidden">
            <div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white to-transparent animate-[scrollLine_2s_linear_infinite]" />
          </div>
        </div>
      )}
    </section>
  );
}
