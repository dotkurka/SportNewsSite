import { Form, Formik } from 'formik';

import { ArticleTitle, ImageUploadFromik, Input } from 'components';
import { ArticleTitleVariant } from 'components/ArticleTitle/types';
import { homeSchema } from 'features/home/validationSchema';
import HomeManagerSelectGroup from 'pages/HomeManager/HomeManagerSelectGroup';

import type { IHomeManagerForm } from 'pages/HomeManager/types';

import './HomeManager.scss';

const HomeManagerForm = ({
  initialValues,
  onSubmit,
  hidden,
  submitRef,
  previewRef,
  submitAction,
}: IHomeManagerForm) => {
  return (
    <Formik initialValues={initialValues} validationSchema={homeSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form hidden={hidden}>
          <div className='home-manager-main-article'>
            <h2>Main Article</h2>
            <div className='home-manager-main-article-select'>
              <HomeManagerSelectGroup
                errors={errors.mainArticle}
                touched={touched.mainArticle}
                values={values.mainArticle}
                setFieldValue={setFieldValue}
                className='home-manager-main-article-select-item'
                name='mainArticle'
              />
            </div>
          </div>
          <div className='home-manager-sub-article'>
            <h3>Sub Articles</h3>
            <div className='home-manager-sub-article-select'>
              <HomeManagerSelectGroup
                errors={errors.subArticle}
                touched={touched.subArticle}
                values={values.subArticle}
                setFieldValue={setFieldValue}
                className='home-manager-sub-article-select-item'
                name='subArticle'
              />
            </div>
          </div>
          <div className='home-manager-breakdown'>
            <ArticleTitle className='home-manager-breakdown-title'>Breakdown</ArticleTitle>
            <h3>First</h3>
            <div className='home-manager-breakdown-select'>
              <HomeManagerSelectGroup
                errors={errors.breakdown?.first}
                touched={touched.breakdown?.first}
                values={values.breakdown.first}
                setFieldValue={setFieldValue}
                className='home-manager-breakdown-select-item'
                name='breakdown.first'
              />
            </div>
            <h3>Second</h3>
            <div className='home-manager-breakdown-select'>
              <HomeManagerSelectGroup
                errors={errors.breakdown?.second}
                touched={touched.breakdown?.second}
                values={values.breakdown.second}
                setFieldValue={setFieldValue}
                className='home-manager-breakdown-select-item'
                name='breakdown.second'
              />
            </div>
          </div>
          <div className='home-manager-potd'>
            <ArticleTitle>Photo of the day</ArticleTitle>
            <ImageUploadFromik
              touched={touched.potd?.img}
              errors={errors.potd?.img}
              name='potd.img'
              value={values.potd.img}
              formikSetValue={setFieldValue}
              className='home-manager-potd-image'
            />
            <Input
              succesDisabled
              touched={touched.potd?.alt}
              errors={errors.potd?.alt}
              value={values.potd.alt}
              onChange={handleChange}
              className='home-manager-potd-input'
              name='potd.alt'
              label='Alt'
              type='text'
            />
            <Input
              succesDisabled
              touched={touched.potd?.title}
              errors={errors.potd?.title}
              value={values.potd.title}
              onChange={handleChange}
              className='home-manager-potd-input'
              name='potd.title'
              label='Photo title'
              type='text'
            />
            <Input
              succesDisabled
              touched={touched.potd?.description}
              errors={errors.potd?.description}
              value={values.potd.description}
              onChange={handleChange}
              className='home-manager-potd-input'
              name='potd.description'
              label='Short description'
              type='text'
            />
            <Input
              succesDisabled
              touched={touched.potd?.author}
              errors={errors.potd?.author}
              value={values.potd.author}
              onChange={handleChange}
              className='home-manager-potd-input'
              name='potd.author'
              label='Author'
              type='text'
            />
          </div>
          <div className='home-manager-most'>
            <div className='home-manager-most-contain'>
              <ArticleTitle
                className='home-manager-most-contain-title'
                variant={ArticleTitleVariant.small}
              >
                Most popular
              </ArticleTitle>
              <HomeManagerSelectGroup
                errors={errors.mostPopular}
                touched={touched.mostPopular}
                values={values.mostPopular}
                setFieldValue={setFieldValue}
                className='home-manager-most-select'
                name='mostPopular'
              />
            </div>
            <div className='home-manager-most-contain'>
              <ArticleTitle
                className='home-manager-most-contain-title'
                variant={ArticleTitleVariant.small}
              >
                Most comments
              </ArticleTitle>
              <HomeManagerSelectGroup
                errors={errors.mostComments}
                touched={touched.mostComments}
                values={values.mostComments}
                setFieldValue={setFieldValue}
                className='home-manager-most-select'
                name='mostComments'
              />
            </div>
          </div>
          <button hidden type='submit' ref={submitRef} onClick={() => submitAction('submit')}>
            submit
          </button>
          <button hidden type='submit' ref={previewRef} onClick={() => submitAction('preview')}>
            preview
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HomeManagerForm;
