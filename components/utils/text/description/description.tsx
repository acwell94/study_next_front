import * as styles from '../text.css';
const DescriptionText = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.description}>{children}</div>;
};

export default DescriptionText;
