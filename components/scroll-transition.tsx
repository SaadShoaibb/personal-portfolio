'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollTransitionProps {
  children: React.ReactNode;
}

export function ScrollTransition({ children }: ScrollTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transition from 100% grayscale to 0% grayscale as we scroll
  const grayscale = useTransform(scrollYProgress, [0, 0.2], ["grayscale(100%)", "grayscale(0%)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ filter: grayscale, opacity }}
      className="transition-all duration-300 ease-out"
    >
      {children}
    </motion.div>
  );
}
