import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid black',
});

export const headerTitle = style({
  fontSize: global.fontSize.medium,
  cursor: 'default',
});

export const logo = style({
  width: global.fontSize.xLarge,
  height: global.fontSize.xLarge,
  cursor: 'pointer',
});

export const menuContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const menu = style({
  width: global.fontSize.large,
  height: global.fontSize.large,
  cursor: 'pointer',
});
