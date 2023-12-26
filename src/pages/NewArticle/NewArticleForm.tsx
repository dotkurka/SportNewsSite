import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Input, MarkdownForm, Select } from 'components';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { articleSchema } from 'features/newArticle/validationSchema';
import NewArticleImageForm from 'pages/NewArticle/NewArticleImageForm';

import type { IConferenceData, ITeamData } from 'features/category/types';
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
  const [team, setTeam] = useState<ITeamData[]>();

  const currentCategory = sidebarData.find((item) => item.title === category);

  const setTeamData = (item: IConferenceData) => {
    setTeam(item.team);
  };

  return (
    <Formik validationSchema={articleSchema} onSubmit={onSubmit} initialValues={initialValues}>
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
              onChange={(item) => setTeamData(item)}
              options={{
                primaryKey: 'title',
                options: currentCategory?.conference,
              }}
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
              options={{
                primaryKey: 'title',
                options: team,
              }}
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
              options={{
                primaryKey: 'title',
                options: [],
              }}
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
