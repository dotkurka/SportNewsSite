import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';
import { removeMarkdown, truncateText } from 'utils';

import type { ISubArticle } from 'components/SubArticle/types';
import './SubArticle.scss';

const SubArticle = ({ subArticleData, className }: ISubArticle) => {
  const articleContent = truncateText(removeMarkdown(subArticleData.content), 45);

  return (
    <Link className={`sub-article ${className}`} to={subArticleData.path}>
      <div className='sub-article-border' />
      <img alt={subArticleData.alt} className='sub-article-img' src={subArticleData.img} />
      <h3>{subArticleData.title}</h3>
      <p>{articleContent}</p>
      <ArrowButton className='sub-article-arrow' />
    </Link>
  );
};

export default SubArticle;
