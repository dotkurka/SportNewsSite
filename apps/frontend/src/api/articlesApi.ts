import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  IArticleQueryParams,
  IArticleRequest,
  IArticleResponse,
  ICommentRequest,
  ICommentResponse,
  ICommentsParams,
  IPaginationResponse,
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
    getArticles: build.query<IPaginationResponse<IArticleResponse>, Partial<IArticleQueryParams>>({
      query: ({ page = 1, limit = 20, ...query }) => ({
        url: '',
        params: {
          ...query,
          page,
          limit,
        },
      }),
    }),
    getArticle: build.query<IArticleResponse, string>({
      query: (slugId) => ({ url: `/${slugId}` }),
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
    deleteArticle: build.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    getArticleComments: build.query<
      IPaginationResponse<ICommentResponse>,
      Partial<ICommentsParams>
    >({
      query: ({ articleId, page = 1, limit = 6, ...query }) => ({
        url: `/${articleId}/comments`,
        params: {
          ...query,
          limit,
          page,
        },
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
    deleteArticleComment: build.mutation<{ status: string }, { articleId: string; id: string }>({
      query: ({ articleId, id }) => ({
        url: `/${articleId}/comments/${id}`,
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
  useLazyGetArticleCommentsQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useAddArticleCommentMutation,
  useDeleteArticleCommentMutation,
} = articlesApi;
