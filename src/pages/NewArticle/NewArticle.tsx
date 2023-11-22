import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFileUploadMutation } from 'api/fileUploadApi';
import { ImageUpload, Input, MainArticle, MarkdownForm, PreviewButton, Select } from 'components';
import { MainArticleVariant } from 'components/MainArticle/types';
import { selectCurrentUser } from 'redux/authSlice';
import { currentDate } from 'utils';

import type { IFileRequest, IFileResponse } from 'features/fileUpload/types';
import type { IArticleData, IRequestArticle } from 'features/newArticle/types';

import './NewArticle.scss';

const NewArticle = () => {
  const [newArticleData, setNewArticleData] = useState<IArticleData>();
  const [imageData, setImageData] = useState<IFileResponse>();
  const submitRef = useRef<HTMLButtonElement>(null);

  const user = useSelector(selectCurrentUser);

  const [uploadFile, { isLoading }] = useFileUploadMutation();

  const intialArticleData: IRequestArticle = {
    content: '',
    img: '',
    alt: '',
    title: '',
    category: '',
    published: '',
    path: '',
    conference: '',
    team: '',
    location: '',
  };

  const handleSubmit = (values: IRequestArticle) => {
    const newArticle: IArticleData = {
      content: values.content,
      img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
      alt: values.alt,
      title: values.title,
      category: 'NBA',
      published: currentDate,
      path: '/title/blalsdklskd',
      conference: '',
      team: '',
      location: '',
      user: {
        firstName: '',
        id: '',
        lastName: '',
        email: '',
      },
    };
    console.log(values);

    setNewArticleData(newArticle);
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
      <div className='create-article-form'>
        <PreviewButton
          type='button'
          onClick={() => submitRef.current?.click()}
          className='create-article-form-preview-btn'
        >
          Preview
        </PreviewButton>

        {newArticleData ? (
          <MainArticle variant={MainArticleVariant.Article} sliderData={[newArticleData]} />
        ) : (
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
                <MarkdownForm label='Content' value={values.content} name='article' />
                <button ref={submitRef} type='submit' hidden>
                  submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default NewArticle;
