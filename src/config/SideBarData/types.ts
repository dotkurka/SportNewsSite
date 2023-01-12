export interface ISubItem {
  title: string;
  path: string;
}

export interface ISidebarData {
  title: string;
  path: string;
  subItem?: ISubItem[];
}
