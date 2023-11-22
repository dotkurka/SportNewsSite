import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';
import { removeMarkdown, truncateText } from 'utils';

import type { IArticleCollection } from 'components/ArticleCollection/types';

import './ArticleCollection.scss';

const ArticleCollection = ({ collection }: IArticleCollection) => {
  return (
    <table className='article-collection'>
      <tbody>
        {collection.map((article, index) => {
          const content = truncateText(removeMarkdown(article.content), 50);
          return (
            <tr key={index} className='article-collection-contain'>
              <td className='article-collection-img'>
                <img src={article.img} alt={article.alt} />
              </td>
              <td className='article-collection-text'>
                <h3>{article.title}</h3>
                <p>{content}</p>
                <Link className='article-collection-button' to={article.path}>
                  <ArrowButton />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ArticleCollection;
