import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ICaregoryData,
  ICategoryQueryParams,
  IConferenceData,
  ITeamData,
} from 'features/category/types';
import type { RootState } from 'redux/store';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/categories`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCategories: build.query<ICaregoryData[], Partial<ICategoryQueryParams>>({
      query: ({ ...query }) => ({
        url: '',
        params: query,
      }),
    }),
    getConferences: build.query<IConferenceData[], Partial<ICategoryQueryParams>>({
      query: ({ ...query }) => ({
        url: '/conferences',
        params: query,
      }),
    }),
    getTeams: build.query<ITeamData[], Partial<ICategoryQueryParams>>({
      query: ({ ...query }) => ({
        url: '/teams',
        params: query,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetConferencesQuery, useGetTeamsQuery } = categoryApi;
