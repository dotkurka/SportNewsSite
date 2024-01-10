import { useState } from 'react';

import { useAddArticleCommentMutation, useGetArticleCommentsQuery } from 'api/articlesApi';
import { Article, ErrorModal } from 'components';
import { articleData } from 'config/ArticleData/articleData';
import { userMock } from 'config/UserData';
import { sortOptions } from 'features/article/constants';

import type { ICommentRequest, ISortOption } from 'features/article/types';

const articleResponse = articleData;
const user = userMock;

const ArticlePage = () => {
  const [sortSelect, setSortSelect] = useState(sortOptions[0].value);
  // replace mock data with this
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { data } = useGetArticleCommentsQuery({ sort: sortSelect });
  const [addComment, { isError, error: commentError }] = useAddArticleCommentMutation();

  const handleSubmitComment = (value: ICommentRequest) => {
    addComment({ articleId: articleResponse.id, body: value });
  };

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  return (
    <>
      <ErrorModal isError={isError} error={commentError} />
      <Article
        user={user}
        handleChangeSort={handleChangeSort}
        data={articleResponse}
        handleSubmit={handleSubmitComment}
      />
    </>
  );
};

export default ArticlePage;
