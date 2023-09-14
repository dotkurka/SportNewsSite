import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import type { IArticleCollection } from 'components/ArticleCollection/types';

import './ArticleCollection.scss';

const ArticleCollection = ({ collection }: IArticleCollection) => {
  return (
    <table className='article-collection'>
      <tbody>
        {collection.map((post, index) => (
          <tr key={index} className='article-collection-contain'>
            <td className='article-collection-img'>
              <img src={post.img} alt={post.alt} />
            </td>
            <td className='article-collection-text'>
              <h3>{post.title.head}</h3>
              <p>{`${post.title.description.substring(0, 50)}...`}</p>
              <Link className='article-collection-button' to={post.path}>
                <ArrowButton />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleCollection;
