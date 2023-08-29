import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ISidebarData } from 'config/SideBarData/types';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/article`,
  }),
  endpoints: (build) => ({
    getAllPage: build.query<ISidebarData[], void>({
      query: () => 'all',
    }),
  }),
});

export const { useGetAllPageQuery } = articleApi;
