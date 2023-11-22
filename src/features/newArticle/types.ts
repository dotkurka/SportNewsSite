import type { IUser } from 'features/auth/types';

export interface IArticleComment {
  user: IUser;
  comment: string;
  createAt: string;
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
  comments?: [IArticleComment];
}

export type IRequestArticle = Omit<IArticleData, 'user' | 'comments'>;
