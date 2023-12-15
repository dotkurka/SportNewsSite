import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from 'assets/images/select-text-arrow.svg';
import { ArticleComments, MainArticle } from 'components';
import { MainArticleVariant } from 'components/MainArticle/enums';

import './Article.scss';
import type { IArticle } from 'components/Article/types';

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
  return (
    <div className={`article ${className}`}>
      <div className='article-path'>
        <Link to={`/${data.category}`}>{data.category}</Link>
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
