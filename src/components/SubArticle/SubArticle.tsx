import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';
import { removeMarkdown, truncateText } from 'utils';

import type { ISubArticle } from 'components/SubArticle/types';
import './SubArticle.scss';

const SubArticle = ({ subArticleData, className }: ISubArticle) => {
  const articleContent = truncateText(removeMarkdown(subArticleData.content), 45);

  return (
    <Link to={subArticleData.path} className={`sub-article ${className}`}>
      <div className='sub-article-border' />
      <img className='sub-article-img' src={subArticleData.img} alt={subArticleData.alt} />
      <h3>{subArticleData.title}</h3>
      <p>{articleContent}</p>
      <ArrowButton className='sub-article-arrow' />
    </Link>
  );
};

export default SubArticle;
