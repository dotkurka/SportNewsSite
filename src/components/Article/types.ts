import type { IArticleComments } from 'components/ArticleComments/types';
import type { IArticleResponse } from 'features/article/types';

type TArticle = Omit<IArticleComments, 'comments'>;

export interface IArticle extends TArticle {
  data: IArticleResponse;
  hiddenComments?: boolean;
}
