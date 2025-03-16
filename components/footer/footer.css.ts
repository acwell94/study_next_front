import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';

export const footerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0',
  borderTop: '1px solid gray',
});

export const footerTitle = style({
  fontSize: global.fontSize.medium,
  cursor: 'pointer',
});
