import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useCreateArticleMutation } from 'api/articlesApi';
import { Article, Modal, PreviewButton, SwitchButton } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import ArticleSubmitContext from 'features/article/articleSubmitContext';
import { intialArticleFormData, previewArticleData } from 'features/article/constants';
import NewArticleForm from 'pages/NewArticle/NewArticleForm';
import { selectCurrentUser } from 'redux/authSlice';

import type { IArticleResponse, IArticleRequest } from 'features/article/types';
import type { IRequestError } from 'features/auth/types';
import type { IArticleFormData } from 'pages/NewArticle/types';

import './NewArticle.scss';

const NewArticle = () => {
  const [preview, setPreview] = useState<IArticleResponse | null>();
  const [submitAction, setSubmitAction] = useState<'submit' | 'preview'>();
  const [showComments, setShowComments] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const submitRef = useContext(ArticleSubmitContext);
  const previewRef = useRef<HTMLButtonElement>(null);

  const [createArticle, { error: articleError, isError }] = useCreateArticleMutation();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (isError) {
      const error = (articleError as IRequestError).data.message;
      setErrorMessage(error);
      setShowModal(true);
    }
  }, [isError]);

  const handleShowPreview = () => {
    if (preview) {
      setPreview(null);
    } else {
      previewRef.current?.click();
    }
  };

  const handlePreview = (values: IArticleFormData) => {
    const { category, conference, team, ...value } = values;
    const previewData: IArticleResponse = {
      ...value,
      ...previewArticleData,
      category: category.title,
      conference: conference.title,
      team: team.title,
      showComments,
      user,
    };
    setPreview(previewData);
  };

  const handleSubmit = async (values: IArticleFormData) => {
    const { category, conference, team, ...value } = values;
    const newArticle: IArticleRequest = {
      ...value,
      category: category.id,
      conference: conference.id,
      team: team.id,
      showComments,
    };

    await createArticle(newArticle);
  };

  const formikSubmit = (value: IArticleFormData) => {
    if (submitAction === 'submit') {
      handleSubmit(value);
    } else if (submitAction === 'preview') {
      handlePreview(value);
    }
  };

  return (
    <div className='create-article'>
      <Modal
        show={showModal}
        handleShow={setShowModal}
        variant={ModalVariant.Custom}
        customText={{ title: 'ERROR', message: errorMessage }}
      />
      <PreviewButton
        type='button'
        onClick={() => handleShowPreview()}
        className='create-article-preview-btn'
      >
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>
      {preview && <Article disabledForm data={preview} user={user} />}
      <div hidden={!!preview} className='create-article-form'>
        <NewArticleForm
          onSubmit={formikSubmit}
          initialValues={intialArticleFormData}
          submitAction={setSubmitAction}
          submitRef={submitRef}
          previewRef={previewRef}
        />
        <div className='create-article-comments-show'>
          <p>Show or hide comments section:</p>{' '}
          <span className='create-article-comments-show-label'>
            {showComments ? 'Show' : 'Hidden'}
          </span>
          <SwitchButton checked={showComments} onChange={(e) => setShowComments(e)} />
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
