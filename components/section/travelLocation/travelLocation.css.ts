import { style } from '@vanilla-extract/css';

export const travelLocationContainer = style({
  position: 'relative',
  aspectRatio: '16/9',
});

export const travelLocationTitle = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
  fontSize: '7rem',
  lineHeight: '7rem',
  fontWeight: '900',
  color: 'white',
});
