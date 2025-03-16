import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';
export const imageItemContainer = style({
  display: 'flex',
  width: '100%',
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
});

export const imageInnerContainer = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '4/5',
  overflow: 'hidden',
  border: '1px solid gray',
  borderRadius: global.radius.semi,
  marginBottom: '16px',
  // boxShadow: '2px 2px 2px gray',
});

export const imageTileTitle = style({
  fontSize: global.fontSize.medium,
  lineHeight: global.fontSize.medium,
  marginBottom: '8px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const imageTileAuthor = style({
  fontSize: global.fontSize.regular,
  lineHeight: global.fontSize.regular,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});
