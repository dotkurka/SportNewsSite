import { useEffect } from 'react';

import { useLazyGetArticlesQuery } from 'api/articlesApi';
import useDebounce from 'hooks/useDebounce';

import type { IArticleResponse } from 'features/article/types';

const useSearchArticle = (
  searchValue: string,
): [IArticleResponse[] | undefined, { isLoading: boolean }] => {
  const debounceValue = useDebounce(searchValue, 1000);
  const [getArticles, { data: searchResult, isLoading }] = useLazyGetArticlesQuery();

  useEffect(() => {
    if (debounceValue.length >= 2) {
      void getArticles({
        search: debounceValue,
        limit: 10,
      });
    }
  }, [debounceValue]);

  return [searchResult, { isLoading }];
};

export default useSearchArticle;
