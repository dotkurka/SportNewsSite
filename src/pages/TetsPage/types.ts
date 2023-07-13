import type { ReactNode } from 'react';

export interface IInitValueForm {
  article: string;
}

export interface ICreateArticleData {
  img: string | undefined;
  alt: string | undefined;
  title: {
    head: string | undefined;
    description: string | undefined;
  };
  article: ReactNode | undefined;
}
