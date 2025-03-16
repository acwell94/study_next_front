'use client';

import ImageSwiper from '@/components/utils/imageSwiper/imageSwiper';
import * as styles from './mainTop.css';
import SlideImage_first from '@/public/top/1.webp';
import SlideImage_second from '@/public/top/2.webp';
import SlideImage_third from '@/public/top/3.webp';
import SlideImage_fourth from '@/public/top/4.webp';
import SlideImage_fifth from '@/public/top/5.webp';
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
        <Typing text="당신의 \n 향기를 보여주세요." />
      </div>
    </section>
  );
};

export default MainTop;
