import { useEffect } from 'react';

import { useLazyGetArticlesQuery } from 'api/articlesApi';
import { FilterRule } from 'features/common/enums';
import useDebounce from 'hooks/useDebounce';

import type { IArticleResponse } from 'features/article/types';

const useSearchArticle = (
  searchValue: string,
): [IArticleResponse[] | undefined, { isLoading: boolean }] => {
  const debounceValue = useDebounce(searchValue, 1000);
  const [getArticles, { data: searchResult, isLoading }] = useLazyGetArticlesQuery();

  const searchParams = `title:${FilterRule.LIKE}:${debounceValue}`;

  useEffect(() => {
    if (debounceValue.length >= 2) {
      void getArticles({
        filter: searchParams,
        limit: 10,
      });
    }
  }, [debounceValue]);

  return [searchResult?.data, { isLoading }];
};

export default useSearchArticle;
