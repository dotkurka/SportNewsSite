import type { MainArticleVariant } from 'components/MainArticle/enums';
import type { IArticleResponse } from 'features/article/types';

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
