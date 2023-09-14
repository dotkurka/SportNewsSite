import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ISidebarData } from 'config/SideBarData/types';
import type { RootState } from 'redux/store';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/category`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllCategory: build.query<ISidebarData[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetAllCategoryQuery } = categoryApi;
