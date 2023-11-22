import { useState } from 'react';
import { ThemeEnum, ThemeType } from '~/types/theme';

const initialTheme = (window.localStorage.getItem('theme') as ThemeType) || ThemeEnum.light;

export function useActiveTheme() {
  const [activeTheme, setActiveTheme] = useState<ThemeType>(initialTheme);

  const handleToggleTheme = () => {
    activeTheme === 'light' ? setMode(ThemeEnum.dark) : setMode(ThemeEnum.light);
  };

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem('theme', mode);
    setActiveTheme(mode);
  };

  return { activeTheme, handleToggleTheme };
}
