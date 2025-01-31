import * as commonStyles from '@/styles/common.css';
import * as styles from './travelLocation.css';
import Title from '@/components/utils/text/title/title';
import australia from '@/public/travelLocation/australia.webp';
import brazil from '@/public/travelLocation/brazil.webp';
import china from '@/public/travelLocation/china.webp';
import france from '@/public/travelLocation/france.webp';
import hongkong from '@/public/travelLocation/hongkong.webp';
import italy from '@/public/travelLocation/italy.webp';
import japan from '@/public/travelLocation/japan.webp';
import korea from '@/public/travelLocation/korea.webp';
import philippines from '@/public/travelLocation/philippines.webp';
import spain from '@/public/travelLocation/spain.webp';
import taiwan from '@/public/travelLocation/taiwan.webp';
import uk from '@/public/travelLocation/uk.webp';
import usa from '@/public/travelLocation/usa.webp';
import Image from 'next/image';

const travelLocationArr = [
  {
    id: 'australia',
    src: australia,
    location: '호주',
  },
  {
    id: 'brazil',
    src: brazil,
    location: '브라질',
  },
  {
    id: 'china',
    src: china,
    location: '중국',
  },
  {
    id: 'france',
    src: france,
    location: '프랑스',
  },
  {
    id: 'hongkong',
    src: hongkong,
    location: '홍콩',
  },
  {
    id: 'italy',
    src: italy,
    location: '이탈리아',
  },
  {
    id: 'japan',
    src: japan,
    location: '일본',
  },
  {
    id: 'korea',
    src: korea,
    location: '한국',
  },
  {
    id: 'philippines',
    src: philippines,
    location: '필리핀',
  },
  {
    id: 'spain',
    src: spain,
    location: '스페인',
  },
  {
    id: 'taiwan',
    src: taiwan,
    location: '타이완',
  },
  {
    id: 'uk',
    src: uk,
    location: '영국',
  },
  {
    id: 'usa',
    src: usa,
    location: '미국',
  },
];

const TravelLocation = () => {
  const randomLocation =
    travelLocationArr[Math.floor(Math.random() * travelLocationArr.length)];

  return (
    <section className={commonStyles.commonSection}>
      <Title>어디로 가볼까?</Title>
      <article className={styles.travelLocationContainer}>
        <Image
          src={randomLocation.src}
          alt={randomLocation.id}
          fill
          style={{ borderRadius: '20px' }}
        />
        <div className={styles.travelLocationTitle}>
          {randomLocation.location}
        </div>
      </article>
    </section>
  );
};

export default TravelLocation;
