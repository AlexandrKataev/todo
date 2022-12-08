import { useEffect, useState } from 'react';
import { getTheme, themes } from '../helpers/getTheme';

export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };
  return {
    handleTheme,
  };
};
