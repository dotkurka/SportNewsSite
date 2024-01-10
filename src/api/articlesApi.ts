import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  IArticleQueryParams,
  IArticleRequest,
  IArticleResponse,
  ICommentRequest,
  ICommentResponse,
  ICommentsQueryParams,
} from 'features/article/types';
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
    getArticles: build.query<IArticleResponse[], Partial<IArticleQueryParams>>({
      query: ({ ...query }) => ({
        url: '',
        params: query,
      }),
    }),
    getArticle: build.query<IArticleResponse, string>({
      query: (title) => ({ url: `/${title}` }),
      transformResponse: (result: IArticleResponse) => result,
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
      Partial<IArticleRequest> & Pick<IArticleResponse, 'id'>
    >({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (result: IArticleResponse) => result,
    }),
    deleteArticle: build.mutation<{ status: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    getArticleComments: build.query<ICommentResponse[], Partial<ICommentsQueryParams>>({
      query: ({ id, ...query }) => ({
        url: `/${id}/comments`,
        params: query,
      }),
    }),
    addArticleComment: build.mutation<
      ICommentResponse,
      { articleId: string; body: ICommentRequest }
    >({
      query: ({ articleId, ...body }) => ({
        url: `/${articleId}/comments`,
        method: 'POST',
        body,
      }),
    }),
    deleteArticleComment: build.mutation<{ status: string }, { id: string; commentId: string }>({
      query: ({ id, commentId }) => ({
        url: `/${id}/comments/${commentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
  useGetArticleQuery,
  useLazyGetArticleQuery,
  useGetArticleCommentsQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useAddArticleCommentMutation,
  useDeleteArticleCommentMutation,
} = articlesApi;
