'use client';
import Title from '@/components/utils/text/title/title';
import * as commonStyles from '@/styles/common.css';
import * as styles from './perfumeRecommendForHouse.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바
import { perfumeImages } from '@/type/images';
import Image from 'next/image';
import SubTitle from '@/components/utils/text/subTitle/subTitle';
import AuthorText from '@/components/utils/text/author/author';
const perfumeRecommendForHouseImageArr = [
  {
    id: 'chanel',
    src: perfumeImages.chanel_coco_edp,
    title: '코코 마드모아젤',
    house: '샤넬',
  },
  {
    id: 'creed',
    src: perfumeImages.creed_aventus_edp,
    title: '어벤투스',
    house: '크리드',
  },
  {
    id: 'dior',
    src: perfumeImages.dior_blooming_edt,
    title: '블루밍 부케',
    house: '디올',
  },
  {
    id: 'dip',
    src: perfumeImages.dip_doson_edt,
    title: '도손',
    house: '딥티크',
  },
  {
    id: 'kil',
    src: perfumeImages.kil_moonlight_edp,
    title: '문라이트 인 헤븐',
    house: '킬리안',
  },
  {
    id: 'kurk',
    src: perfumeImages.kurk_oudSatinmood_edp,
    title: '오우드 사틴무드',
    house: '메종 프란시스 커정',
  },
  {
    id: 'tomford',
    src: perfumeImages.tomford_oudwood_edp,
    title: '오드우드',
    house: '톰포드',
  },
  {
    id: 'ysl',
    src: perfumeImages.ysl_libre_edp,
    title: '리브레',
    house: '생로랑',
  },
];

const PerfumeRecommendForHouse = () => {
  return (
    <section className={commonStyles.commonSection}>
      <Title>브랜드별 추천 향수</Title>
      <Swiper spaceBetween={30} slidesPerView={2.5}>
        {perfumeRecommendForHouseImageArr.map((el) => (
          <SwiperSlide key={el.id}>
            <article className={styles.perfumeRecommendForHouseArticle}>
              <div className={styles.perfumeRecommendForHouseImageContainer}>
                <Image src={el.src} alt={el.id} fill />
              </div>
              <AuthorText>{el.house}</AuthorText>
              <SubTitle>{el.title}</SubTitle>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PerfumeRecommendForHouse;
