import type { IArticleResponse } from 'features/article/types';

export interface INavSearch {
  result?: IArticleResponse[];
  isLoading?: boolean;
  onChange: (value: string) => void;
}
