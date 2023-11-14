import type { DefaultTheme } from 'styled-components';

enum LightToken {
  primary = '#474F5C',
  onPrimary = '#000000',
  secondary = '#9EA4B4',
  onSecondary = '#E6F6F5',
  background = '#FFFFFF',
  onBackground = '#F6F7FB',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: LightToken.primary;
    onPrimary: LightToken.onPrimary;
    secondary: LightToken.secondary;
    onSecondary: LightToken.onSecondary;
    background: LightToken.background;
    onBackground: LightToken.onBackground;
  }
}

type Theme = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

export const theme: Theme = {
  light: {
    primary: LightToken.primary,
    onPrimary: LightToken.onPrimary,
    secondary: LightToken.secondary,
    onSecondary: LightToken.onSecondary,
    background: LightToken.background,
    onBackground: LightToken.onBackground,
  },
  dark: {
    primary: LightToken.primary,
    onPrimary: LightToken.onPrimary,
    secondary: LightToken.secondary,
    onSecondary: LightToken.onSecondary,
    background: LightToken.background,
    onBackground: LightToken.onBackground,
  },
};
