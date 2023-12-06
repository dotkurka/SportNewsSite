import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IArticleRequest, IArticleResponse } from 'features/newArticle/types';
import type { RootState } from 'redux/store';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  tagTypes: ['Articles'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/api/articles`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getArticles: build.query<IArticleResponse[], void>({
      query: () => '',
    }),
    getArticle: build.query<IArticleResponse, void>({
      query: (title) => ({ url: `/${title}` }),
    }),
    createArticle: build.mutation<IArticleResponse, IArticleRequest>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IArticleResponse) => result,
    }),
    updateArticle: build.mutation<
      IArticleResponse,
      Partial<IArticleResponse> & Pick<IArticleResponse, 'id'>
    >({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (result: IArticleResponse) => result,
    }),
    deleteArticle: build.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
