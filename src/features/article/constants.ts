import { articleCommentsData } from 'config/ArticleData/articleData';

import type { ISortOption } from 'features/article/types';
import type { IArticleFormData } from 'pages/NewArticle/types';

export const previewArticleData = {
  id: '483757345734875',
  published: new Date(Date.now()).toISOString(),
  path: '/example',
  comments: articleCommentsData,
};

export const commentsSortOptions: ISortOption[] = [
  {
    title: 'Most Recent',
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

export const sortOptions: ISortOption[] = [
  {
    title: 'Most Recent',
    value: 'createdAt.asc',
  },
  {
    title: 'Oldest',
    value: 'createdAt.desc',
  },
  {
    title: 'Most commnets',
    value: 'comments.asc',
  },
  {
    title: 'Most views',
    value: 'views.asc',
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
