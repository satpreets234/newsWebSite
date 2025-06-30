'use client';
import { ReactNode } from 'react';
import ReduxProvider from '../components/ReduxProvider';

export function Providers({ children }: { children: ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
