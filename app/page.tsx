// import Image from 'next/image';
// import styles from './page.module.css';

import MainTop from '@/components/section/mainTop/mainTop';
import * as styles from './page.css';
import PerfumeToday from '@/components/section/perfumeToday/perfumeToday';
import PerfumeColumn from '@/components/section/perfumeColumn/perfumeColumn';
import PerfumeRecommend from '@/components/section/perfumeRecommend/perfumeRecommend';
import PerfumeRecommendForHouse from '@/components/section/perfumeRecommendForHouse/perfumeRecommendForHouse';
export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.limitContainer}>
        <MainTop />
        <PerfumeToday />
        <PerfumeColumn />
        <PerfumeRecommend />
        <PerfumeRecommendForHouse />
      </div>
    </main>
  );
}
