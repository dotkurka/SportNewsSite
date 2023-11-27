import type { IUser } from 'features/auth/types';

export interface IComment {
  id: string;
  user: IUser;
  comment: string;
  createAt: string;
}

export interface ICommentRequest {
  user: IUser;
  comment: string;
}

export interface IArticleData {
  img: string | undefined;
  alt: string;
  title: string;
  content: string;
  category: string;
  conference: string;
  team: string;
  location: string;
  published: string;
  path: string;
  user: IUser;
  comments: IComment[];
}

export type IRequestArticle = Omit<IArticleData, 'user' | 'comments'>;
