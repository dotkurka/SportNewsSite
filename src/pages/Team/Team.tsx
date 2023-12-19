import { Select, ShortArticle } from 'components';
import { SelectVariant } from 'components/Select/enums';
import { dataSub } from 'config/ArticleData/articleData';

import './Team.scss';

const articlesByTeam = dataSub;

const Team = () => {
  return (
    <div className='team-page'>
      <Select
        label='Sort by'
        defaultValue='New'
        className='team-page-select'
        options={['Most new', 'Older', 'A-Z']}
        variant={SelectVariant.Text}
      />
      {articlesByTeam.map((item) => (
        <ShortArticle className='team-page-article' key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Team;
