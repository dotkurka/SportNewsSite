import { useState } from 'react';

import MainArticleTitle from 'components/MainArticleCarousel/MainArticleTitle';

import type { IMainCarousel } from 'components/MainArticleCarousel/types';

import './MainArticleCarousel.scss';

const MainArticleCarousel = ({ sliderData, className }: IMainCarousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className={`main-article ${className}`}>
      <img
        className='main-article-img-contain'
        src={sliderData[currentIndex].img}
        alt={sliderData[currentIndex].alt}
      />
      <MainArticleTitle
        sliderData={sliderData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default MainArticleCarousel;
