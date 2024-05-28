import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IUser, UserUpdateType } from 'features/user/types';
import type { RootState } from 'redux/store';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/user`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => 'users',
      transformResponse: (result: IUser[]) => result,
    }),
    updateUser: build.mutation<IUser, UserUpdateType>({
      query: (body) => ({
        url: 'user',
        method: 'PATCH',
        body,
      }),
      transformResponse: (result: IUser) => result,
    }),
  }),
});

export const { useUpdateUserMutation, useGetUsersQuery } = usersApi;
