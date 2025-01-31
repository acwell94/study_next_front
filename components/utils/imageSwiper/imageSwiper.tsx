'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as styles from './imageSwiper.css';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바
import Image from 'next/image';
import { ImageArrProps } from '@/type/imageType';

const ImageSwiper = ({ arr }: ImageArrProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiperContainer}
    >
      {arr.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperSlide}>
          <div className={styles.swiperImageContainer}>
            <Image
              src={el.src}
              alt={el.id}
              fill
              style={{ borderRadius: '20px' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
