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
  selectData,
  user,
}: IArticle) => {
  const teamPath = `/${data.category}/${data.team}`;

  return (
    <div className={`article ${className}`}>
      <div className='article-path'>
        <span>{data.category}</span>
        <Arrow className='article-path-arrow' />
        <Link to={teamPath}>{data.team}</Link>
        <Arrow className='article-path-arrow' />
        <span>{data.title}</span>
      </div>
      <MainArticle
        className='article-main'
        variant={MainArticleVariant.Article}
        sliderData={[data]}
      />
      {data.showComments && (
        <ArticleComments
          handleSubmit={handleSubmit}
          handleChangeSort={handleChangeSort}
          handleShowMore={handleShowMore}
          disabledForm={disabledForm}
          comments={data.comments}
          user={user}
          selectData={selectData}
        />
      )}
    </div>
  );
};

export default Article;
