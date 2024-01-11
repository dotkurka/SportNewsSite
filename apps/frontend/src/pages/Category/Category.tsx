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

  // TODO add error handler

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars -- replace mock data with this
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
          className='category-page-select-item'
          defaultValue={allConferenceItem.title}
          onChange={handleSetConference}
          options={{ primaryKey: 'title', options: allConference }}
        />
        <Select
          className='category-page-select-item'
          defaultValue={allTeamsItem.title}
          onChange={handleSetTeam}
          options={{ primaryKey: 'title', options: allTeams }}
        />
      </div>
      {articlesByTeam.map((item) => (
        <ShortArticle className='category-page-article' data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category;
