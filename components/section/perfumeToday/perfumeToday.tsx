import ImageTile from '@/components/utils/imageTile/imageTile';
import Title from '@/components/utils/text/title/title';

import perfumeImage0 from '@/public/perfume/chanel_bleu_edp.webp';
import perfumeImage1 from '@/public/perfume/chanel_bleu_p.webp';
import perfumeImage2 from '@/public/perfume/chanel_coco_edp.webp';
import perfumeImage3 from '@/public/perfume/chanel_gabriel_essence_edp.webp';
import perfumeImage4 from '@/public/perfume/chanel_no5_edp.webp';
import perfumeImage5 from '@/public/perfume/creed_aventus_edp.webp';
import * as commonStyles from '@/styles/common.css';
const PerfumeToday = () => {
  const perfumeTodayImage = [
    {
      id: '0',
      src: perfumeImage0,
      title: '보라카이에서',
      author: 'borabora',
    },
    {
      id: '1',
      src: perfumeImage1,
      title: '맨해튼에서',
      author: 'NewYorkLover',
    },
    {
      id: '2',
      src: perfumeImage2,
      title: '몰디브에서',
      author: 'moldimol',
    },
    {
      id: '3',
      src: perfumeImage3,
      title: '로키산맥을 바라보며',
      author: 'rockey',
    },
    {
      id: '4',
      src: perfumeImage4,
      title: '하와이에서 요가를',
      author: 'aloha',
    },
    {
      id: '5',
      src: perfumeImage5,
      title: '세부에서 스노클링~',
      author: 'cebu',
    },
  ];
  return (
    <section className={commonStyles.commonSection}>
      <Title>오늘의 향기</Title>
      <ImageTile arr={perfumeTodayImage} />
    </section>
  );
};

export default PerfumeToday;
