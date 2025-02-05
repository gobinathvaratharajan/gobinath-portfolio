'use client';
import { ThemeProvider, useTheme } from 'next-themes';

import React from 'react';
import { Toaster } from '@/components/ui/sonner';

function ToasterProvider() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  );
};

export default Providers;
