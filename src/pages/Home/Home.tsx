import {
  Article,
  ArticleCollection,
  ArticleTitle,
  MainArticleCarousel,
  SubArticle,
} from 'components';
import {
  articleColectionData,
  articleData,
  dataMainArticle,
  dataSub,
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
      <div className='home-breakdown'>
        <ArticleTitle className='home-breakdown-title'>Breakdown</ArticleTitle>
        <div className='home-breakdown-contain'>
          <Article articleData={articleData} />
          <ArticleCollection collection={articleColectionData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
