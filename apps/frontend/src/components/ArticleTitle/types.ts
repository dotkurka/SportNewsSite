export interface IArticleTitle {
  children: string;
  className?: string;
  variant?: ArticleTitleVariant;
}

export enum ArticleTitleVariant {
  small = 'small',
  large = 'large',
}
