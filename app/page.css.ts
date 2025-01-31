import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '0 60px',
});

export const limitContainer = style({
  maxWidth: '1280px',
  width: '100%',
});
