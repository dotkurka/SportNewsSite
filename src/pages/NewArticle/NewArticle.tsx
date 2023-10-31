import { Form, Formik } from 'formik';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Button, Input, Select } from 'components';
// import { MainArticleVariant } from 'components/MainArticle/types';
import MarkdownForm from 'components/MarkdownForm/MarkdownForm';

// import { currentDate } from 'utils/currentDate';

import type { IArticleData } from 'components/Article/types';

import './NewArticle.scss';

const NewArticle = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [articleMarkDown, setArticleMarkDown] = useState('');

  const intialArticleData: IArticleData = {
    article: articleMarkDown,
    img: '',
    alt: '',
    title: '',
    description: '',
    category: '',
    published: '',
    path: '',
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleSubmit = (values: IArticleData) => {
    setArticleMarkDown(values.article);
  };

  return (
    <div className='test-page'>
      {/* {showPreview && (
        <MainArticle sliderData={[articleData]} variant={MainArticleVariant.Article} />
      )} */}
      {!showPreview && (
        <div>
          <Formik onSubmit={handleSubmit} initialValues={intialArticleData}>
            {({ values, handleChange }) => (
              <Form>
                <Input
                  value={values.img}
                  type='text'
                  name='img'
                  label='img'
                  onChange={handleChange}
                />
                <Input
                  value={values.alt}
                  type='text'
                  name='alt'
                  label='alt'
                  onChange={handleChange}
                />
                <Input
                  value={values.title}
                  type='text'
                  name='title'
                  label='title'
                  onChange={handleChange}
                />
                <Input
                  value={values.description}
                  type='text'
                  name='description'
                  label='description'
                  onChange={handleChange}
                />
                <Select
                  options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
                  name='category'
                  onChange={handleChange}
                />
                <MarkdownForm value={values.article} name='article' />
                <Button type='submit'>Preview</Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      {showPreview && <Button onClick={handleClosePreview}>Back</Button>}
      <div id='post-test' className='test-page-mark'>
        <ReactMarkdown>{articleMarkDown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NewArticle;
