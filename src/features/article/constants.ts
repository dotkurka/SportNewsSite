import { articleCommentsData } from 'config/ArticleData/articleData';

import type { ISortOption } from 'features/article/types';
import type { IArticleFormData } from 'pages/NewArticle/types';

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

export const sortOptions: ISortOption[] = [
  {
    title: 'Newest',
    value: 'createdAt.asc',
  },
  {
    title: 'Oldest',
    value: 'createdAt.desc',
  },
  {
    title: 'A - Z',
    value: 'title.asc',
  },
  {
    title: 'Z - A',
    value: 'title.desc',
  },
];

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
