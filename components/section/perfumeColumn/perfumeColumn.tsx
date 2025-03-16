'use client';
import Title from '@/components/utils/text/title/title';
import * as commonStyles from '@/styles/common.css';
import * as styles from './perfumeColumn.css';

import perfumeColumnImage0 from '@/public/perfumeColumn/1.webp';
import perfumeColumnImage1 from '@/public/perfumeColumn/2.webp';
import perfumeColumnImage2 from '@/public/perfumeColumn/3.webp';
import perfumeColumnImage3 from '@/public/perfumeColumn/4.webp';
import perfumeColumnImage4 from '@/public/perfumeColumn/5.webp';
import Image from 'next/image';
import SubTitle from '@/components/utils/text/subTitle/subTitle';
import DescriptionText from '@/components/utils/text/description/description';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바
import AuthorText from '@/components/utils/text/author/author';

const perfumeColumnImageArr = [
  {
    id: '0',
    src: perfumeColumnImage0,
    title: '어느 밤, 몽환적인 바에서의 분위기',
    author: 'barMaster',
    description:
      '어느 늦은 밤, 바에서 한 잔 하면서 느껴볼 수 있는 그런 향기를 좋아하시나요? 몽환적인 분위기, 한 잔의 위스키 그 때의 느낌을 느껴보세요.',
  },
  {
    id: '1',
    src: perfumeColumnImage1,
    title: '햇살 비추는 창가에서 여유로운 한 때를 즐기며',
    author: 'lazy',
    description:
      '어느 주말 늦은 오후 햇살이 아름답게 내리고 다소 늦잠을 부리면서 일주일을 마무리하는 그런 날. 햇살을 아름답게 바라보며 감성에 젖어가며 여유를 찾는 그 시간이 소중하시다면 이런 향수 어때요?',
  },
  {
    id: '2',
    src: perfumeColumnImage2,
    title: '바다내음과 함께하는 평화로운 오후',
    author: 'ocean',
    description:
      '끝없이 펼쳐진 모래사장, 짭쪼름한 바다냄새, 따사로운 햇살. 몰디브 어느 해안가를 걸어가고 있는 듯한 그 느낌 그대로의 향기를 담았습니다.',
  },
  {
    id: '3',
    src: perfumeColumnImage3,
    title: '깊은 산속 자연과 동화되는 하루',
    author: '자연사랑',
    description:
      '쿰쿰하고 습하지만 나쁘지는 않은 그런 깊은 산속의 어느 숲을 걸어보셨나요? 그 때의 그 향기를 추억하며 담았습니다.',
  },
  {
    id: '4',
    src: perfumeColumnImage4,
    title: '흐린 오후를 보내며',
    author: '요놀자',
    description:
      '비가 오기 직전의 비 냄새를 좋아하시나요? 습하고 끈적거리지만 그 향을 좋아하시는 분들이 있는데요.',
  },
];

const PerfumeColumn = () => {
  return (
    <section className={commonStyles.commonSection}>
      <Title>향수 이야기</Title>
      <div className={styles.travelColumnContainer}>
        <Swiper spaceBetween={20} slidesPerView={2.5}>
          {perfumeColumnImageArr.map((el) => (
            <SwiperSlide key={el.id}>
              <article>
                <div className={styles.travelColumnSwiperImageContainer}>
                  <Image
                    src={el.src}
                    alt={el.title}
                    fill
                    style={{ borderRadius: '20px' }}
                  />
                </div>
                <div>
                  <SubTitle>{el.title}</SubTitle>
                  <AuthorText>{el.author}</AuthorText>
                  <DescriptionText>{el.description}</DescriptionText>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PerfumeColumn;
