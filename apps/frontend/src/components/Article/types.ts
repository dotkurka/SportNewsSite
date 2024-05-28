import type { IArticleComments } from 'components/ArticleComments/types';
import type { IArticleResponse } from 'features/article/types';

export interface IArticle extends IArticleComments {
  data?: IArticleResponse;
  hiddenComments?: boolean;
  isLoading?: boolean;
}
