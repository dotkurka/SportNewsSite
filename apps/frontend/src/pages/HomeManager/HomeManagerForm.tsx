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
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={homeSchema}>
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form hidden={hidden}>
          <div className='home-manager-main-article'>
            <h2>Main Article</h2>
            <div className='home-manager-main-article-select'>
              <HomeManagerSelectGroup
                className='home-manager-main-article-select-item'
                errors={errors.mainArticle}
                name='mainArticle'
                setFieldValue={setFieldValue}
                touched={touched.mainArticle}
                values={values.mainArticle}
              />
            </div>
          </div>
          <div className='home-manager-sub-article'>
            <h3>Sub Articles</h3>
            <div className='home-manager-sub-article-select'>
              <HomeManagerSelectGroup
                className='home-manager-sub-article-select-item'
                errors={errors.subArticle}
                name='subArticle'
                setFieldValue={setFieldValue}
                touched={touched.subArticle}
                values={values.subArticle}
              />
            </div>
          </div>
          <div className='home-manager-breakdown'>
            <ArticleTitle className='home-manager-breakdown-title'>Breakdown</ArticleTitle>
            <h3>First</h3>
            <div className='home-manager-breakdown-select'>
              <HomeManagerSelectGroup
                className='home-manager-breakdown-select-item'
                errors={errors.breakdown?.first}
                name='breakdown.first'
                setFieldValue={setFieldValue}
                touched={touched.breakdown?.first}
                values={values.breakdown.first}
              />
            </div>
            <h3>Second</h3>
            <div className='home-manager-breakdown-select'>
              <HomeManagerSelectGroup
                className='home-manager-breakdown-select-item'
                errors={errors.breakdown?.second}
                name='breakdown.second'
                setFieldValue={setFieldValue}
                touched={touched.breakdown?.second}
                values={values.breakdown.second}
              />
            </div>
          </div>
          <div className='home-manager-potd'>
            <ArticleTitle>Photo of the day</ArticleTitle>
            <ImageUploadFromik
              className='home-manager-potd-image'
              errors={errors.potd?.img}
              formikSetValue={setFieldValue}
              name='potd.img'
              touched={touched.potd?.img}
              value={values.potd.img}
            />
            <Input
              className='home-manager-potd-input'
              errors={errors.potd?.alt}
              label='Alt'
              name='potd.alt'
              onChange={handleChange}
              succesDisabled
              touched={touched.potd?.alt}
              type='text'
              value={values.potd.alt}
            />
            <Input
              className='home-manager-potd-input'
              errors={errors.potd?.title}
              label='Photo title'
              name='potd.title'
              onChange={handleChange}
              succesDisabled
              touched={touched.potd?.title}
              type='text'
              value={values.potd.title}
            />
            <Input
              className='home-manager-potd-input'
              errors={errors.potd?.description}
              label='Short description'
              name='potd.description'
              onChange={handleChange}
              succesDisabled
              touched={touched.potd?.description}
              type='text'
              value={values.potd.description}
            />
            <Input
              className='home-manager-potd-input'
              errors={errors.potd?.author}
              label='Author'
              name='potd.author'
              onChange={handleChange}
              succesDisabled
              touched={touched.potd?.author}
              type='text'
              value={values.potd.author}
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
                className='home-manager-most-select'
                errors={errors.mostPopular}
                name='mostPopular'
                setFieldValue={setFieldValue}
                touched={touched.mostPopular}
                values={values.mostPopular}
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
                className='home-manager-most-select'
                errors={errors.mostComments}
                name='mostComments'
                setFieldValue={setFieldValue}
                touched={touched.mostComments}
                values={values.mostComments}
              />
            </div>
          </div>
          <button hidden onClick={() => submitAction('submit')} ref={submitRef} type='submit'>
            submit
          </button>
          <button hidden onClick={() => submitAction('preview')} ref={previewRef} type='submit'>
            preview
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HomeManagerForm;
