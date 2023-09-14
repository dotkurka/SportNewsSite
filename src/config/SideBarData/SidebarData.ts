import type { ISidebarData } from './types';

export const SidebarData: ISidebarData[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'NBA',
    path: '/NBA',
    subItem: [
      {
        title: 'NBA 1',
        path: '/NBA_1',
        subItem: [
          {
            title: 'NBA 11',
            path: '/NBA_1_1',
          },
          {
            title: 'NBA 12',
            path: '/NBA_1_2',
          },
        ],
      },
      {
        title: 'NBA 2',
        path: '/NBA_2',
        subItem: [
          {
            title: 'NBA 21',
            path: '/NBA_2_1',
          },
          {
            title: 'NBA 22',
            path: '/NBA_2_2',
          },
        ],
      },
    ],
  },
  {
    title: 'NFL',
    path: '/NFL',
    subItem: [
      {
        title: 'NFL 1',
        path: '/NFL_1',
        subItem: [
          {
            title: 'NFL 11',
            path: '/NFL_1_1',
          },
          {
            title: 'NFL 12',
            path: '/NFL_1_2',
          },
        ],
      },
      {
        title: 'NFL 2',
        path: '/NFL_2',
        subItem: [
          {
            title: 'NFL 21',
            path: '/NFL_2_1',
          },
          {
            title: 'NFL 22',
            path: '/NFL_2_2',
          },
        ],
      },
    ],
  },
  {
    title: 'MLB',
    path: '/MLB',
    subItem: [
      {
        title: 'MLB 1',
        path: '/MLB_1',
      },
    ],
  },
  {
    title: 'NHL',
    path: '/NHL',
    subItem: [
      {
        title: 'NHL 1',
        path: '/NHL_1',
      },
    ],
  },
  {
    title: 'CBB',
    path: '/CBB',
    subItem: [
      {
        title: 'CBB 1',
        path: '/CBB_1',
      },
    ],
  },
  {
    title: 'CFB',
    path: '/CFB',
    subItem: [
      {
        title: 'CFB 1',
        path: '/CFB_1',
      },
    ],
  },
  {
    title: 'NASCAR',
    path: '/NASCAR',
    subItem: [
      {
        title: 'Nascar 1',
        path: '/NASCAR_1',
      },
    ],
  },
  {
    title: 'GOLF',
    path: '/GOLF',
  },
  {
    title: 'MORE',
    path: '/MORE',
  },
  {
    title: 'LIFESTYLE',
    path: '/LIFESTYLE',
  },
  {
    title: 'DEALBOOK',
    path: '/DEALBOOK',
  },
  {
    title: 'VIDEO',
    path: '/VIDEO',
  },
];
