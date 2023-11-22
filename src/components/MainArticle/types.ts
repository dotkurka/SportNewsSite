import type { IArticleData } from 'features/newArticle/types';

export interface IMainTitle {
  sliderData: IArticleData[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  variant: MainArticleVariant;
}

export interface IMainArticle {
  sliderData: IArticleData[];
  className?: string;
  variant?: MainArticleVariant;
}

export enum MainArticleVariant {
  Article = 'article',
  Carousel = 'carousel',
  Share = 'share',
}
