import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  padding: '0 60px',
});

export const limitContainer = style({
  maxWidth: '1280px',
  width: '100%',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.6rem',
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '2rem',
});

export const clickButton = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'blue',
  width: '100%',
  padding: '1.6rem',
  fontSize: global.fontSize.medium,
  borderRadius: global.radius.small,
});
