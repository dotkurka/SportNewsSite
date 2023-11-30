import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ILoginRequest, ISignUpRequest, IUser, IUserResponse } from 'features/auth/types';
import type { RootState } from 'redux/store';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/auth`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<IUser, void>({
      query: () => 'user',
    }),
    logIn: build.mutation<IUserResponse, ILoginRequest>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IUserResponse) => {
        return result;
      },
    }),
    signUp: build.mutation<IUserResponse, ISignUpRequest>({
      query: (body) => ({
        url: 'registration',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IUserResponse) => {
        return result;
      },
    }),
  }),
});

export const { useLazyGetUserQuery, useGetUserQuery, useLogInMutation, useSignUpMutation } =
  authApi;
