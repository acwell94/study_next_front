import { style } from '@vanilla-extract/css';

export const swiperContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  opacity: '0.7',
});

export const swiperImageContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const swiperSlide = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
