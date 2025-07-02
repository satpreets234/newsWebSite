'use client';
import { ReactNode } from 'react';
import ReduxProvider from '../components/ReduxProvider';
import { ThemeProvider } from '../components/ThemeProvider';
import '../lib/i18n';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
}
