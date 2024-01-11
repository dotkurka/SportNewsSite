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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars -- replace mock data with this
  const { data } = useGetArticleCommentsQuery({ sort: sortSelect });
  const [addComment, { isError, error: commentError }] = useAddArticleCommentMutation();

  const handleSubmitComment = (value: ICommentRequest) => {
    void addComment({ articleId: articleResponse.id, body: value });
  };

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  return (
    <>
      <ErrorModal error={commentError} isError={isError} />
      <Article
        data={articleResponse}
        handleChangeSort={handleChangeSort}
        handleSubmit={handleSubmitComment}
        user={user}
      />
    </>
  );
};

export default ArticlePage;
