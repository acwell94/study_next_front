import * as commonStyles from '@/styles/common.css';
import * as styles from './perfumeRecommend.css';
import Title from '@/components/utils/text/title/title';

import Image from 'next/image';
import { perfumeImages } from '@/type/images';

const travelLocationArr = [
  {
    id: 'chanel_bleu_edp',
    src: perfumeImages.chanel_bleu_edp,
    location: '블루 드 샤넬 edp',
  },
  {
    id: 'chanel_coco_edp',
    src: perfumeImages.chanel_coco_edp,
    location: '샤넬 코코 마드모아젤 edp',
  },
  {
    id: 'chanel_no5_edp',
    src: perfumeImages.chanel_no5_edp,
    location: '샤넬 No.5 edp',
  },
  {
    id: 'creed_aventus_edp',
    src: perfumeImages.creed_aventus_edp,
    location: '크리드 어벤투스 edp',
  },
  {
    id: 'tomford_oudwood_edp',
    src: perfumeImages.tomford_oudwood_edp,
    location: '톰포드 오드우드 edp',
  },
  {
    id: 'dior_blooming_edt',
    src: perfumeImages.dior_blooming_edt,
    location: '디올 블루밍부케 edt',
  },
  {
    id: 'tomford_balckorchid_edp',
    src: perfumeImages.tomford_balckorchid_edp,
    location: '톰포드 블랙오키드 edp',
  },
  {
    id: 'dip_fdp_edp',
    src: perfumeImages.dip_fdp_edp,
    location: '딥티크 플뢰르 드 뽀 edp',
  },
  {
    id: 'kil_angel_edp',
    src: perfumeImages.kil_angel_edp,
    location: '킬리안 엔젤스 쉐어 edp',
  },
  {
    id: 'creed_sliverMountain_edp',
    src: perfumeImages.creed_sliverMountain_edp,
    location: '크리드 실버마운틴 edp',
  },
  {
    id: 'dip_tempo_edp',
    src: perfumeImages.dip_tempo_edp,
    location: '딥티크 템포 edp',
  },
  {
    id: 'kil_blai_edp',
    src: perfumeImages.kil_blai_edp,
    location: '킬리안 불레이 부 쿠셔 아베끄 모아 edp',
  },
  {
    id: 'dior_jadore_edp',
    src: perfumeImages.dior_jadore_edp,
    location: '디올 쟈도르 edp',
  },
];

const PerfumeRecommend = () => {
  const randomLocation =
    travelLocationArr[Math.floor(Math.random() * travelLocationArr.length)];

  return (
    <section className={commonStyles.commonSection}>
      <Title>오늘의 추천 향수</Title>
      <article className={styles.perfumeRecommendContainer}>
        <div className={styles.perfumeRecommendImageContainer}>
          <Image
            src={randomLocation.src}
            alt={randomLocation.id}
            fill
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className={styles.perfumeRecommendTitle}>
          {randomLocation.location}
        </div>
      </article>
    </section>
  );
};

export default PerfumeRecommend;
