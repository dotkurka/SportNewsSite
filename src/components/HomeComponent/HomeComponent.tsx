import { memo } from 'react';

import {
  ArticleBanner,
  ArticleCollection,
  ArticleTitle,
  MainArticle,
  PhotoOfTheDay,
  SubArticle,
} from 'components';
import { ArticleTitleVariant } from 'components/ArticleTitle/types';
import { MainArticleVariant } from 'components/MainArticle/enums';

import type { IHomeComponent } from 'components/HomeComponent/types';

import './HomeComponent.scss';

const HomeComponent = memo(({ data, hidden, className = '' }: IHomeComponent) => {
  const { mainArticle, subArticle, breakdown, potd, mostPopular, mostComments } = data;

  return (
    <div hidden={hidden} className={`home ${className}`}>
      <MainArticle
        variant={MainArticleVariant.Carousel}
        className='home-main-article'
        sliderData={mainArticle}
      />
      <div className='home-sub-article'>
        {subArticle.map((item) => (
          <SubArticle key={item.id} className='home-sub-article-item' subArticleData={item} />
        ))}
      </div>
      <ArticleTitle className='home-title'>Breakdown</ArticleTitle>
      <div className='home-breakdown'>
        <div className='home-breakdown-article'>
          <ArticleBanner articleData={breakdown.first[0]} />
          <ArticleCollection collection={breakdown.first.slice(1, 4)} />
        </div>
        <div className='home-breakdown-article'>
          <ArticleBanner articleData={breakdown.second[0]} />
          <ArticleCollection collection={breakdown.second.slice(1, 4)} />
        </div>
      </div>
      <ArticleTitle className='home-title'>Photo of the day</ArticleTitle>
      <div className='home-potd'>
        <PhotoOfTheDay className='home-potd-photo' photoDayData={potd} />
        <div className='home-potd-contain'>
          <div className='home-potd-article first'>
            <ArticleTitle variant={ArticleTitleVariant.small} className='home-potd-article-title'>
              Most popular
            </ArticleTitle>
            <ArticleCollection collection={mostPopular} />
          </div>
          <div className='home-potd-article'>
            <ArticleTitle variant={ArticleTitleVariant.small} className='home-potd-article-title'>
              Most comments
            </ArticleTitle>
            <ArticleCollection collection={mostComments} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomeComponent;
