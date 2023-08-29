import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { ISubArticle } from 'components/SubArticle/types';
import './SubArticle.scss';

const SubArticle = ({ subArticleData, className }: ISubArticle) => {
  return (
    <div className={`sub-article ${className}`}>
      <div className='sub-article-border' />
      <img className='sub-article-img' src={subArticleData.img} alt={subArticleData.alt} />
      <h3>{subArticleData.title.head}</h3>
      <p>{subArticleData.title.description}</p>
      <Link className='sub-article-button' to={subArticleData.path}>
        <ArrowButton />
      </Link>
    </div>
  );
};

export default SubArticle;
