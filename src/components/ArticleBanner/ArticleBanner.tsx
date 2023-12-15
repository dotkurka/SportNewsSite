import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { IArticleBanner } from 'components/ArticleBanner/types';
import './ArticleBanner.scss';

const ArticleBanner = ({ articleData }: IArticleBanner) => {
  const { img, alt, title, category, team, path } = articleData;
  const articlePath = `/${category}/${team}/${path}`;

  return (
    <Link to={articlePath} className='article-banner'>
      <span className='article-banner-category'>{category}</span>
      <img src={img} alt={alt} />
      <div className='article-banner-text'>
        <h2>{title}</h2>
        <ArrowButton className='article-banner-arrow' />
      </div>
    </Link>
  );
};

export default ArticleBanner;
