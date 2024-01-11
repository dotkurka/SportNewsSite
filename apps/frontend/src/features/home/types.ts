import type { IPhotoDayData } from 'components/PhotoOfTheDay/types';
import type { IArticleResponse, ISortOption } from 'features/article/types';
import type { ICaregoryData, IConferenceData, ITeamData } from 'features/category/types';

export interface IHomeFormItem {
  category: ICaregoryData;
  conference: IConferenceData;
  team: ITeamData;
  storedFrom: ISortOption;
}

interface IHomeFormItemRequest {
  category: string;
  conference: string;
  team: string;
  storedFrom: string;
}

interface IHomeBreakdown<T> {
  first: T;
  second: T;
}

interface IHomeValue<T, Y> {
  mainArticle: T;
  subArticle: T;
  mostPopular: T;
  mostComments: T;
  breakdown: Y;
  potd: IPhotoDayData;
}

export type HomeFormValueType = IHomeValue<IHomeFormItem, IHomeBreakdown<IHomeFormItem>>;

export type HomeRequestType = IHomeValue<
  IHomeFormItemRequest,
  IHomeBreakdown<IHomeFormItemRequest>
>;

export type HomeResponseType = IHomeValue<IArticleResponse[], IHomeBreakdown<IArticleResponse[]>>;
