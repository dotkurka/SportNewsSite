import { useEffect, useState } from 'react';

import { useAddArticleCommentMutation, useGetArticleCommentsQuery } from 'api/articlesApi';
import { Article, Modal } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { articleData } from 'config/ArticleData/articleData';
import { userMock } from 'config/UserData';
import { sortOptions } from 'features/article/constants';

import type { ICommentRequest, ISortOption } from 'features/article/types';
import type { IRequestError } from 'features/auth/types';

const articleResponse = articleData;
const user = userMock;

const ArticlePage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [sortSelect, setSortSelect] = useState(sortOptions[0].value);
  const [showModal, setShowModal] = useState(false);
  // replace mock data with this
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { data } = useGetArticleCommentsQuery({ sort: sortSelect });
  const [addComment, { isError, error: commentError }] = useAddArticleCommentMutation();

  useEffect(() => {
    if (isError) {
      const error = (commentError as IRequestError).data?.message;
      setErrorMessage(error);
      setShowModal(true);
    }
  }, [isError]);

  const handleSubmitComment = (value: ICommentRequest) => {
    addComment({ articleId: articleResponse.id, body: value });
  };

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  return (
    <>
      <Modal
        show={showModal}
        handleShow={setShowModal}
        variant={ModalVariant.Custom}
        customText={{ title: 'ERROR', message: errorMessage }}
      />
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
