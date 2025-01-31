// import Image from 'next/image';
// import styles from './page.module.css';

import MainTop from '@/components/section/mainTop/mainTop';
import * as styles from './page.css';
import Recommend from '@/components/section/recommend/recommend';
import TravelColumn from '@/components/section/travelColumn/travelColumn';
import TravelLocation from '@/components/section/travelLocation/travelLocation';
export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.limitContainer}>
        <MainTop />
        <Recommend />
        <TravelColumn />
        <TravelLocation />
      </div>
    </main>
  );
}
