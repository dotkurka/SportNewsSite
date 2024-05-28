import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  useAddArticleCommentMutation,
  useGetArticleQuery,
  useLazyGetArticleCommentsQuery,
} from 'api/articlesApi';
import { Article, ErrorModal } from 'components';
import { sortOptions } from 'features/article/constants';
import { selectCurrentUser } from 'redux/authSlice';

import type { ICommentRequest, ISortOption } from 'features/article/types';

const ArticlePage = () => {
  const [sortSelect, setSortSelect] = useState(sortOptions[0].value);
  const { article } = useParams();
  const user = useSelector(selectCurrentUser);

  const { data: articleResponse, isLoading } = useGetArticleQuery(article as string);

  const [getComments, { data: comments }] = useLazyGetArticleCommentsQuery();
  const [addComment, { isError, error: commentError }] = useAddArticleCommentMutation();
  console.log(articleResponse?.comments);

  useEffect(() => {
    if (articleResponse?.comments.length) {
      void getComments({ articleId: articleResponse.id, sort: sortSelect });
    }
  }, [articleResponse?.comments.length]);

  const handleSubmitComment = (value: ICommentRequest) => {
    if (articleResponse) {
      void addComment({ articleId: articleResponse.id, body: value });
    }
  };

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  return (
    <>
      <ErrorModal error={commentError} isError={isError} />
      <Article
        comments={comments}
        data={articleResponse}
        handleChangeSort={handleChangeSort}
        handleSubmit={handleSubmitComment}
        isLoading={isLoading}
        user={user}
      />
    </>
  );
};

export default ArticlePage;
