import { Link } from 'react-router-dom';

import { ReactComponent as ArrowButton } from 'assets/images/sub-article-arrow.svg';

import './SubArticle.scss';

interface ISubArticleData {
  img: string;
  alt: string;
  title: string;
  description: string;
  path: string;
}

interface ISubArticle {
  subArticleData: ISubArticleData;
}

const SubArticle = ({ subArticleData }: ISubArticle) => {
  return (
    <div className='sub-article'>
      <img className='sub-article-img' src={subArticleData.img} alt={subArticleData.alt} />
      <h3>{subArticleData.title}</h3>
      <p>{subArticleData.description}</p>
      <Link className='sub-article-button' to={subArticleData.path}>
        <ArrowButton />
      </Link>
    </div>
  );
};

export default SubArticle;
