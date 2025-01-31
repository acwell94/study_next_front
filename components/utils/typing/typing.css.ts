import { keyframes, style } from '@vanilla-extract/css';
import { global, vars } from '@/styles/theme.css';
export const landingP = style({
  whiteSpace: 'pre-line', // 줄 바꿈 문자와 공백을 유지하면서 줄 바꿈
  wordBreak: 'normal', // 단어가 줄을 넘어갈 때 자동 줄 바꿈 하지 않음
  fontWeight: global.fontWeight.bold,
  color: vars.color.background,
});

const blinkAnimation = keyframes({
  '50%': {
    opacity: 0,
  },
});

export const blink = style({
  display: 'inline-block',
  verticalAlign: 'top',
  backgroundColor: vars.color.background,
  marginLeft: '0.25rem',
  animation: `${blinkAnimation} 0.8s infinite`,
});
