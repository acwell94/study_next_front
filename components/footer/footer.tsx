'use client';
import { usePathname } from 'next/navigation';
import * as styles from './footer.css';
import isRenderLayout from '../utils/isRenderLayout/isRenderLayout';
const Footer = () => {
  const pathname = usePathname();

  const isRender = isRenderLayout(pathname);
  return isRender ? null : (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTitle}>hello</div>
    </footer>
  );
};

export default Footer;
