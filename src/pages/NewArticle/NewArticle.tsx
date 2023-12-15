import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useCreateArticleMutation } from 'api/articlesApi';
import { Article, Modal, PreviewButton, SwitchButton } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { articleCommentsData } from 'config/ArticleData/articleData';
import { UserRole } from 'features/auth/enums';
import ArticleSubmitContext from 'features/newArticle/articleSubmitContext';
import NewArticleForm from 'pages/NewArticle/NewArticleForm';
import { selectCurrentUser } from 'redux/authSlice';

import type { IRequestError } from 'features/auth/types';
import type { IArticleResponse, IArticleCreate, IArticleRequest } from 'features/newArticle/types';

import './NewArticle.scss';

const intialArticleData: IArticleCreate = {
  img: '',
  content: '',
  alt: '',
  title: '',
  conference: '',
  team: '',
  location: '',
};

const selectData = {
  defaultValue: 'Most popular',
  options: ['Most popular', 'Oldest', 'New'],
};

const previewArticle = {
  id: '483757345734875',
  category: 'NBA',
  published: new Date(Date.now()).toISOString(),
  path: '/example',
  comments: articleCommentsData,
  user: {
    role: UserRole.User,
    firstName: 'Ostap',
    id: '932492384972357',
    lastName: 'Kurka',
    email: 'example@example.com',
  },
};

const NewArticle = () => {
  const [preview, setPreview] = useState<IArticleResponse | null>();
  const [formValue, setFromValue] = useState<IArticleCreate>(intialArticleData);
  const [submitAction, setSubmitAction] = useState<'submit' | 'preview'>();
  const [showComments, setShowComments] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const submitRef = useContext(ArticleSubmitContext);
  const previewRef = useRef<HTMLButtonElement>(null);

  const user = useSelector(selectCurrentUser);
  const [createArticle, { error: articleError, isError }] = useCreateArticleMutation();

  useEffect(() => {
    if (isError) {
      const error = (articleError as IRequestError).data.message;
      setErrorMessage(error);
      setShowModal(true);
    }
  }, [isError]);

  const handlePreview = (values: IArticleCreate) => {
    setFromValue(values);
    setPreview({ ...values, ...previewArticle, showComments });
  };

  const handleShowPreview = () => {
    if (preview) setPreview(null);
    previewRef.current?.click();
  };

  const handleSubmit = async (value: IArticleCreate) => {
    const newArticle: IArticleRequest = {
      ...value,
      category: '',
      path: '',
    };

    await createArticle(newArticle);
  };

  const formikSubmit = (value: IArticleCreate) => {
    if (submitAction === 'submit') {
      handleSubmit(value);
    } else if (submitAction === 'preview') {
      handlePreview(value);
    }
  };

  return (
    <div className='create-article'>
      <PreviewButton
        type='button'
        onClick={() => handleShowPreview()}
        className='create-article-preview-btn'
      >
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>

      {preview ? (
        <Article disabledForm data={preview} user={user} selectData={selectData} />
      ) : (
        <div className='create-article-form'>
          <Modal
            show={showModal}
            handleShow={setShowModal}
            variant={ModalVariant.Custom}
            customText={{ title: 'ERROR', message: errorMessage }}
          />
          <NewArticleForm
            onSubmit={formikSubmit}
            initialValues={formValue}
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
      )}
    </div>
  );
};

export default NewArticle;
