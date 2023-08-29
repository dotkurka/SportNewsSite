import type { ReactNode } from 'react';

export interface IArticleData {
  img: string;
  alt: string;
  title: {
    published: string;
    head: string;
    description: string;
  };
  category?: string;
  article?: ReactNode;
  path: string;
}

export interface IArticle {
  articleData: IArticleData;
}
