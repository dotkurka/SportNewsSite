import {
  ArticleBanner,
  ArticleCollection,
  ArticleTitle,
  MainArticle,
  PhotoOfTheDay,
  SubArticle,
} from 'components';
import { ArticleTitleVariant } from 'components/ArticleTitle/types';
import { MainArticleVariant } from 'components/MainArticle/types';
import {
  articleData,
  dataMainArticle,
  dataSub,
  photoOfTheDayData,
} from 'config/ArticleData/articleData';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <MainArticle
        variant={MainArticleVariant.Carousel}
        className='home-main-article'
        sliderData={dataMainArticle}
      />
      <div className='home-sub-article'>
        {dataSub.map((item, index) => (
          <SubArticle key={index} className='home-sub-article-item' subArticleData={item} />
        ))}
      </div>
      <ArticleTitle className='home-title'>Breakdown</ArticleTitle>
      <div className='home-breakdown'>
        <div className='home-breakdown-article'>
          <ArticleBanner articleData={articleData} />
          <ArticleCollection collection={dataMainArticle} />
        </div>
        <div className='home-breakdown-article'>
          <ArticleBanner articleData={articleData} />
          <ArticleCollection collection={dataMainArticle} />
        </div>
      </div>
      <ArticleTitle className='home-title'>Photo of the day</ArticleTitle>
      <div className='home-potd'>
        <PhotoOfTheDay className='home-potd-photo' photoDayData={photoOfTheDayData} />
        <div className='home-potd-contain'>
          <div className='home-potd-article first'>
            <ArticleTitle variant={ArticleTitleVariant.small} className='home-potd-article-title'>
              Most popular
            </ArticleTitle>
            <ArticleCollection collection={dataMainArticle} />
          </div>
          <div className='home-potd-article'>
            <ArticleTitle variant={ArticleTitleVariant.small} className='home-potd-article-title'>
              Most coments
            </ArticleTitle>
            <ArticleCollection collection={dataMainArticle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
