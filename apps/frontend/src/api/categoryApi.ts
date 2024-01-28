import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ICaregoryData,
  ICategoryQueryParams,
  IConferenceData,
  IConferenceParams,
  ITeamData,
  TeamParamsType,
} from 'features/categories/types';
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
    getConferencesByCategory: build.query<IConferenceData[], IConferenceParams>({
      query: ({ category, ...query }) => ({
        url: `/${category}/conferences`,
        params: query,
      }),
    }),
    getTeamsByCategory: build.query<ITeamData[], TeamParamsType>({
      query: ({ category, ...query }) => ({
        url: `/${category}/teams`,
        params: query,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetConferencesByCategoryQuery,
  useGetTeamsByCategoryQuery,
} = categoryApi;
