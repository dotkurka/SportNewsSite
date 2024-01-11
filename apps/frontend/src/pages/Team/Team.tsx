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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars -- replace the mock data with this
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
        className='team-page-select'
        defaultValue={sortOptions[0].title}
        label='Sort by'
        onChange={handleChangeSort}
        options={{ primaryKey: 'title', options: sortOptions }}
        variant={SelectVariant.Text}
      />
      {articlesByTeam.map((item) => (
        <ShortArticle className='team-page-article' data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Team;
