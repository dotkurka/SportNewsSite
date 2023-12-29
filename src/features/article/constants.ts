import { articleCommentsData } from 'config/ArticleData/articleData';

import type { IArticleFormData } from 'pages/NewArticle/types';

export const intialArticleFormData: IArticleFormData = {
  img: '',
  content: '',
  alt: '',
  title: '',
  category: {
    id: '',
    title: '',
    path: '',
  },
  conference: {
    team: [],
    id: '',
    title: '',
    path: '',
  },
  team: {
    id: '',
    title: '',
    path: '',
  },
  location: '',
};

export const previewArticleData = {
  id: '483757345734875',
  published: new Date(Date.now()).toISOString(),
  path: '/example',
  comments: articleCommentsData,
};

export const commentsFilterSelectData = {
  defaultValue: 'Most popular',
  options: ['Most popular', 'Oldest', 'New'],
};
