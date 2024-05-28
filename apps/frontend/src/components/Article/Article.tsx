import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from 'assets/images/select-text-arrow.svg';
import { ArticleComments, MainArticle, MainArticleSkeleton } from 'components';
import { MainArticleVariant } from 'components/MainArticle/enums';
import 'react-loading-skeleton/dist/skeleton.css';

import type { IArticle } from 'components/Article/types';

import './Article.scss';

const Article = ({
  data,
  comments,
  disabledForm,
  handleSubmit,
  handleChangeSort,
  handleShowMore,
  isLoading,
  className = '',
  user,
}: IArticle) => {
  if (!data && isLoading) {
    return <MainArticleSkeleton text />;
  }
  return (
    <div className={`article ${className}`}>
      <div className='article-path'>
        <span>{data?.category.title || <Skeleton width={40} />}</span>
        <Arrow className='article-path-arrow' />
        <Link to={data?.team.path || ''}>{data?.team.title || <Skeleton width={40} />}</Link>
        <Arrow className='article-path-arrow' />
        <span>{data?.title || <Skeleton width={40} />}</span>
      </div>
      {data ? (
        <MainArticle
          className='article-main'
          sliderData={[data]}
          variant={MainArticleVariant.Article}
        />
      ) : null}
      {data?.showComments && (
        <ArticleComments
          comments={comments}
          disabledForm={disabledForm}
          handleChangeSort={handleChangeSort}
          handleShowMore={handleShowMore}
          handleSubmit={handleSubmit}
          user={user}
        />
      )}
    </div>
  );
};

export default Article;
