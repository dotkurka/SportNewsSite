interface ISidebarData {
  title: string;
  link: string;
  subItem?: {
    title: string;
    link: string;
  };
}

export const SidebarData: ISidebarData[] = [
  {
    title: 'NBA',
    link: '/NBA',
    subItem: {
      title: 'AFC East',
      link: '/AFCEast',
    },
  },
  {
    title: 'NFL',
    link: '/NFL',
  },
  {
    title: 'NHL',
    link: '/NHL',
  },
  {
    title: 'NASCAR',
    link: '/NASCAR',
  },
  {
    title: 'GOLF',
    link: '/GOLF',
  },
  {
    title: 'MORE',
    link: '/MORE',
  },
  {
    title: 'LIFESTYLE',
    link: '/LIFESTYLE',
  },
  {
    title: 'DEALBOOK',
    link: '/DEALBOOK',
  },
  {
    title: 'VIDEO',
    link: '/VIDEO',
  },
];
