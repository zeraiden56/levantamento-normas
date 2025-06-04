// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [enabled, setEnabled] = useState(
    () =>
      localStorage.getItem('theme') === 'dark' ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  return [enabled, setEnabled] as const;
}
