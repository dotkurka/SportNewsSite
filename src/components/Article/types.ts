export interface IArticleData {
  img: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  article: string;
  published: string;
  path: string;
}

export interface IArticle {
  articleData: IArticleData;
}
