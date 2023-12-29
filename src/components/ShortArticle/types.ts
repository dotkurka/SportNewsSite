import type { IArticleResponse } from 'features/article/types';
import type { IUser } from 'features/auth/types';

export interface IShortArticle {
  data: IArticleResponse;
  user?: IUser;
  className?: string;
}
