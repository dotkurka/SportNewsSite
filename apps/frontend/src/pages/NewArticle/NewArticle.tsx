import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useCreateArticleMutation,
  useLazyGetArticleQuery,
  useUpdateArticleMutation,
} from 'api/articlesApi';
import { Article, ErrorModal, PreviewButton, SwitchButton } from 'components';
import ArticleSubmitContext from 'features/article/articleSubmitContext';
import { intialArticleFormData, previewArticleData } from 'features/article/constants';
import NewArticleForm from 'pages/NewArticle/NewArticleForm';
import { selectCurrentUser } from 'redux/authSlice';

import type { IArticleResponse, IArticleRequest } from 'features/article/types';
import type { IArticleFormData } from 'pages/NewArticle/types';

import './NewArticle.scss';

const NewArticle = () => {
  const [preview, setPreview] = useState<IArticleResponse>();
  const [showPreview, setShowPreview] = useState(false);
  const [submitAction, setSubmitAction] = useState<'submit' | 'preview'>();
  const [showComments, setShowComments] = useState(true);

  const navitaion = useNavigate();
  const { article: articleTitleParam } = useParams();
  const submitRef = useContext(ArticleSubmitContext);
  const previewRef = useRef<HTMLButtonElement>(null);
  const user = useSelector(selectCurrentUser);

  const [createArticle, { error: createError, isError: isCreateError }] =
    useCreateArticleMutation();
  const [updateArticle, { error: updateError, isError: isUpdateError }] =
    useUpdateArticleMutation();
  const [getAtricle, { data: article, isError: isArticleError, error: articleError }] =
    useLazyGetArticleQuery();

  useEffect(() => {
    if (articleTitleParam) {
      void getAtricle(articleTitleParam);
    }
  }, [articleTitleParam]);

  const handleShowPreview = () => {
    if (preview) {
      setShowPreview(false);
    } else {
      previewRef.current?.click();
    }
  };

  const handlePreview = useCallback(
    (values: IArticleFormData) => {
      const previewData: IArticleResponse = {
        ...values,
        ...previewArticleData,
        showComments,
        user,
      };
      setPreview(previewData);
      setShowPreview(true);
    },
    [preview],
  );

  const handleSubmit = async (values: IArticleFormData) => {
    const { category, conference, team, ...value } = values;
    const newArticle: IArticleRequest = {
      ...value,
      category: category.id,
      conference: conference.id,
      team: team.id,
      showComments,
    };

    if (article) {
      await updateArticle({ id: article.id, ...newArticle });
    } else {
      await createArticle(newArticle);
    }
  };

  const formikSubmit = async (value: IArticleFormData) => {
    if (submitAction === 'submit') {
      await handleSubmit(value);
    } else if (submitAction === 'preview') {
      handlePreview(value);
    }
  };

  return (
    <div className='create-article'>
      <ErrorModal error={createError || updateError} isError={isCreateError || isUpdateError} />
      <ErrorModal
        cancelHandler={() => navitaion(-1)}
        error={articleError}
        isError={isArticleError}
      />
      <PreviewButton
        className='create-article-preview-btn'
        onClick={() => handleShowPreview()}
        type='button'
      >
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>
      {showPreview && preview && <Article data={preview} disabledForm user={user} />}
      <div className='create-article-form' hidden={Boolean(preview)}>
        <NewArticleForm
          initialValues={article || intialArticleFormData}
          onSubmit={formikSubmit}
          previewRef={previewRef}
          submitAction={setSubmitAction}
          submitRef={submitRef}
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
