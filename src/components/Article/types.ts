interface IArticleData {
  img: string;
  alt: string;
  category: string;
  description: string;
  path: string;
}

export interface IArticle {
  articleData: IArticleData;
}
