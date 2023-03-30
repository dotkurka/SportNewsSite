import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/types';

import './MainArticle.scss';

const MainArticleTitle = () => {
  return (
    <div className='main-article-title'>
      <div className='main-article-title-text'>
        <span> Published / 20.09.2019</span>
        <h3>London Games return in 2019</h3>
        <h2>
          Register to receive the latest news on ticket sales for the four NFL London Games in 2019!
        </h2>
      </div>

      <Button variant={ButtonVariant.Contained} className='main-article-title-btn'>
        More
      </Button>
      <div className='main-article-title-shadow' />
    </div>
  );
};

export default MainArticleTitle;
