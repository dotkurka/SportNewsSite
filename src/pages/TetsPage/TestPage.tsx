import { Form, Formik } from 'formik';
import parse from 'html-react-parser';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { MainArticle } from 'components';
import { MainArticleVariant } from 'components/MainArticle/types';
import { currentDate } from 'utils/currentDate';

import type { ISliderData } from 'components/MainArticle/types';
import type { ICreateArticleData, IInitValueForm } from 'pages/TetsPage/types';

import './TestPage.scss';

const intialArticleData: IInitValueForm = {
  article: '',
};

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

const TestPage = () => {
  const [articleMarkDown, setArticleMarkDown] = useState('');
  const [articleData, setArticleData] = useState<ISliderData>(initialValuesData);

  const createArticleData = (article: ICreateArticleData) => {
    const post: ISliderData = {
      img: article.img,
      alt: article.alt,
      title: {
        published: currentDate,
        head: article.title.head,
        description: article.title.description,
      },
      article: article.article,
    };

    setArticleData(post);
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

    const article = {
      img: imgElement,
      alt: imgAltElement,
      title: {
        head: hTwoElements,
        description: hElements,
      },
      article: allPElementToJSX,
    };

    createArticleData(article);
  };

  const handleSubmit = (values: IInitValueForm) => {
    setArticleMarkDown(values.article);
    getArticleTag();
  };

  return (
    <div className='test-page'>
      {articleData.img && (
        <MainArticle sliderData={[articleData]} variant={MainArticleVariant.Article} />
      )}
      <div className='test-page-form'>
        <Formik onSubmit={handleSubmit} initialValues={intialArticleData}>
          {({ values, handleChange }) => (
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <textarea onChange={handleChange} name='article' value={values.article} />
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
        <div id='post-test' className='test-page-mark'>
          <ReactMarkdown>{articleMarkDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
