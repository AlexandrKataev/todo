import { useEffect } from 'react';

export const useTheme = (theme: string) => {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
};
