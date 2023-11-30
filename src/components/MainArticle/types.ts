import type { IArticleResponse } from 'features/newArticle/types';

export interface IMainTitle {
  sliderData: IArticleResponse[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  variant: MainArticleVariant;
}

export interface IMainArticle {
  sliderData: IArticleResponse[];
  className?: string;
  variant?: MainArticleVariant;
}

export enum MainArticleVariant {
  Article = 'article',
  Carousel = 'carousel',
  Share = 'share',
}
