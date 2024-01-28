import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetArticlesQuery } from 'api/articlesApi';
import { Select, ShortArticle } from 'components';
import { SelectVariant } from 'components/Select/enums';
import { sortOptions } from 'features/article/constants';
import { FilterRule } from 'features/common/enums';

import type { ISortOption } from 'features/article/types';

import './Team.scss';

const Team = () => {
  const [sortSelect, setSortSelect] = useState(sortOptions[0].value);
  const { team } = useParams();

  const teamFilter = team ? `team.title:${FilterRule.EQUALS}:${team.replace('-', ' ')}` : '';

  const { data: articlesByTeam } = useGetArticlesQuery({
    filter: teamFilter,
    sort: sortSelect,
    limit: 10,
  });

  const handleChangeSort = (select: ISortOption) => {
    setSortSelect(select.value);
  };

  // TODO: make loader for article

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
      {articlesByTeam?.data.length ? (
        articlesByTeam.data.map((item) => (
          <ShortArticle className='team-page-article' data={item} key={item.id} />
        ))
      ) : (
        <div>article not found</div>
      )}
    </div>
  );
};

export default Team;
