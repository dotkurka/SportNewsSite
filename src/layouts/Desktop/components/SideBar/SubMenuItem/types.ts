import type { ISidebarData } from 'config/SideBarData/types';

export interface ISubMenuItem {
  subData: ISidebarData;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}
