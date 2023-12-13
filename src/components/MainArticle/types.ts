import type { IArticleResponse } from 'features/newArticle/types';

interface IControls {
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
}

export interface IMainTitle {
  sliderData: IArticleResponse[];
  currentIndex: number;
  controls: IControls;
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
