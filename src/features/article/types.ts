import type { ICaregoryData, IConferenceData, ITeamData } from 'features/category/types';
import type { IUser } from 'features/user/types';

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
  search: string;
}

export interface IArticleRequest {
  img: string;
  alt: string;
  title: string;
  content: string;
  conference: string;
  team: string;
  location: string;
  category: string;
  showComments?: boolean;
}

export interface IArticleResponse {
  id: string;
  published: string;
  path: string;
  user: IUser;
  comments: ICommentResponse[];
  img: string;
  alt: string;
  title: string;
  content: string;
  conference: IConferenceData;
  category: ICaregoryData;
  team: ITeamData;
  location: string;
  showComments?: boolean;
}

export interface ISortOption {
  title: string;
  value: string;
}
