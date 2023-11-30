import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { Article, PreviewButton, SwitchButton } from 'components';
import { articleCommentsData } from 'config/ArticleData/articleData';
import NewArticleForm from 'pages/NewArticle/NewArticleForm';
import { selectCurrentUser } from 'redux/authSlice';

import type { IArticleResponse, IArticleCreate } from 'features/newArticle/types';

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

  const reviewRef = useRef<HTMLButtonElement>(null);
  const user = useSelector(selectCurrentUser);

  const handleReview = (values: IArticleCreate) => {
    setFromValue(values);
    setPreview({ ...values, ...previewArticle, showComments });
  };

  const handlePreview = () => {
    if (preview) setPreview(null);

    reviewRef.current?.click();
  };

  const handleSubmit = (value: IArticleCreate) => {
    console.log(value);
  };

  const formikSubmit = (value: IArticleCreate) => {
    if (submitAction === 'submit') {
      handleSubmit(value);
    } else if (submitAction === 'preview') {
      handleReview(value);
    }
  };

  return (
    <div className='create-article'>
      <PreviewButton
        type='button'
        onClick={() => handlePreview()}
        className='create-article-preview-btn'
      >
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>

      {preview ? (
        <Article disabledForm data={preview} user={user} selectData={selectData} />
      ) : (
        <div className='create-article-form'>
          <NewArticleForm
            onSubmit={formikSubmit}
            initialValues={formValue}
            submitAction={setSubmitAction}
            reviewRef={reviewRef}
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
