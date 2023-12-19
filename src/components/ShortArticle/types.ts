import type { IUser } from 'features/auth/types';
import type { IArticleResponse } from 'features/newArticle/types';

export interface IShortArticle {
  data: IArticleResponse;
  user?: IUser;
  className?: string;
}
