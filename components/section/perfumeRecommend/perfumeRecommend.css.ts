import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';
export const perfumeRecommendContainer = style({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
});

export const perfumeRecommendImageContainer = style({
  position: 'relative',
  aspectRatio: '4/3',
  width: '50%',
});

export const perfumeRecommendTitle = style({
  fontSize: global.fontSize.large,
  lineHeight: global.fontSize.large,
  fontWeight: global.fontWeight.bold,
});
