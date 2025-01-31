import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';

export const title = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  fontSize: global.fontSize.large,
  lineHeight: global.fontSize.large,
  fontWeight: global.fontWeight.bold,
  width: '100%',
  marginBottom: '24px',
});

export const author = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  width: '100%',
  fontWeight: global.fontWeight.normal,
  fontSize: global.fontSize.regular,
  lineHeight: global.fontSize.regular,
  marginBottom: '8px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const subTitle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  width: '100%',
  fontWeight: global.fontWeight.bold,
  fontSize: global.fontSize.medium,
  lineHeight: global.fontSize.medium,
  marginBottom: '8px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const description = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: global.fontSize.small,
  lineHeight: global.fontSize.medium,
  width: '100%',
});
