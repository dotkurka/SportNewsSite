import { Form, Formik } from 'formik';
import parse from 'html-react-parser';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Button, MainArticle, Select } from 'components';
import { MainArticleVariant } from 'components/MainArticle/types';
import { currentDate } from 'utils/currentDate';

import type { ISliderData } from 'components/MainArticle/types';
import type { IInitValueForm } from 'pages/NewArticle/types';

import './NewArticle.scss';

const initialValuesData = {
  img: '',
  alt: '',
  title: {
    published: '',
    head: '',
    description: '',
  },
  article: '',
};

const NewArticle = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [articleMarkDown, setArticleMarkDown] = useState('');
  const [articleData, setArticleData] = useState<ISliderData>(initialValuesData);

  const intialArticleData: IInitValueForm = {
    article: articleMarkDown,
  };

  const getArticleTag = async () => {
    const currentDiv = await document.getElementById('post-test');
    const hElements = currentDiv?.getElementsByTagName('h1')[0]?.innerText;
    const hTwoElements = currentDiv?.getElementsByTagName('h2')[0]?.innerText;
    const imgElement = currentDiv?.getElementsByTagName('img')[0]?.src;
    const imgAltElement = currentDiv?.getElementsByTagName('img')[0]?.alt;
    const pElement = currentDiv?.getElementsByTagName('p');
    const allPElement =
      pElement &&
      [...pElement]
        .map((item) =>
          item.outerHTML.replace(/(<\/?img[^>]*>)(?=<p.+>)|(<\/?img[^>]*>)(?<=<p.+>)/g, ''),
        )
        .join(' ');

    const allPElementToJSX = parse(allPElement || '');

    return { hElements, hTwoElements, imgElement, imgAltElement, allPElementToJSX };
  };

  const createArticleData = async () => {
    const data = await getArticleTag();

    const post: ISliderData = {
      img: data.imgElement,
      alt: data.imgAltElement,
      title: {
        published: currentDate,
        head: data.hTwoElements,
        description: data.hTwoElements,
      },
      article: data.allPElementToJSX,
    };

    setArticleData(post);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleSubmit = (values: IInitValueForm) => {
    setArticleMarkDown(values.article);
    getArticleTag();
    createArticleData();
    setShowPreview(true);
  };

  return (
    <div className='test-page'>
      <Select options={['blabla', 'bebebe', 'kwawa', 'lklklk']} />
      {showPreview && (
        <MainArticle sliderData={[articleData]} variant={MainArticleVariant.Article} />
      )}
      {!showPreview && (
        <div className='test-page-form'>
          <Formik onSubmit={handleSubmit} initialValues={intialArticleData}>
            {({ values, handleChange }) => (
              <Form>
                <textarea onChange={handleChange} name='article' value={values.article} />
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
