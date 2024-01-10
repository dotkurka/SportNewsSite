import { Form, Formik, getIn } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ImageUploadFromik, Input, MarkdownForm, Select } from 'components';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { articleSchema } from 'features/article/validationSchema';

import type { IConferenceData, ITeamData } from 'features/category/types';
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
  const [team, setTeam] = useState<ITeamData[]>(initialValues.conference.team);

  const [clearTeamValue, setClearTeamValue] = useState('');

  const { category: categoryParams } = useParams();
  const formikRef = useRef<FormikProps<IArticleFormData>>(null);

  // mock data for category
  const category = sidebarData.find((item) => item.title === categoryParams);
  // mock data for location
  const location = ['USA', 'London', 'Mexico', 'Ukraine', 'Canada', 'France'];

  useEffect(() => {
    if (category && formikRef.current) {
      formikRef.current.setFieldValue('category', category);
    }
  }, [category]);

  const setTeamData = (item: IConferenceData) => {
    setClearTeamValue(item.title);
    setTeam(item.team);
  };

  return (
    <Formik
      innerRef={formikRef}
      validationSchema={articleSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <ImageUploadFromik
            touched={touched.img}
            errors={errors.img}
            formikSetValue={setFieldValue}
            name='img'
            value={values.img}
          />
          <div className='create-article-form-select'>
            <Select
              succesDisabled
              defaultValue={values.conference?.title}
              touched={getIn(touched, 'conference.title')}
              errors={getIn(errors, 'conference.title')}
              label='Conference'
              name='conference'
              options={{
                primaryKey: 'title',
                options: category?.conference,
              }}
              placeholder='Not Selected'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
              onChange={(item) => setTeamData(item)}
            />
            <Select
              succesDisabled
              clearValue={clearTeamValue}
              defaultValue={values.team?.title}
              touched={getIn(touched, 'team')}
              errors={getIn(errors, 'team')}
              name='team'
              label='Team'
              options={{
                primaryKey: 'title',
                options: team,
              }}
              placeholder='Not Selected'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
            />
            <Select
              succesDisabled
              defaultValue={values.location}
              touched={touched.location}
              errors={errors.location}
              label='Location'
              name='location'
              options={{
                options: location,
              }}
              placeholder='Not Selected'
              className='create-article-form-select-item'
              formikSetValue={setFieldValue}
            />
          </div>
          <Input
            succesDisabled
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
            succesDisabled
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
          <button type='submit' hidden ref={submitRef} onClick={() => submitAction('submit')}>
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

export default NewArticleForm;
