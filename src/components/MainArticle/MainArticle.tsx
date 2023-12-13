import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { ReactComponent as ArrowButton } from 'assets/images/select-text-arrow.svg';
import mainArticleVariant from 'components/MainArticle/mainArticleVariant';
import { MainArticleVariant } from 'components/MainArticle/types';

import MainArticleTitle from './MainArticleTitle';

import type { IMainArticle } from 'components/MainArticle/types';

import './MainArticle.scss';

const MainArticle = ({
  sliderData,
  className = '',
  variant = MainArticleVariant.Carousel,
}: IMainArticle) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const index = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const index = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const variantArticle = mainArticleVariant[variant] === mainArticleVariant.article;

  return (
    <div className={`main-article ${className}`}>
      <div className={`main-article-contain ${variantArticle ? '' : 'adaptive'}`}>
        <div className='main-article-img-area'>
          <img src={sliderData[currentIndex].img} alt={sliderData[currentIndex].alt} />
          <div className='main-article-img-area-mobile'>
            <button type='button' onClick={goToPrevious}>
              <ArrowButton className='main-article-img-area-mobile-arrow left' />
            </button>
            <button type='button' onClick={goToNext}>
              <ArrowButton className='main-article-img-area-mobile-arrow right' />
            </button>
          </div>
        </div>
        <MainArticleTitle
          variant={variant}
          sliderData={sliderData}
          currentIndex={currentIndex}
          controls={{ goToNext, goToPrevious, goToSlide }}
        />
      </div>

      {variantArticle && (
        <div className='main-article-text'>
          <ReactMarkdown>{sliderData[0].content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default MainArticle;
