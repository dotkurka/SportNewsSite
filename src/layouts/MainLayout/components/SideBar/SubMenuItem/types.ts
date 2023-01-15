import type { ISidebarData } from '../../../../../config/SideBarData/types';

export interface ISubMenu {
  subData: ISidebarData;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}
