import { ImageTypeWithTitleAuthor } from '@/type/imageType';
import * as styles from './imageTile.css';
import Image from 'next/image';
import AuthorText from '../text/author/author';
import SubTitle from '../text/subTitle/subTitle';

const ImageTileItem = ({
  src,
  id,
  title,
  author,
}: ImageTypeWithTitleAuthor) => {
  return (
    <article className={styles.imageContainer}>
      <div className={styles.imageInnerContainer}>
        <Image src={src} alt={id} fill />
      </div>
      <SubTitle>{title}</SubTitle>
      <AuthorText>{author}</AuthorText>
    </article>
  );
};

export default ImageTileItem;
