'use client';
import { ImageTypeWithTitleAuthorArrProps } from '@/type/imageType';
import * as styles from './imageTile.css';
import ImageTileItem from './imageTileItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바

const ImageTile = ({ arr }: ImageTypeWithTitleAuthorArrProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      className={styles.imageItemContainer}
    >
      {arr.map((el) => (
        <SwiperSlide key={el.id}>
          <ImageTileItem
            src={el.src}
            id={el.id}
            title={el.title}
            author={el.author}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageTile;
