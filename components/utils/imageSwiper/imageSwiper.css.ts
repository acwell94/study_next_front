import { style } from '@vanilla-extract/css';
// import { global } from '@/styles/theme.css';

export const swiperContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const swiperImageContainer = style({
  position: 'relative', // Image fill을 위한 필수 설정
  width: '100%', // 부모 컨테이너의 너비를 지정
  height: '500px', // 슬라이드 높이 지정 (필요에 따라 변경)
  overflow: 'hidden', // 이미지가 영역을 넘어가지 않도록 설정
});

export const swiperSlide = style({
  display: 'flex', // 수평 정렬을 위한 설정
  justifyContent: 'center',
  alignItems: 'center',
});
