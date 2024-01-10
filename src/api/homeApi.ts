import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { HomeFormValueType, HomeRequestType, HomeResponseType } from 'features/home/types';
import type { RootState } from 'redux/store';

export const homeAPI = createApi({
  reducerPath: 'homeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/home`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getHome: build.query<HomeResponseType, void>({
      query: () => '',
      transformResponse: (result: HomeResponseType) => result,
    }),
    getHomeFormInitial: build.query<HomeFormValueType, void>({
      query: () => '/initial',
      transformResponse: (result: HomeFormValueType) => result,
    }),
    getHomePreview: build.mutation<HomeResponseType, HomeRequestType>({
      query: (body) => ({
        url: '/preview',
        method: 'POST',
        body,
      }),
      transformResponse: (result: HomeResponseType) => result,
    }),
    updateHome: build.mutation<HomeResponseType, HomeRequestType>({
      query: (body) => ({
        url: '',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const {
  useGetHomeQuery,
  useGetHomeFormInitialQuery,
  useGetHomePreviewMutation,
  useUpdateHomeMutation,
} = homeAPI;
