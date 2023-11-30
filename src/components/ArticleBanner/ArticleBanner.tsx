import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { IArticleBanner } from 'components/ArticleBanner/types';
import './ArticleBanner.scss';

const ArticleBanner = ({ articleData }: IArticleBanner) => {
  return (
    <div className='article-banner'>
      <span className='article-banner-category'>{articleData.category}</span>
      <img src={articleData.img} alt={articleData.alt} />
      <div className='article-banner-text'>
        <h2>{articleData.title}</h2>
        <Link className='article-banner-button' to={articleData.path}>
          <ArrowButton />
        </Link>
      </div>
    </div>
  );
};

export default ArticleBanner;
