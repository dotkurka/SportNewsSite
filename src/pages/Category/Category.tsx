import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetArticlesQuery } from 'api/articlesApi';
import { useGetConferencesQuery, useGetTeamsQuery } from 'api/categoryApi';
import { Select, ShortArticle } from 'components';
import { dataSub } from 'config/ArticleData/articleData';
import { allConferenceItem, allTeamsItem } from 'features/category/constants';

import type { IConferenceData, ITeamData } from 'features/category/types';

import './Category.scss';

const articlesByTeam = dataSub;

const Category = () => {
  const [conference, setConference] = useState('');
  const [team, setTeam] = useState('');

  const { category } = useParams();
  const { data: conferences } = useGetConferencesQuery({ category });
  const { data: teams } = useGetTeamsQuery({ category });

  // replace mock data with this
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { data } = useGetArticlesQuery({ conference, team, limit: 10 });

  const handleSetConference = (item: IConferenceData) => {
    if (item.title === allConferenceItem.title) {
      setConference('');
    } else {
      setConference(item.title);
    }
  };

  const handleSetTeam = (item: ITeamData) => {
    if (item.title === allTeamsItem.title) {
      setTeam('');
    } else {
      setTeam(item.title);
    }
  };

  const allConference: IConferenceData[] = [allConferenceItem, ...(conferences || [])];
  const allTeams: ITeamData[] = [allTeamsItem, ...(teams || [])];

  return (
    <div className='category-page'>
      <div className='category-page-select'>
        <Select
          defaultValue={allConferenceItem.title}
          onChange={handleSetConference}
          className='category-page-select-item'
          options={{ primaryKey: 'title', options: allConference }}
        />
        <Select
          defaultValue={allTeamsItem.title}
          onChange={handleSetTeam}
          className='category-page-select-item'
          options={{ primaryKey: 'title', options: allTeams }}
        />
      </div>
      {articlesByTeam.map((item) => (
        <ShortArticle className='category-page-article' key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Category;
