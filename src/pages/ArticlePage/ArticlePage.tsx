import { useEffect, useState } from 'react';

import { useAddArticleCommentMutation } from 'api/articlesApi';
import { Article, Modal } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { articleData } from 'config/ArticleData/articleData';
import { userMock } from 'config/UserData';

import type { ICommentRequest } from 'features/article/types';
import type { IRequestError } from 'features/auth/types';

const articleResponse = articleData;
const user = userMock;

const ArticlePage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [addComment, { isError, error: commentError }] = useAddArticleCommentMutation();

  const handleSubmitComment = (value: ICommentRequest) => {
    addComment({ id: articleResponse.id, body: value });
  };

  useEffect(() => {
    if (isError) {
      const error = (commentError as IRequestError).data?.message;
      setErrorMessage(error);
      setShowModal(true);
    }
  }, [isError]);

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
        data={articleResponse}
        handleSubmit={handleSubmitComment}
        selectData={{
          defaultValue: 'sdsd',
          options: ['sdsd', 'dssd'],
        }}
      />
    </>
  );
};

export default ArticlePage;
