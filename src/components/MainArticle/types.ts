import type { ReactNode } from 'react';

interface ISliderData {
  img: string;
  alt: string;
  title: {
    published: string;
    head: string;
    description: string;
  };
  article?: ReactNode;
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
