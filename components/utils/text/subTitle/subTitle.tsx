import * as styles from '../text.css';
const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className={styles.subTitle}>{children}</h3>;
};

export default SubTitle;
