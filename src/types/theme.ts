import { DefaultTheme } from 'styled-components';

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

export enum LightToken {
  primary = '#F6F7FB',
  onPrimary = '#E6F6F5',
  secondary = '#9EA4B4',
  background = '#FFFFFF',
  text = '#464E59',
  hover = '#E6F6F5',
  shadow = '#202124',
}

export enum DarkToken {
  primary = '#474F5C',
  onPrimary = '#5f6368',
  secondary = '#9EA4B4',
  background = '#2A2F36',
  text = '#F6F7FB',
  hover = '#6A768A',
  shadow = '#202124',
}

export type Tokens = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = ThemeEnum.light | ThemeEnum.dark;
