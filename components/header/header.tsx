import MainIcon from '@/public/icon/mainIcon.png';
import Hamburger from '@/public/icon/hamburger.png';
import * as styles from './header.css';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Image className={styles.logo} src={MainIcon} alt="main" />
      <div className={styles.headerTitle}>Say Hi</div>
      <div className={styles.menuContainer}>
        <Image className={styles.menu} src={Hamburger} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
