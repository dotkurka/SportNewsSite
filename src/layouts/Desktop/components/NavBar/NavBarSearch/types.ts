import type { IArticleResponse } from 'features/newArticle/types';

export interface INavSearch {
  result?: IArticleResponse[];
  isLoading?: boolean;
  onChange: (value: string) => void;
}
