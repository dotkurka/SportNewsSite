import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from 'assets/images/select-text-arrow.svg';
import { ArticleComments, MainArticle } from 'components';
import { MainArticleVariant } from 'components/MainArticle/enums';

import type { IArticle } from 'components/Article/types';

import './Article.scss';

const Article = ({
  data,
  disabledForm,
  handleSubmit,
  handleChangeSort,
  handleShowMore,
  className = '',
  user,
}: IArticle) => {
  const { category, team, title, showComments, comments } = data;

  return (
    <div className={`article ${className}`}>
      <div className='article-path'>
        <span>{category.title}</span>
        <Arrow className='article-path-arrow' />
        <Link to={team.path}>{team.title}</Link>
        <Arrow className='article-path-arrow' />
        <span>{title}</span>
      </div>
      <MainArticle
        className='article-main'
        sliderData={[data]}
        variant={MainArticleVariant.Article}
      />
      {showComments && (
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
