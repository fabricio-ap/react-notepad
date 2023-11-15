import type { DefaultTheme } from 'styled-components';

enum LightToken {
  primary = '#F6F7FB',
  onPrimary = '#E6F6F5',
  secondary = '#9EA4B4',
  background = '#FFFFFF',
  text = '#464E59',
  hover = '#E6F6F5',
  shadow = '#202124',
}

enum DarkToken {
  primary = '#474F5C',
  onPrimary = '#E6F6F5',
  secondary = '#9EA4B4',
  background = '#2A2F36',
  text = '#F6F7FB',
  hover = '#E6F6F5',
  shadow = '#202124',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: LightToken.primary | DarkToken.primary;
    onPrimary: LightToken.onPrimary | DarkToken.onPrimary;
    secondary: LightToken.secondary | DarkToken.secondary;
    background: LightToken.background | DarkToken.background;
    text: LightToken.text | DarkToken.text | DarkToken.text;
    hover: LightToken.hover | DarkToken.hover;
    shadow: LightToken.shadow | DarkToken.shadow;
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
    background: LightToken.background,
    text: LightToken.text,
    hover: LightToken.hover,
    shadow: LightToken.shadow,
  },
  dark: {
    primary: DarkToken.primary,
    onPrimary: DarkToken.onPrimary,
    secondary: DarkToken.secondary,
    background: DarkToken.background,
    text: DarkToken.text,
    hover: DarkToken.hover,
    shadow: DarkToken.shadow,
  },
};
