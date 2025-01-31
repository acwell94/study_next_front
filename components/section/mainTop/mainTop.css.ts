import { style } from '@vanilla-extract/css';

export const mainTopContainer = style({
  position: 'relative',
  margin: '0 0 24px 0',
  width: '100%',
  maxWidth: '1280px',
  aspectRatio: '16 / 9',
});

export const mainTopComment = style({
  position: 'absolute',
  top: '60%',
  left: '20px',
  zIndex: 2,
});
