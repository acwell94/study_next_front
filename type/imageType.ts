import { StaticImageData } from 'next/image';

export interface ImageType {
  id: string;
  src: StaticImageData;
}

export interface ImageArrProps {
  arr: ImageType[];
}

export interface ImageTypeWithTitleAuthor {
  id: string;
  src: StaticImageData;
  title: string;
  author: string;
}

export interface ImageTypeWithTitleAuthorArrProps {
  arr: ImageTypeWithTitleAuthor[];
}
