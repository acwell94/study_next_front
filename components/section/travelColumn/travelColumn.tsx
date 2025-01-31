'use client';
import Title from '@/components/utils/text/title/title';
import * as commonStyles from '@/styles/common.css';
import * as styles from './travelColumn.css';

import travelColumnImage0 from '@/public/travelColumn/1.jpg';
import travelColumnImage1 from '@/public/travelColumn/2.jpg';
import travelColumnImage2 from '@/public/travelColumn/3.jpg';
import travelColumnImage3 from '@/public/travelColumn/4.jpg';
import travelColumnImage4 from '@/public/travelColumn/5.jpg';
import Image from 'next/image';
import SubTitle from '@/components/utils/text/subTitle/subTitle';
import DescriptionText from '@/components/utils/text/description/description';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 버튼
import 'swiper/css/pagination'; // 페이지네이션
import 'swiper/css/scrollbar'; // 스크롤바
import AuthorText from '@/components/utils/text/author/author';

const travelColumnImageArr = [
  {
    id: '0',
    src: travelColumnImage0,
    title: '로키산맥 트래킹을 떠나보자~',
    author: 'trackingler',
    description:
      '산 속에서 트래킹을 하니 다시 산이 좋아졌습니다. 이게 바로 등산의 묘미가 아닐까요?',
  },
  {
    id: '1',
    src: travelColumnImage1,
    title: '몰디브에서 다양한 경험을',
    author: 'moldivePlane',
    description:
      '몰디브에서 다양한 경험을 즐겨보세요. 푸른 바다, 멋진 숙소 그리고 사람들... 수상 경비행기를 타고 둘러보며 짜릿한 경험을 해보세요.',
  },
  {
    id: '2',
    src: travelColumnImage2,
    title: '호주 어느 한 해변',
    author: '알라코',
    description:
      '호주의 어느 한 해변, 가족들과 손잡고 파도를 느끼면 아이들의 교육 경험에도 좋을 거 같아요.',
  },
  {
    id: '3',
    src: travelColumnImage3,
    title: '여행을 떠난다는 것',
    author: '가보자여행',
    description:
      '여행을 떠난 다는 것은 언제나 즐거운 일입니다. 특히 공항에서 비행기를 기다리며 이번 여행은 어떤 여행을 할까? 어떤 좋은 경험을 받을까 하는 그런 행복한 상상을 하며 비행기를 올라타고 이륙할 때의 그 짜릿함 도착해서의 그 쾌감은 지친 삶에서 큰 행복이 아닐 수 없습니다.',
  },
  {
    id: '4',
    src: travelColumnImage4,
    title: '이제는 호캉스가 아닌 요캉스',
    author: '요놀자',
    description:
      '언제까지 호캉스만 즐길 것인가? 이제는 요캉스가 대세다. 여유롭게 넓은 바다에 나가서 요트를 타면서 낚시도 하고 즐겁게 파도를 느끼는 건 어떨까요?',
  },
];

const TravelColumn = () => {
  return (
    <section className={commonStyles.commonSection}>
      <Title>여행 칼럼</Title>
      <div className={styles.travelColumnContainer}>
        <Swiper spaceBetween={20} slidesPerView={2.5}>
          {travelColumnImageArr.map((el) => (
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

export default TravelColumn;
