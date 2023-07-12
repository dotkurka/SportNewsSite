import { Form, Formik } from 'formik';
import parse from 'html-react-parser';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { MainArticle } from 'components';
import { MainArticleVariant } from 'components/MainArticle/types';
import { currentDate } from 'utils/currentDate';

import type { ISliderData } from 'components/MainArticle/types';
import type { ReactNode } from 'react';

import './TestPage.scss';

interface IInitValue {
  article: string;
}

interface ICreateArticle {
  img: string | undefined;
  alt: string | undefined;
  title: {
    head: string | undefined;
    description: string | undefined;
  };
  article: ReactNode | undefined;
}

const intialArticleData: IInitValue = {
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

  const createArticleData = (article: ICreateArticle) => {
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

  console.log(articleData);

  const getArticleTag = () => {
    const currentDiv = document.getElementById('post-test');
    const hElements = currentDiv?.getElementsByTagName('h1')[0]?.innerText;
    const imgElement = currentDiv?.getElementsByTagName('img')[0]?.currentSrc;
    const imgAltElement = currentDiv?.getElementsByTagName('img')[0]?.alt;
    const hTwoElements = currentDiv?.getElementsByTagName('h2')[0]?.innerText;
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

  const handleSubmit = (values: IInitValue) => {
    getArticleTag();
    setArticleMarkDown(values.article);
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
        <div id='post-test'>
          <ReactMarkdown className='test-page-mark'>{articleMarkDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
