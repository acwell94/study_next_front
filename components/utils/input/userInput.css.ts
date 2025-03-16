import { style } from '@vanilla-extract/css';
import { global } from '@/styles/theme.css';

export const inputStyle = style({
  display: 'flex',
  width: '100%',
  padding: '1.6rem',
  border: '1px solid #cccccc',
  fontSize: global.fontSize.medium,
  borderRadius: global.radius.small,
});
