import { DarkToken, LightToken, Tokens } from '~/types/theme';

export const theme: Tokens = {
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
