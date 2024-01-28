import { Form, Formik, getIn } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ImageUploadFromik, Input, MarkdownForm, Select } from 'components';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { articleSchema } from 'features/article/validationSchema';

import type { IConferenceData, ITeamData } from 'features/categories/types';
import type { FormikProps } from 'formik';
import type { IArticleFormData, INewArticleForm } from 'pages/NewArticle/types';

import './NewArticle.scss';

const NewArticleForm = ({
  onSubmit,
  initialValues,
  submitAction,
  submitRef,
  previewRef,
}: INewArticleForm) => {
  const [team, setTeam] = useState<ITeamData[]>(initialValues.conference.teams);

  const [clearTeamValue, setClearTeamValue] = useState('');

  const { category: categoryParams } = useParams();
  const formikRef = useRef<FormikProps<IArticleFormData>>(null);

  // mock data for category
  const category = sidebarData.find((item) => item.title === categoryParams);
  // mock data for location
  const location = ['USA', 'London', 'Mexico', 'Ukraine', 'Canada', 'France'];

  useEffect(() => {
    if (category && formikRef.current) {
      void formikRef.current.setFieldValue('category', category);
    }
  }, [category]);

  const setTeamData = (item: IConferenceData) => {
    setClearTeamValue(item.title);
    setTeam(item.teams);
  };

  return (
    <Formik
      initialValues={initialValues}
      innerRef={formikRef}
      onSubmit={onSubmit}
      validationSchema={articleSchema}
    >
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <ImageUploadFromik
            errors={errors.img}
            formikSetValue={setFieldValue}
            name='img'
            touched={touched.img}
            value={values.img}
          />
          <div className='create-article-form-select'>
            <Select
              className='create-article-form-select-item'
              defaultValue={values.conference?.title}
              errors={getIn(errors, 'conference.title')}
              formikSetValue={setFieldValue}
              label='Conference'
              name='conference'
              onChange={(item) => setTeamData(item)}
              options={{
                primaryKey: 'title',
                options: category?.conferences,
              }}
              placeholder='Not Selected'
              succesDisabled
              touched={getIn(touched, 'conference.title')}
            />
            <Select
              className='create-article-form-select-item'
              clearValue={clearTeamValue}
              defaultValue={values.team?.title}
              errors={getIn(errors, 'team')}
              formikSetValue={setFieldValue}
              label='Team'
              name='team'
              options={{
                primaryKey: 'title',
                options: team,
              }}
              placeholder='Not Selected'
              succesDisabled
              touched={getIn(touched, 'team')}
            />
            <Select
              className='create-article-form-select-item'
              defaultValue={values.location}
              errors={errors.location}
              formikSetValue={setFieldValue}
              label='Location'
              name='location'
              options={{
                options: location,
              }}
              placeholder='Not Selected'
              succesDisabled
              touched={touched.location}
            />
          </div>
          <Input
            autoComplete='off'
            className='create-article-form-input'
            errors={errors.alt}
            label='alt'
            name='alt'
            onChange={handleChange}
            placeholder='Alternative text for picture'
            succesDisabled
            touched={touched.alt}
            type='text'
            value={values.alt}
          />
          <Input
            autoComplete='off'
            className='create-article-form-input'
            errors={errors.title}
            label='Article Headline'
            name='title'
            onChange={handleChange}
            placeholder='Name'
            succesDisabled
            touched={touched.title}
            type='text'
            value={values.title}
          />
          <MarkdownForm
            errors={errors.content}
            label='Content'
            name='content'
            touched={touched.content}
            value={values.content}
          />
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

export default NewArticleForm;
