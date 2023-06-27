export interface ISubArticleData {
  img: string;
  alt: string;
  title: string;
  description: string;
  path: string;
}

export interface ISubArticle {
  subArticleData: ISubArticleData;
  className?: string;
}
