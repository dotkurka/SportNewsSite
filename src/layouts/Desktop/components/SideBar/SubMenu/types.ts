import type { ISidebarData } from 'config/SideBarData/types';

export interface ISubMenu {
  subData?: ISidebarData[];
  onClick: (item: ISidebarData) => void;
  checked?: string | null;
  className?: string;
}
