import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';
import { removeMarkdown, truncateText } from 'utils';

import type { ISubArticle } from 'components/SubArticle/types';
import './SubArticle.scss';

const SubArticle = ({ subArticleData, className }: ISubArticle) => {
  const { img, alt, title, category, team, path, content } = subArticleData;

  const articleContent = truncateText(removeMarkdown(content), 45);
  const articlePath = `/${category}/${team}/${path}`;

  return (
    <Link to={articlePath} className={`sub-article ${className}`}>
      <div className='sub-article-border' />
      <img className='sub-article-img' src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{articleContent}</p>
      <ArrowButton className='sub-article-arrow' />
    </Link>
  );
};

export default SubArticle;
