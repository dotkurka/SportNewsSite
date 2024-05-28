import type { ICaregoryData, IConferenceData, ITeamData } from 'features/categories/types';
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

export interface ICommentsParams {
  articleId: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface IArticleQueryParams {
  page: number;
  limit: number;
  filter: string;
  sort: string;
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
  slugId: string;
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
  createdAt: string;
  showComments?: boolean;
}

export interface ISortOption {
  title: string;
  value: string;
}

export interface IPaginationResponse<T> {
  total: number;
  data: T[];
  page: number;
  limit: number;
}
