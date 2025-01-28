'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as styles from './imageSwiper.css';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바
import Image, { StaticImageData } from 'next/image';

interface ImageSlide {
  id: string;
  src: StaticImageData;
}

interface Props {
  arr: ImageSlide[];
}
const ImageSwiper = ({ arr }: Props) => {
  return (
    <Swiper
      //   spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {arr.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperSlide}>
          <div className={styles.swiperImageContainer}>
            <Image src={el.src} alt={el.id} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
