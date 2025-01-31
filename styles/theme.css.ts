import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  fontSize: {
    xLarge: '4.8rem',
    large: '3.6rem',
    medium: '2.4rem',
    regular: '1.8rem',
    small: '1.6rem',
    xSmall: '1.4rem',
    micro: '1.2rem',
    xMicro: '1rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  radius: {
    semi: '20px',
  },
});
export const vars = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: '#ffffff',
    text: '#333333',
    primary: '#0070f3',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
});
export const darkTheme = createTheme(vars, {
  color: {
    background: '#ffffff',
    text: '#333333',
    primary: '#0070f3',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
});

export const breakPoint = {
  medium: 'screen and (max-width: 40em)',
  large: 'screen and (max-width: 768px)',
  extraLarge: 'screen and (max-width: 1240px)',
};
