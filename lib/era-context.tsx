'use client';

import { createContext, useContext } from 'react';

export type Era = '1950s' | 'modern';

export interface EraContextType {
  era: Era;
  isTransitioning: boolean;
  targetEra: Era | null;
  toggleEra: () => void;
}

export const EraContext = createContext<EraContextType>({
  era: '1950s',
  isTransitioning: false,
  targetEra: null,
  toggleEra: () => {},
});

export function useEra() {
  const context = useContext(EraContext);
  if (!context) {
    throw new Error('useEra must be used within an EraProvider');
  }
  return context;
}
