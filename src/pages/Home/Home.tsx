import {
  Article,
  ArticleCollection,
  ArticleTitle,
  MainArticleCarousel,
  PhotoOfTheDay,
  SubArticle,
} from 'components';
import { ArticleTitleVariant } from 'components/ArticleTitle/types';
import {
  articleColectionData,
  articleData,
  dataMainArticle,
  dataSub,
  photoOfTheDayData,
} from 'config/ArticleData/articleData';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <MainArticleCarousel className='home-main-article' sliderData={dataMainArticle} />
      <div className='home-sub-article'>
        {dataSub.map((item) => (
          <SubArticle key={item.img} className='home-sub-article-item' subArticleData={item} />
        ))}
      </div>
      <ArticleTitle className='home-title'>Breakdown</ArticleTitle>
      <div className='home-breakdown'>
        <div className='home-breakdown-article'>
          <Article articleData={articleData} />
          <ArticleCollection collection={articleColectionData} />
        </div>
        <div className='home-breakdown-article'>
          <Article articleData={articleData} />
          <ArticleCollection collection={articleColectionData} />
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
            <ArticleCollection collection={articleColectionData} />
          </div>
          <div className='home-potd-article'>
            <ArticleTitle variant={ArticleTitleVariant.small} className='home-potd-article-title'>
              Most coments
            </ArticleTitle>
            <ArticleCollection collection={articleColectionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
