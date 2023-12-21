import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';

import { Input, MarkdownForm, Select } from 'components';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { articleSchema } from 'features/newArticle/validationSchema';
import NewArticleImageForm from 'pages/NewArticle/NewArticleImageForm';

import type { INewArticleForm } from 'pages/NewArticle/types';

import './NewArticle.scss';

const NewArticleForm = ({
  onSubmit,
  initialValues,
  submitAction,
  submitRef,
  previewRef,
}: INewArticleForm) => {
  const { category } = useParams();

  const currentCategory = sidebarData.find((item) => item.title === category);
  console.log(currentCategory);

  return (
    <Formik
      id='newarticle'
      validationSchema={articleSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => (
        <Form>
          <NewArticleImageForm
            touched={touched.img}
            errors={errors.img}
            formikSetValue={setFieldValue}
            name='img'
            value={values.img}
          />
          <div className='create-article-form-select'>
            <Select
              defaultValue={values.conference}
              touched={touched.conference}
              errors={errors.conference}
              placeholder='Not Selected'
              label='Conference'
              options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
              name='conference'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
            />
            <Select
              defaultValue={values.team}
              touched={touched.team}
              errors={errors.team}
              placeholder='Not Selected'
              label='Team'
              options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
              name='team'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
            />
            <Select
              defaultValue={values.location}
              touched={touched.location}
              errors={errors.location}
              placeholder='Not Selected'
              label='Location'
              options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
              name='location'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
            />
          </div>
          <Input
            autoComplete='off'
            touched={touched.alt}
            errors={errors.alt}
            value={values.alt}
            type='text'
            name='alt'
            label='alt'
            onChange={handleChange}
            placeholder='Alternative text for picture'
            className='create-article-form-input'
          />
          <Input
            autoComplete='off'
            touched={touched.title}
            errors={errors.title}
            value={values.title}
            type='text'
            name='title'
            label='Article Headline'
            onChange={handleChange}
            className='create-article-form-input'
            placeholder='Name'
          />
          <MarkdownForm
            touched={touched.content}
            errors={errors.content}
            label='Content'
            value={values.content}
            name='content'
          />
          <button
            type='submit'
            hidden
            ref={submitRef}
            onClick={() => {
              submitAction('submit');
              handleSubmit();
            }}
          >
            submit
          </button>
          <button
            hidden
            type='submit'
            ref={previewRef}
            onClick={() => {
              submitAction('preview');
              handleSubmit();
            }}
          >
            preview
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewArticleForm;
