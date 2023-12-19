import { Select, ShortArticle } from 'components';
import { dataSub } from 'config/ArticleData/articleData';

import './Category.scss';

const articlesByTeam = dataSub;

const Category = () => {
  return (
    <div className='category-page'>
      <div className='category-page-select'>
        <Select
          defaultValue='New'
          className='category-page-select-item'
          options={['Most new', 'Older', 'A-Z']}
        />
        <Select
          defaultValue='New'
          className='category-page-select-item'
          options={['Most new', 'Older', 'A-Z']}
        />
      </div>
      {articlesByTeam.map((item) => (
        <ShortArticle className='category-page-article' key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Category;
