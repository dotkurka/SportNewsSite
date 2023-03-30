import Photo from 'assets/images/main-photo-article.png';
import MainArticleTitle from 'components/MainArticle/MainArticleTitle';

import './MainArticle.scss';

const MainArticle = () => {
  return (
    <div className='main-article'>
      <img className='main-article-img' src={Photo} alt='dfdsfdf' />

      <MainArticleTitle />
    </div>
  );
};

export default MainArticle;
