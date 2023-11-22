import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { IArticle } from 'components/Article/types';
import './Article.scss';

const Article = ({ articleData }: IArticle) => {
  return (
    <div className='article'>
      <span className='article-category'>{articleData.category}</span>
      <img src={articleData.img} alt={articleData.alt} />
      <div className='article-text'>
        <h2>{articleData.title}</h2>
        <Link className='article-button' to={articleData.path}>
          <ArrowButton />
        </Link>
      </div>
    </div>
  );
};

export default Article;
