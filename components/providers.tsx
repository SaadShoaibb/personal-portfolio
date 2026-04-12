'use client';

import React from 'react';
import { EraProvider } from './era-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EraProvider>
      {children}
    </EraProvider>
  );
}
