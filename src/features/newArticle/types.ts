import type { IUser } from 'features/auth/types';

export interface ICommentResponse {
  id: string;
  user: IUser;
  comment: string;
  createAt: string;
}

export interface ICommentRequest {
  comment: string;
}

export interface ICommentsQueryParams {
  id: string;
  page: number;
  limit: number;
  sort: string;
}

export interface IArticleQueryParams {
  page: number;
  limit: number;
  category: string;
  team: string;
  sort: string;
  conference: string;
}

export interface IArticleCreate {
  img: string;
  alt: string;
  title: string;
  content: string;
  conference: string;
  team: string;
  location: string;
}

export interface IArticleResponse extends IArticleCreate {
  id: string;
  category: string;
  published: string;
  path: string;
  user: IUser;
  showComments?: boolean;
  comments: ICommentResponse[];
}

export interface IArticleRequest extends IArticleCreate {
  category: string;
  path: string;
  showComments?: boolean;
}
