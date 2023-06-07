import { useState } from 'react';

import MainArticleTitle from 'components/MainArticle/MainArticleTitle';
import { MainArticleVariant } from 'components/MainArticle/types';

import type { IMainArticle } from 'components/MainArticle/types';

import './MainArticle.scss';

export const mainArticleVariant = {
  [MainArticleVariant.Article]: 'article',
  [MainArticleVariant.Carousel]: 'carousel',
  [MainArticleVariant.Share]: 'share',
};

const MainArticle = ({
  sliderData,
  className,
  variant = MainArticleVariant.Carousel,
}: IMainArticle) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className={`main-article ${className}`}>
      <div
        className={`main-article-contain ${
          mainArticleVariant[variant] === mainArticleVariant.article ? null : 'adaptive'
        }`}
      >
        <img
          className='main-article-img-contain'
          src={sliderData[currentIndex].img}
          alt={sliderData[currentIndex].alt}
        />
        <MainArticleTitle
          variant={variant}
          sliderData={sliderData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      {mainArticleVariant[variant] === mainArticleVariant.article && (
        <p className='main-article-text'>{sliderData[0].article}</p>
      )}
    </div>
  );
};

export default MainArticle;
