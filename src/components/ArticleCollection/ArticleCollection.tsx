import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';
import { removeMarkdown, truncateText } from 'utils';

import type { IArticleCollection } from 'components/ArticleCollection/types';

import './ArticleCollection.scss';

const ArticleCollection = ({ collection }: IArticleCollection) => {
  return (
    <div className='article-collection'>
      {collection.map((article) => {
        const content = truncateText(removeMarkdown(article.content), 50);
        const articlePath = `/${article.category}/${article.team}/${article.path}`;
        return (
          <Link to={articlePath} key={article.id} className='article-collection-item'>
            <img className='article-collection-img' src={article.img} alt={article.alt} />
            <div className='article-collection-text'>
              <h3>{article.title}</h3>
              <p>{content}</p>
              <ArrowButton className='article-collection-arrow' />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ArticleCollection;
