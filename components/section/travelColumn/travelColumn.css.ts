import { style } from '@vanilla-extract/css';
export const travelColumnContainer = style({
  display: 'flex',
  flexDirection: 'row',
  //   maxHeight: '600px',
});

export const travelColumnSwiperContainer = style({
  display: 'flex',
  width: '100%',
});

export const travelColumnSwiperSlide = style({});

export const travelColumnSwiperImageContainer = style({
  position: 'relative',
  aspectRatio: '1/1',
  marginBottom: '16px',
});
