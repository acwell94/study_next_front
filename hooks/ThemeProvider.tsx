'use client';

import { lightTheme, darkTheme } from '@/styles/theme.css';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute={'class'}
      enableSystem={true}
      disableTransitionOnChange
      value={{ light: lightTheme, dark: darkTheme }}
    >
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default Provider;
