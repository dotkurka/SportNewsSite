import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import mainArticleVariant from 'components/MainArticle/mainArticleVariant';
import { MainArticleVariant } from 'components/MainArticle/types';

import MainArticleTitle from './MainArticleTitle';

import type { IMainArticle } from 'components/MainArticle/types';

import './MainArticle.scss';

const MainArticle = ({
  sliderData,
  className,
  variant = MainArticleVariant.Carousel,
}: IMainArticle) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className={`main-article ${className || ''}`}>
      <div
        className={`main-article-contain ${
          mainArticleVariant[variant] === mainArticleVariant.article ? '' : 'adaptive'
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
        <div className='main-article-text'>
          <ReactMarkdown>{sliderData[0].content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default MainArticle;
