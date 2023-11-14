import { useEffect, useState } from 'react';

enum Theme {
  light = 'light',
  dark = 'dark',
}

type ThemeType = Theme.light | Theme.dark;

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(Theme.light);

  useEffect(() => {
    const storage = window.localStorage.getItem('theme') as ThemeType;
    storage && setTheme(storage);
  }, []);

  const setMode = (mode: Theme.light | Theme.dark) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode(Theme.dark) : setMode(Theme.light);
  };

  return { theme, toggleTheme };
};
