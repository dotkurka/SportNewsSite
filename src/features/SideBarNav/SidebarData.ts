export interface ISubItem {
  title: string;
  path: string;
}

export interface ISidebarData {
  title: string;
  path: string;
  subItem?: ISubItem[];
}

export const SidebarData: ISidebarData[] = [
  {
    title: 'NBA',
    path: '/NBA',
    subItem: [
      {
        title: 'AFC East',
        path: '/hgjghjjgfhj',
      },
      {
        title: 'AFC sdsdsdsdst',
        path: '/hgjghjjgf333333',
      },
    ],
  },
  {
    title: 'NFL',
    path: '/NFL',
    subItem: [
      {
        title: 'NFL fdfdf',
        path: '/hjkh55hgfh',
      },
      {
        title: 'NFL fdf344df',
        path: '/hjkh55hg3434fh',
      },
    ],
  },
  {
    title: 'NHL',
    path: '/NHL',
    subItem: [
      {
        title: 'NHL fddsfsdf',
        path: '/htghfgb56h5h',
      },
    ],
  },
  {
    title: 'NASCAR',
    path: '/NASCAR',
    subItem: [
      {
        title: 'Nascar sdfsdf',
        path: '/gh5h5ghb57',
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
