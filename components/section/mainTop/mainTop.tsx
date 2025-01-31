'use client';

import ImageSwiper from '@/components/utils/imageSwiper/imageSwiper';
import * as styles from './mainTop.css';
import SlideImage_first from '@/public/travel/1.webp';
import SlideImage_second from '@/public/travel/2.webp';
import SlideImage_third from '@/public/travel/3.webp';
import SlideImage_fourth from '@/public/travel/4.webp';
import SlideImage_fifth from '@/public/travel/5.webp';
import Typing from '@/components/utils/typing/typing';
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
    <section className={styles.mainTopContainer}>
      <ImageSwiper arr={slideImageArr} />
      <div className={styles.mainTopComment}>
        <Typing text="어디로 \n 여행을 떠나볼까요?" />
      </div>
    </section>
  );
};

export default MainTop;
