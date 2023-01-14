export interface ISub {
  title: string;
  path: string;
}

export interface ISubItem {
  title: string;
  path: string;
  subItem?: ISub[] | undefined;
}

export interface ISidebarData {
  title: string;
  path: string;
  subItem?: ISidebarData[] | undefined;
}
