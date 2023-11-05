import { Form, Formik } from 'formik';
import { useState } from 'react';

import { useFileUploadMutation } from 'api/fileUploadApi';
import { Button, ImageUpload, Input, MarkdownForm, PreviewButton, Select } from 'components';

// import { currentDate } from 'utils/currentDate';

import type { IArticleData } from 'components/Article/types';
import type { IFileRequest, IFileResponse } from 'features/fileUpload/types';

import './NewArticle.scss';

const NewArticle = () => {
  const [articleMarkDown, setArticleMarkDown] = useState('');
  const [imageData, setImageData] = useState<IFileResponse>();

  const [uploadFile, { isLoading }] = useFileUploadMutation();

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

  const handleSubmit = (values: IArticleData) => {
    setArticleMarkDown(values.article);
  };

  const handleChangeImage = async (file: File) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const imageHref = await uploadFile(formData as unknown as IFileRequest);

      if ('data' in imageHref) {
        setImageData(imageHref.data);
      }
    }
  };

  return (
    <div className='create-article'>
      <div>
        <PreviewButton disabled>Preview</PreviewButton>
        <Formik onSubmit={handleSubmit} initialValues={intialArticleData}>
          {({ values, handleChange }) => (
            <Form>
              <ImageUpload
                onChange={handleChangeImage}
                onDrop={handleChangeImage}
                href={imageData?.path}
                isLoading={isLoading}
              />
              <div className='create-article-form-select'>
                <Select
                  placeholder='Not Selected'
                  label='Conference'
                  options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
                  name='conference'
                  onChange={handleChange}
                  className='create-article-form-select-item'
                />
                <Select
                  placeholder='Not Selected'
                  label='Team'
                  options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
                  name='team'
                  onChange={handleChange}
                  className='create-article-form-select-item'
                />
                <Select
                  placeholder='Not Selected'
                  label='Location'
                  options={['blabla', 'bebebe', 'kwawa', 'lklklk']}
                  name='location'
                  onChange={handleChange}
                  className='create-article-form-select-item'
                />
              </div>
              <Input
                value={values.alt}
                type='text'
                name='alt'
                label='alt'
                onChange={handleChange}
                placeholder='Alternative text for picture'
                className='create-article-form-input'
              />
              <Input
                value={values.title}
                type='text'
                name='title'
                label='Article Headline'
                onChange={handleChange}
                className='create-article-form-input'
                placeholder='Name'
              />
              <MarkdownForm label='Content' value={values.article} name='article' />
              <Button type='submit'>Preview</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewArticle;
