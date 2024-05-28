import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { IArticleBanner } from 'components/ArticleBanner/types';
import './ArticleBanner.scss';

const ArticleBanner = ({ articleData }: IArticleBanner) => {
  return (
    <Link className='article-banner' to={articleData.path}>
      <span className='article-banner-category'>{articleData.category.title}</span>
      <img alt={articleData.alt} src={articleData.img} />
      <div className='article-banner-text'>
        <h2>{articleData.title}</h2>
        <ArrowButton className='article-banner-arrow' />
      </div>
    </Link>
  );
};

export default ArticleBanner;
