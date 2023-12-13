import type { IArticleResponse } from 'features/newArticle/types';

export interface INavSearch {
  result?: IArticleResponse[];
  isError?: boolean;
  onChange: (value: string) => void;
}
