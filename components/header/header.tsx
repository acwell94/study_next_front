'use client';
import Hamburger from '@/public/icon/hamburger.png';
import * as styles from './header.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import isRenderLayout from '../utils/isRenderLayout/isRenderLayout';
const Header = () => {
  const pathname = usePathname();

  const isRender = isRenderLayout(pathname);

  return isRender ? null : (
    <header className={styles.headerContainer}>
      <div></div>
      <div className={styles.headerTitle}>Perfume</div>
      <div className={styles.menuContainer}>
        <Image className={styles.menu} src={Hamburger} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
