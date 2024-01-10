import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetArticlesQuery } from 'api/articlesApi';
import { Select, ShortArticle } from 'components';
import { SelectVariant } from 'components/Select/enums';
import { dataSub } from 'config/ArticleData/articleData';
import { sortOptions } from 'features/article/constants';

import type { ISortOption } from 'features/article/types';

import './Team.scss';

const articlesByTeam = dataSub;

const Team = () => {
  const [sortSelect, setSortSelect] = useState(sortOptions[0].value);
  const { team } = useParams();

  // replace the mock data with this
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { data } = useGetArticlesQuery({
    team,
    limit: 10,
    sort: sortSelect,
  });

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  return (
    <div className='team-page'>
      <Select
        label='Sort by'
        defaultValue={sortOptions[0].title}
        className='team-page-select'
        options={{ primaryKey: 'title', options: sortOptions }}
        variant={SelectVariant.Text}
        onChange={handleChangeSort}
      />
      {articlesByTeam.map((item) => (
        <ShortArticle className='team-page-article' key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Team;
