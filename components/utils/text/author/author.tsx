import * as styles from '../text.css';
const AuthorText = ({ children }: { children: React.ReactNode }) => {
  return <h4 className={styles.author}>{children}</h4>;
};

export default AuthorText;
