import ImageTile from '@/components/utils/imageTile/imageTile';
import Title from '@/components/utils/text/title/title';

import peopleImage0 from '@/public/traveledImage/1.jpg';
import peopleImage1 from '@/public/traveledImage/2.jpg';
import peopleImage2 from '@/public/traveledImage/3.jpg';
import peopleImage3 from '@/public/traveledImage/4.jpg';
import peopleImage4 from '@/public/traveledImage/5.jpg';
import peopleImage5 from '@/public/traveledImage/6.jpg';
import * as commonStyles from '@/styles/common.css';
const Recommend = () => {
  const recommendPeopleImage = [
    {
      id: '0',
      src: peopleImage0,
      title: '보라카이에서',
      author: 'borabora',
    },
    {
      id: '1',
      src: peopleImage1,
      title: '맨해튼에서',
      author: 'NewYorkLover',
    },
    {
      id: '2',
      src: peopleImage2,
      title: '몰디브에서',
      author: 'moldimol',
    },
    {
      id: '3',
      src: peopleImage3,
      title: '로키산맥을 바라보며',
      author: 'rockey',
    },
    {
      id: '4',
      src: peopleImage4,
      title: '하와이에서 요가를',
      author: 'aloha',
    },
    {
      id: '5',
      src: peopleImage5,
      title: '세부에서 스노클링~',
      author: 'cebu',
    },
  ];
  return (
    <section className={commonStyles.commonSection}>
      <Title>오늘의 추천 여행지</Title>
      <ImageTile arr={recommendPeopleImage} />
    </section>
  );
};

export default Recommend;
