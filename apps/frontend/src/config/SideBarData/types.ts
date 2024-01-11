export interface ISidebarData {
  id: string;
  title: string;
  path: string;
  subItem?: ISidebarData[];
}
