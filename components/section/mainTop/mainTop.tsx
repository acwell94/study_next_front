'use client';

import ImageSwiper from '@/components/utils/imageSwiper/imageSwiper';
import SlideImage_first from '@/public/travel/1.webp';
import SlideImage_second from '@/public/travel/2.webp';
import SlideImage_third from '@/public/travel/3.webp';
import SlideImage_fourth from '@/public/travel/4.webp';
import SlideImage_fifth from '@/public/travel/5.webp';
const MainTop = () => {
  const slideImageArr = [
    {
      id: '0',
      src: SlideImage_first,
    },
    {
      id: '1',
      src: SlideImage_second,
    },
    {
      id: '2',
      src: SlideImage_third,
    },
    {
      id: '3',
      src: SlideImage_fourth,
    },
    {
      id: '4',
      src: SlideImage_fifth,
    },
  ];
  return (
    <div>
      <ImageSwiper arr={slideImageArr} />
    </div>
  );
};

export default MainTop;
