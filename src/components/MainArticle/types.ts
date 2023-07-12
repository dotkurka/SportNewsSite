// import type { ReactNode } from 'react';

import type { ReactNode } from 'react';

export interface ISliderData {
  img: string | undefined;
  alt: string | undefined;
  title: {
    published: string | undefined;
    head: string | undefined;
    description: string | undefined;
  };
  article?: ReactNode | undefined;
}

export interface IMainTitle {
  sliderData: ISliderData[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  variant: MainArticleVariant;
}

export interface IMainArticle {
  sliderData: ISliderData[];
  className?: string;
  variant?: MainArticleVariant;
}

export enum MainArticleVariant {
  Article = 'article',
  Carousel = 'carousel',
  Share = 'share',
}
