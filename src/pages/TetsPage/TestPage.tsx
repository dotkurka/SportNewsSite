import { Form, Formik } from 'formik';

import { MainArticle } from 'components';

import type { ISliderData } from 'components/MainArticle/types';

const intialArticleData: ISliderData = {
  img: '',
  alt: '',
  title: {
    published: '',
    head: '',
    description: '',
  },
  article: '',
};

const articleData = [intialArticleData];

const handleSubmit = () => {};

const TestPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <MainArticle sliderData={articleData} />

      <div>
        <Formik onSubmit={handleSubmit} initialValues={intialArticleData}>
          {({ values, handleChange }) => (
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                onChange={handleChange}
                placeholder='img'
                type='text'
                name='img'
                value={values.img}
              />
              <input
                onChange={handleChange}
                placeholder='head'
                type='text'
                name='head'
                value={values.title.head}
              />
              <input
                onChange={handleChange}
                placeholder='desc'
                type='text'
                name='title.description'
                value={values.title.description}
              />
              <input
                onChange={handleChange}
                placeholder='article'
                type='text'
                name='article'
                value={values.article}
              />
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TestPage;
