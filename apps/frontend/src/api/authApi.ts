import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IAuthResponse, ILoginRequest, ISignUpRequest } from 'features/auth/types';
import type { IUser } from 'features/user/types';
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
      query: () => 'profile',
    }),
    logIn: build.mutation<IAuthResponse, ILoginRequest>({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IAuthResponse) => result,
    }),
    signUp: build.mutation<IAuthResponse, ISignUpRequest>({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IAuthResponse) => result,
    }),
  }),
});

export const { useLazyGetUserQuery, useGetUserQuery, useLogInMutation, useSignUpMutation } =
  authApi;
